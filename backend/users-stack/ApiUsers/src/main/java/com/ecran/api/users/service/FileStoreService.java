package com.ecran.api.users.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
@AllArgsConstructor
public class FileStoreService {
    private final AmazonS3 amazonS3;
    private static int fileNum;

    public String upload(MultipartFile image) {

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType("image/jpeg");
        metadata.setContentDisposition("inline; filename="+ image.getOriginalFilename());

        String path = "ecran" + "/" + "Usuarios";
        String fileName = "usrprflpc" + fileNum++;

        try {
            InputStream iStream = image.getInputStream();
            amazonS3.putObject(path, fileName, iStream, metadata);
            amazonS3.setObjectAcl(path, fileName, CannedAccessControlList.PublicRead);
        } catch (AmazonServiceException | IOException e) {
            throw new IllegalStateException(e.getMessage());
        }

        return "https://ecran.s3.amazonaws.com/Usuarios/" + fileName;
    }

}
