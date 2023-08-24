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
