export async function fetchMovies() {
	try {
		const response = await fetch("https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

export async function fetchMoviesDate(minDate, maxDate) {
	try {
		const response = await fetch(
			`https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies/filter?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

/* export async function fetchMovieId(req) {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		const movie = data.find((movie) => movie.id === req);
		return movie;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
} */

function assignTopToMovies(movieData) {
	// Copiar el arreglo para no modificar el original
	const movies = JSON.parse(JSON.stringify(movieData));

	// Obtener 10 índices únicos aleatorios
	const randomIndices = [];
	while (randomIndices.length < 10) {
		const randomIndex = Math.floor(Math.random() * movies.length);
		if (!randomIndices.includes(randomIndex)) {
			randomIndices.push(randomIndex);
		}
	}

	// Ordenar los índices aleatorios
	randomIndices.sort((a, b) => a - b);

	// Asignar el top a cada película y agregarla al resultado
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
		const response = await fetch("https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies");
		const data = await response.json();

		const moviesWithTop = assignTopToMovies(data);
		return moviesWithTop;
	} catch (error) {
		console.error("Error fetching movies data:", error);
	}
}
