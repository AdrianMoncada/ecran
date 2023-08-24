package com.dh.movie.service;

import com.dh.movie.exceptions.ResourceNotFoundException;
import com.dh.movie.model.dto.platform.PlatformRequestDTO;
import com.dh.movie.model.dto.platform.PlatformResponseDTO;
import com.dh.movie.repository.PlatformRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class PlatformService {
    private final PlatformRepository repository;
    private final ModelMapper mapper;

    public PlatformResponseDTO save(PlatformRequestDTO platform) {
        Platform platformDB = mapper.map(platform, Platform.class);
        return mapper.map(repository.save(platformDB), PlatformResponseDTO.class);
    }

    public List<PlatformResponseDTO> findAll() {
        return repository.findAll().stream().map(m -> mapper.map(m, PlatformResponseDTO.class)).toList();
    }

    public PlatformResponseDTO findById(String id) {
        Platform platform = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("PlatformDB id " + id + " doesn't exists."));
        return mapper.map(platform, PlatformResponseDTO.class);
    }

    public PlatformResponseDTO updateById(String id, PlatformRequestDTO platform) {
        Platform platformDB = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("PlatformDB id " + id + " doesn't exists."));
        Platform platformPatch = mapper.map(platform, Platform.class);
        mapper.map(platformPatch, platformDB);
        return mapper.map(repository.save(platformDB), PlatformResponseDTO.class);
    }

    public void deleteById(String id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("PlatformDB with id " + id + "doesn't exists.");
        }
        repository.deleteById(id);
    }
}
