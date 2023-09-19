import Card from "@/components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
/* import movies from "@/assets/carousel.json"; */
import { Container } from "./Carousel.styles";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const Carousel = ({ movies, top }) => {
	return (
		<Container top={top}>
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
					1400: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
				navigation
			>
				{top
					? movies
							.sort((a, b) => a.top - b.top)
							.map((movie, index) => (
								<SwiperSlide key={index}>
									<Card movie={movie} top={index + 1} />
								</SwiperSlide>
							))
					: movies?.map((movie, index) => (
							<SwiperSlide key={index}>
								<Card movie={movie} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</Container>
	);
};

export default Carousel;
