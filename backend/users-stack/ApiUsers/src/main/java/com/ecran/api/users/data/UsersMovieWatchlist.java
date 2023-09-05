package com.ecran.api.users.data;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users_watchlist")
public class UsersMovieWatchlist {

    @Id
    @GeneratedValue
    private String id;

    @Column(name = "movie_id")
    private String movieId;

    public UsersMovieWatchlist(String movieId) {
        this.movieId = movieId;
    }
}
