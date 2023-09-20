import React, { useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
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
	CloseButton,
	VideoModal,
} from "@styles/pages.styles/movies.styles";
import Card from "@components/card/Card";
import Image from "next/image";
import { fetchMovieId, fetchMovies } from "@/service/movies/movies.service";
import AddButton from "@components/addButton/AddButton";
import StarRating from "@components/stars/Estrellas";
import { FaStar } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/router";
import Head from "next/head";
import Comentarios from "@components/comments-clientSide/Comentarios";

const InactiveStarRating = () => {
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		stars.push(<FaStar key={i} style={{ color: "white", marginRight: "8px", fontSize: "28px" }} />);
	}

	return <div style={{ display: "flex" }}>{stars}</div>;
};

function MovieDetail({ movies, cardMovies }) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleImageClick = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const userId = Cookies.get("userId");

	const [rating, setRating] = useState(0);

	const handleStarClick = async (newRating) => {
		const API = process.env.NEXT_PUBLIC_API_URL;
		if (userId) {
			try {
				const endpoint = `${API}/users/${userId}/addrating`;

				const postData = {
					movieId: movies?.movieId,
					rating: newRating,
				};

				const response = await axios.post(endpoint, postData);

				setRating(newRating);

				if (response.data === "Vote added") {
					toast.success("Película agregada a la lista");
				} else {
					toast.success("Su voto ha sido modificado con éxito");
				}
			} catch (error) {
				console.error("Error en la solicitud POST:", error);
			}
		}
	};

	return (
		<main>
			<Head>
				<title>ÉCRAN | Movie</title>
				<meta
					name="description"
					content="Esta es la página en la que puedes ver el detalle de cada pelicula, su descripcion, genero, directo etc. Tambien puedes agregar a la lista, puntuar y ver las puntuaciones."
				/>
			</Head>
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
							Productores:
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
							<Poster src={movies?.image_url} onClick={handleImageClick} alt={movies?.title} />
							<AddButton movie={movies?.movieId} />
							{/* <Poster src={movies?.image_url} onClick={handleImageClick} /> */}
						</PosterContainer>
						<RatesContainer>
							<LogoRates src="/images/home/A.png" alt="Profile" />
						</RatesContainer>
						<div className="container">
							{userId ? (
								<StarRating rating={rating} onStarClick={handleStarClick} />
							) : (
								<div>
									<InactiveStarRating />
									<Link href={`/signIn?prevPage=${router.asPath}`} className="link_text">
										Inicia sesión para calificar
									</Link>
								</div>
							)}
						</div>
					</As>
				</ContainerInfoMovie>
				<DescriptioContainer>
					<Puntuaciones className="puntuacion">
						<p className="numerosPorcentaje div3">{movies.mc_score}</p>
						<p className="numerosPorcentaje div4">{movies.imdb_score}</p>
						<p className="numerosPorcentaje div5">{movies.rt_score}</p>
						{movies.score ? <p className="numerosPorcentaje div9">{movies.score.toFixed(1)}</p> : ""}
						{movies.score ? (
							<Image
								src="/images/EcranLogo.png"
								alt="imagen1"
								width={80}
								height={50}
								style={{ marginTop: "-15px" }}
								className="div10"
							/>
						) : (
							""
						)}
						<Image src="/images/Group.svg" alt="imagen1" width={50} height={50} className="div6" />
						<Image src="/images/Metacritic1.png" alt="imagen1" width={50} height={50} className="div7" />
						<Image src="/images/RottenTomatoes.png" alt="imagen1" width={80} height={50} className="div8" />
					</Puntuaciones>
					<p className="day_p">{movies.review}</p>
				</DescriptioContainer>
				<Comentarios movies={movies} />
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
				<VideoModal
					isOpen={isModalOpen}
					onRequestClose={handleCloseModal}
					overlayClassName="ReactModal__Overlay custom-overlay"
					ariaHideApp={false}
				>
					<ReactPlayer url={movies?.trailer_url} playing controls width="100%" height="100%" />
					<CloseButton onClick={handleCloseModal}>Cerrar</CloseButton>
				</VideoModal>
			</Contenedor>
			<Toaster richColors position="bottom-right" />
		</main>
	);
}

export async function getServerSideProps(context) {
	const { id } = context.params;
	const movies = await fetchMovieId(id);
	const cardMovies = await fetchMovies();

	return {
		props: {
			movies,
			cardMovies,
		},
	};
}

/* export async function getStaticPaths() {
	const cardMovies = await fetchMovies();
	const paths = cardMovies.map((movie) => {
		return { params: { id: movie.movieId.toString() } };
	});

	return {
		paths,
		fallback: true,
	};
} */

export default MovieDetail;
