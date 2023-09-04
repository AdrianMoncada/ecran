/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ecran.api.users.ui.model;


public class MoviesResponseModel {
    private String movieId;
    private String title;
    private String actors;
    private String director;
    private String composer;
    private String review;
    private String image_url;
    private String trailer_url;
    private String release_date;
    private String genre;
    private String rt_score;
    private String imdb_score;
    private String mc_score;

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getActors() {
        return actors;
    }

    public void setActors(String actors) {
        this.actors = actors;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getComposer() {
        return composer;
    }

    public void setComposer(String composer) {
        this.composer = composer;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getTrailer_url() {
        return trailer_url;
    }

    public void setTrailer_url(String trailer_url) {
        this.trailer_url = trailer_url;
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getRt_score() {
        return rt_score;
    }

    public void setRt_score(String rt_score) {
        this.rt_score = rt_score;
    }

    public String getImdb_score() {
        return imdb_score;
    }

    public void setImdb_score(String imdb_score) {
        this.imdb_score = imdb_score;
    }

    public String getMc_score() {
        return mc_score;
    }

    public void setMc_score(String mc_score) {
        this.mc_score = mc_score;
    }
}
