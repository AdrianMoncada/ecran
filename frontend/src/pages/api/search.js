export async function fetchMoviesByTitle(query) {
	try {
		const response = await fetch(
			`https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies/search?title=${query}`,
		);
		console.log(response);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching movie data:", error);
		throw error;
	}
}
