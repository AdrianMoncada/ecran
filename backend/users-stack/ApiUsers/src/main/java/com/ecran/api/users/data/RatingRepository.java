package com.ecran.api.users.data;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RatingRepository extends CrudRepository<UsersMovieRating, Long> {

    @Query(value = "SELECT COUNT(*) FROM users_movie_ratings WHERE movie_id = :movieId", nativeQuery = true)
    Double countVotesByMovieId(String movieId);

    @Query(value = "SELECT SUM(rating) FROM users_movie_ratings WHERE movie_id = :movieId", nativeQuery = true)
    Double sumVotesByMovieId(String movieId);
}
