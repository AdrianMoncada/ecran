package com.ecran.api.users.data.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users_comments")
public class UsersComment {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(name = "movie_id")
    private String movie;
    @Column(columnDefinition="TEXT")
    private String comment;
    private String date;
    private String imageUrl;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity userEntity;
}
