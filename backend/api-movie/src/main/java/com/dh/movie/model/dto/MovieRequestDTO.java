package com.dh.movie.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieRequestDTO implements Serializable {

    @NotBlank(message = "title cannot be null")
    private String title;
    @NotBlank
    private String actors;
    @NotBlank
    private String director;
    @NotBlank
    private String composer;
    @NotBlank
    private String review;
    @NotBlank
    private String image_url;
    @NotBlank
    private String trailer_url;
    @NotBlank
    private String release_date;
    @NotBlank
    private String genre;
    @NotBlank
    private String rt_score;
    @NotBlank
    private String imdb_score;
    @NotBlank
    private String mc_score;
    @NotBlank
    private List<String> platforms = new ArrayList<>();
    @NotBlank
    private List<String> comments = new ArrayList<>();
    @NotBlank
    private List<String> scores = new ArrayList<>();
}
