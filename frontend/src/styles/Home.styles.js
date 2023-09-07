import styled from "styled-components";

export const MainHome = styled.div`
	height: 73vh;
	background-image: url("/images/home/Bg.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 0% 0% 50px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-size: cover;
	gap: 40px;
	margin: 0 auto;
	flex-shrink: 0;
	border-radius: 0px 0px 48px 48px;
	background: radial-gradient(122.17% 122.17% at 50% 100%, #e9d5ff 0%, #a855f7 22.35%, rgba(15, 23, 42, 0) 100%);
	margin: 0 20px;

	.title {
		font-family: InterBold;
		text-align: center;
		font-size: 4vw;
		width: 80%;
		font-weight: 800;
		line-height: 55px;
	}

	.buscador {
		width: 100%;
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
		width: 80%;
	}

	/*<------------Media Query-------------->*/

	@media screen and (max-width: 768px) {
		height: 60vh;
		/* padding-top: 50px; */
		gap: 30px;

		.title {
			font-size: 5vw;
			width: 12em;
		}

		.mainHome_p {
			font-size: 2vw;
			width: 25em;
		}

		.buscador {
			width: 32em;
			height: 2em;
			flex-shrink: 0;
			border-radius: 50px;
			background: linear-gradient(
				45deg,
				rgba(30, 41, 59, 0.15) 0%,
				rgba(30, 41, 59, 0.48) 51.32%,
				rgba(30, 41, 59, 0.15) 100%
			);
		}
	}
`;

export const SuggestionsStyle = styled.div`
	height: 94vh;
	background-image: url("/images/home/Section.svg");
	border-radius: 50px 50px 0% 0%;
	margin: 0 20px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
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

	/*<------------Media Query-------------->*/
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
	/*<------------Media Query-------------->*/

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
	flex-direction: column;
	margin: 100px auto;
	width: 100%;

	.oldies_title {
		margin-top: 0em;
		text-align: center;
		font-size: 3.6vw;
		font-weight: 800;
	}

	.oldies_p {
		color: #94a3b8;
		text-align: center;
		font-size: 1.3vw;
		font-weight: 400;
		width: 42em;
		margin: 1.5em auto;
	}

	/*<------------Media Query-------------->*/
	@media screen and (max-width: 768px) {
		.oldies_title {
			font-size: 8vw;
		}

		.oldies_p {
			margin: 2em;
			font-size: 2.5vw;
			width: 35em;
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
	/*<------------Media Query-------------->*/

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
	background-image: url("/images/home/start2.svg");
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
	/*<------------Media Query-------------->*/
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
