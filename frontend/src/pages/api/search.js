export async function fetchMoviesByTitle(query) {
	try {
		const response = await fetch(`http://3.95.255.94:8080/api/v1/movies/filter?title=${query}`);
		console.log(response);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movie data:", error);
		throw error;
	}
}
