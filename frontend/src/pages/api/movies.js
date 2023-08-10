import axios from "axios";

export async function fetchMovies() {
	try {
		const response = await fetch(`http://54.234.185.146:8080/api/v1/movies`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}
