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
	justify-content: row;
	gap: 40px;
	width: 70vw;
	align-items: center;
	justify-content: flex-start;
	@media (max-width: 900px) {
		gap: 30px;
	}
	@media (max-width: 661px) {
		gap: 20px;
		padding-top: 50px;
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

export const TitleListContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding-top: 70px;
	@media (max-width: 900px) {
		flex-direction: column;
		padding: 70px 50px 30px 50px;
	}

	h3 {
		font-family: Inter;
		text-align: start;
		padding-bottom: 20px;
		font-size: 45px;
		font-style: normal;
		font-weight: 800;
		line-height: 44px; /* 97.778% */
		letter-spacing: -0.45px;
		color: linear-gradient(309deg, rgba(248, 250, 252, 0.64) 0%, #f8fafc 47.78%, rgba(248, 250, 252, 0.64) 100%);
		@media (max-width: 900px) {
			text-align: center;
			font-size: 35px;
		}
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

	.buttons {
		display: flex;
		gap: 10px;
	}
`;

export const CardContainer = styled.div`
	margin: 0 auto;
	width: 85%;
	padding: 50px 0;
`;
