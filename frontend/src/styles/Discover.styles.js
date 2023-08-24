import styled from "styled-components";

export const Container = styled.div`
	height: 35vh;
	background-image: url("/images/home/Bg.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	border-radius: 0% 0% 50px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 20px;
`;

export const Filtros = styled.div`
	width: 20em;
	height: 45em;
	flex-shrink: 0;
	background-color: #ceb6ea;
	margin: 20px 0 0 20px;
	border-radius: 20px;
`;

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
		/* height: 300px;
		max-height: 300px;
		padding: 20px 10px; */
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

		.textItem {
			color: #e2e8f0;
			font-size: 1.5vw;
			font-weight: 400;
			margin-bottom: -5px;
		}

		.rewiew {
			color: #94a3b8;
			font-size: 3vw !important;
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
`;

export const ContainerSearch = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ModalFilters = styled.div`
	background-color: #ceb6ea;
`;
