import movies from "@/assets/carousel.json";

export default function handler(req, res) {
	res.status(200).json(movies);
}
