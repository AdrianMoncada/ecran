import Carousel from "@/components/carousel/Carousel";
import { MainHome, SuggestionsStyle, SuggestionCarousel, Day, Oldies, Profile, Discover } from "@/styles/Home.styles";
import Image from "next/image";
import React from "react";
import Infinite from "@components/InfiniteCarrousel/Infinite";
import Search from "@components/search/Search";
import fetchMoviesWithTop, { fetchMoviesDate, fetchMoviesGenre } from "@/service/movies/movies.service";
import Head from "next/head";

export default function Home({ response, moviesTop, moviesOld }) {
	return (
		<>
			<Head>
				<title>ÉCRAN | Home</title>
				<meta
					name="description"
					content="Esta es la página en la página principal aquí puedes ver el top del día los generos favoritos por el publico o un carousel de peliculas antiguas"
				/>
			</Head>
			<MainHome>
				<h1 className="title">Reseñas de series y películas al instante</h1>
				<h4 className="mainHome_p">
					Desde éxitos de taquilla hasta joyas ocultas, Écran te ofrece una visión única del mundo del cine y la
					televisión, todo a solo un clic de distancia.
				</h4>
				<Search showAutocomplete={true} />
			</MainHome>
			{/* <InfiniteCarrousel /> */}
			<Infinite />
			<SuggestionsStyle id="sugerencias">
				<h2 className="suggestion_title">Top del día</h2>
				<p className="suggestion_p">
					De clásicos atemporales a gemas contemporáneas, estas recomendaciones te llevarán a un viaje inolvidable en el
					fascinante mundo del entretenimiento
				</p>
				<SuggestionCarousel>
					<Carousel movies={moviesTop} top={true} />
				</SuggestionCarousel>
			</SuggestionsStyle>
			<Day>
				<h2 className="day_title">Género del día</h2>
				<p className="day_p">
					Descubre una sugerencia diferente cada día para explorar nuevos títulos y géneros cinematográficos. ¡Encuentra
					emocionantes series y películas que te sorprenderán!
				</p>
				<Carousel movies={response} top={false} />
			</Day>
			{/** en esta seccion se mostrara el carrousel de series */}
			{/* <Day>
				<h2 className="day_title">se supone que son las series</h2>
				<p className="day_p">
					Sumérgete en nuestro emocionante mundo del entretenimiento cinematografico .En esta sección, te adentrarás en
					reseñas apasionantes de series de suspenso y otros géneros que seguramente captarán tu interés.!
				</p>
				<CarouselSeries series={responseSeries} />
			</Day> */}
			{/** hasta aqui se implementa */}
			<Oldies id="proximamente">
				<h2 className="oldies_title">Clásicos</h2>
				<p className="oldies_p">
					Un viaje en el tiempo a los Clásicos Cinematográficos. Redescubre las joyas atemporales que continúan
					cautivando con su encanto único y narrativas inolvidables.
				</p>
				<Carousel movies={moviesOld} top={false} />
			</Oldies>
			<Profile>
				<h2 className="profile_title">Crea tu perfil personalizado</h2>
				<p className="profile_p">
					Con un perfil personalizado, podrás guardar tus reseñas favoritas y mantener un registro de tus películas y
					series más queridas. Además, disfruta de la libertad de redactar comentarios y compartir tus opiniones con
					nuestra comunidad de amantes del cine y la televisión.
				</p>
				<div className="profile_img">
					<Image src="/images/home/Illustration.png" alt="Profile" width={768} height={400} />
				</div>
			</Profile>
			<Discover>
				<h1 className="discover_title">¿Listo para empezar?</h1>
				<h4 className="discover_h4">
					Descubre críticas apasionantes de tus series y películas favoritas, y encuentra gemas ocultas que te dejarán
					sin aliento.
				</h4>
				{/* <div className="discover_buscador"></div> */}
			</Discover>
		</>
	);
}

export async function getServerSideProps() {
	const response = await fetchMoviesGenre();
	const moviesTop = await fetchMoviesWithTop();
	const moviesOld = await fetchMoviesDate(2000, 2004);
	return {
		props: {
			response,
			moviesTop,
			moviesOld,
		},
	};
}
