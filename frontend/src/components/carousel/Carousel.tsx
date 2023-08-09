import Card, { Movie } from "@/components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
/* import movies from "@/assets/carousel.json"; */
import { Container } from "./Carousel.styles";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

interface Prop {
	movies: any;
	top: boolean;
}

const Carousel: React.FC<Prop> = ({ movies, top }) => {
	return (
		<Container>
			<Swiper
				simulateTouch={false}
				modules={[Navigation]}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
				navigation
			>
				{top
					? movies
							.sort((a: any, b: any) => a.top - b.top)
							.map((movie: Movie) => (
								<SwiperSlide key={parseInt(movie.id)}>
									<Card movie={movie} />
								</SwiperSlide>
							))
					: movies.map((movie: Movie) => (
							<SwiperSlide key={parseInt(movie.id)}>
								<Card movie={movie} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</Container>
	);
};

export default Carousel;
