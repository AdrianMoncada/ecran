package com.dh.series.model.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SerieDTO implements Serializable {

    private String title;
    private String actors;
    private String review;
    private String seasons;
    private String chapters;
    private String image_url;
    private String trailer_url;
    private String release_date;
    private String end_date;
    private String mc_score;
    private String rt_score;
    private String imdb_score;
    private List<String> genres;
}
