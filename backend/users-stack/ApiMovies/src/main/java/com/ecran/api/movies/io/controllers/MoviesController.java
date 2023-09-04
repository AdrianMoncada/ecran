/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ecran.api.movies.io.controllers;

import com.ecran.api.movies.data.MovieEntity;
import com.ecran.api.movies.service.MoviesService;
import com.ecran.api.movies.ui.model.MoviesResponseModel;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import java.lang.reflect.Type;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("/api/v1/movies/watchlist")
public class MoviesController {
    
    @Autowired
    MoviesService moviesService;
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @GetMapping( 
            produces = { 
                MediaType.APPLICATION_JSON_VALUE,
                MediaType.APPLICATION_XML_VALUE,
            })
    public ResponseEntity<List<MovieEntity>> watchlist(@RequestParam(defaultValue = "") List<String> ids) {
        return ResponseEntity.ok().body(moviesService.findWatchlist(ids));
    }
}
