package com.ecran.api.users.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface WatchlistRepository extends CrudRepository<UsersMovieWatchlist, Long> {
}
