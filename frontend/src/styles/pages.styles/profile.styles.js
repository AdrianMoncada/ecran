import styled from "styled-components";

export const HeaderContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40vh;
	min-height: 300px;
	margin: 0 auto;
	width: 100%;
	flex-shrink: 0;
	border-radius: 0px 0px 48px 48px;
	background: radial-gradient(122.17% 122.17% at 50% 100%, #e9d5ff 0%, #a855f7 22.35%, rgba(15, 23, 42, 0) 100%);
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;
	width: 70vw;
	align-items: center;
	justify-content: flex-start;

	@media (max-width: 900px) {
		gap: 30px;
	}
`;

export const AvatarContainer = styled.div`
	position: relative;
	div {
		width: 140px;
		height: 132px;
		background-color: rgba(217, 217, 217, 0.3);
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		@media (max-width: 900px) {
			width: 130px;
			height: 120px;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		@media (max-width: 661px) {
			width: 110px;
			height: 100px;
		}
	}
	h2 {
		font-size: 4em;
		font-style: normal;
		font-weight: bold;
		letter-spacing: -0.5px;
		color: linear-gradient(309deg, rgba(248, 250, 252, 0.64) 0%, #f8fafc 47.78%, rgba(248, 250, 252, 0.64) 100%);
		@media (max-width: 900px) {
			font-size: 3em;
		}
		@media (max-width: 661px) {
			font-size: 2em;
		}
	}

	img {
		border-radius: 50%;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const EditButton = styled.button`
	background-color: #e1c4fe;
	border-radius: 50%;
	border: none;
	color: #ffff;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 30%;
	padding: 8px;
	margin-top: 10px;
	position: absolute;
	top: 60%;
	left: 70%;
	cursor: pointer;
	&:hover {
		color: #7400ff;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: flex-start;
	padding: 20px 0;
	@media (max-width: 900px) {
		gap: 0px;
		/* align-items: center; */
	}

	h2 {
		text-align: center;
		font-family: Inter;
		font-size: 4em;
		font-style: normal;
		font-weight: 800;
		line-height: 56px; /* 86.154% */
		letter-spacing: -0.5px;
		@media (max-width: 900px) {
			text-align: start;
			font-size: 3em;
			line-height: 35px; /* 86.154% */
			letter-spacing: -0.2px;
		}
		@media (max-width: 661px) {
			font-size: 2em;
		}
	}

	p {
		color: rgba(226, 232, 240, 0.8);
		font-family: Inter;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: 53px; /* 212% */
		letter-spacing: -0.5px;
		@media (max-width: 900px) {
			font-size: 18px;
			text-align: center;
		}
	}
`;

export const SectionForm = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 40px;

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ContainerFrom = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media (max-width: 500px) {
			width: 80%;
		}
	}

	.link {
		text-decoration: none;
		color: #7400ff;
	}
	.text {
		color: #94a3b8;
	}

	.separator {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.message-error {
	}

	.message-error {
		display: none;
	}

	.message-error.visible {
		display: block;
		color: red;
		color: #9a52f2;
		font-size: 12px;
		margin: -10px 0 10px 0;
	}

	.input {
		background-color: #1e293b;
		border: 0px solid transparent;
		border-radius: 5px;
		color: white;
		font-size: 13px;
		width: 100%;
		padding: 5px;
		margin-top: 5px;
		margin-bottom: 15px;
		position: relative;
		padding-right: 40px;
	}

	.input-error {
		border: 1px solid #ff0707;
	}

	.password-toggle {
		/* Estilos para el botón de contraseña */
		position: absolute;
		top: 50%; /* Alineación vertical en el centro */
		right: 10px; /* Distancia desde el borde derecho del campo de entrada */
		transform: translate (-50% -50%); /* Alineación vertical y horizontal en el centro */
		background: none;
		border: none;
		cursor: pointer;
	}
`;

export const Button = styled.button`
	background-color: #7400ff;
	width: 80%;
	height: 45px;
	border-radius: 15px;
	border: 0px solid transparent;
	color: white;
	font-weight: bold;
`;

export const ContainerImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media (max-width: 768px) {
		img {
			display: none;
		}
	}
`;
