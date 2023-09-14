import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	max-height: 100vh;
	position: relative;
	overflow: hidden;

	.link {
		text-decoration: none;
		color: #7400ff;
	}
	.text {
		color: white;
	}
`;
export const ContainerHead = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	padding: 0 15px;

	.title {
		text-align: center;
		font-size: 44px;
		font-style: normal;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
		margin-top: -10px;
	}
`;

export const ContainerFrom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	label {
		margin-bottom: 5px;
	}

	.separator {
		display: flex;
		flex-direction: column;
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
		margin: 0px 0 10px 0;
	}

	.input-error {
		border: 1px solid #ff0707;
	}
`;
export const ImageContainer = styled.div`
	margin: 1.5em 1.5em;
	width: 10em;
	position: absolute;
	top: 0;
	left: 70px;
	@media screen and (max-width: 768px) {
		left: 30px;
	}
`;
export const ButtonsContainer = styled.button`
	display: flex;
	flex-direction: row;
	gap: 15px;

	@media screen and (max-width: 390px) {
		flex-direction: column;
		gap: 0;
		align-items: center;
	}
`;
export const Button = styled.button`
	background-color: #7400ff;
	width: 225px;
	height: 36px;
	border-radius: 20px;
	border: 0px solid transparent;
	margin-top: 20px;
	margin-bottom: 15px;
	color: white;

	@media screen and (max-width: 768px) {
		width: 185px;
	}

	@media screen and (max-width: 390px) {
		margin-bottom: 0;
	}
`;
export const SecondaryButton = styled.button`
	background-color: none;
	width: 195px;
	height: 36px;
	border-radius: 20px;
	border: 2px solid #7400ff;
	margin-top: 20px;
	margin-bottom: 15px;
	color: white;
	@media screen and (max-width: 768px) {
		width: 155px;
	}
	@media screen and (max-width: 390px) {
		margin-top: 10px;
	}
`;
export const Dot1 = styled.div`
	z-index: -1;
	position: absolute;
	top: -100px;
	left: 130px;
	overflow: hidden;
`;
export const Dot2 = styled.div`
	z-index: -1;
	position: absolute;
	bottom: 0px;
	right: 10px;
	overflow: hidden;
	opacity: 0.5;
`;
