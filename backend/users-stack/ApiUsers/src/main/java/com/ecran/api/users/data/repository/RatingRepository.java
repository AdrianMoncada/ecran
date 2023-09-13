package com.ecran.api.users.data.repository;

import com.ecran.api.users.data.models.UsersRating;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends CrudRepository<UsersRating, Long> {

    @Query(value = "SELECT COUNT(*) FROM users_movie_ratings WHERE movie_id = :movieId", nativeQuery = true)
    Double countVotesByMovieId(String movieId);

    @Query(value = "SELECT SUM(rating) FROM users_movie_ratings WHERE movie_id = :movieId", nativeQuery = true)
    Double sumVotesByMovieId(String movieId);
}
