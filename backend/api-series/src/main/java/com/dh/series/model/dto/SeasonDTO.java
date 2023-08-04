package com.dh.series.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SeasonDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Integer seasonId;

    private Integer seasonNumber;

    private List<ChapterDTO> chapters = new ArrayList<>();;

}
