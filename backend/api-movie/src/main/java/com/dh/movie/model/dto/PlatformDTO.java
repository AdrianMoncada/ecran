package com.dh.movie.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlatformDTO {

    @Serial
    private static final long serialVersionUID = 1L;
    private String name;
    private String logo_url;
}
