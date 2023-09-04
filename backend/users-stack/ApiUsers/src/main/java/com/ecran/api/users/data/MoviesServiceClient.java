package com.ecran.api.users.data;

import com.ecran.api.users.ui.model.MoviesResponseModel;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@FeignClient(name="movies")
public interface MoviesServiceClient {
    @GetMapping("/api/v1/movies/watchlist")
    @Retry(name="movies")
    @CircuitBreaker(name="movies", fallbackMethod ="getMoviesFallback")
    public List<MoviesResponseModel> watchlist(@RequestParam(defaultValue = "") List<String> ids);

    default List<MoviesResponseModel> getMoviesFallback(List<String> ids, Throwable exception){
        System.out.println(ids);
        System.out.println(exception.getMessage());
        return new ArrayList<>();
    }
}

