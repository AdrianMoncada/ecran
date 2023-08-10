import { useEffect, React, useState } from "react";
import {
	Sugestions,
	PosterContainer,
	LogoRates,
	DescriptioContainer,
	RatesContainer,
	Purple,
	ContainerInfoMovie,
	Poster,
	As,
	Info,
	Contenedor,
	Puntuaciones,
} from "@/pages/movies/movies.styles";

import { useRouter } from "next/router";
import { fetchMovies } from "../api/movies";
import Card from "@components/card/Card";

function MovieDetail({ movies, cardMovies }) {
	const router = useRouter();
	const { id } = router.query;

	return (
		<main>
			<Purple></Purple>
			<Contenedor>
				<ContainerInfoMovie>
					<Info>
						<p className="genero">{movies?.genero}</p>
						<p className="anio">{movies?.year}</p>
						<p className="titulo">{movies?.title}</p>
						<span className="cast">
							Director:
							<p className="castD">{movies?.director}</p>
						</span>
						<span className="cast">
							Musica:
							<p className="castD">{movies?.composer}</p>
						</span>
						<span className="cast">
							Elenco:
							<p className="castD">
								{movies?.actors}
							</p>
						</span>
						<span className="platforms">
							Disponible en:
							<div className="imagenPlatform">
								<img className="logo" src="/images/home/logos/disney.svg" />
							</div>
						</span>
					</Info>
					<As>
						<PosterContainer>
							<Poster src={movies?.image_url} />
						</PosterContainer>
						<RatesContainer>
							<LogoRates src="/images/home/A.png" alt="Profile" />
						</RatesContainer>
						<div className="container">
							<img src="/images/home/Star1.png" alt="" />
							<img src="/images/home/Star1.png" alt="" />
							<img src="/images/home/Star1.png" alt="" />
							<img src="/images/home/Star1.png" alt="" />
							<img src="/images/home/Star6.png" alt="" />
						</div>
					</As>
				</ContainerInfoMovie>
				<DescriptioContainer>
					<Puntuaciones className="puntuacion">
						<div className="container">
							<p className="numerosPorcentaje">{movies.rt_score}</p>
							<p className="numerosPorcentaje">{movies.imdb_score}</p>
							<p className="numerosPorcentaje">{movies.mc_score}</p>
						</div>
						<div className="container">
							<img src="/images/Group.svg" />
							<img src="/images/Metacritic1.png" />
							<img src="/images/RottenTomatoes.png" />
						</div>
					</Puntuaciones>
					<p className="day_p">
						{movies.review}El primer parámetro representa el radio del circulo y es opcional. El valor por
						defectodel centro (x,y) y es también opcional. Si no especificamos la posición, el CSS considera que a
						centro del circulo se encuentra en el centro del elemento. Para especificar el valor del radio o las
						coordenadas del centro podemos utilizar palabras clave ( closest-side o farthest-side ) unidades de longitud
						( px, em etc. . . ) o porcentajes.El primer parámetro representa el radio del circulo y es opcional. El
						valor por defecto es closest-side o sea la distancia hasta el lado más cercano. El segundo parámetroest-side ) unidades de longitud
						( px, em etc. . . ) o porcentajes.El primer parámetro representa el radio del circulo y es opcional. El
						valor por defecto es closest-side o sea la distancia hasta el lado más cercano. El segundest-side ) unidades de longitud
						( px, em etc. . . ) o porcentajes.El primer parámetro representa el radio del circulo y es opcional. El
						valor por defecto es closest-side o sea la distancia hasta el lado más cercano. El segund
					</p>
				</DescriptioContainer>
			</Contenedor>
			<Sugestions>
				<h4 className="oldies_title">Sugerencias</h4>
				{/* <Carousel movies={moviesTop} top={true} /> */}
				<div className="suggestions_cards">
					{
						cardMovies.slice(0, 3).map((item) => (
							<div className="card" key={item.id}> {/* Asegúrate de usar una clave única para cada elemento */}
								<Card movie={item} />
							</div>
						))
					}
				</div>

			</Sugestions>
		</main>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.params;
	console.log(id)
	const response = await fetch(`http://54.234.185.146:8080/api/v1/movies/${id}`);
	const movies = await response.json();
	const cardMovies = await fetchMovies();

	return {
		props: {
			movies,
			cardMovies
		},
	};
}

export default MovieDetail;
