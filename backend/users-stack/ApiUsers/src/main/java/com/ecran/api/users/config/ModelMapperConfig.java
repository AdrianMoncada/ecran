
package com.ecran.api.users.config;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.*;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper objectMapper() {
        return new ModelMapper();
    }
}

