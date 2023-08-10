package com.dh.series.controller;

import com.dh.series.model.Serie;
import com.dh.series.model.dto.SerieDTO;
import com.dh.series.service.SeasonServiceImpl;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/series")
@AllArgsConstructor
@Api(value = "Series MS", description = "Endpoints del microservicio de series")
public class SerieController {
    private final SeasonServiceImpl service;

    @PostMapping()
    @ApiOperation("Guardar una serie")
    private Serie postSeries(@RequestBody SerieDTO serie) throws Exception {
        return service.save(serie);
    }

    @GetMapping("/{id}")
    @ApiOperation("Traer una serie por id")
    private ResponseEntity<Optional<Serie>> getById(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping()
    @ApiOperation("Traer todas las series")
    private ResponseEntity<List<Serie>> getAllSeries() {
        return ResponseEntity.ok(service.getAll());
    }

    @DeleteMapping("/{id}")
    @ApiOperation("Borrar una serie por id")
    private ResponseEntity<String> deleteById(@PathVariable String id)  throws Exception{
        return ResponseEntity.ok(service.deleteById(id));
    }

    @PutMapping()
    @ApiOperation("Modificar una serie por id")
    private ResponseEntity<Serie> updateById(@RequestBody Serie serie)  throws Exception{
        return ResponseEntity.ok(service.updateById(serie));
    }

}