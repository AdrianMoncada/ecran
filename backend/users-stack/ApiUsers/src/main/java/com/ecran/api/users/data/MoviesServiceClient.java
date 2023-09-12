package com.ecran.api.users.data;

import com.ecran.api.users.shared.UserValorationDTO;
import com.ecran.api.users.ui.model.MoviesResponseModel;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@FeignClient(name="api-movie")
//@FeignClient(name="movies")
public interface MoviesServiceClient {
    @GetMapping("/api/v1/movies/watchlist")
    @Retry(name="api-movie")
//    @Retry(name="movies")
    @CircuitBreaker(name="api-movie", fallbackMethod ="getMoviesFallback")
//    @CircuitBreaker(name="movies", fallbackMethod ="getMoviesFallback")
    public List<MoviesResponseModel> watchlist(@RequestParam(defaultValue = "") List<String> ids);

    default List<MoviesResponseModel> getMoviesFallback(List<String> ids, Throwable exception){
        System.out.println(ids);
        System.out.println(exception.getMessage());
        return new ArrayList<>();
    }

    @PostMapping("/api/v1/movies/{id}/addscore")
    @Retry(name="api-movie")
//    @Retry(name="movies")
    @CircuitBreaker(name="api-movie", fallbackMethod ="addRatingFallback")
//    @CircuitBreaker(name="movies", fallbackMethod ="addRatingFallback")
    public String addRating(@PathVariable String id, @RequestBody UserValorationDTO uvDTO);

    default String addRatingFallback(List<String> ids, Throwable exception){
        System.out.println(ids);
        System.out.println(exception.getMessage());
        return "Metodo fallback de agregar rating";
    }



}

