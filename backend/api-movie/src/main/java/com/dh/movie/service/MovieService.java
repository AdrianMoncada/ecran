package com.dh.movie.service;

import com.dh.movie.model.dto.UserScoreDTO;
import com.dh.movie.model.dto.movie.MovieReqDTO;
import com.dh.movie.model.dto.movie.MovieResDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MovieService extends IService<MovieResDTO, MovieReqDTO> {

    List<MovieResDTO> findAllByTitle(String title);
    List<MovieResDTO> findByFilters(List<String> genres, List<String> platforms, String min_date, String max_date, String order);
    List<MovieResDTO> findWatchlist(List<String> ids);
    String addScore(String movieId, UserScoreDTO uvDTO);
    String saveImage(MultipartFile image);

}
