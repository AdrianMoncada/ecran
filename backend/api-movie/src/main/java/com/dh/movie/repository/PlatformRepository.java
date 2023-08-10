package com.dh.movie.repository;

import com.dh.movie.model.Platform;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlatformRepository extends MongoRepository<Platform, String> {
}
