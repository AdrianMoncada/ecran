import styled from "styled-components";

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 5em;

	.footer_icons {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 8em;
		gap: 20px;
	}

	.footer_icons svg {
		cursor: pointer;
		width: 5vw;
	}

	.footer_logo {
	}

	.footer_logo img {
		width: 10em;
		margin-left: 1em;
	}

	.footer_text {
		margin-right: 8em;
	}
`;
