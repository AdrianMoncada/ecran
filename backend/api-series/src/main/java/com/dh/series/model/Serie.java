package com.dh.series.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Data
@Document(collection = "Series")
public class Serie implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    private String serieId;

    private String name;

    private String genre;

    private List<Season> seasons = new ArrayList<>();
}
