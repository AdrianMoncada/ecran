package com.dh.movie.model.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserValorationDTO {
    private Double valorationsSum;
    private Double valorationsCount;
}
