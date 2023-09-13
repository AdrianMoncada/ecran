package com.ecran.api.users.data.repository;

import com.ecran.api.users.data.models.UsersWatchlist;
import org.springframework.data.repository.CrudRepository;

public interface WatchlistRepository extends CrudRepository<UsersWatchlist, Long> {
}
