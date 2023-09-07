import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;

	.title {
		font-size: 2vw;
		font-weight: bold;
		color: #683ca0;
		margin-bottom: 20px;
	}

	.input-file {
		margin: 10px 0;
	}

	.button-import {
		background-color: #683ca0;
		padding: 10px 20px;
		font-size: 1.2vw;
		border-radius: 10px;
		margin: 10px auto;
		display: flex;
		justify-content: center;
	}
`;
