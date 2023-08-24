package com.dh.series.controller;

import com.dh.series.model.Serie;
import com.dh.series.model.dto.SerieRequestDTO;
import com.dh.series.model.dto.SerieResponseDTO;
import com.dh.series.service.SerieService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/series")
@AllArgsConstructor
@Tag(name = "Series MS", description = "Endpoints del microservicio de series")
public class SerieController {
    private final SerieService service;

    @PostMapping()
    @Operation(description = "Guardar una serie")
    private Serie postSeries(@Valid @RequestBody SerieRequestDTO serie ) throws Exception {
        return service.save(serie);
    }

    @GetMapping("/{id}")
    @Operation(description = "Traer una serie por id")
    private ResponseEntity<SerieResponseDTO> getById(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping()
    @Operation(description = "Traer todas las series")
    private ResponseEntity<List<Serie>> getAllSeries() {
        return ResponseEntity.ok(service.getAll());
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Borrar una serie por id")
    private ResponseEntity<String> deleteById(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(service.deleteById(id));
    }

    @PutMapping()
    @Operation(description = "Modificar una serie por id")
    private ResponseEntity<Serie> updateById(@Valid @RequestBody Serie serie) throws Exception {
        return ResponseEntity.ok(service.updateById(serie));
    }

    @GetMapping("/search")
    ResponseEntity<List<SerieResponseDTO>> findByName(@RequestParam String title) {
        return ResponseEntity.ok().body(service.findAllByTitle(title));
    }

    @GetMapping("/filter")
    ResponseEntity<List<SerieResponseDTO>> findByFilters
            (
                    @RequestParam(required = false, defaultValue = "") List<String> genres,
                    @RequestParam(required = false, defaultValue = "") List<String> platforms,
                    @RequestParam(defaultValue = "0") String min_date,
                    @RequestParam(defaultValue = "3000") String max_date,
                    @RequestParam(required = false, defaultValue = "asc") String order
            )
    {
        return ResponseEntity.ok().body(service.findByFilters(genres, platforms, min_date, max_date, order));
    }


}