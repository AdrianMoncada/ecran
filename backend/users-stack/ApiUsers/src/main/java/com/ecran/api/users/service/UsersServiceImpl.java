package com.ecran.api.users.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.ecran.api.users.data.UserEntity;
import com.ecran.api.users.data.UsersRepository;
import com.ecran.api.users.ui.model.MoviesResponseModel;
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
import com.ecran.api.users.data.*;

@Service
public class UsersServiceImpl implements UsersService {

	UsersRepository usersRepository;
	BCryptPasswordEncoder bCryptPasswordEncoder;

//	RestTemplate restTemplate;

	Environment environment;
	MoviesServiceClient moviesServiceClient;

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	public UsersServiceImpl(UsersRepository usersRepository, BCryptPasswordEncoder bCryptPasswordEncoder, Environment environment, MoviesServiceClient moviesServiceClient)
	{
		this.usersRepository = usersRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
//		this.restTemplate = restTemplate;
		this.moviesServiceClient=moviesServiceClient;
		this.environment= environment;
	}

	@Override
	public List<String> addToWatchlist(String userId, String movieId) {
		// Agregar condicion; Si movieId existe en la watchlist -> Quitarla
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException("User not found");
		userEntity.addToWatchlist(movieId);
		return userEntity.getWatchlist();
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
	public UserDto getUserDetailsByEmail(String email) {
		UserEntity userEntity = usersRepository.findByEmail(email);
		
		if(userEntity == null) throw new UsernameNotFoundException(email);
		
		return new ModelMapper().map(userEntity, UserDto.class);
	}

	@Override
	public List<MoviesResponseModel> getWatchlistByUserId(String userId) {
		UserEntity userEntity = usersRepository.findByUserId(userId);
		if(userEntity == null) throw new UsernameNotFoundException("User not found");

		List<String> watchlistIds = userEntity.getWatchlist();
		System.out.println(watchlistIds);
		logger.debug("Before calling movies Microservice");
		List<MoviesResponseModel> moviesList = new ArrayList<>();
		try {
			moviesList = moviesServiceClient.watchlist(watchlistIds);

		} catch (FeignException e) {
			logger.error(e.getLocalizedMessage());
		}
		logger.debug("After calling movies Microservice");
		return moviesList;
	}

}
