import endPoints from "../api";

export async function fetchMovies() {
	try {
		const response = await fetch(endPoints.movies.movies);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

export async function fetchMoviesDate(minDate, maxDate) {
	try {
		const response = await fetch(endPoints.movies.moviesDate(minDate, maxDate));
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

export async function fetchMovieId(id) {
	try {
		const response = await fetch(endPoints.movies.getMovie(id));
		const movies = await response.json();
		return movies;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

function assignTopToMovies(movieData) {
	const movies = JSON.parse(JSON.stringify(movieData));

	const randomIndices = [];
	while (randomIndices.length < 10) {
		const randomIndex = Math.floor(Math.random() * movies.length);
		if (!randomIndices.includes(randomIndex)) {
			randomIndices.push(randomIndex);
		}
	}

	randomIndices.sort((a, b) => a - b);

	const result = [];
	for (let i = 0; i < randomIndices.length; i++) {
		const movie = movies[randomIndices[i]];
		movie.top = i + 1;
		result.push(movie);
	}

	return result;
}

export default async function fetchMoviesWithTop() {
	try {
		const data = await fetchMovies();

		const moviesWithTop = assignTopToMovies(data);
		return moviesWithTop;
	} catch (error) {
		console.error("Error fetching movies data:", error);
	}
}
