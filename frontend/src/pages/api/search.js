export async function fetchMoviesByTitle(query) {
	try {
		const response = await fetch(
			`https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies/search?title=${query}`,
		);
		console.log(response);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching movie data:", error);
		throw error;
	}
}

// export async function fetchMoviesByTitle(query) {
// 	try {
// 		const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
// 		console.log(response);
// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.error("Error fetching movie data:", error);
// 		throw error;
// 	}
// }
