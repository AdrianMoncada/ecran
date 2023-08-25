import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 400px;
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
	transition: 250ms all;
	user-select: none;

	&:hover {
		transform: scale(1.1);
	}

	&:hover .card_top {
		background: linear-gradient(90deg, rgba(168, 85, 247, 1) 0%, rgba(233, 213, 255, 1) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: 250ms all;
	}

	.card_top {
		position: absolute;
		top: -45px;
		right: 0;
		text-align: center;
		font-size: 140px;
		font-weight: 700;
		letter-spacing: -0.25px;
		background: linear-gradient(90deg, rgba(168, 85, 247, 0.5) 0%, rgba(233, 213, 255, 0.6) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: 250ms all;
	}

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

		&:hover {
			text-decoration: underline;
			color: white;
		}
	}
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	p {
		font-size: 12px;
		text-align: right;
	}
`;
