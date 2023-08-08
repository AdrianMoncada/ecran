package com.dh.series.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;
import java.util.logging.Logger;

@ControllerAdvice
public class ApiExceptionHandler {
    private static final Logger logger = Logger.getLogger("LOG-Exceptions");
    @ExceptionHandler({ ApiException.class })
    protected ResponseEntity<ApiErrorResponse> handleApiException(ApiException ex) {
        logger.info(ex.toString());
        return new ResponseEntity<>(new ApiErrorResponse(ex.getStatus(), ex.getMessage(), Instant.now()), ex.getStatus());
    }
}