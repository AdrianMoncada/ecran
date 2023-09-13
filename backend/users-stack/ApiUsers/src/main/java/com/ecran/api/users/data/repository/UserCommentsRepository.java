package com.ecran.api.users.data.repository;

import com.ecran.api.users.data.models.UsersComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserCommentsRepository extends JpaRepository<UsersComment, Long> {

    @Query(value = "SELECT * FROM users_comments WHERE movie_id = :movieId", nativeQuery = true)
    List<UsersComment> getAllByMovieId(String movieId);

}
