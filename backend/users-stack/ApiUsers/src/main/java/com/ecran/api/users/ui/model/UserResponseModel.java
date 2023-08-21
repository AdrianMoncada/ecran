package com.ecran.api.users.ui.model;

import java.util.List;

public class UserResponseModel {
    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private List<MoviesResponseModel> movies;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
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

    public List<MoviesResponseModel> getMovies() {
        return movies;
    }

    public void setMovies(List<MoviesResponseModel> movies) {
        this.movies = movies;
    }
}
