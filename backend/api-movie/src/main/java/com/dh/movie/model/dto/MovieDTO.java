package com.dh.movie.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
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
    private List<String> platforms;
    private List<String> comments = new ArrayList<>();
    private List<String> scores = new ArrayList<>();
}
