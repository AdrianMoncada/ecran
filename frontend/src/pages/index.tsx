import Carousel from "@/components/carousel/Carousel";
// import Search from "@/components/search/Search";
import { FilterBlock } from "@/styles/FilterBlock.styles";
import { SuggestionsStyle, SuggestionCarousel } from "@/styles/Home.styles";
import React from "react";

export default function Home() {
	return (
		<main>
			<FilterBlock>
				<h1 className="suggestion_main_title">Reseñas de series y películas al instante</h1>
				<p className="suggestion_p">
					Desde éxitos de taquilla hasta joyas ocultas, Ecran te ofrece una visión única del mundo del cine y la
					televisión, todo a solo un clic de distancia.
				</p>
				{/* <Search /> */}
			</FilterBlock>

			<SuggestionsStyle>
				<h1 className="suggestion_title">Nuestrasssssssssss sugerencia</h1>
				<p className="suggestion_p">
					De clásicos atemporales a gemas contemporáneas, estas recomendaciones te llevarán a un viaje inolvidable en el
					fascinante mundo del entretenimiento
				</p>
				<SuggestionCarousel>
					<Carousel />
				</SuggestionCarousel>
			</SuggestionsStyle>
		</main>
	);
}
