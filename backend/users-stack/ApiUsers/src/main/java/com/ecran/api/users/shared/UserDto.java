package com.ecran.api.users.shared;

import com.ecran.api.users.data.models.UsersRating;
import com.ecran.api.users.data.models.UsersWatchlist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
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
	private Boolean enabled;
	private String imageUrl;
	private List<UsersRating> ratings = new ArrayList<>();
}
