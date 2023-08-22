import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	width: 60%;
	max-width: 500px;
	/* height: 100%; */
	min-width: 200px;

	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

export const InputContent = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	border-radius: 50px;
	background: linear-gradient(
		45deg,
		rgba(44, 30, 59, 0.15) 0%,
		rgba(30, 41, 59, 0.48) 51.32%,
		rgba(30, 41, 59, 0.43) 58.85%,
		rgba(30, 41, 59, 0.15) 100%
	);
	width: 100%;
	border: 1px solid rgba(221, 227, 236, 1);
	align-items: center;
	flex-direction: row-reverse;

	.iconSearch {
		margin-left: 15px;
		width: 25px;
		height: 30px;
		color: #e3e3e3;
	}
`;

export const Input = styled.input`
	display: flex;
	width: 100%;
	padding: 15px 22px 13px 20px;
	/* border-radius: 50px; */
	background: transparent;
	color: #fff;
	font-size: 15px;
	font-weight: 200;
	line-height: 22px;
	border: none;

	&:focus {
		outline: none;
	}
`;

export const DropdownConteiner = styled.div`
	position: absolute;
	margin-top: 16px;
	top: 40px;
	left: 0;
	border: 1px solid #ccc;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 10;
	width: 100%;
	border-radius: 5px;
	background: rgba(27, 28, 58, 0.9);
	backdrop-filter: blur(5px);
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
