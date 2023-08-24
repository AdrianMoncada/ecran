package com.dh.series.repository;

import com.dh.series.model.Genre;
import com.dh.series.model.Platform;
import com.dh.series.model.Serie;
import com.dh.series.model.dto.GenreDB;
import com.dh.series.model.dto.PlatformDB;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Sort;


import java.util.List;

@Repository
public interface SerieRepository extends MongoRepository<Serie, String> {
    @Query("{title: {'$regex':?0,'$options':'i'}}")
    List<Serie> findAllByTitle(String title);

    @Query("{genres: ?0}")
    List<Serie> findAllByGenre(String genres);

    @Query("{'release_date': { $gte: ?0, $lte: ?1 }}")
    List<Serie> findByDateRange(String min_date, String max_date, Sort sort);

    @Query("{$or: ?0, 'release_date': { $gte: ?1, $lte: ?2 }}")
    List<Serie> findByGenresInDateRange(List<GenreDB> genreDBS, String min_date, String max_date, Sort sort);

    @Query("{ platforms: { $elemMatch: { $or: ?0 } }, 'release_date': { $gte: ?1, $lte: ?2 } }")
    List<Serie> findByPlatformInDateRange(List<PlatformDB> platforms, String min_date, String max_date, Sort sort);

    @Query("{$or: ?0, platforms: { $elemMatch: { $or: ?1 } }, 'release_date': { $gte: ?2, $lte: ?3 }}")
    List<Serie> findByGenresAndPlatformsInDateRange(List<GenreDB> genreDBS, List<PlatformDB> platforms, String min_date, String max_date, Sort sort);

}
