import endPoints from "@/service/api";

export async function fetchMoviesByTitle(query) {
	try {
		const response = await fetch(endPoints.movies.search(query));
		console.log(response);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching movie data:", error);
		throw error;
	}
}
