package com.dh.movie.service;

import com.dh.movie.exceptions.ResourceNotFoundException;
import com.dh.movie.model.Genre;
import com.dh.movie.model.Movie;
import com.dh.movie.model.Platform;
import com.dh.movie.model.dto.movie.MovieRequestDTO;
import com.dh.movie.model.dto.movie.MovieResponseDTO;
import com.dh.movie.repository.MovieRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

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

    public List<MovieResponseDTO> findAllByGenres(String genre) {
        return repository.findAllByGenre(genre).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    }

    public List<MovieResponseDTO> findByFilters(List<String> genres, List<String> platforms, String min_date, String max_date, String order) {
        List<Genre> parsedGenres = genres.stream().map(Genre::new).toList();
        List<Platform> parsedPlatforms = platforms.stream().map(Platform::new).toList();

        Sort.Direction sortDirection = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sort = Sort.by(sortDirection, "title");

        if (parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            System.out.println("Nothing");
            return repository.findByDateRange(min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
        }

        if (!parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            System.out.println("No platforms");
            System.out.println(parsedGenres);
            return repository.findByGenresInDateRange(parsedGenres, min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
        }

        if (parsedGenres.isEmpty() && !parsedPlatforms.isEmpty()) {
            System.out.println("No genres");
            System.out.println(parsedPlatforms);
            return repository.findByPlatformInDateRange(parsedPlatforms, min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
        }

        return repository.findByGenresAndPlatformsInDateRange(parsedGenres, parsedPlatforms, min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    };

}
