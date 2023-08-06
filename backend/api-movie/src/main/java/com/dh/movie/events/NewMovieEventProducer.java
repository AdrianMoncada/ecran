/*
package com.dh.movie.events;

import com.dh.movie.config.RabbitMQConfig;
import com.dh.movie.model.Movie;
import com.dh.movie.model.dto.MovieRequestDTO;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class NewMovieEventProducer {

    private final RabbitTemplate rabbitTemplate;

    public NewMovieEventProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void execute(Movie movie) {
        MovieRequestDTO movieDTO = new MovieRequestDTO();
        BeanUtils.copyProperties(movie, movieDTO);
        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_NAME, RabbitMQConfig.TOPIC_NEW_MOVIES, movieDTO);
    }

}*/
