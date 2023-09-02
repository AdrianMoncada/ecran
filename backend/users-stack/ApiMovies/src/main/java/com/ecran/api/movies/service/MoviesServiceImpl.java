/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ecran.api.movies.service;

import com.ecran.api.movies.data.MovieEntity;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MoviesServiceImpl implements MoviesService {

    @Override
    public List<MovieEntity> getMovies(String userId) {
        List<MovieEntity> returnValue = new ArrayList<>();
        
        MovieEntity movieEntity = new MovieEntity();
        movieEntity.setUserId(userId);
        movieEntity.setMovieId("movie1Id");
        movieEntity.setDescription("movie 1 description");
        movieEntity.setId(1L);
        movieEntity.setName("Elm Street");
        
        MovieEntity movieEntity2 = new MovieEntity();
        movieEntity2.setUserId(userId);
        movieEntity2.setMovieId("movie2Id");
        movieEntity2.setDescription("movie 2 description");
        movieEntity2.setId(2L);
        movieEntity2.setName("The Exorcist");
        
        returnValue.add(movieEntity);
        returnValue.add(movieEntity2);
        
        return returnValue;
    }
    
}
