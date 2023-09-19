package com.dh.movie.service;

import com.dh.movie.model.dto.UserScoreDTO;
import com.dh.movie.model.dto.movie.AllPageableDTO;
import com.dh.movie.model.dto.movie.MovieReqDTO;
import com.dh.movie.model.dto.movie.MovieResDTO;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MovieService extends IService<MovieResDTO, MovieReqDTO> {

    AllPageableDTO findAllPageable(Integer page, int elements);
    List<MovieResDTO> top10Rating();
    List<MovieResDTO> findAllByTitle(String title);
    AllPageableDTO findByFilters(List<String> genres, List<String> platforms, String min_date, String max_date, String order, Integer page);
    List<MovieResDTO> findWatchlist(List<String> ids);
    String addScore(String movieId, UserScoreDTO uvDTO);
    String saveImage(MultipartFile image);

}
