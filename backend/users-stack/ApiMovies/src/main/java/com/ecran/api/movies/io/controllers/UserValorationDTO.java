package com.ecran.api.movies.io.controllers;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserValorationDTO {
    private Double userValoration;
    private Double valorationsSum;
    private Double valorationsCount;
}
