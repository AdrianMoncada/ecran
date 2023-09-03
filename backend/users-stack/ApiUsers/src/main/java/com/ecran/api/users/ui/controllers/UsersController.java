package com.ecran.api.users.ui.controllers;

 import com.ecran.api.users.service.UsersService;
 import com.ecran.api.users.shared.UserDto;
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

//	TO DO: Modificar nombre de metodo a ResponseEntity<List<Movie>> getMoviesDetailsByUserId
	@GetMapping(value = "/{userId}", produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<UserResponseModel> getUser(@PathVariable("userId") String userId){
		UserDto userDto= usersService.getWatchlistByUserId(userId);
//		TO DO: Almacenar en variable lista de peliculas y devolverlas
//		List<Movie> moviesDetails = usersService.getWatchlistByUserId(userId);
		UserResponseModel returnValue = new ModelMapper().map(userDto, UserResponseModel.class);
		return ResponseEntity.status(HttpStatus.OK).body(returnValue);
	}
}
