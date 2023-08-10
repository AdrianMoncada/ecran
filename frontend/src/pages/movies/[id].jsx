import { useEffect, React, useState } from "react";
import Carousel from "@/components/carousel/Carousel";
import moviesTop from "@/assets/carouselTop.json";
import axios from "axios";

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

// export const getStaticPaths = async () => {
// 	const res = await fetch("http://localhost:3000/api/movies");
// 	const posts = await res.json();
// 	const paths = posts.map(({ id }) => ({
// 		params: { id: `${id}` },
// 	}));

// 	return {
// 		paths,
// 		fallback: "blocking",
// 	};
// };

// export const getStaticProps = async ({ params }) => {
// 	const { id } = params;
// 	const res = await fetch(`http://localhost:3000/api/movies/${id}`);
// 	const posts = await res.json();
// 	return {
// 		props: {
// 			id,
// 			posts,
// 		},
// 		revalidate: 2,
// 	};
// };

function MovieDetail() {
	const [movies, setMovie] = useState([]);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await axios.get(`/api/movies/${id}`);
				setMovie(response.data);
			} catch (error) {
				console.error("Error fetching movie", error);
			}
		};

		fetchMovie();
	}, [id]);

	return (
		<main>
			<Purple></Purple>
			<Contenedor>
				<ContainerInfoMovie>
					<Info>
						<p className="genero">{movies.genero}</p>
						<p className="anio">{movies.year}</p>
						<p className="titulo">{movies.title}</p>
						<span className="cast">
							Director:
							<p className="castD">George Lucas</p>
						</span>
						<span className="cast">
							Musica:
							<p className="castD">Jhon Williams</p>
						</span>
						<span className="cast">
							Elenco:
							<p className="castD">
								Mark Hamill - Harrison Ford -Carrie Fisher<br></br>Peter Mayhew
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
							<Poster src={movies.imagen} />
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
							<p className="numerosPorcentaje">8.6</p>
							<p className="numerosPorcentaje">76</p>
							<p className="numerosPorcentaje">90%</p>
						</div>
						<div className="container">
							<img src="/images/Group.svg" />
							<img src="/images/Metacritic1.png" />
							<img src="/images/RottenTomatoes.png" />
						</div>
					</Puntuaciones>
					<p className="day_p">
						{movies.descripcion}El primer parámetro representa el radio del circulo y es opcional. El valor por
						defectodel centro (x,y) y es también opcional. Si no especificamos la posición, el CSS considera que el
						centro del circulo se encuentra en el centro del elemento. Para especificar el valor del radio o las
						coordenadas del centro podemos utilizar palabras clave ( closest-side o farthest-side ) unidades de longitud
						( px, em etc. . . ) o porcentajes.El primer parámetro representa el radio del circulo y es opcional. El
						valor por defecto es closest-side o sea la distancia hasta el lado más cercano. El segundo parámetro
					</p>
				</DescriptioContainer>
			</Contenedor>
			<Sugestions>
				<h4 className="oldies_title">Sugerencias</h4>
				<Carousel movies={moviesTop} top={true} />
			</Sugestions>
		</main>
	);
}

export default MovieDetail;
