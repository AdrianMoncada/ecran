package com.dh.series.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Season implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Integer seasonId;

    private Integer seasonNumber;

    private List<Chapter> chapters = new ArrayList<>();

}
