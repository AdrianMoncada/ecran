package com.dh.movie.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serial;
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

    @Serial
    private static final int serialVersionUID = 1;

    @Id
    private String movieId;
    private String title;
    private String actors;
    private String director;
    private String composer;
    private String review;
    private String image_url;
    private String trailer_url;
    private String release_date;
    private String rt_score;
    private String imdb_score;
    private String mc_score;
    private List<String> genre;
    private List<String> platforms = new ArrayList<>();
    private List<String> comments = new ArrayList<>();
    private List<String> scores = new ArrayList<>();

}
