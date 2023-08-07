package com.dh.movie.model.dto.movie;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlatformResponseDTO implements Serializable {

    private String movieId;
    private String title;
    private String actors;
    private String director;
    private String composer;
    private String review;
    private String image_url;
    private String trailer_url;
    private String release_date;
    private String genre;
    private String rt_score;
    private String imdb_score;
    private String mc_score;
    private List<String> platforms = new ArrayList<>();
    private List<String> comments = new ArrayList<>();
    private List<String> scores = new ArrayList<>();
}