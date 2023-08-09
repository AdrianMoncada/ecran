import React from "react";
import { Container, CardHeader } from "./Card.styles";
/* import Image from "next/image"; */
import { BsCircleFill } from "react-icons/bs";

export type Movie = {
	id: string;
	title: string;
	year: string;
	genero: string;
	imagen: string;
	descripcion: string;
	top: string | undefined | null;
};

interface Prop {
	movie: Movie;
}

const Card: React.FC<Prop> = ({ movie }) => {
	const textoOriginal = movie.descripcion;
	const limiteCaracteres = 70;
	const textoCortado =
		textoOriginal.slice(0, limiteCaracteres) + (textoOriginal.length > limiteCaracteres ? "..." : "");

	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "430px" }}>
			<Container imageUrl={movie.imagen}>
				<span className="card_top">{movie.top}</span>
				<CardHeader>
					<BsCircleFill size={60} color="grey" />
					<div>
						<p>{movie.genero}</p>
						<p>{movie.year}</p>
					</div>
				</CardHeader>
				<h1 className="title">{movie.title}</h1>
				<p className="description">{textoCortado}</p>
				<a className="button">Ver más</a>
			</Container>
		</div>
	);
};

export default Card;
