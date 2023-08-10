package com.dh.msconfigserver;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller("/")
public class BasicController {

    @GetMapping
    public ResponseEntity test(){
        return new ResponseEntity<>("Funciona!", HttpStatus.OK);
    }
}
