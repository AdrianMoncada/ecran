import styled from "styled-components";
import Modal from "react-modal";

export const Purple = styled.div`
	height: 40vh;
	background-image: url("/images/home/Bg.svg");
	background-size: cover;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 0% 0% 50px 50px;
	margin: 0 20px;

	@media screen and (max-width: 768px) {
		height: 53vh;
	}
`;

export const Contenedor = styled.section`
	position: relative;
	bottom: 6rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: fit-content;
`;

export const ContainerInfoMovie = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 80px;
	margin-bottom: 50px;
	width: 70%;

	.genero {
		font-family: InterBold;
		font-size: 27px;
		font-weight: 24;
		letter-spacing: -0.25px;
		color: #e2e8f0;
	}

	.anio {
		font-family: Inter;
		font-size: 20px;
		letter-spacing: -0.25px;
		color: #e2e8f0;
		margin-bottom: 10px;
	}
	.titulo {
		font-family: InterBold;
		font-size: 55px;
		letter-spacing: -0.5px;
		color: #e2e8f0;
		margin-bottom: 3rem;
	}

	.cast {
		display: flex;
		align-items: baseline;
		font-family: Inter;
		font-size: 20px;
		letter-spacing: -0.5px;
		color: #e2c7fe;
		margin-bottom: 40px;
	}
	.castD {
		margin-left: 20px;
		text-align: left;
		font-family: Inter;
		font-size: 18px;
		letter-spacing: -0.5px;
		color: #e2e8f0;
	}

	@media screen and (max-width: 1200px) {
		width: 80%;
	}

	@media screen and (max-width: 1024px) {
		.titulo {
			font-size: 40px;
			padding-top: 1.5rem;
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;

		.titulo {
			font-size: 40px;
			padding-top: 1.5rem;
			text-align: center;
		}

		.cast {
			font-size: 16px;
		}
		.castD {
			font-size: 16px;
		}
	}
`;
export const Info = styled.div`
	margin-top: -80px;
	width: 60%;
	height: fit-content;

	.platforms {
		flex-direction: column;
		display: flex;
		font-family: Inter;
		font-size: 20px;
		font-weight: 800;
		letter-spacing: -0.5px;
		color: #e2c7fe;
		margin-bottom: 40px;
	}

	.imagenPlatform {
		display: flex;
		margin-left: 20%;
	}

	.logo {
		height: 120px;
	}

	@media screen and (max-width: 768px) {
		width: 80%;
	}

	@media screen and (max-width: 640px) {
		width: 90%;
	}
`;

export const As = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 40%;
	margin-left: 3rem;

	.container {
		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 640px) {
		margin-left: 0rem;
	}
`;

export const PosterContainer = styled.div`
	border-radius: 10px;
	height: 450px;
	width: 320px;
	margin-bottom: 6rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 1024px) {
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
	}
`;
export const Poster = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
	cursor: pointer;

	@media screen and (max-width: 1024px) {
		height: 85%;
		width: 85%;
	}
`;
export const RatesContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10px;
`;
export const LogoRates = styled.img`
	height: 100px;
	width: 100px;
`;
export const DescriptioContainer = styled.div`
	width: 100%;

	.day_p {
		color: #94a3b8;
		text-align: justify;
		font-size: 15px;
		font-weight: 400;
		line-height: 30px;
		letter-spacing: -0.25px;
		width: 80%;
		height: fit-content;
		margin: auto;
	}

	@media screen and (max-width: 1024px) {
		height: 85%;
		width: 85%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.day_p {
			width: 90%;
		}
	}
`;
export const Puntuaciones = styled.div`
	font-size: 80px;
	height: 150px;
	width: 300px;
	float: right;
	margin-top: 1rem;
	margin-right: 14rem;
	margin-left: 1em;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 0.4fr);
	grid-column-gap: 25px;
	grid-row-gap: 5px;
	align-items: center;
	justify-items: center;
	align-items: start;

	.div1 {
		grid-area: 1 / 1 / 2 / 4;
	}
	.div2 {
		grid-area: 2 / 1 / 3 / 4;
	}
	.div3 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div4 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div5 {
		grid-area: 1 / 3 / 2 / 4;
	}
	.div6 {
		grid-area: 2 / 1 / 3 / 2;
	}
	.div7 {
		grid-area: 2 / 2 / 3 / 3;
	}
	.div8 {
		grid-area: 2 / 3 / 3 / 4;
	}
	.div9 {
		grid-area: 1 / 4 / 5 / 5;
	}
	.div10 {
		grid-area: 2 / 4 / 5 / 5;
	}

	.numerosPorcentaje {
		color: #e2c7fe;
		font-family: Inter;
		font-size: 26px;
		font-style: normal;
		font-weight: 700;
		line-height: 80px;
		letter-spacing: -0.5px;
	}

	.container {
		display: flex;
		justify-content: space-between;
	}

	@media screen and (max-width: 1024px) {
		float: none;
		margin-left: 0;
		margin-right: 0rem;
	}

	@media screen and (max-width: 768px) {
		.card {
			width: 100%;
		}

		.oldies_title {
			font-family: InterBold;
			font-size: 10vw;
			font-weight: 700;
			letter-spacing: -0.25px;
			background: linear-gradient(90deg, #a855f7 0%, #e9d5ff 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-top: 2rem;
		}
	}
`;

export const Sugestions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	margin-top: 4rem;

	.oldies_title {
		font-family: InterBold;
		font-size: 5vw;
		font-weight: 700;
		letter-spacing: -0.25px;
		background: linear-gradient(90deg, #a855f7 0%, #e9d5ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-top: 2rem;
	}

	.suggestions_cards {
		width: 96%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
	}

	.card {
		width: 30%;
	}

	@media screen and (max-width: 768px) {
		.card {
			width: 100%;
		}

		.oldies_title {
			font-family: InterBold;
			font-size: 10vw;
			font-weight: 700;
			letter-spacing: -0.25px;
			background: linear-gradient(90deg, #a855f7 0%, #e9d5ff 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin-top: 2rem;
		}
	}
`;

//styles for the new elements to trailer

export const VideoModal = styled(Modal)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	max-width: 800px;
	background-color: rgba(32, 32, 32, 0.75);
	padding: 20px;
	border-radius: 8px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: transparent;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 18px;
`;
