package com.dh.series;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
@EnableDiscoveryClient
public class SeriesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeriesApplication.class, args);
	}

}
