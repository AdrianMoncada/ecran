package com.dh.movie.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileStoreService {

    String upload(MultipartFile image);

}
