import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
export const ContainerHead = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.title {
		text-align: center;
		font-family: Inter;
		font-size: 44px;
		font-style: normal;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
		margin-top: -10px;
		margin-bottom: 60px;
	}
`;

export const ContainerFrom = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

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
		height: 40px;
		width: 500px;
		padding: 5px;
		margin-top: 5px;
		margin-bottom: 15px;
	}

	.input-error {
		border: 1px solid #ff0707;
	}
`;

export const Button = styled.button`
	background-color: #7400ff;
	width: 370px;
	height: 45px;
	border-radius: 15px;
	border: 0px solid transparent;
	color: white;
	font-weight: bold;
`;
