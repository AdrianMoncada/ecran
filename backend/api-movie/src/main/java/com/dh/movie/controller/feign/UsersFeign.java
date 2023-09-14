package com.dh.movie.controller.feign;

import com.dh.movie.model.UsersComment;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name="USERS")
public interface UsersFeign {
    @GetMapping("/users/{movieId}/comments")
    List<UsersComment> getCommentsByMovieId(@PathVariable String movieId);
}