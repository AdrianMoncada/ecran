package com.ecran.api.users.shared;

import com.ecran.api.users.data.models.UsersWatchlist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

	private List<UsersWatchlist> watchlist;

//	private List<MoviesResponseModel> movies;

//	public List<MoviesResponseModel> getMovies() {
//		return movies;
//	}
//
//	public void setMovies(List<MoviesResponseModel> movies) {
//		this.movies = movies;
//	}


	public void setWatchlist(List<UsersWatchlist> watchlist) {
		this.watchlist = watchlist;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public void setEncryptedPassword(String encryptedPassword) {
		this.encryptedPassword = encryptedPassword;
	}

}
