package com.dh.movie.model.dto.platform;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.io.Serial;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlatformDTO {

    @Serial
    private static final long serialVersionUID = 1L;
    @NotBlank
    private String name;
    @NotBlank
    private String logo_url;
}
