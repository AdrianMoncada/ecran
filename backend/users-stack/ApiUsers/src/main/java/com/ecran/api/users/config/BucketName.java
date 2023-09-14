package com.ecran.api.users.config;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum BucketName {
    S3_IMAGE("ecran");
    private final String bucketName;
}