package com.dh.movie.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UsersComment {
    private String comment;
    private String date;
    private String username;
}
