import React from "react";
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
} from "@styles/pages.styles/movies.styles";
import { fetchMovies } from "../api/movies";
import Card from "@components/card/Card";
import Image from "next/image";

function MovieDetail({ movies, cardMovies }) {
	return (
		<main>
			<Purple></Purple>
			<Contenedor>
				<ContainerInfoMovie>
					<Info>
						<p className="genero">{movies?.genre}</p>
						<p className="anio">{movies?.releaseDate}</p>
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
							<p className="castD">{movies?.actors}</p>
						</span>
						<span className="platforms">
							Disponible en:
							<div className="imagenPlatform">
								<Image className="logo" src="/images/home/logos/disney.svg" alt="" width={100} height={100} />
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
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
							<Image src="/images/home/Star1.png" alt="" width={40} height={40} />
						</div>
					</As>
				</ContainerInfoMovie>
				<DescriptioContainer>
					<Puntuaciones className="puntuacion">
						<p className="numerosPorcentaje div3">{movies.rt_score}</p>
						<p className="numerosPorcentaje div4">{movies.imdb_score}</p>
						<p className="numerosPorcentaje div5">{movies.mc_score}</p>

						<Image src="/images/Group.svg" alt="imagen1" width={50} height={50} className="div6" />
						<Image src="/images/Metacritic1.png" alt="imagen1" width={50} height={50} className="div7" />
						<Image src="/images/RottenTomatoes.png" alt="imagen1" width={80} height={50} className="div8" />
					</Puntuaciones>
					<p className="day_p">{movies.review}</p>
				</DescriptioContainer>
				<Sugestions>
					<h4 className="oldies_title">Sugerencias</h4>
					{/* <Carousel movies={moviesTop} top={true} /> */}
					<div className="suggestions_cards">
						{cardMovies.slice(0, 3).map((item) => (
							<div className="card" key={item.id}>
								{" "}
								{/* Asegúrate de usar una clave única para cada elemento */}
								<Card movie={item} />
							</div>
						))}
					</div>
				</Sugestions>
			</Contenedor>
		</main>
	);
}

export async function getStaticProps(context) {
	const { id } = context.params;

	try {
		const response = await fetch(`https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies/${id}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch movie with ID ${id}`);
		}

		const movies = await response.json();
		const cardMovies = await fetchMovies(); // Supongo que fetchMovies() obtiene la lista de películas

		return {
			props: {
				movies,
				cardMovies,
			},
		};
	} catch (error) {
		console.error(error);

		return {
			props: {
				error: "An error occurred while fetching the movie.",
			},
		};
	}
}

export async function getStaticPaths() {
	const cardMovies = await fetchMovies();
	const paths = cardMovies.map((movie) => {
		return { params: { id: movie.movieId.toString() } };
	});

	return {
		paths,
		fallback: true,
	};
}

export default MovieDetail;
