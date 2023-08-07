import Carousel from "@/components/carousel/Carousel";
import { SuggestionsStyle, SuggestionCarousel } from "@/styles/Home.styles";
import React from "react";

export default function Home() {
	return (
		<main>
			<SuggestionsStyle>
				<h1 className="suggestion_title">Nuestra sugerencia</h1>
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
