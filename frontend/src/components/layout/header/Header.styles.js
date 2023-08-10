import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	background-color: transparent;
	transition: background-color 0.3s ease-in-out;
	z-index: 1000;
	top: 0;

	background-color: ${(props) => (props.isScrolled ? "rgba(15, 23, 42, 0.8)" : "transparent")};
	backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
	transition:
		background-color 0.3s ease-in-out,
		backdrop-filter 0.3s ease-in-out;

	.logo img {
		margin: 1.5em 4.8em;
		width: 10em;
	}

	.links {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		margin: 1.5em 4.8em;
	}

	.links .link_text {
		position: relative;
		text-decoration: none;
		font-size: 1.3vw;
	}

	.links .link_text::before {
		content: "";
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.links .link_text:hover::before {
		transform: scaleX(1);
	}
`;
