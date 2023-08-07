package com.dh.movie.controller;

import com.dh.movie.model.Movie;
import com.dh.movie.model.dto.MovieDTO;
import com.dh.movie.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movie")
@AllArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @PostMapping("")
    ResponseEntity<Movie> save(@RequestBody MovieDTO movie) {
        return ResponseEntity.ok().body(movieService.save(movie));
    }

    @GetMapping("/{id}")
    ResponseEntity<MovieDTO> findById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(movieService.findById(id));
    }

    @GetMapping("")
    ResponseEntity<List<Movie>> findAll() {
        return ResponseEntity.ok().body(movieService.findAll());
    }

    @PutMapping("/{id}")
    ResponseEntity<MovieDTO> updateById(@PathVariable("id") String id, @RequestBody MovieDTO movie) {
        return ResponseEntity.ok().body(movieService.updateById(id, movie));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> deleteById(@PathVariable("id") String id) {
        movieService.deleteById(id);
        return ResponseEntity.ok().body("Movie " + id + " deleted");
    }

    @GetMapping("/genre/{genre}")
    ResponseEntity<List<MovieDTO>> getMovieByGenre(@PathVariable String genre) {
        return ResponseEntity.ok().body(movieService.findByGenre(genre));
    }
}
