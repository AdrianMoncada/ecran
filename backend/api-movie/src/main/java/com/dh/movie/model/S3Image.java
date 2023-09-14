package com.dh.movie.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class S3Image {
    @Id
    private Long id;
    private String title;
    private String description;
    private String imagePath;
    private String imageFileName;

}