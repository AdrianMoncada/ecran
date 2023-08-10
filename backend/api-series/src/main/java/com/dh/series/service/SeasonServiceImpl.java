package com.dh.series.service;

import com.dh.series.exceptions.ApiException;
import com.dh.series.model.Serie;
import com.dh.series.model.dto.SerieDTO;
import com.dh.series.repository.SerieRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
@AllArgsConstructor
public class SeasonServiceImpl implements SerieService {
    private final SerieRepository serieRepository;
    private final ModelMapper mapper;
    private static final Logger logger = Logger.getLogger("LOG-Series");


    @Override
    public Serie save(SerieDTO seriedto) throws ApiException {
        validSerie(seriedto);
        Serie serie = mapper.map(seriedto, Serie.class);
        serie = serieRepository.save(serie);
        logger.info("SAVED NEW SERIE: " + serie);
        return serie;
    }

    @Override
    public List<Serie> getAll() {
        List<Serie> series = serieRepository.findAll();
        logger.info("FOUND SERIES: " + series.size() + " series found");
        return series;
    }

    @Override
    public Optional<Serie> getById(String id) throws ApiException {
        Optional<Serie> foundSerie = serieRepository.findById(id);
        if (foundSerie.isEmpty()) {
            logger.info("NOT FOUND: SERIE WITH ID: " + id + " NOT FOUND");
            throw new ApiException(HttpStatus.NOT_FOUND, "Serie with id: " + id + " not found");
        }
        logger.info("FOUND SERIE WITH ID: " + id + " " + foundSerie);
        return foundSerie;
    }

    @Override
    public String deleteById(String id) throws ApiException {
        logger.info("DELETING: SERIE WITH ID: " + id);
        Optional<Serie> foundSerie = getById(id);
        serieRepository.deleteById(id);
        foundSerie = serieRepository.findById(id);
        if (foundSerie.isEmpty()) {
            logger.info("DELETED: SERIE WITH ID: " + id + " WAS DELETED");
            return ("DELETED: SERIE WITH ID: " + id + " WAS DELETED");
        } else {
            throw new ApiException(HttpStatus.INTERNAL_SERVER_ERROR, "Serie with id: " + id + " could not be deleted");
        }

    }

    @Override
    public Serie updateById(Serie serie) {
        String id = serie.getId();
        logger.info("UPDATING: SERIE WITH ID: " + id);
        getById(id);
        validSerie(mapper.map(serie, SerieDTO.class));
        serie = serieRepository.save(serie);
        logger.info("UPDATED SERIE: " + serie);
        return serie;
    }

    public void validSerie(SerieDTO serie) throws ApiException {

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


        if (!titleOptional.isPresent() || serie.getTitle().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing title attribute");
        }

        if (!actorsOptional.isPresent() || serie.getActors().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing actors attribute");
        }

        if (!seasonsOptional.isPresent() || serie.getSeasons().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing seasons attribute");
        }

        if (!chaptersOptional.isPresent() || serie.getChapters().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing chapters attribute");
        }

        if (!imageUrlOptional.isPresent() || serie.getImage_url().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing image_url attribute");
        }

        if (!trailerUrlOptional.isPresent() || serie.getTrailer_url().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing trailer_url attribute");
        }

        if (!rtScoreOptional.isPresent() || serie.getRt_score().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing rt_score attribute");
        }

        if (!mcScoreOptional.isPresent() || serie.getMc_score().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing mc_score attribute");
        }

        if (!imdbScoreOptional.isPresent() || serie.getImdb_score().isEmpty()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing imdb_score attribute");
        }

        if (!releaseDateOptional.isPresent()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing release_date attribute");
        }

        if (!endDateOptional.isPresent()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, "Missing end_date attribute");
        }


    }
}
