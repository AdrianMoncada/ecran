package com.ecran.api.users.data;

import com.ecran.api.users.ui.model.MoviesResponseModel;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@FeignClient(name="movies")
public interface MoviesServiceClient {
    @GetMapping("/users/{id}/movies")
    @Retry(name="movies")
    @CircuitBreaker(name="movies", fallbackMethod ="getMoviesFallback")
    public List<MoviesResponseModel> getMovies(@PathVariable String id);

    default List<MoviesResponseModel> getMoviesFallback(String id, Throwable exception){
        System.out.println(id);
        System.out.println(exception.getMessage());
        return new ArrayList<>();
    }
}

