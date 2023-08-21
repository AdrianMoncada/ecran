/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ecran.api.users.ui.model;

/**
 *
 * @author skargopolov
 */
public class MoviesResponseModel {
    private String movieId;
    private String userId; 
    private String name;
    private String description;

    /**
     * @return the id
     */
    public String getMovieId() {
        return movieId;
    }

    /**
     * @param movieId the albumId to set
     */
    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    /**
     * @return the userId
     */
    public String getUserId() {
        return userId;
    }

    /**
     * @param userId the userId to set
     */
    public void setUserId(String userId) {
        this.userId = userId;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }
    
}
