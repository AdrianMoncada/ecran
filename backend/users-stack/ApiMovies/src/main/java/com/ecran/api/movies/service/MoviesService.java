/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ecran.api.movies.service;


import java.util.List;

public interface MoviesService {
//    List<MovieEntity> findWatchlist(List<String> ids);

    List<String> findWatchlist(String userId);
}
