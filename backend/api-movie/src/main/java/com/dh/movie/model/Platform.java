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
    private String platform;
    private String logo_url;

    public Platform(String platform) {
        this.platform = platform;
    }
}
