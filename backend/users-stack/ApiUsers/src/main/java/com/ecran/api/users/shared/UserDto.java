package com.ecran.api.users.shared;

import com.ecran.api.users.data.UsersMovieWatchlist;

import java.io.Serializable;
import java.util.List;

public class UserDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -953297098295050686L;
	
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String userId;
	private String encryptedPassword;

	private List<UsersMovieWatchlist> watchlist;

//	private List<MoviesResponseModel> movies;

//	public List<MoviesResponseModel> getMovies() {
//		return movies;
//	}
//
//	public void setMovies(List<MoviesResponseModel> movies) {
//		this.movies = movies;
//	}


	public List<UsersMovieWatchlist> getWatchlist() {
		return watchlist;
	}

	public void setWatchlist(List<UsersMovieWatchlist> watchlist) {
		this.watchlist = watchlist;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getEncryptedPassword() {
		return encryptedPassword;
	}

	public void setEncryptedPassword(String encryptedPassword) {
		this.encryptedPassword = encryptedPassword;
	}

}
