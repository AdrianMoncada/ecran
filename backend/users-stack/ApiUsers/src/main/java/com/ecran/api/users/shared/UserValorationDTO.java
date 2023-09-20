package com.ecran.api.users.shared;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserValorationDTO {
    private Double scoreSum;
    private Double scoreCount;
}
