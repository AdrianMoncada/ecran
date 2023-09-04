package com.ecran.api.users.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users")
public class UsersMovieWatchlist {

    @Id
    private Long id;

    @Column(name = "movie_id")
    private String movieId;

    public UsersMovieWatchlist(String movieId) {
        this.movieId = movieId;
    }
}
