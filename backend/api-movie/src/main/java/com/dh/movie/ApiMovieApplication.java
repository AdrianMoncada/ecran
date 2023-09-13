package com.dh.movie;

import com.dh.movie.model.Movie;
import com.dh.movie.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/*import org.springframework.cloud.openfeign.EnableFeignClients;*/
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;


@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class ApiMovieApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiMovieApplication.class, args);
    }

}
