import React from "react";
import { Container, CardHeader } from "./Card.styles";
/* import Image from "next/image"; */
import { BsCircleFill } from "react-icons/bs";

const Card = ({ movie }) => {
	const textoOriginal = movie?.review;
	const limiteCaracteres = 65;
	const textoCortado =
		textoOriginal?.slice(0, limiteCaracteres) + (textoOriginal?.length > limiteCaracteres ? "..." : "");

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "430px" }}>
			<Container imageUrl={movie?.image_url}>
				<span className="card_top">{movie?.top}</span>
				<CardHeader>
					<div>
						<p>{movie?.director}</p>
						<p>{movie?.release_date}</p>
					</div>
				</CardHeader>
				<h1 className="title">{movie?.title}</h1>
				<p className="description">{textoCortado}</p>
				<a className="button">Ver más</a>
			</Container>
		</div>
	);
};

export default Card;
