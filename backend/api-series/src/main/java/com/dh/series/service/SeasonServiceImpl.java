package com.dh.series.service;

import com.dh.series.events.NewSeriesEventProducer;
import com.dh.series.model.Chapter;
import com.dh.series.model.Season;
import com.dh.series.model.Serie;
import com.dh.series.repository.SerieRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SeasonServiceImpl implements SerieService {

    private final SerieRepository serieRepository;
    private final NewSeriesEventProducer seriesEventProducer;

    public SeasonServiceImpl(SerieRepository serieRepository, NewSeriesEventProducer seriesEventProducer) {
        this.serieRepository = serieRepository;
        this.seriesEventProducer = seriesEventProducer;
    }

    @Override
    public Serie save(Serie serie) {
        seriesEventProducer.execute(serie);
        return serieRepository.save(serie);
    }

    @Override
    public List<Serie> getAll() {
        return serieRepository.findAll();
    }

    @Override
    public Serie getById(String id) {
        return serieRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(String id) {
        serieRepository.deleteById(id);
    }

    @Override
    public void update(Serie serie) {
        if (serieRepository.existsById(serie.getSerieId())) {
            serieRepository.save(serie);
        }
    }

    @Override
    public List<Serie> findByGenre(String genre) {
        return serieRepository.findByGenre(genre);
    }

    @Override
    public void addSeason(String serieId, Season season) throws Exception {

        Serie serie = serieRepository.findById(serieId).orElseThrow(() -> new Exception("Serie id " + serieId + " not found"));

        serie.getSeasons().add(season);
        serieRepository.save(serie);
        seriesEventProducer.execute(serie);
    }

    @Override
    public void addChapter(String serieId, String seasonId, Chapter chapter) throws Exception {

        Serie serie = serieRepository.findById(serieId).orElseThrow(() -> new Exception("Serie id " + serieId + " not found"));
        serieRepository.save(serie);
        seriesEventProducer.execute(serie);
    }
}
