import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 15%;
	margin-bottom: 20%;
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

export const ContainerFrom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.link {
		text-decoration: none;
		color: #7400ff;
	}
	.text {
		color: #94a3b8;
	}
`;

export const FirstLabels = styled.div`
	display: flex;
	justify-content: center;
	gap: 15px;
	align-items: center;
	color: #cbd5e1;

	.input {
		background-color: #1e293b;
		border: 0px solid transparent;
		border-radius: 5px;
		color: #64748b;
		font-size: 13px;
		height: 40px;
		width: 180px;
		padding: 5px;
		margin-top: 5px;
		margin-bottom: 15px;
	}
	.separator {
		display: flex;
		flex-direction: column;
	}
`;
export const SecondLabels = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 15px;
	color: #cbd5e1;

	.input {
		background-color: #1e293b;
		border: 0px solid transparent;
		border-radius: 5px;
		color: #64748b;
		font-size: 13px;
		height: 40px;
		margin-top: -5px;
		padding: 5px;
	}
	.date {
		width: 170px;
		background-color: #1e293b;
		border: 0px solid transparent;
		border-radius: 5px;
		color: #64748b;
		font-size: 13px;
		height: 40px;
		margin-top: -5px;
		padding: 5px;
	}
`;

export const Button = styled.button`
	background-color: #7400ff;
	width: 370px;
	height: 45px;
	border-radius: 15px;
	border: 0px solid transparent;
	margin-top: 80px;
	margin-bottom: 20px;
	color: white;
	font-weight: bold;
`;
