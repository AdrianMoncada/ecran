import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => (!props.top ? "97%" : "null")};
	margin: 20px 20px;
	position: relative;

	.swiper-button-next,
	.swiper-button-prev {
		top: 20px;
		width: 100px;
		height: 101%;
		color: #a855f7;
		position: absolute;
		cursor: pointer;
		transition: background 5s ease;
	}
	/* styles/globals.css */
	.swiper-button-next::after {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		top: 0px;
		margin-right: 0px;
		width: 120px;
		height: 100%;
		font-size: 50px;
		position: absolute;
		background: linear-gradient(-90deg, rgba(15, 23, 42, 1) 70%, rgba(0, 0, 0, 0));
	}

	.swiper-button-prev::after {
		display: flex;
		align-items: center;
		top: 0px;
		margin-left: 0px;
		width: 120px;
		height: 100%;
		font-size: 50px;
		position: absolute;
		background: linear-gradient(90deg, rgba(15, 23, 42, 1) 70%, rgba(0, 0, 0, 0));
	}

	/* Cambia el color de las flechas al pasar el cursor sobre ellas */
	.swiper-button-prev:hover {
		background: linear-gradient(90deg, rgba(15, 23, 42, 1) 70%, rgba(0, 0, 0, 0));
	}
	.swiper-button-next:hover {
		background: linear-gradient(-90deg, rgba(15, 23, 42, 1) 70%, rgba(0, 0, 0, 0));
	}

	@media screen and (max-width: 777px) {
		width: ${(props) => (!props.top ? "93%" : "null")};
		margin: 0 20px;
	}

	@media screen and (max-width: 768px) {
		.swiper-button-prev {
			width: 35px;
		}

		.swiper-button-next {
			width: 35px;
		}

		.swiper-button-prev::after {
			background: transparent;
			width: 35px;
		}

		.swiper-button-next::after {
			background: transparent;
			width: 35px;
		}

		.swiper-button-prev:hover {
			background: transparent;
		}
		.swiper-button-next:hover {
			background: transparent;
		}
	}
`;
