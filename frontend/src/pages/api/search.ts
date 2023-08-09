import { NextApiRequest, NextApiResponse } from "next";

const movies = [
	{
		id: 1,
		img: "https://www.cantonrep.com/gcdn/authoring/2019/09/23/NREP/ghows-OH-933d4bc0-c971-12a0-e053-0100007f7d27-b70b3574.jpeg?width=660&height=434&fit=crop&format=pjpg&auto=webp",
		title: "The Shawshank Redemption",
	},
	{
		id: 2,
		img: "https://media.gq-magazine.co.uk/photos/6389fc64ae86bf6162acc67c/1:1/w_1080,h_1080,c_limit/The-Godfather-Part-II-HEADER-1.jpg",
		title: "The Godfather",
	},
	{
		id: 3,
		img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
		title: "The Dark Knight",
	},
	{
		id: 4,
		img: "https://www.elindependiente.com/wp-content/uploads/2017/07/pulpfiction.jpg",
		title: "Pulp Fiction",
	},
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id, q } = req.query;

	if (id) {
		const item: any = movies.find((item) => item.id === +id);
		return res.status(200).json(item);
	}

	if (q) {
		const results = movies.filter((product) => {
			const { title } = product;
			return title;
		});
		return res.status(200).json(results);
	}

	res.status(400).json("Bad Request");
}
