package com.ecran.api.users.ui.model;

import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class  UserCommentDTO {
    private String movie;
    private String comment;
    private String imageUrl;
}
