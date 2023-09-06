import CardSerie from "../cardSeries/CardSeries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container } from "./CarouselSeries.styles";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const CarouselSeries = ({ series }) => {
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
					1400: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
				navigation
			>
				{series.map((serie) => (
					<SwiperSlide key={parseInt(series.id)}>
						<CardSerie serie={serie} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

export default CarouselSeries;
