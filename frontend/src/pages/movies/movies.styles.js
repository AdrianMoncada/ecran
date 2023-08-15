import styled from "styled-components";

export const Purple = styled.div`
	background-image: url("/images/home/Bg.svg");
	background-size: cover;
	background-repeat: no-repeat;
	background-size: 96%;
	background-position: center;
	padding: 0 157px 100px 157px;
	height: 300px;
`;

export const Contenedor = styled.section`
	top: 24%;
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
		margin-bottom: 25px;
	}

	.cast {
		display: flex;
		font-family: Inter;
		font-size: 20px;
		letter-spacing: -0.5px;
		color: #e2c7fe;
		margin-bottom: 40px;
	}
	.castD {
		margin-top: 8px;
		margin-left: 20px;
		text-align: left;
		font-family: Inter;
		font-size: 18px;
		letter-spacing: -0.5px;
		color: #e2e8f0;
	}
`;
export const Info = styled.div`
	width: 60%;

	.platforms {
		flex-direction: column;
		display: flex;
		font-family: Inter;
		font-size: 20px;
		font-weight: 800;
		letter-spacing: -0.5px;
		color: #e2c7fe;
		margin-bottom: 40px;
		margin-top: 120px;
	}

	.imagenPlatform {
		display: flex;
		margin-top: 20px;
		margin-left: 20%;
	}

	.logo {
		height: 120px;
	}
`;

export const As = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 40%;

	.container {
		display: flex;
		justify-content: center;
	}
`;

export const PosterContainer = styled.div`
	border-radius: 10px;
	height: 450px;
	width: 320px;
	margin-bottom: 60px;
`;
export const Poster = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 10px;
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
	margin-left: 80px;
	width: 100%;
	height: 100%;
	padding: 0 90px;
	.day_p {
		color: #94a3b8;
		text-align: justify;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		letter-spacing: -0.25px;
		width: 768px;
	}
`;
export const Puntuaciones = styled.div`
	font-size: 80px;
	height: 200px;
	width: 300px;
	float: right;
	margin-right: 200px;
	margin-left: 60px;

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
`;

export const Sugestions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1200px 90px 70px 90px;

	.oldies_title {
		font-family: InterBold;
		font-size: 65px;
		font-weight: 700;
		letter-spacing: -0.25px;
		background: linear-gradient(90deg, #a855f7 0%, #e9d5ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.suggestions_cards {
		width: 96%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	.card {
		width: 30%;
	}
`;
