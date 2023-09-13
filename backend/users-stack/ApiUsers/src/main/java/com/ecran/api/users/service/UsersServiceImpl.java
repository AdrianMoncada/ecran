package com.ecran.api.users.service;

import java.util.*;

import com.ecran.api.users.data.models.UsersComment;
import com.ecran.api.users.data.models.UserEntity;
import com.ecran.api.users.data.feign.MoviesServiceClient;
import com.ecran.api.users.data.models.UsersRating;
import com.ecran.api.users.data.models.UsersWatchlist;
import com.ecran.api.users.data.repository.RatingRepository;
import com.ecran.api.users.data.repository.UserCommentsRepository;
import com.ecran.api.users.data.repository.UsersRepository;
import com.ecran.api.users.data.repository.WatchlistRepository;
import com.ecran.api.users.shared.ChangePasswordDTO;
import com.ecran.api.users.shared.UserValorationDTO;
import com.ecran.api.users.ui.model.MoviesResponseModel;
import com.ecran.api.users.ui.model.UserCommentDTO;
import com.ecran.api.users.ui.model.UserCommentResponseDTO;
import com.ecran.api.users.ui.model.UsersMovieWLDTO;
import feign.FeignException;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecran.api.users.shared.UserDto;

@Service
public class UsersServiceImpl implements UsersService {

	UsersRepository usersRepository;
	WatchlistRepository watchlistRepository;
	RatingRepository ratingRepository;
	UserCommentsRepository commentRepository;
	BCryptPasswordEncoder bCryptPasswordEncoder;
	Environment environment;
	MoviesServiceClient moviesServiceClient;
	private final ModelMapper mapper;
	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	public UsersServiceImpl(UsersRepository usersRepository, WatchlistRepository watchlistRepository, RatingRepository ratingRepository, UserCommentsRepository commentRepository, BCryptPasswordEncoder bCryptPasswordEncoder, Environment environment, MoviesServiceClient moviesServiceClient, ModelMapper mapper) {
		this.usersRepository = usersRepository;
		this.watchlistRepository = watchlistRepository;
		this.ratingRepository = ratingRepository;
		this.commentRepository = commentRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		this.environment = environment;
		this.moviesServiceClient = moviesServiceClient;
		this.mapper = mapper;
	}

	@Override
	public List<UsersWatchlist> addToWatchlist(String userId, UsersMovieWLDTO movieId) {
		UserEntity userEntity = usersRepository.findByUserId(userId);

		if(userEntity == null) throw new UsernameNotFoundException("User not found");

		for (UsersWatchlist m :
				userEntity.getWatchlist()) {
			if (Objects.equals(m.getMovieId(), movieId.getMovieId())) {
				userEntity.getWatchlist().remove(m);
				return usersRepository.save(userEntity).getWatchlist();
			}
		}

		UsersWatchlist umwl = mapper.map(movieId, UsersWatchlist.class);
		userEntity.getWatchlist().add(umwl);

		return usersRepository.save(userEntity).getWatchlist();
	}

	@Override
	public String addRating(String userId, UsersRating userRating) {
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException("User not found");
		String movieId = userRating.getMovieId();
		// Comprueba si el usuario ya ha votado para esta película
		Optional<UsersRating> existingRating = userEntity.getRatings()
						.stream()
								.filter(rating -> rating.getMovieId().equals(movieId))
										.findFirst();

		UserValorationDTO valorationDTO = new UserValorationDTO();

		if(existingRating.isPresent()){
			UsersRating previousRating = existingRating.get();
			previousRating.setRating(userRating.getRating());
			usersRepository.save(userEntity);


			valorationDTO.setValorationsCount(ratingRepository.countVotesByMovieId(movieId));
			valorationDTO.setValorationsSum(ratingRepository.sumVotesByMovieId(movieId));

			try {
				moviesServiceClient.addRating(movieId, valorationDTO);
			} catch (FeignException e) {
				logger.error(e.getLocalizedMessage());
			}

			System.out.println("User already vote for this movie. Vote changed from X to new rating");
			return "User already vote for this movie. Vote changed from X to new rating";
		} else {
			userEntity.getRatings().add(userRating);
			usersRepository.save(userEntity);

			valorationDTO.setValorationsCount(ratingRepository.countVotesByMovieId(movieId));
			valorationDTO.setValorationsSum(ratingRepository.sumVotesByMovieId(movieId));
			System.out.println(valorationDTO);

			try {
				moviesServiceClient.addRating(movieId, valorationDTO);
			} catch (FeignException e) {
				logger.error(e.getLocalizedMessage());
			}

			return "Vote added";
		}
	}

	@Override
	public UserDto createUser(UserDto userDetails) {
		// TODO Auto-generated method stub
		
		userDetails.setUserId(UUID.randomUUID().toString());
		userDetails.setEncryptedPassword(bCryptPasswordEncoder.encode(userDetails.getPassword()));
		
		ModelMapper modelMapper = new ModelMapper(); 
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		UserEntity userEntity = modelMapper.map(userDetails, UserEntity.class);

		usersRepository.save(userEntity);
		
		UserDto returnValue = modelMapper.map(userEntity, UserDto.class);
 
		return returnValue;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity userEntity = usersRepository.findByEmail(username);
		
		if(userEntity == null) throw new UsernameNotFoundException(username);
		
		return new User(userEntity.getEmail(),userEntity.getEncryptedPassword(),
				true, true, true, true, new ArrayList<>());
	}

	@Override
	public UserDto getUserDetailsById(String userId) {
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException(userId);
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public UserDto getUserDetailsByEmail(String email) {
		UserEntity userEntity = usersRepository.findByEmail(email);
		
		if(userEntity == null) throw new UsernameNotFoundException(email);
		
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public List<MoviesResponseModel> getWatchlistByUserId(String userId) {
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException("User not found");

		// TO DO: El ms Movies recibe como parametro una lista de IDs
		// Con la implementacion de <UsersWatchlist> los IDs se encuentran
		// dentro del objeto watchlistIds
		List<UsersWatchlist> watchlistIds = userEntity.getWatchlist();

		logger.debug("Before calling movies Microservice");
		List<String> moviesIds = new ArrayList<>();
		for (UsersWatchlist m:
			 watchlistIds) {
			moviesIds.add(m.getMovieId());
		}
		System.out.println(moviesIds);
		List<MoviesResponseModel> moviesList = new ArrayList<>();

		try {
			moviesList = moviesServiceClient.watchlist(moviesIds);

		} catch (FeignException e) {
			logger.error(e.getLocalizedMessage());
		}
		logger.debug("After calling movies Microservice");
		return moviesList;
	}

	@Override
	public String changePassword(ChangePasswordDTO passwordDTO, String userId) {
		UserEntity user = usersRepository.findByUserId(userId);

		if(user == null) throw new UsernameNotFoundException("user not found");

		String password = passwordDTO.getPassword();

		user.setEncryptedPassword(bCryptPasswordEncoder.encode(password));
		usersRepository.save(user);

		return "Password successfully updated";
	}

	@Override
	public UsersComment addComment(String userId, UserCommentDTO commentDTO) {
		UsersComment comment = mapper.map(commentDTO, UsersComment.class);

		UserEntity user = usersRepository.findByUserId(userId);

		if(user == null) throw new UsernameNotFoundException("user not found");

		user.getComments().add(comment);
		usersRepository.save(user);

		return comment;
	}

	@Override
	public List<UserCommentResponseDTO> getCommentsByMovieId(String movieId) {

		List<UsersComment> comments = commentRepository.getAllByMovieId(movieId);
		List<UserCommentResponseDTO> responseDTO = new ArrayList<>();

		for (UsersComment c :
				comments) {
			UserCommentResponseDTO crDTO = mapper.map(c, UserCommentResponseDTO.class);
			crDTO.setUsername(c.getUserEntity().getFirstName() + c.getUserEntity().getLastName());
			responseDTO.add(crDTO);
		}

		return responseDTO;
	}
}
