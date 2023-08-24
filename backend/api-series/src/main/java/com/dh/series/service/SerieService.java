package com.dh.series.service;

import com.dh.series.exceptions.ApiException;
import com.dh.series.exceptions.ResourceNotFoundException;
import com.dh.series.model.Genre;
import com.dh.series.model.Platform;
import com.dh.series.model.Serie;
import com.dh.series.model.dto.GenreDB;
import com.dh.series.model.dto.PlatformDB;
import com.dh.series.model.dto.SerieRequestDTO;
import com.dh.series.model.dto.SerieResponseDTO;
import com.dh.series.repository.SerieRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SerieService {
    private final SerieRepository serieRepository;
    private final ModelMapper mapper;


    public Serie save(SerieRequestDTO seriedto) throws ApiException {
        validSerie(seriedto);
        Serie serie = mapper.map(seriedto, Serie.class);
        serie = serieRepository.save(serie);
        return serie;
    }


    public List<Serie> getAll() {
        List<Serie> series = serieRepository.findAll();
        return series;
    }


    public SerieResponseDTO getById(String id) throws ApiException {
        Serie serie = serieRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Serie with id: " + id + " doesn't exist."));
        return mapper.map(serie, SerieResponseDTO.class);
    }


    public String deleteById(String id) throws ApiException {
        if (serieRepository.existsById(id)) {
            throw new RuntimeException("Serie with id " + id + " doesn't exist.");
        }
        serieRepository.deleteById(id);
        return ("DELETED: SERIE WITH ID: " + id + " WAS DELETED");
    }


    public Serie updateById(Serie serie) {
        String id = serie.getSerieId();
        getById(id);
        serie = serieRepository.save(serie);
        return serie;
    }


    public List<SerieResponseDTO> findAllByTitle(String title) {
        return serieRepository.findAllByTitle(title).stream().map(m -> mapper.map(m, SerieResponseDTO.class)).toList();
    }


    public List<SerieResponseDTO> findAllByGenres(String genre) {
        return serieRepository.findAllByGenre(genre).stream().map(m -> mapper.map(m, SerieResponseDTO.class)).toList();
    }

    public List<SerieResponseDTO> findByFilters(List<String> genres, List<String> platforms, String min_date, String max_date, String order) {
        List<GenreDB> parsedGenres = genres.stream().map(GenreDB::new).toList();
        List<PlatformDB> parsedPlatforms = platforms.stream().map(PlatformDB::new).toList();

        Sort.Direction sortDirection = "desc".equalsIgnoreCase(order) ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sort = Sort.by(sortDirection, "title");

        if (parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            System.out.println("Nothing");
            return serieRepository.findByDateRange(min_date, max_date, sort).stream().map(m -> mapper.map(m, SerieResponseDTO.class)).toList();
        }

        if (!parsedGenres.isEmpty() && parsedPlatforms.isEmpty()) {
            System.out.println("No platforms");
            System.out.println(parsedGenres);
            return serieRepository.findByGenresInDateRange(parsedGenres, min_date, max_date, sort).stream().map(m -> mapper.map(m, SerieResponseDTO.class)).toList();
        }

        if (parsedGenres.isEmpty() && !parsedPlatforms.isEmpty()) {
            System.out.println("No genres");
            System.out.println(parsedPlatforms);
            return serieRepository.findByPlatformInDateRange(parsedPlatforms, min_date, max_date, sort).stream().map(m -> mapper.map(m, SerieResponseDTO.class)).toList();
        }

        return serieRepository.findByGenresAndPlatformsInDateRange(parsedGenres, parsedPlatforms, min_date, max_date, sort).stream().map(m -> mapper.map(m, SerieResponseDTO.class)).toList();
    }

    ;


    public void validSerie(SerieRequestDTO serie) throws ApiException {
        Optional<String> titleOptional = Optional.ofNullable(serie.getTitle());
        Optional<String> actorsOptional = Optional.ofNullable(serie.getActors());
        Optional<String> seasonsOptional = Optional.ofNullable(serie.getSeasons());
        Optional<String> chaptersOptional = Optional.ofNullable(serie.getChapters());
        Optional<String> imageUrlOptional = Optional.ofNullable(serie.getImage_url());
        Optional<String> trailerUrlOptional = Optional.ofNullable(serie.getTrailer_url());
        Optional<String> rtScoreOptional = Optional.ofNullable(serie.getRt_score());
        Optional<String> mcScoreOptional = Optional.ofNullable(serie.getMc_score());
        Optional<String> imdbScoreOptional = Optional.ofNullable(serie.getImdb_score());
        Optional<String> releaseDateOptional = Optional.ofNullable(serie.getRelease_date());
        Optional<String> endDateOptional = Optional.ofNullable(serie.getEnd_date());
        Optional<String> reviewOptional = Optional.ofNullable(serie.getReview());
        Optional<List<String>> genresOptional = Optional.ofNullable(serie.getGenres());
        Optional<List<Platform>> platformsOptional = Optional.ofNullable(serie.getPlatforms());
        Optional<List<String>> commentsOptional = Optional.ofNullable(serie.getComments());
        Optional<List<String>> scoresOptional = Optional.ofNullable(serie.getScores());
        List<String> errors = new ArrayList<>();


        if (!titleOptional.isPresent() || serie.getTitle().isEmpty()) {
            errors.add("Missing title attribute");
        }

        if (!actorsOptional.isPresent() || serie.getActors().isEmpty()) {
            errors.add("Missing actors attribute");
        }

        if (!seasonsOptional.isPresent() || serie.getSeasons().isEmpty()) {
            errors.add("Missing seasons attribute");
        }

        if (!chaptersOptional.isPresent() || serie.getChapters().isEmpty()) {
            errors.add("Missing chapters attribute");
        }

        if (!imageUrlOptional.isPresent() || serie.getImage_url().isEmpty()) {
            errors.add("Missing image_url attribute");
        }

        if (!trailerUrlOptional.isPresent() || serie.getTrailer_url().isEmpty()) {
            errors.add("Missing trailer_url attribute");
        }

        if (!rtScoreOptional.isPresent() || serie.getRt_score().isEmpty()) {
            errors.add("Missing rt_score attribute");
        }

        if (!mcScoreOptional.isPresent() || serie.getMc_score().isEmpty()) {
            errors.add("Missing mc_score attribute");
        }

        if (!imdbScoreOptional.isPresent() || serie.getImdb_score().isEmpty()) {
            errors.add("Missing imdb_score attribute");
        }

        if (!releaseDateOptional.isPresent() || serie.getRelease_date().isEmpty()) {
            errors.add("Missing release_date attribute");
        }

        if (!endDateOptional.isPresent() || serie.getEnd_date().isEmpty()) {
            errors.add("Missing end_date attribute");
        }

        if (!reviewOptional.isPresent() || serie.getReview().isEmpty()) {
            errors.add("Missing review attribute");
        }

        if (serie.getGenres().size() == 0) {
            errors.add("Missing genres attribute");
        }

        if (serie.getPlatforms().size() == 0) {
            errors.add("Missing platforms attribute");
        }

        String errorsMessage = errors.toString();
        errorsMessage = errorsMessage.replace("[", "");
        errorsMessage = errorsMessage.replace("]", "");

        if (errors.size() > 0) {
            throw new ApiException(HttpStatus.BAD_REQUEST, errorsMessage);

        }
    }

}
