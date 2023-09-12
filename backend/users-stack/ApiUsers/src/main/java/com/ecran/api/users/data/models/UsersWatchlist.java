package com.ecran.api.users.data.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users_watchlist")
public class UsersWatchlist {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "movie_id")
    private String movieId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity userEntity;

    public UsersWatchlist(String movieId) {
        this.movieId = movieId;
    }
}
