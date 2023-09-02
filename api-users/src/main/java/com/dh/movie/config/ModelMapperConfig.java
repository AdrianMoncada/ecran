package com.dh.movie.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.*;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper objectMapper() {
        return new ModelMapper();
    }
}