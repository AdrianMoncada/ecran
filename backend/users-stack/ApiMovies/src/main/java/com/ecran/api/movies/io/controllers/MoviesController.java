/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ecran.api.movies.io.controllers;

import com.ecran.api.movies.service.MoviesService;
import com.ecran.api.movies.ui.model.MoviesResponseModel;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import java.lang.reflect.Type;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("/users/{id}/movies")
//@RequestMapping("/api/v1/movies/watchlist")
public class MoviesController {
    
    @Autowired
    MoviesService moviesService;
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @GetMapping( 
            produces = { 
                MediaType.APPLICATION_JSON_VALUE,
                MediaType.APPLICATION_XML_VALUE,
            })
//    ResponseEntity<List<MovieEntity>> watchlist(@RequestParam(defaultValue = "") List<String> ids) {
//        return ResponseEntity.ok().body(movieService.findWatchlist(ids));
//    }
    public List<MoviesResponseModel> watchlist(@PathVariable String id) {

        List<MoviesResponseModel> returnValue = new ArrayList<>();

//        List<MovieEntity> moviesEntities = moviesService.getMovies(id);
        List<String> moviesEntities = moviesService.findWatchlist(id);
        
        if(moviesEntities == null || moviesEntities.isEmpty())
        {
            return returnValue;
        }
        
        Type listType = new TypeToken<List<String>>(){}.getType();
        returnValue = new ModelMapper().map(moviesEntities, listType);
        return returnValue;
    }

}
