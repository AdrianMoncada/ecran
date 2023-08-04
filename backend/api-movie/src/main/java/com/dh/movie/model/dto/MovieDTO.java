package com.dh.movie.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MovieDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long movieId;

    private String name;

    private String genre;

    private String urlStream;

}
