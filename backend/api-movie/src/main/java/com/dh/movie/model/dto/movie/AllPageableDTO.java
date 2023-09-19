package com.dh.movie.model.dto.movie;

import com.dh.movie.model.Movie;
import lombok.*;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AllPageableDTO {
    private List<MovieResDTO> movies;
    private long size;
}
