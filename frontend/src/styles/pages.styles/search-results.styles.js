import styled from "styled-components";

export const SearchResultsContainer = styled.div`
	height: 33vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 40px;
	margin: 0 auto;
	width: 90vw;
	flex-shrink: 0;
	border-radius: 0px 0px 48px 48px;
	background: radial-gradient(122.17% 122.17% at 50% 100%, #e9d5ff 0%, #a855f7 22.35%, rgba(15, 23, 42, 0) 100%);
`;

export const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	padding: 20px 40px;
	gap: 10px;
	margin: 0 auto;
	max-width: 1200px;
	/* height: 100vh; */

	.title-results {
		color: #e2e8f0;
		text-align: center;
		font-family: Inter;
		font-size: 1.5em;
		font-style: normal;
		font-weight: 400;
		letter-spacing: -0.5px;
	}

	.result {
		color: #e2e8f0;
		font-family: InterBold;
		font-size: 1.2em;
		font-style: normal;
		font-weight: 700;
		line-height: 80px;
		letter-spacing: -0.5px;
	}

	.container-list {
		width: 100%;
	}
`;

export const List = styled.li`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;

	.list {
		display: flex;
		align-content: center;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		/* height: 300px;
		max-height: 300px;
		padding: 20px 10px; */
		height: 100%;
	}

	.imageList {
		display: flex;
		width: 35%;
		height: 100%;
		flex-grow: 1;
		/* padding: 0px 10px; */
		padding: 10px 10px;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.descriptionList {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 65%;
		padding-right: 15px;
		height: 100%;
		gap: 2px;

		p {
			padding-top: 5px;
			font-weight: 200;
			color: #fff;
			font-family: Inter;
			font-size: 12px;
		}
	}

	.titleList {
		font-weight: 600;
		color: #fff;
		font-family: Inter;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		/* padding-bottom: 15px; */
	}

	.line {
		color: #fff;
	}

	hr {
		border-color: rgba(192, 137, 250, 0.3);
		height: 1px;
		width: 80%;
		border-width: 1px;
	}
`;
export const NotFound = styled.div`
	height: fit-content;
	display: flex;
	justify-content: center;

	.not-found-text {
		color: white;
		display: flex;
		flex-direction: column;
		margin-left: 2rem;
		justify-content: center;
		align-items: start;
	}

	.not-found-text h2 {
		font-size: 40px;
	}

	@media screen and (max-width: 640px) {
		flex-direction: column;
		align-items: center;

		.not-found-text {
			flex-direction: column;
			margin-left: 0rem;
			margin-top: 1rem;
			align-items: center;
		}

		.not-found-text h2 {
			text-align: center;
		}

		.not-found-text p {
			text-align: center;
		}
	}
`;
