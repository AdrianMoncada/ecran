package com.dh.movie;

import com.dh.movie.model.Movie;
import com.dh.movie.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/*import org.springframework.cloud.openfeign.EnableFeignClients;*/
import org.springframework.context.annotation.Bean;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import java.util.ArrayList;


@SpringBootApplication
@EnableDiscoveryClient
/*@EnableFeignClients*/
public class ApiMovieApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiMovieApplication.class, args);
    }


    @Bean
    public CommandLineRunner loadData(MovieRepository repository) {
        return (args) -> {
            if (!repository.findAll().isEmpty()) {
                return;
            }

            repository.save(new Movie(null, "Oppenheimer", "Cilian Murphy", "Christopher Nolan", "Bethoven", "asdasdasd", "asd.com", "youtube.com", "15/02/02", "accion", new ArrayList<String>(),new ArrayList<String>(),new ArrayList<String>()));
        };
    }

}
