package com.ecran.api.users.ui.controllers;

import com.ecran.api.users.data.models.UsersComment;
import com.ecran.api.users.data.models.UsersRating;
import com.ecran.api.users.data.models.UsersWatchlist;
import com.ecran.api.users.service.UsersService;
import com.ecran.api.users.shared.ChangePasswordDTO;
import com.ecran.api.users.shared.UserDto;
import com.ecran.api.users.ui.model.*;
import jakarta.ws.rs.QueryParam;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

	@GetMapping(value = "/{userId}")
	public ResponseEntity<UserDto> getUserById(@PathVariable("userId") String userId){
		UserDto userDto = usersService.getUserDetailsById(userId);
		return ResponseEntity.status(HttpStatus.OK).body(userDto);
	}

	@GetMapping(value = "/{userId}/watchlist")
	public ResponseEntity<List<MoviesResponseModel>> getWatchlistByUserId(@PathVariable("userId") String userId){
		List<MoviesResponseModel> moviesDetails = usersService.getWatchlistByUserId(userId);
		return ResponseEntity.status(HttpStatus.OK).body(moviesDetails);
	}
	@PostMapping("/{userId}/watchlist")
	public ResponseEntity<List<UsersWatchlist>> addToWatchlist(@PathVariable String userId, @RequestBody UsersMovieWLDTO movieId) {
		return ResponseEntity.ok().body(usersService.addToWatchlist(userId, movieId));
	}

/*
	@GetMapping("/{userId}/watchlist/csvexport")
	public void exportCSV(HttpServletResponse response, @PathVariable("userId") String userId) throws Exception {
		//set file name and content type
		String filename = "Watchlist-data.csv";

		response.setContentType("text/csv");
		response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
				"attachment; filename=\"" + filename + "\"");
		//create a csv writer
		StatefulBeanToCsv<MoviesResponseModel> writer = new StatefulBeanToCsvBuilder<MoviesResponseModel>(response.getWriter())
				.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).withSeparator(CSVWriter.DEFAULT_SEPARATOR).withOrderedResults(false)
				.build();
		//write all employees data to csv file
		writer.write(usersService.getWatchlistByUserId(userId));
	}
*/

	@PatchMapping("/{userId}/changepassword")
	public String changePassword(@RequestBody ChangePasswordDTO passwordDTO, @PathVariable String userId) {
        return usersService.changePassword(passwordDTO, userId);
	};

	@PostMapping("/{userId}/addrating")
	public ResponseEntity<String> addRating(@RequestBody UsersRating usersRating, @PathVariable String userId){
		return ResponseEntity.ok().body(usersService.addRating(userId, usersRating));
	}

	@PostMapping("/{userId}/comment")
	public ResponseEntity<UsersComment> addComment(@RequestBody UserCommentDTO userComment, @PathVariable String userId){
		return ResponseEntity.ok().body(usersService.addComment(userId, userComment));
	}

	@GetMapping("/comments/{movieId}")
	public List<UserCommentResponseDTO> getCommentsByMovieId(@PathVariable String movieId) {
		return usersService.getCommentsByMovieId(movieId);
	}
}
