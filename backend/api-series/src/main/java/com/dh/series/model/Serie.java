package com.dh.series.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
@Document(collection = "Series")
public class Serie implements Serializable {

    @Id
    private String id;
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


    @Override
    public String toString() {
        return "Serie {" +
                "\n id='" + id +'\'' +  ','+
                "\n title='" + title + '\'' + ','+
                "\n actors='" + actors + '\'' + ','+
                "\n seasons='" + seasons + '\'' + ','+
                "\n review='" + review + '\'' + ','+
                "\n chapters='" + chapters + '\'' + ','+
                "\n image_url='" + image_url + '\'' + ','+
                "\n trailer_url='" + trailer_url + '\'' + ','+
                "\n rt_score='" + rt_score + '\'' + ','+
                "\n mc_score='" + mc_score + '\'' + ','+
                "\n imdb_score='" + imdb_score + '\'' + ','+
                "\n release_date=" + release_date + ','+
                "\n end_date=" + end_date +
                "\n}";
    }
}
