package com.dh.series.service;

import com.dh.series.exceptions.ApiException;
import com.dh.series.model.Serie;
import com.dh.series.model.dto.SerieDTO;

import java.util.Optional;

public interface SerieService {

    Serie save (SerieDTO seriedto) throws ApiException;

//    List<Serie> getAll();
//
    Optional<Serie> getById(String id);
//
//    void deleteById(String id);
//
//    void update(Serie serie);
//
//    List<Serie> findByGenre(String genre);
//
//    void addChapter(String serieId, String seasonId, Chapter chapter) throws Exception;
//
//    void addSeason(String serieId, Season season) throws Exception;

}
