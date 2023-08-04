package com.dh.movie.service;

import com.dh.movie.model.Movie;
import com.dh.movie.model.dto.MovieDTO;
import com.dh.movie.repository.MovieRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;
    private final ModelMapper mapper;

    public Movie save(MovieDTO movie) {
        Movie movieDB = mapper.map(movie, Movie.class);
        return movieRepository.save(movieDB);
    }

    public MovieDTO findById(String id) {
        Movie movie = movieRepository.findById(id).orElse(null);
        return mapper.map(movie, MovieDTO.class);
    }

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    public MovieDTO updateById(String id, MovieDTO movie) {
        Movie moviePatch = mapper.map(movie, Movie.class);
        Movie movieDB = movieRepository.findById(id).orElse(null);
        if (movieDB != null) {
            movieDB.setActors(moviePatch.getActors());
            movieDB.setGenre(moviePatch.getGenre());
            movieDB.setComposer(moviePatch.getComposer());
            movieDB.setComments(moviePatch.getComments());
            movieDB.setDirector(moviePatch.getDirector());
            movieDB.setPlatforms(moviePatch.getPlatforms());
            movieDB.setScores(moviePatch.getScores());
            movieDB.setReview(moviePatch.getReview());
            movieDB.setTitle(moviePatch.getTitle());
            movieDB.setImage_url(moviePatch.getImage_url());
            movieDB.setRelease_date(moviePatch.getRelease_date());
            movieDB.setImage_url(moviePatch.getImage_url());
            movieDB.setRt_score(moviePatch.getRt_score());
            movieDB.setImdb_score(moviePatch.getImdb_score());
            movieDB.setMc_score(moviePatch.getMc_score());
        } else return null;
        return mapper.map(movieRepository.save(movieDB), MovieDTO.class);
    }

    public void deleteById(String id) {
        if (!movieRepository.existsById(id)) {
            throw new RuntimeException("Associate with id " + id + "doesn't exist");
        }
        movieRepository.deleteById(id);
    }


    public List<MovieDTO> findByGenre(String genre) {
        List<MovieDTO> moviesDTO;

        List<Movie> movies = movieRepository.findByGenre(genre);

        if (!movies.isEmpty()) {
            moviesDTO = movies.stream().map(movie -> mapper.map(movie, MovieDTO.class)).collect(Collectors.toList());
        } else {
            moviesDTO = Collections.emptyList();
        }
        return moviesDTO;
    }

}
