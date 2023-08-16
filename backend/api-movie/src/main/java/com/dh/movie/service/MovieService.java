package com.dh.movie.service;

import com.dh.movie.exceptions.ResourceNotFoundException;
import com.dh.movie.model.Movie;
import com.dh.movie.model.dto.movie.MovieRequestDTO;
import com.dh.movie.model.dto.movie.MovieResponseDTO;
import com.dh.movie.repository.MovieRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MovieService {

    private final MovieRepository repository;
    private final ModelMapper mapper;

    public MovieResponseDTO save(MovieRequestDTO movie) {
        Movie movieDB = mapper.map(movie, Movie.class);
        return mapper.map(repository.save(movieDB), MovieResponseDTO.class);
    }

    public List<MovieResponseDTO> findAll() {
        return repository.findAll().stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    }

    public List<MovieResponseDTO> findAllByTitle(String title){
        return repository.findAllByTitle(title).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    }

    public MovieResponseDTO findById(String id) {
        Movie movie = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movie id " + id + " doesn't exists."));
        return mapper.map(movie, MovieResponseDTO.class);
    }

    public MovieResponseDTO updateById(String id, MovieRequestDTO movie) {
        Movie movieDB = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movie id " + id + " doesn't exists."));
        Movie moviePatch = mapper.map(movie, Movie.class);
        mapper.map(moviePatch, movieDB);
        movieDB.setMovieId(id);
        return mapper.map(repository.save(movieDB), MovieResponseDTO.class);
    }

    public void deleteById(String id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Movie with id " + id + " doesn't exists.");
        }
        repository.deleteById(id);
    }

    public List<MovieResponseDTO> findAllByGenre(String genre) {
        return repository.findAllByGenre(genre).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    }

    public List<MovieResponseDTO> findAllVarargs(String title, List<String> genres, String min_date, String max_date) {
        List<String> parsedGenres = genres.stream().map(g -> "{ genre: '"+g+"' }").toList();
        System.out.println("SERVICE: " + parsedGenres);
        return repository.findAllVarargs(title, parsedGenres, min_date, max_date).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    };

    public List<MovieResponseDTO> findByFilters(String title, List<String> genres, String min_date, String max_date) {
        return repository.findByTitleContainsIgnoreCaseAndGenreInAndReleaseDateBetween(title, genres, min_date, max_date).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    };

}
