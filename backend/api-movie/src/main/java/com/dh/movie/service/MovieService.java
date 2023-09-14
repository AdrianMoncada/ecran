package com.dh.movie.service;

import com.amazonaws.services.s3.model.ObjectMetadata;
import com.dh.movie.config.BucketName;
import com.dh.movie.controller.feign.UsersFeign;
import com.dh.movie.exceptions.ResourceNotFoundException;
import com.dh.movie.exceptions.ServiceException;
import com.dh.movie.model.dto.UserValorationDTO;
import com.dh.movie.model.dto.movie.AllMoviesDTO;
import com.dh.movie.repository.dtos.GenreDB;
import com.dh.movie.model.Movie;
import com.dh.movie.model.dto.movie.MovieRequestDTO;
import com.dh.movie.model.dto.movie.MovieResponseDTO;
import com.dh.movie.repository.MovieRepository;
import com.dh.movie.repository.dtos.PlatformDB;
import com.dh.movie.repository.dtos.WatchlistDB;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
@AllArgsConstructor
public class MovieService {

    private final MovieRepository repository;
    private final UsersFeign usersFeign;
    private final ModelMapper mapper;
    private final FileStoreService fileStore;

    public MovieResponseDTO save(MovieRequestDTO movie) {
        Movie movieDB = mapper.map(movie, Movie.class);
        return mapper.map(repository.save(movieDB), MovieResponseDTO.class);
    }

    public String saveImage(MultipartFile image) {
        if (image.isEmpty()) throw new IllegalStateException("Cannot upload empty file");

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentType("image/jpeg");
        objectMetadata.setContentDisposition("inline; filename="+ image.getOriginalFilename());

        String path = String.format("%s/%s", BucketName.S3_IMAGE.getBucketName(), "Peliculas");
        String fileName = String.format("%s", image.getOriginalFilename());

        try {
            fileStore.upload(path, fileName, objectMetadata, image.getInputStream());
        } catch (IOException e) {
            throw new IllegalStateException("Failed to upload file", e);
        }

        return "https://ecran.s3.amazonaws.com/Peliculas/" + image.getOriginalFilename();
    }

    public List<AllMoviesDTO> findAll() {
        return repository.findAll().stream().map(m -> mapper.map(m, AllMoviesDTO.class)).toList();
    }

    public List<MovieResponseDTO> findAllByTitle(String title){
        return repository.findAllByTitle(title).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    }

    public MovieResponseDTO findById(String id) {
        Movie movie = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movie id " + id + " doesn't exists."));
        MovieResponseDTO responseDTO = mapper.map(movie, MovieResponseDTO.class);
        responseDTO.setComments(usersFeign.getCommentsByMovieId(id));
        return responseDTO;
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
        List<GenreDB> parsedGenres = genres.stream().map(GenreDB::new).toList();
        List<PlatformDB> parsedPlatforms = platforms.stream().map(PlatformDB::new).toList();

        Sort.Direction sortDirection = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sort = Sort.by(sortDirection, "title");

        if (parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            return repository.findByDateRange(min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
        }

        if (!parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            return repository.findByGenresInDateRange(parsedGenres, min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
        }

        if (parsedGenres.isEmpty() && !parsedPlatforms.isEmpty()) {
            return repository.findByPlatformInDateRange(parsedPlatforms, min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
        }

        return repository.findByGenresAndPlatformsInDateRange(parsedGenres, parsedPlatforms, min_date, max_date, sort).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    };

    public List<MovieResponseDTO> findWatchlist(List<String> ids) {
        List<WatchlistDB> ObjectIDList = new ArrayList<>();

        if (ids.isEmpty()) {
            throw new ServiceException("Ids must not be empty");
        }

        try {
            ids.forEach( i -> {
                ObjectIDList.add(new WatchlistDB(new ObjectId(i)));
            });
        } catch (Exception e) {
            throw new ServiceException(e.getMessage());
        }

        return repository.findWatchlist(ObjectIDList).stream().map(m -> mapper.map(m, MovieResponseDTO.class)).toList();
    }

    public String addValoration(String movieId, UserValorationDTO uvDTO) {
        Movie movie = repository.findById(movieId).orElseThrow(() -> new ResourceNotFoundException("Movie id " + movieId + " not found"));

        Double newScore = uvDTO.getValorationsSum() / uvDTO.getValorationsCount();
        movie.setScore(newScore);

        try{
            repository.save(movie);
        } catch (Exception e) {
            throw new ServiceException("There was a problem in the database updating the valoration. " + e.getMessage());
        }

        return "Score added successfully";
    }

}
