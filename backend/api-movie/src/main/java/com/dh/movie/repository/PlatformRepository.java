package com.dh.movie.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlatformRepository extends MongoRepository<Platform, String> {
}
