package com.ecran.api.users.service;

import com.ecran.api.users.data.UserEntity;
import com.ecran.api.users.ui.model.MoviesResponseModel;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.ecran.api.users.shared.UserDto;

import java.util.List;

public interface UsersService extends UserDetailsService {
	UserDto createUser(UserDto userDetails);
	UserDto getUserDetailsByEmail(String email);

	List<MoviesResponseModel> getWatchlistByUserId(String userId);

	void addToWatchlist(String userId, String movieId);
}
