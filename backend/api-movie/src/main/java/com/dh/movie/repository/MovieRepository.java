package com.dh.movie.repository;

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
    @Query("{title: { '$regex':?0,'$options':'i' }, $or: [{ genre: ?1 }, { genre: ?2 }], release_date: { $gte: ?3, $lte: ?4 }}")
    List<Movie> findAllFiltered(String title, String genre1, String genre2, String min_date, String max_date);

    @Query("{title: { '$regex':?0,'$options':'i' }, $or: [?1], release_date: { $gte: ?2, $lte: ?3 }}")
    List<Movie> findAllVarargs(String title, String[] genres, String min_date, String max_date);
    List<Movie> findByTitleContainsIgnoreCaseAndGenreInAndReleaseDateBetween(String title, List<String> genre, String releaseDate, String releaseDate2);

    @Query("{genre: ?0}")
    List<Movie> findAllByGenre(String genre);
}
