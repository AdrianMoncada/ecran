package com.dh.movie.service;


import com.dh.movie.events.NewMovieEventProducer;
import com.dh.movie.model.Movie;
import com.dh.movie.repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final NewMovieEventProducer movieEventProducer;

    public MovieService(MovieRepository movieRepository, NewMovieEventProducer movieEventProducer) {
        this.movieRepository = movieRepository;
        this.movieEventProducer = movieEventProducer;
    }

    public List<Movie> findByGenre(String genre) {
        return movieRepository.findByGenre(genre);
    }

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    public Movie save(Movie movie) {
        Movie movieSaved = movieRepository.save(movie);
        movieEventProducer.execute(movieSaved);
        return movie;
    }
}
