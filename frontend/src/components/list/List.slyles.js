import styled from "styled-components";

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding-top: 70px;

	h3 {
		font-family: Inter;
		font-size: 45px;
		font-style: normal;
		font-weight: 800;
		line-height: 44px; /* 97.778% */
		letter-spacing: -0.45px;
		color: linear-gradient(309deg, rgba(248, 250, 252, 0.64) 0%, #f8fafc 47.78%, rgba(248, 250, 252, 0.64) 100%);
	}

	p {
		color: #94a3b8;
		text-align: justify;
		font-family: Inter;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 27px; /* 150% */
		letter-spacing: -0.25px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		background-color: #683ca0;
		padding: 10px 20px;
		cursor: pointer;
		border-radius: 10px;
		transition: all 250ms ease;

		:hover {
			background-color: #553482;
		}
	}
`;

export const CardContainer = styled.div`
	margin: 0 auto;
	width: 85%;
	padding: 50px 0;
`;
