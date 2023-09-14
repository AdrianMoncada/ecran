package com.ecran.api.users.service;

import com.ecran.api.users.data.models.UsersComment;
import com.ecran.api.users.data.models.UsersRating;
import com.ecran.api.users.data.models.UsersWatchlist;
import com.ecran.api.users.shared.ChangePasswordDTO;
import com.ecran.api.users.ui.model.MoviesResponseModel;
import com.ecran.api.users.ui.model.UserCommentDTO;
import com.ecran.api.users.ui.model.UserCommentResponseDTO;
import com.ecran.api.users.ui.model.UsersMovieWLDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.ecran.api.users.shared.UserDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UsersService extends UserDetailsService {
	UserDto createUser(UserDto userDetails);
	UserDto getUserDetailsByEmail(String email);

	UserDto getUserDetailsById(String userId);

	List<MoviesResponseModel> getWatchlistByUserId(String userId);

	List<UsersWatchlist>  addToWatchlist(String userId, UsersMovieWLDTO movieId);

	String addRating(String userId, UsersRating userRating);

	String changePassword(ChangePasswordDTO passwordDTO, String userId);

	UsersComment addComment(String userId, UserCommentDTO commentDTO);

	List<UserCommentResponseDTO> getCommentsByMovieId(String movieId);
	String saveImage(String userId, MultipartFile image);
	UserDto enableUser(String userId);
}
