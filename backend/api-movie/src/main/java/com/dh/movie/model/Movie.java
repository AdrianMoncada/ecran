package com.dh.movie.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
 
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document(collection = "Movies")
public class Movie implements Serializable {

    @Id
    private String movieId;
    private String title;
    private String actors;
    private String director;
    private String composer;
    private String review;
    private String image_url;
    private String trailer_url;
    private String rt_score;
    private String imdb_score;
    private String mc_score;
    @Field("release_date")
    private String releaseDate;
    private List<String> genres = new ArrayList<>();
    private List<Platform> platforms = new ArrayList<>();
    private List<UsersComment> comments = new ArrayList<>();
    private Double score;
}
