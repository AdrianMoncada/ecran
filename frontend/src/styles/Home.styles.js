import styled from "styled-components";

export const MainHome = styled.div`
	background-image: url("/images/home/Bg.svg");
	background-size: cover;
	background-repeat: no-repeat;
	background-size: 96%;
	background-position: center;
	padding: 0 157px 100px 157px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 50px;

	.title {
		margin-top: 140px;
		text-align: center;
		font-size: 56px;
		font-weight: 800;
		line-height: 56px;
		letter-spacing: -0.5px;
	}

	.buscador {
		width: 480px;
		height: 46px;
		flex-shrink: 0;
		border-radius: 50px;
		background: linear-gradient(
			45deg,
			rgba(30, 41, 59, 0.15) 0%,
			rgba(30, 41, 59, 0.48) 51.32%,
			rgba(30, 41, 59, 0.15) 100%
		);
	}

	.mainHome_p {
		color: #cbd5e1;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px; /* 150% */
		letter-spacing: -0.25px;
		width: 768px;
	}
`;

export const SuggestionsStyle = styled.div`
	margin: 10px auto 100px auto;
	background-image: url("/images/home/Section.svg");
	background-size: cover;
	background-repeat: no-repeat;
	background-size: 96%;
	background-position: center;
	padding: 50px 0;

	.suggestion_title {
		margin-top: 50px;
		text-align: center;
		font-size: 44px;
		font-style: normal;
		font-weight: 800;
		letter-spacing: -0.45px;
	}

	.suggestion_p {
		margin: 40px auto 56px auto;
		text-align: center;
		width: 786px;
		color: #94a3b8;
		font-size: 18px;
		font-style: normal;
		letter-spacing: -0.25px;
	}
`;

export const SuggestionCarousel = styled.div`
	margin-bottom: -100px;
`;

export const Day = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.day_title {
		margin-top: 100px;
		text-align: center;
		font-size: 50px;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
	}

	.day_p {
		margin: 33px 0px 62px 0px;
		color: #94a3b8;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		letter-spacing: -0.25px;
		width: 768px;
	}
`;

export const Oldies = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 100px 0;

	.oldies_text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 50px;
	}

	.oldies_title {
		font-family: InterBold;
		font-size: 85px;
		font-weight: 700;
		letter-spacing: -0.25px;
		background: linear-gradient(90deg, #a855f7 0%, #e9d5ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.oldies_h4 {
		font-size: 36px;
		font-weight: 800;
		line-height: 46px;
		letter-spacing: -0.5px;
		background: linear-gradient(
			314deg,
			rgba(248, 250, 252, 0.24) 0%,
			#f8fafc 55.43%,
			rgba(248, 250, 252, 0.87) 63.02%,
			rgba(248, 250, 252, 0.24) 100%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		width: 476px;
	}

	.oldies_p {
		color: #94a3b8;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		letter-spacing: -0.25px;
		width: 476px;
	}
`;

export const Profile = styled.div`
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;

	.profile_title {
		text-align: center;
		font-size: 44px;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
	}

	.profile_p {
		width: 768px;
		color: #94a3b8;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		letter-spacing: -0.25px;
	}
`;

export const Discover = styled.div`
	margin-top: 150px;
	background-image: url("/images/home/Start.svg");
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	padding: 100px 200px;

	.discover_title {
		text-align: center;
		font-size: 44px;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
	}

	.discover_h4 {
		color: #94a3b8;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		letter-spacing: -0.25px;
		width: 768px;
	}

	.discover_buscador {
		width: 392px;
		height: 46px;
		border-radius: 50px;
		background: linear-gradient(
			45deg,
			rgba(30, 41, 59, 0.15) 0%,
			rgba(30, 41, 59, 0.48) 51.32%,
			rgba(30, 41, 59, 0.15) 100%
		);
	}
`;
