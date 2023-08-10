import React from "react";
import { Container, CardHeader } from "./Card.styles";
/* import Image from "next/image"; */
import { BsCircleFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({ movie }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/movies/${movie.id}`);
	};

	function cortarTexto(texto, limite) {
		if (texto.length <= limite) {
			return texto;
		} else {
			const palabras = texto.split(" ");
			let resultado = "";
			let contador = 0;
			for (const palabra of palabras) {
				if (contador + palabra.length + resultado.length + 3 <= limite) {
					// 3 es la longitud de "..."
					resultado += palabra + " ";
					contador += palabra.length + 1; // +1 para el espacio
				} else {
					break;
				}
			}
			return resultado.trim() + "...";
		}
	}

	const texto = movie?.review;
	const limite = 100;
	const textoCortado = cortarTexto(texto, limite);

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
				<p onClick={handleClick} className="button">
					Ver más
				</p>
			</Container>
		</div>
	);
};

export default Card;
