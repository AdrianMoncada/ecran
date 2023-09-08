package com.ecran.api.users.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name="users_watchlist")
public class UsersMovieWatchlist {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "movie_id")
    private String movieId;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity userEntity;

    public UsersMovieWatchlist(String movieId) {
        this.movieId = movieId;
    }
}
