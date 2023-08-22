package com.ecran.api.users.data;

import com.ecran.api.users.ui.model.MoviesResponseModel;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="movies")
public interface MoviesServiceClient {
    @GetMapping("/users/{id}/movies")
    public List<MoviesResponseModel> getAlbums(@PathVariable String id);
}
