import styled from "styled-components";

export const ButtonStyle = styled.button`
	width: 52%;
	border-radius: 20px;
	background: #b56ef8;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px 13px;
	transition: all 250ms ease;
	cursor: pointer;

	p {
		font-size: 14px;
		padding-left: 8px;
	}

	:hover {
		cursor: pointer;
		background-color: #553482;
	}
`;
