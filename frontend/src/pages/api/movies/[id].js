export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const movieId = req.query.id;

	if (!movieId) {
		return res.status(400).json({ error: "Missing movie ID" });
	}

	try {
		const response = await fetch("https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies");
		const data = await response.json();
		const movie = data.find((movie) => movie.id === movieId);
		return movie;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

// Ejemplo de archivo pages/api/card/[id].js
