package com.dh.movie.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serial;
import java.util.function.Function;

@Data
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "Platforms")
public class Platform {

    @Serial
    private static final int serialVersionUID = 1;

    @Id
    private String platformId;
    private String name;
    private String logo_url;

    public Platform(String name) {
        this.name = name;
    }

    public Platform(String name, String logo_url) {
        this.name = name;
        this.logo_url = logo_url;
    }
}
