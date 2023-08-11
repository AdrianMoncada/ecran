import axios from "axios";

export async function fetchMovies() {
	try {
		const response = await fetch("http://3.95.255.94:8080/api/v1/movies");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

export async function fetchMovieId(req) {
	try {
		const response = await fetch("http://54.234.185.146:8080/api/v1/movies");
		const data = await response.json();
		const movie = data.find((movie) => movie.id === req);
		console.log(movie);
		return movie;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}
