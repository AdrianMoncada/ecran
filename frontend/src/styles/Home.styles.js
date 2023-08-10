import styled from "styled-components";

export const MainHome = styled.div`
	height: 83vh;
	background-image: url("/images/home/Bg.svg");
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 0% 0% 50px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 50px;
	margin: 0 20px;

	.title {
		font-family: InterBold;
		text-align: center;
		font-size: 4vw;
		width: 16em;
		font-weight: 800;
		line-height: 55px;
	}

	.buscador {
		width: 34em;
		height: 3em;
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
		font-size: 1.3vw;
		font-weight: 400;
		width: 45em;
	}

	@media screen and (max-width: 768px) {
		.title {
			font-size: 7vw;
			width: 12em;
		}

		.mainHome_p {
			font-size: 3vw;
			width: 25em;
		}
	}
`;

export const SuggestionsStyle = styled.div`
	height: 94vh;
	margin: 0px auto;
	background-image: url("/images/home/Section.svg");
	border-radius: 50px 50px 0% 0%;
	margin: 0 20px;
	background-repeat: no-repeat;
	background-position: center;
	padding-top: 7em;

	.suggestion_title {
		text-align: center;
		font-size: 3.2vw;
		font-weight: 800;
	}

	.suggestion_p {
		margin: 2.5rem auto;
		text-align: center;
		width: 42em;
		color: #94a3b8;
		font-size: 1.3vw;
	}

	@media screen and (max-width: 768px) {
		.suggestion_title {
			text-align: center;
			font-size: 7vw;
		}

		.suggestion_p {
			margin: 2em auto;
			font-size: 3vw;
			width: 25em;
		}
	}
`;

export const SuggestionCarousel = styled.div`
	margin: 0 -20px;
`;

export const Day = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.day_title {
		margin-top: 4em;
		text-align: center;
		font-size: 3.6vw;
		font-weight: 800;
		// line-height: 44px; sirver para la altura de las letras
	}

	.day_p {
		color: #94a3b8;
		text-align: center;
		font-size: 1.3vw;
		font-weight: 400;
		width: 42em;
		margin: 1.5em auto;
	}

	@media screen and (max-width: 768px) {
		.day_title {
			margin-top: 6.5em;
			font-size: 8vw;
		}

		.day_p {
			margin: 2em;
			font-size: 2.5vw;
			width: 35em;
		}
	}
`;

export const Oldies = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 100px auto;
	width: 100%;

	.oldies_text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 50px;
		width: 46%;
	}

	.oldies_img {
		width: 50%;
	}

	.oldies_img img {
		width: 100%;
	}

	.oldies_title {
		font-family: InterBold;
		font-size: 6vw;
		font-weight: 700;
		background: linear-gradient(90deg, #a855f7 0%, #e9d5ff 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.oldies_h4 {
		font-size: 2.5vw;
		font-weight: 800;
		line-height: 46px;
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
		width: 15em;
	}

	.oldies_p {
		color: #94a3b8;
		font-weight: 400;
		letter-spacing: -0.25px;
		font-size: 1.3vw;
		font-weight: 400;
		width: 26em;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;

		.oldies_text {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		}

		.oldies_title {
			font-size: 9vw;
		}

		.oldies_h4 {
			line-height: 50px;
			font-size: 4.5vw;
			text-align: center;
		}

		.oldies_p {
			color: #94a3b8;
			font-weight: 400;
			letter-spacing: -0.25px;
			font-size: 2.5vw;
			font-weight: 400;
			width: 35em;
			text-align: center;
		}

		.oldies_img {
			width: 96%;
		}

		.oldies_img img {
			width: 100%;
		}
	}
`;

export const Profile = styled.div`
	margin-top: 4em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;

	.profile_img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.profile_img img {
		width: 55%;
	}

	.profile_title {
		text-align: center;
		font-size: 3.4vw;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
	}

	.profile_p {
		color: #94a3b8;
		text-align: center;
		letter-spacing: -0.25px;
		font-size: 1.3vw;
		font-weight: 400;
		width: 43em;
	}

	@media screen and (max-width: 768px) {
		.profile_title {
			font-size: 7vw;
			line-height: 8vw;
		}

		.profile_p {
			font-size: 2.3vw;
			width: 35em;
		}

		.profile_img img {
			width: 95%;
		}
	}
`;

export const Discover = styled.div`
	background-image: url("/images/home/Start.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 80%;
	height: 45vh;
	margin: 8em auto;
	padding: 3em auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	border-radius: 25px;

	.discover_title {
		text-align: center;
		font-weight: 800;
		line-height: 44px;
		letter-spacing: -0.45px;
		font-size: 3.4vw;
	}

	.discover_h4 {
		color: #94a3b8;
		text-align: center;
		line-height: 27px;
		letter-spacing: -0.25px;
		font-size: 1.3vw;
		font-weight: 400;
		width: 40em;
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

	@media screen and (max-width: 768px) {
		width: 95%;
		.discover_title {
			font-size: 5vw;
		}

		.discover_h4 {
			line-height: 1.5em;
			font-size: 1.8vw;
			width: 40em;
		}
	}
`;
