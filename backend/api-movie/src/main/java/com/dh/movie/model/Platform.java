package com.dh.movie.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serial;
import java.io.Serializable;
import java.util.function.Function;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Platforms")
public class Platform implements Serializable {

    @Serial
    private static final int serialVersionUID = 1;

    @Id
    private String platformId;
    private String name;
    private String logo_url;

    public Platform(String name) {
        this.name = name;
    }
}
