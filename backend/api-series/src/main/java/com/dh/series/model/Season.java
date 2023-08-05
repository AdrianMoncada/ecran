package com.dh.series.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Season implements Serializable {

//    @Serial
    private String id;
    private String title;
    private String actors;
    private String seasons;
    private String chapters;
    private String image_url;
    private String trailer_url;
    private String rt_score;
    private String mc_score;
    private String imdb_score;
    private Date release_date;
    private Date end_date;


}
