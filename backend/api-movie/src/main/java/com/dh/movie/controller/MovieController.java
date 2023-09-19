package com.dh.movie.controller;

import com.dh.movie.model.dto.UserScoreDTO;
import com.dh.movie.model.dto.movie.AllPageableDTO;
import com.dh.movie.model.dto.movie.MovieReqDTO;
import com.dh.movie.model.dto.movie.MovieResDTO;
import com.dh.movie.service.impl.MovieServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
@AllArgsConstructor
public class MovieController {

    private final MovieServiceImpl movieService;

    @PostMapping("")
    ResponseEntity<MovieResDTO> save(@Valid @RequestBody MovieReqDTO movie) {
        return new ResponseEntity<>(movieService.save(movie), HttpStatus.CREATED);
    }

    @GetMapping("")
    ResponseEntity<List<MovieResDTO>> findAll() {
        return ResponseEntity.ok().body(movieService.findAll());
    }

    @GetMapping("/page/{page}")
    ResponseEntity<AllPageableDTO> findAllPageable(@PathVariable String page) {
        return ResponseEntity.ok().body(movieService.findAllPageable(Integer.valueOf(page), 8));
    }

    @GetMapping("/top")
    ResponseEntity<List<MovieResDTO>> findTop10() {
        return ResponseEntity.ok().body(movieService.top10Rating());
    }

    @GetMapping("/{id}")
    ResponseEntity<MovieResDTO> findById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(movieService.findById(id));
    }

    @PutMapping("/{id}")
    ResponseEntity<MovieResDTO> updateById(@PathVariable("id") String id, @Valid @RequestBody MovieReqDTO movie) {
        return ResponseEntity.ok().body(movieService.updateById(id, movie));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<String> deleteById(@PathVariable("id") String id) {
        movieService.deleteById(id);
        return ResponseEntity.ok().body("Movie " + id + " deleted");
    }

    @GetMapping("/search")
    ResponseEntity<List<MovieResDTO>> findAllByTitle(@RequestParam String title) {
        return ResponseEntity.ok().body(movieService.findAllByTitle(title));
    }

    @GetMapping("/filter/{page}")
    ResponseEntity<AllPageableDTO> findByFilters
            (
                    @RequestParam(defaultValue = "") List<String> genres,
                    @RequestParam(defaultValue = "") List<String> platforms,
                    @RequestParam(defaultValue = "0") String min_date,
                    @RequestParam(defaultValue = "3000") String max_date,
                    @PathVariable String page,
                    @RequestParam(required = false, defaultValue = "asc") String order

            )
    {
        return ResponseEntity.ok().body(movieService.findByFilters(genres, platforms, min_date, max_date, order, Integer.valueOf(page)));
    }

    @GetMapping("/watchlist")
    ResponseEntity<List<MovieResDTO>> findWatchlist(@RequestParam(defaultValue = "") List<String> ids) {
        return ResponseEntity.ok().body(movieService.findWatchlist(ids));
    }

    @PostMapping("/{id}/addscore")
    ResponseEntity<String> addScore(@PathVariable String id, @RequestBody UserScoreDTO uvDTO) {
        return new ResponseEntity<>(movieService.addScore(id, uvDTO), HttpStatus.CREATED);
    }

    @PostMapping("/image")
    public ResponseEntity<String> saveImage(@RequestParam("file") MultipartFile file) {
        return new ResponseEntity<>(movieService.saveImage(file), HttpStatus.CREATED);
    }
}
