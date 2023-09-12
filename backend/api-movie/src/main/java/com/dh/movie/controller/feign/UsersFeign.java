package com.dh.movie.controller.feign;

import com.dh.movie.model.UsersComment;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name="test-users")
public interface UsersFeign {
    @GetMapping("/users/comments/{movieId}")
    List<UsersComment> getCommentsByMovieId(@PathVariable String movieId);
}