import styled from "styled-components";

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
		height: 170px;
		max-height: 170px;
		padding: 20px 10px;
	}

	.imageList {
		display: flex;
		width: 35%;
		height: 100%;
		flex-grow: 1;
		padding: 0px 10px;
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

	@media (max-width: 1000px) {
		.titleList {
			font-size: 14px;
		}
		.descriptionList {
			p {
				font-size: 10px;
			}
		}

		.list {
			height: 150px;
			padding: 20px 10px;
		}

		@media (max-width: 794px) {
			.titleList {
				font-size: 10px;
			}
			.descriptionList {
				p {
					font-size: 7px;
				}
			}

			.list {
				height: 110px;
			}
		}

		@media (max-width: 687px) {
			.titleList {
				font-size: 8px;
			}
			.descriptionList {
				p {
					font-size: 5px;
				}
			}

			.list {
				height: 90px;
			}
		}
	}
`;
