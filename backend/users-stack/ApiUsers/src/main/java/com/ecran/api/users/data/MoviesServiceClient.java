package com.ecran.api.users.data;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@FeignClient(name="movies")
public interface MoviesServiceClient {
//    @GetMapping("/api/v1/movies/watchlist")
//    @Retry(name="movies")
//    @CircuitBreaker(name="movies", fallbackMethod ="getMoviesFallback")
//    public List<MovieResponseDTO> watchlist(@RequestParam(defaultValue = "") List<String> ids);
    @GetMapping("/users/{id}/movies")
    @Retry(name="movies")
    @CircuitBreaker(name="movies", fallbackMethod ="getMoviesFallback")
    public List<String> watchlist(@PathVariable String id);

    default List<String> getMoviesFallback(String id, Throwable exception){
        System.out.println(id);
        System.out.println(exception.getMessage());
        return new ArrayList<>();
    }
}

