import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	padding-top: 20px;
	padding-bottom: 20px;
	width: 50%;
	max-width: 500px;
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
`;

export const Input = styled.input`
	display: flex;
	width: 100%;
	padding: 15px 22px 13px 60px;
	border-radius: 5px;
	background: transparent;
	color: rgba(255, 255, 255, 0.5);
	opacity: 0.4;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`;
