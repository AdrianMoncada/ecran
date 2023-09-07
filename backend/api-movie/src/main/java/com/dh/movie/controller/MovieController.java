package com.dh.movie.controller;

import com.dh.movie.model.dto.UserValorationDTO;
import com.dh.movie.model.dto.movie.MovieRequestDTO;
import com.dh.movie.model.dto.movie.MovieResponseDTO;
import com.dh.movie.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
@AllArgsConstructor
public class MovieController {

    private final MovieService movieService;



    @PostMapping("")
    ResponseEntity<MovieResponseDTO> save(@Valid @RequestBody MovieRequestDTO movie) {
        return ResponseEntity.ok().body(movieService.save(movie));
    }

    @GetMapping("")
    ResponseEntity<List<MovieResponseDTO>> findAll() {
        return ResponseEntity.ok().body(movieService.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<MovieResponseDTO> findById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(movieService.findById(id));
    }

    @PutMapping("/{id}")
    ResponseEntity<MovieResponseDTO> updateById(@PathVariable("id") String id, @Valid @RequestBody MovieRequestDTO movie) {
        return ResponseEntity.ok().body(movieService.updateById(id, movie));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> deleteById(@PathVariable("id") String id) {
        movieService.deleteById(id);
        return ResponseEntity.ok().body("Movie " + id + " deleted");
    }

    @GetMapping("/search")
    ResponseEntity<List<MovieResponseDTO>> findByName(@RequestParam String title) {
        return ResponseEntity.ok().body(movieService.findAllByTitle(title));
    }

    @GetMapping("/filter")
    ResponseEntity<List<MovieResponseDTO>> findByFilters
            (
                    @RequestParam(defaultValue = "") List<String> genres,
                    @RequestParam(defaultValue = "") List<String> platforms,
                    @RequestParam(defaultValue = "0") String min_date,
                    @RequestParam(defaultValue = "3000") String max_date,
                    @RequestParam(required = false, defaultValue = "asc") String order
            )
    {
        return ResponseEntity.ok().body(movieService.findByFilters(genres, platforms, min_date, max_date, order));
    }

    @GetMapping("/watchlist")
    ResponseEntity<List<MovieResponseDTO>> watchlist(@RequestParam(defaultValue = "") List<String> ids) {
        return ResponseEntity.ok().body(movieService.findWatchlist(ids));
    }

    @PostMapping("/{id}/addscore")
    ResponseEntity<String> addValoration(@PathVariable String id, @RequestBody UserValorationDTO uvDTO) {
        return new ResponseEntity<>(movieService.addValoration(id, uvDTO), HttpStatus.CREATED);
    }

}
