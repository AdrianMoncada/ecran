package com.dh.movie.model.dto.platform;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlatformRequestDTO {

    @NotBlank
    private String name;
    @NotBlank
    private String logo_url;
}
