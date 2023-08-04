package com.dh.series.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChapterDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Integer chapterId;

    private String name;

    private Integer number;

    private String urlStream;
}
