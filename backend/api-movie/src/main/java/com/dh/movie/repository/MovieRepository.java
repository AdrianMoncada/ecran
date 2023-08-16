package com.dh.movie.repository;

import com.dh.movie.model.Genre;
import com.dh.movie.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Set;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

    @Query("{title: {'$regex':?0,'$options':'i'}}")
    List<Movie> findAllByTitle(String title);

    @Query("{genre: ?0}")
    List<Movie> findAllByGenre(String genre);

    @Query("{'title': { '$regex':?0,'$options':'i' }, 'release_date': { $gte: ?1, $lte: ?2 }}")
    List<Movie> findByFiltersNoGenre(String title, String min_date, String max_date);

    @Query("{'title': { '$regex':?0,'$options':'i' }, $or: ?1, 'release_date': { $gte: ?2, $lte: ?3 }}")
    List<Movie> findByFilters(String title, List<Genre> genres, String min_date, String max_date);
}
