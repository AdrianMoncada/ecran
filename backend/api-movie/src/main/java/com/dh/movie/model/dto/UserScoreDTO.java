package com.dh.movie.model.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserScoreDTO {
    private Double scoreSum;
    private Double scoreCount;
}
