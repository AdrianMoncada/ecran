import movies from "@/assets/carousel.json";

export default function handler(req, res) {
  if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const movieId = req.query.id;

	if (!movieId) {
		return res.status(400).json({ error: "Missing movie ID" });
	}

	const movie = movies.find((movie) => movie.id === movieId);

	if (!movie) {
		return res.status(404).json({ error: "Movie not found" });
	}

	res.status(200).json(movie);
}
