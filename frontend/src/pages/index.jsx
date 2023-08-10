import Carousel from "@/components/carousel/Carousel";
import { MainHome, SuggestionsStyle, SuggestionCarousel, Day, Oldies, Profile, Discover } from "@/styles/Home.styles";
import Image from "next/image";
import React from "react";
import movies from "@/assets/carousel.json";
import moviesTop from "@/assets/carouselTop.json";
import Infinite from "@components/InfiniteCarrousel/Infinite";
import { fetchMovies } from "./api/movies";

export default function Home({ response }) {
	return (
		<main>
			<MainHome>
				<h1 className="title">Reseñas de series y películas al instante</h1>
				<h4 className="mainHome_p">
					Desde éxitos de taquilla hasta joyas ocultas, Ecran te ofrece una visión única del mundo del cine y la
					televisión, todo a solo un clic de distancia.
				</h4>
				{/* <div className="buscador"></div> */}
			</MainHome>
			{/* <InfiniteCarrousel /> */}
			<Infinite />
			<SuggestionsStyle id="sugerencias">
				<h2 className="suggestion_title">Nuestras sugerencias</h2>
				<p className="suggestion_p">
					De clásicos atemporales a gemas contemporáneas, estas recomendaciones te llevarán a un viaje inolvidable en el
					fascinante mundo del entretenimiento
				</p>
				<SuggestionCarousel>
					<Carousel movies={moviesTop} top={true} />
				</SuggestionCarousel>
			</SuggestionsStyle>
			<Day>
				<h2 className="day_title">Género del dia</h2>
				<p className="day_p">
					Descubre una sugerencia diferente cada día para explorar nuevos títulos y géneros cinematográficos. ¡Encuentra
					emocionantes series y películas que te sorprenderán!
				</p>
				<Carousel movies={response} top={false} />
			</Day>
			<Oldies id="proximamente">
				<div className="oldies_text">
					<h2 className="oldies_title">Próximamente</h2>
					<h4 className="oldies_h4">Filtra series y películas por calificación, género, y más!</h4>
					<p className="oldies_p">
						Pronto podrás filtrar el contenido por género, año de estreno, calificación y mucho más. Mantente atento,
						¡la magia del entretenimiento nunca ha sido tan única y emocionante!
					</p>
				</div>
				<div className="oldies_img">
					<Image src="images/home/Temporal.svg" alt="temporal" width={536} height={500} />
				</div>
			</Oldies>
			<Profile>
				<h2 className="profile_title">Crea tu perfil personalizado</h2>
				<p className="profile_p">
					Con un perfil personalizado, podrás guardar tus reseñas favoritas y mantener un registro de tus películas y
					series más queridas. Además, disfruta de la libertad de redactar comentarios y compartir tus opiniones con
					nuestra comunidad de amantes del cine y la televisión.
				</p>
				<div className="profile_img">
					<Image src="images/home/Profile.svg" alt="Profile" width={768} height={400} />
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
		</main>
	);
}

export async function getStaticProps() {
	const response = await fetchMovies();
	return {
		props: {
			response,
		},
	};
}
