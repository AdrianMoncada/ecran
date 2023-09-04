package com.ecran.api.users.data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class UserEntity implements Serializable {

 
	private static final long serialVersionUID = -2731425678149216053L;
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column(nullable=false, length=50)
	private String firstName;
	
	@Column(nullable=false, length=50)
	private String lastName;
	
	@Column(nullable=false, length=120, unique=true)
	private String email;
	
	@Column(nullable=false, unique=true)
	private String userId;
	
	@Column(nullable=false, unique=true)	
	private String encryptedPassword;

	@Column(nullable = false)
	private List<String> watchlist = new ArrayList<>();

	public List<String> getWatchlist() {
		return watchlist;
	}

	public void addToWatchlist(String movieId) {
		watchlist.add(movieId);
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "UserEntity{" +
				"watchlist=" + watchlist +
				'}';
	}
}
