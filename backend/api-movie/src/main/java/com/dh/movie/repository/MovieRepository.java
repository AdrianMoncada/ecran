package com.dh.movie.repository;

import com.dh.movie.model.Genre;
import com.dh.movie.model.Movie;
import com.dh.movie.model.Platform;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

    @Query("{title: {'$regex':?0,'$options':'i'}}")
    List<Movie> findAllByTitle(String title);

    @Query("{genre: ?0}")
    List<Movie> findAllByGenre(String genre);

    @Query("{'release_date': { $gte: ?0, $lte: ?1 }}")
    List<Movie> findByDateRange(String min_date, String max_date, Sort sort);

    @Query("{$or: ?0, 'release_date': { $gte: ?1, $lte: ?2 }}")
    List<Movie> findByGenresInDateRange(List<Genre> genres, String min_date, String max_date, Sort sort);

    @Query("{$or: ?0, 'release_date': { $gte: ?1, $lte: ?2 }}")
    List<Movie> findByPlatformInDateRange(List<Platform> platforms, String min_date, String max_date, Sort sort);

    @Query("{$or: ?0, $or: ?1, 'release_date': { $gte: ?2, $lte: ?3 }}")
    List<Movie> findByGenresAndPlatformsInDateRange(List<Genre> genres, List<Platform> platforms, String min_date, String max_date, Sort sort);
}
