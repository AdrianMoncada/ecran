package com.dh.movie.repository;

import com.dh.movie.model.dto.movie.MovieResDTO;
import com.dh.movie.repository.dtos.GenreDB;
import com.dh.movie.model.Movie;
import com.dh.movie.repository.dtos.PlatformDB;
import com.dh.movie.repository.dtos.WatchlistDB;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String>, PagingAndSortingRepository<Movie, String> {
    List<Movie> findTop10ByOrderByScoreDesc();

    @Query("{title: {'$regex':?0,'$options':'i'}}")
    List<Movie> findAllByTitle(String title);

    @Query("{ $sample: { size: 3 } }")
    List<Movie> findThreeSuggestions();

    @Query("{genres: ?0}")
    List<Movie> findAllByGenre(String genres);

    @Query("{$or: ?0}")
    List<Movie> findWatchlist(List<WatchlistDB> movieId);

    @Query("{'release_date': { $gte: ?0, $lte: ?1 }}")
    Page<Movie> findByDateRange(String min_date, String max_date, Pageable page);

    @Query("{$or: ?0, 'release_date': { $gte: ?1, $lte: ?2 }}")
    Page<Movie> findByGenresInDateRange(List<GenreDB> genreDBS, String min_date, String max_date, Pageable page);

    @Query("{ platforms: { $elemMatch: { $or: ?0 } }, 'release_date': { $gte: ?1, $lte: ?2 } }")
    Page<Movie> findByPlatformInDateRange(List<PlatformDB> platforms, String min_date, String max_date, Pageable page);

    @Query("{$or: ?0, platforms: { $elemMatch: { $or: ?1 } }, 'release_date': { $gte: ?2, $lte: ?3 }}")
    Page<Movie> findByGenresAndPlatformsInDateRange(List<GenreDB> genreDBS, List<PlatformDB> platforms, String min_date, String max_date, Pageable page);
}