import styled from "styled-components";

export const HeaderContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 43vh;
	margin: 0 auto;
	width: 100%;
	flex-shrink: 0;
	border-radius: 0px 0px 48px 48px;
	background: radial-gradient(122.17% 122.17% at 50% 100%, #e9d5ff 0%, #a855f7 22.35%, rgba(15, 23, 42, 0) 100%);
`;

export const Container = styled.div`
	display: flex;
	justify-content: row;
	gap: 40px;
	width: 70vw;
	justify-content: flex-start;
	@media (max-width: 809px) {
		gap: 30px;
		width: 100%;
		padding: 0 20px;
	}
`;

export const AvatarContainer = styled.div`
	div {
		width: 140px;
		height: 132px;
		background-color: rgba(217, 217, 217, 0.3);
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		@media (max-width: 809px) {
			width: 135px;
			height: 127px;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
	h2 {
		font-size: 50px;
		font-style: normal;
		font-weight: bold;
		letter-spacing: -0.5px;
		color: linear-gradient(309deg, rgba(248, 250, 252, 0.64) 0%, #f8fafc 47.78%, rgba(248, 250, 252, 0.64) 100%);
		@media (max-width: 809px) {
			font-size: 40px;
		}
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: flex-start;
	padding: 15px 0;
	@media (max-width: 809px) {
		gap: 0px;
	}

	h2 {
		text-align: center;
		font-family: Inter;
		font-size: 65px;
		font-style: normal;
		font-weight: 800;
		line-height: 56px; /* 86.154% */
		letter-spacing: -0.5px;
		@media (max-width: 809px) {
			font-size: 50px;
			text-align: start;
		}
	}

	p {
		color: rgba(226, 232, 240, 0.8);
		font-family: Inter;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: 53px; /* 212% */
		letter-spacing: -0.5px;
		@media (max-width: 809px) {
			font-size: 18px;
		}
	}
`;
