package com.dh.movie.service.impl;

import com.dh.movie.controller.feign.UsersFeign;
import com.dh.movie.exceptions.ResourceNotFoundException;
import com.dh.movie.exceptions.ServiceException;
import com.dh.movie.model.dto.UserScoreDTO;
import com.dh.movie.model.dto.movie.AllPageableDTO;
import com.dh.movie.model.dto.movie.MovieReqDTO;
import com.dh.movie.repository.dtos.GenreDB;
import com.dh.movie.model.Movie;
import com.dh.movie.model.dto.movie.MovieResDTO;
import com.dh.movie.repository.MovieRepository;
import com.dh.movie.repository.dtos.PlatformDB;
import com.dh.movie.repository.dtos.WatchlistDB;
import com.dh.movie.service.MovieService;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final MovieRepository repository;
    private final UsersFeign usersFeign;
    private final ModelMapper mapper;
    private final FileStoreServiceImpl fileStore;

    @Override
    public MovieResDTO save(MovieReqDTO movie) {
        Movie movieDB = mapper.map(movie, Movie.class);
        return mapper.map(repository.save(movieDB), MovieResDTO.class);
    }

    @Override
    public List<MovieResDTO> findAll() {
        return repository.findAll().stream().map(m -> mapper.map(m, MovieResDTO.class)).toList();
    }

    @Override
    public MovieResDTO findById(String id) {
        Movie movie = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movie id " + id + " doesn't exists."));
        MovieResDTO responseDTO = mapper.map(movie, MovieResDTO.class);
        responseDTO.setComments(usersFeign.getCommentsByMovieId(id));
        return responseDTO;
    }

    @Override
    public MovieResDTO updateById(String id, MovieReqDTO movie) {
        Movie movieDB = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movie id " + id + " doesn't exists."));
        Movie moviePatch = mapper.map(movie, Movie.class);
        mapper.map(moviePatch, movieDB);
        movieDB.setMovieId(id);
        return mapper.map(repository.save(movieDB), MovieResDTO.class);
    }

    @Override
    public void deleteById(String id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Movie with id " + id + " doesn't exists.");
        }
        repository.deleteById(id);
    }

    @Override
    public AllPageableDTO findAllPageable(Integer page, int elements) {

        if (page < 1) throw new ServiceException("Page cannot be less than 1");

        PageRequest pageable = PageRequest.of(page-1, elements);

        List<MovieResDTO> movies = repository.findAll(pageable).stream().map(m -> mapper.map(m, MovieResDTO.class)).toList();
        AllPageableDTO responseDTO = new AllPageableDTO();

        responseDTO.setSize((int) Math.ceil((double) repository.count() /8));
        responseDTO.setMovies(movies);

        return responseDTO;
    }

    @Override
    public List<MovieResDTO> top10Rating() {
        return repository.findTop10ByOrderByScoreDesc().stream().map(m -> mapper.map(m, MovieResDTO.class)).toList();
    }

    @Override
    public List<MovieResDTO> findAllByTitle(String title){
        return repository.findAllByTitle(title).stream().map(m -> mapper.map(m, MovieResDTO.class)).toList();
    }

    @Override
    public AllPageableDTO findByFilters(List<String> genres, List<String> platforms, String min_date, String max_date, String order, Integer num) {

        if (num < 1) throw new ServiceException("Page cannot be less than 1");

        List<GenreDB> parsedGenres = genres.stream().map(GenreDB::new).toList();
        List<PlatformDB> parsedPlatforms = platforms.stream().map(PlatformDB::new).toList();

        AllPageableDTO pagesDTO = new AllPageableDTO();
        PageRequest page = PageRequest.of(num-1, 8, Sort.by("title").descending());

        if (parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            Page<Movie> moviesList = repository.findByDateRange(min_date, max_date, page);
            pagesDTO.setMovies(moviesList.getContent().stream().map(m -> mapper.map(m, MovieResDTO.class)).toList());
            pagesDTO.setSize(moviesList.getTotalPages() - 1);
            return pagesDTO;
        }
        if (!parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            Page<Movie> moviesList = repository.findByGenresInDateRange(parsedGenres, min_date, max_date, page);
            pagesDTO.setMovies(moviesList.getContent().stream().map(m -> mapper.map(m, MovieResDTO.class)).toList());
            pagesDTO.setSize(moviesList.getTotalPages() - 1);
            return pagesDTO;
        }
        if (parsedGenres.isEmpty()) {
            Page<Movie> moviesList = repository.findByPlatformInDateRange(parsedPlatforms, min_date, max_date, page);
            pagesDTO.setMovies(moviesList.getContent().stream().map(m -> mapper.map(m, MovieResDTO.class)).toList());
            pagesDTO.setSize(moviesList.getTotalPages() - 1);
            return pagesDTO;
        }
        Page<Movie> moviesList = repository.findByGenresAndPlatformsInDateRange(parsedGenres, parsedPlatforms, min_date, max_date, page);
        pagesDTO.setMovies(moviesList.getContent().stream().map(m -> mapper.map(m, MovieResDTO.class)).toList());
        pagesDTO.setSize(moviesList.getTotalPages() - 1);

        return pagesDTO;
    };

    @Override
    public List<MovieResDTO> findWatchlist(List<String> ids) {
        List<WatchlistDB> ObjectIDList = new ArrayList<>();

        if (ids.isEmpty()) throw new ServiceException("Ids must not be empty");

        try {
            for (String i : ids) {
                ObjectIDList.add(new WatchlistDB(new ObjectId(i)));
            }
        } catch (Exception e) {
            throw new ServiceException(e.getMessage());
        }

        return repository.findWatchlist(ObjectIDList).stream().map(m -> mapper.map(m, MovieResDTO.class)).toList();
    }

    @Override
    public String addScore(String movieId, UserScoreDTO uvDTO) {
        Movie movie = repository.findById(movieId).orElseThrow(() -> new ResourceNotFoundException("Movie id " + movieId + " not found"));

        Double newScore = uvDTO.getScoreSum() / uvDTO.getScoreCount();
        movie.setScore(newScore);

        repository.save(movie);

        return "Score added successfully";
    }

    @Override
    public String saveImage(MultipartFile image) {
        if (image.isEmpty()) throw new ServiceException("Cannot upload empty file");
        return fileStore.upload(image);
    }
}
