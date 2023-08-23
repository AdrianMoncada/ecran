package com.dh.movie.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serial;
import java.io.Serializable;
import java.util.function.Function;

@Setter
@Getter
@ToString
public class Platform {

    private String name;
    private String logo_url;

    public Platform() {
    }

    public Platform(String name) {
        this.name = name;
    }

    public Platform(String name, String logo_url) {
        this.name = name;
        this.logo_url = logo_url;
    }
}
