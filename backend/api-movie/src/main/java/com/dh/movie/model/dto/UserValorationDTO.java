package com.dh.movie.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserValorationDTO {
    private Double userValoration;
    private Double valorationsSum;
    private Double valorationsCount;
}
