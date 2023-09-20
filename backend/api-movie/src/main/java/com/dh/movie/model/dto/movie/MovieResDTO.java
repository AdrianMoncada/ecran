package com.dh.movie.model.dto.movie;

import com.dh.movie.model.Platform;
import com.dh.movie.model.UsersComment;
import com.fasterxml.jackson.annotation.JsonProperty;
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
public class MovieResDTO implements Serializable {

    private String movieId;
    private String title;
    private String actors;
    private String director;
    private String composer;
    private String review;
    private String image_url;
    private String trailer_url;
    @JsonProperty("release_date")
    private String releaseDate;
    private String rt_score;
    private String imdb_score;
    private String mc_score;
    private List<String> genres = new ArrayList<>();
    private List<Platform> platforms = new ArrayList<>();
    private List<UsersComment> comments = new ArrayList<>();
    private Double score;
}
