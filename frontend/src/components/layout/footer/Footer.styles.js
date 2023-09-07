import styled from "styled-components";

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 2em;
	bottom: 0;

	.footer_icons {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 8em;
		gap: 20px;
	}
	.footer_icons_container{
		display: flex;
		gap: 20px;	
	}
	.footer_icons svg {
		cursor: pointer;
		width: 2vw;
	}

	.footer_logo {
		height: 1rem;
	}

	.footer_logo img {
		width: 10em;
		margin-left: 1em;
	}

	.footer_text {
		margin-right: 8em;
	}

	@media screen and (max-width: 768px) {
		margin-botton: 3rem;

		.footer_text {
			margin-right: 2em;
			font-size: 9px;
		}

		.footer_logo img {
			width: 8em;
		}

		.footer_icons {
			margin-left: 2em;
		}
	}
	
	@media screen and (max-width: 360px) {

		.footer_text {					
			font-size: 7px;
		}

		.footer_logo img {
			width: 6em;
			height: 6em;
		}

		.footer_icons {
			margin-left: 2em;
		}
	}

`;
