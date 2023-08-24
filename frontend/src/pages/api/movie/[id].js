// pages/api/movies/[id].js

export default async function handler(req, res) {
	const { id } = req.query;

	try {
		const response = await fetch(`https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies/${id}`);
		const movie = await response.json();

		res.status(200).json({ movie });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred while fetching the movie." });
	}
}
