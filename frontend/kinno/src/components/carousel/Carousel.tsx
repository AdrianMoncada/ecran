import Card from "@/components/card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import movies from "@/assets/carousel.json";
import { Container } from "./Carousel.styles";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const Carousel = () => {
	return (
		<Container>
			<Swiper simulateTouch={false} modules={[Navigation]} spaceBetween={20} slidesPerView={4} navigation>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<Card movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

export default Carousel;
