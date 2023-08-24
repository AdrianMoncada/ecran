export default async function handler(req, res) {
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const movieId = req.query.id;

	if (!movieId) {
		return res.status(400).json({ error: "Missing movie ID" });
	}

	try {
		const response = await fetch("http://52.87.235.254:8080/api/v1/movies");
		const data = await response.json();
		const movie = data.find((movie) => movie.id === movieId);
		return movie;
	} catch (error) {
		console.error("Error fetching movies data:", error);
		throw error;
	}
}

// Ejemplo de archivo pages/api/card/[id].js
