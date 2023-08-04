package com.dh.series.controller;

import com.dh.series.model.Serie;
import com.dh.series.service.SeasonServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/series")
public class SerieController {

    private final SeasonServiceImpl service;

    public SerieController(SeasonServiceImpl service) {
        this.service = service;
    }

    @GetMapping()
    private ResponseEntity<List<Serie>> getAllSeries(){
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{genre}")
    private ResponseEntity<List<Serie>> findByGenre(@PathVariable String genre){
        return ResponseEntity.ok(service.findByGenre(genre));
    }

    @PostMapping()
    private Serie postSeries(@RequestBody Serie serie){
        return service.save(serie);
    }

}