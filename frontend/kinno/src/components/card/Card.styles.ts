import styled from "styled-components";

interface ContainerProps {
	imageUrl: String;
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	height: 432.15px;
	flex-shrink: 0;
	border-radius: 24px;
	border: 1px solid #1e293b;
	background-image: ${(props) =>
		`linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${props.imageUrl})`};
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 20px;

	.title {
		margin: 20px 0 10px;
		color: #e2e8f0;
		font-size: 18px;
		font-weight: 700;
		line-height: 27px; /* 150% */
		letter-spacing: -0.25px;
	}

	.description {
		color: #94a3b8;
		font-size: 14px;
		font-weight: 400;
		line-height: 22px;
	}

	.button {
		margin-top: 20px;
		margin-right: 20px;
		color: #cbd5e1;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		line-height: 22px;
		text-align: right;
	}
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		font-size: 12px;
		text-align: right;
	}
`;
