import styled from "styled-components";

export const Container = styled.div`
	height: 35vh;
	background-image: url("/images/home/Bg.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 0% 0% 50px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 20px;
`;

export const Filtros = styled.div``;

export const List = styled.li`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	transition: background-color 250ms ease;
	cursor: pointer;

	&:hover {
		background-color: #2a313f;
	}

	.list {
		display: flex;
		align-content: center;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.imageList {
		width: 15%;
		margin: 20px 0;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
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

		.review {
			color: #94a3b8;
			font-size: 1vw;
		}

		.textItem {
			color: #e2e8f0;
			font-size: 1.4vw;
			font-weight: 400;
		}

		.genre {
			margin-bottom: -10px;
		}
	}

	.titleList {
		font-weight: 600;
		color: #fff;
		font-size: 2.4vw;
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

	@media screen and (max-width: 900px) {
		.descriptionList .review {
			font-size: 2vw;
		}

		.descriptionList .textItem {
			font-size: 3vw;
		}

		.titleList {
			font-size: 3vw;
		}
	}
`;

export const ContainerSearch = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	.buttonFiltros {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: underline;
		margin-bottom: 10px;
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

export const ModalFilters = styled.div`
	background-color: #ceb6ea;
`;

export const ContainerFilters = styled.div`
	width: 29%;
	height: 100%;
	flex-shrink: 0;
	background-color: #ceb6ea;
	margin: 20px 0 0 20px;
	border-radius: 20px;
`;

export const ContainerResults = styled.div`
	width: 70%;

	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;
