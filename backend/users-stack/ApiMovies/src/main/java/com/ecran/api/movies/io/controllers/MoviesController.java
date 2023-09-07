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
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
@RequestMapping("/api/v1/movies")
public class MoviesController {
    
    @Autowired
    MoviesService moviesService;
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @GetMapping("/watchlist")
    public ResponseEntity<List<MovieEntity>> watchlist(@RequestParam(defaultValue = "") List<String> ids) {
        return ResponseEntity.ok().body(moviesService.findWatchlist(ids));
    }

    @PostMapping("/{id}/addscore")
    ResponseEntity<String> addValoration(@PathVariable String id, @RequestBody UserValorationDTO uvDTO) {
        return new ResponseEntity<>(moviesService.addValoration(id, uvDTO), HttpStatus.CREATED);
    }

}
