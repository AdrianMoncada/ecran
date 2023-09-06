import React, { useState } from "react";
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
import { fetchSeries } from "../api/series";
import CardSerie from "@components/cardSeries/CardSeries";
import Image from "next/image";
import StarRating from "@components/stars/Estrellas";

function SeriesDetail({ series, cardSeries }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleImageClick = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const [rating, setRating] = useState(0);

	const handleStarClick = (newRating) => {
		setRating(newRating);
	};
	return (
		<main>
			<Purple></Purple>
			<Contenedor>
				<ContainerInfoMovie>
					<Info>
						<p className="genero">{series?.genres}</p>
						<p className="anio">{series?.release_date}</p>
						<p className="titulo">{series?.title}</p>
						<span className="cast">
							Temporadas:
							<p className="castD">{series?.seasons}</p>
						</span>
						<span className="cast">
							Capitulos:
							<p className="castD">{series?.chapters}</p>
						</span>
						<span className="cast">
							Elenco:
							<p className="castD">{series?.actors}</p>
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
							<Poster src={series?.image_url} onClick={handleImageClick} />
						</PosterContainer>
						<RatesContainer>
							<LogoRates src="/images/home/A.png" alt="Profile" />
						</RatesContainer>
						<div className="container">
							<StarRating rating={rating} onStarClick={handleStarClick} />
						</div>
					</As>
				</ContainerInfoMovie>
				<DescriptioContainer>
					<Puntuaciones className="puntuacion">
						<p className="numerosPorcentaje div3">{series.rt_score}</p>
						<p className="numerosPorcentaje div4">{series.imdb_score}</p>
						<p className="numerosPorcentaje div5">{series.mc_score}</p>

						<Image src="/images/Group.svg" alt="imagen1" width={50} height={50} className="div6" />
						<Image src="/images/Metacritic1.png" alt="imagen1" width={50} height={50} className="div7" />
						<Image src="/images/RottenTomatoes.png" alt="imagen1" width={80} height={50} className="div8" />
					</Puntuaciones>
					<p className="day_p">{series.review}</p>
				</DescriptioContainer>
				<Sugestions>
					<h4 className="oldies_title">Sugerencias</h4>

					<div className="suggestions_cards">
						{cardSeries.slice(0, 3).map((item) => (
							<div className="card" key={item.id}>
								<CardSerie serie={item} />
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
					<ReactPlayer url={series?.trailer_url} playing controls width="100%" height="100%" />
					<CloseButton onClick={handleCloseModal}>Cerrar</CloseButton>
				</VideoModal>
			</Contenedor>
		</main>
	);
}

export async function getStaticProps(context) {
	const { id } = context.params;

	try {
		const response = await fetch(`https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/series/${id}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch movie with ID ${id}`);
		}

		const series = await response.json();
		const cardSeries = await fetchSeries();

		return {
			props: {
				series,
				cardSeries,
			},
		};
	} catch (error) {
		console.error(error);

		return {
			props: {
				error: "An error occurred while fetching the Serie.",
			},
		};
	}
}

export async function getStaticPaths() {
	const cardSeries = await fetchSeries();
	const paths = cardSeries.map((serie) => {
		return { params: { id: serie.serieId.toString() } };
	});

	return {
		paths,
		fallback: true,
	};
}

export default SeriesDetail;
