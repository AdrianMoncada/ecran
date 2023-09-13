package com.ecran.api.users.ui.model;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserCommentResponseDTO {
    private String comment;
    private String date;
    private String username;
}
