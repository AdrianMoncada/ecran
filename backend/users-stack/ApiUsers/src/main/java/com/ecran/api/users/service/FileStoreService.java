package com.ecran.api.users.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.io.InputStream;

@Service
@AllArgsConstructor
public class FileStoreService {
    private final AmazonS3 amazonS3;

    public void upload(String path,
                       String fileName,
                       ObjectMetadata metadata,
                       InputStream inputStream) {

        try {
            amazonS3.putObject(path, fileName, inputStream, metadata);
            amazonS3.setObjectAcl(path, fileName, CannedAccessControlList.PublicRead);
        } catch (AmazonServiceException e) {
            throw new IllegalStateException("Failed to upload the file", e);
        }
    }
}
