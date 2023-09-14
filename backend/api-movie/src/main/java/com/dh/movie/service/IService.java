package com.dh.movie.service;

import java.util.List;

public interface IService<T, I> {
    T save(I req);
    List<T> findAll();
    T findById(String id);
    T updateById(String id, I req);
    void deleteById(String id);
}
