package com.dh.series.controller;

import com.dh.series.model.Serie;
import com.dh.series.model.dto.SerieDTO;
import com.dh.series.service.SeasonServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/series")
@AllArgsConstructor
public class SerieController {
    private final SeasonServiceImpl service;

    @PostMapping()
    private Serie postSeries(@RequestBody SerieDTO serie) throws Exception {
        return service.save(serie);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Optional<Serie>> getById(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping()
    private ResponseEntity<List<Serie>> getAllSeries() {
        return ResponseEntity.ok(service.getAll());
    }

}