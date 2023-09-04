package com.ecran.api.users.ui.controllers;

 import com.ecran.api.users.data.UserEntity;
 import com.ecran.api.users.service.UsersService;
 import com.ecran.api.users.shared.UserDto;
 import com.ecran.api.users.ui.model.MoviesResponseModel;
 import com.ecran.api.users.ui.model.UserResponseModel;
 import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.*;

 import com.ecran.api.users.ui.model.CreateUserRequestModel;
import com.ecran.api.users.ui.model.CreateUserResponseModel;

 import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
	
	@Autowired
	private Environment env;
	
	@Autowired
    UsersService usersService;

	@GetMapping("/status/check")
	public String status()
	{
		return "Working on port " + env.getProperty("local.server.port") +
				", with token = " + env.getProperty("token.secret");
	}
 
	@PostMapping(
			consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE },
			produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE }
			)
	public ResponseEntity<CreateUserResponseModel> createUser(@RequestBody CreateUserRequestModel userDetails)
	{
		ModelMapper modelMapper = new ModelMapper(); 
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		
		UserDto userDto = modelMapper.map(userDetails, UserDto.class);
		
		UserDto createdUser = usersService.createUser(userDto);
		
		CreateUserResponseModel returnValue = modelMapper.map(createdUser, CreateUserResponseModel.class);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(returnValue);
	}


	@GetMapping(value = "/{userId}/watchlist")
	public ResponseEntity<List<MoviesResponseModel>> getWatchlistByUserId(@PathVariable("userId") String userId){
		List<MoviesResponseModel> moviesDetails = usersService.getWatchlistByUserId(userId);
		return ResponseEntity.status(HttpStatus.OK).body(moviesDetails);
	}
	@PostMapping("/{userId}/watchlist")
	public ResponseEntity<List<String>> addToWatchlist(@PathVariable String userId, @RequestBody String movieId) {
		return ResponseEntity.ok().body(usersService.addToWatchlist(userId, movieId));
	}

}
