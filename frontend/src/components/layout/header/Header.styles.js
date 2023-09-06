import styled from "styled-components";

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
	padding: 0 70px;
	background-color: ${(props) => (props.isScrolled ? "rgba(15, 23, 42, 0.8)" : "transparent")};
	backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
	transition:
		background-color 0.3s ease-in-out,
		backdrop-filter 0.3s ease-in-out;

	.logo img {
		margin: 1.5em 1.5em;
		width: 10em;
	}
	.nav {
		font-weight: 500;
		cursor: pointer;
		font-size: 0.9rem;
	}

	.nav ul {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.buttonExplore {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		background-color: #683ca0;
		padding: 10px 20px;
		cursor: pointer;
		border-radius: 10px;
		transition: all 250ms ease;
	}

	.buttonExplore:hover {
		background-color: #553482;
	}

	.buttonExplore .icon {
		width: 20px;
		height: 20px;
	}

	.link_text {
		margin-top: 10px;
		position: relative;
		text-decoration: none;
		font-size: 1em;
	}

	.link_text::before {
		content: "";
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: -4px;
		left: 0;
		background-color: #fff;
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.link_text:hover::before {
		transform: scaleX(1);
	}

	.close-menu {
		display: none;
	}

	.noshow {
		display: none;
	}
	.hamburger {
		display: none;
	}

	.nav-user {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	/* <--------media query---------------> */

	@media (max-width: 768px) {
		padding: 0 30px;
		.logo img {
			margin: 1.5em 2em;
			width: 7.5em;
		}

		.nav {
			display: none;
		}

		.nav-mobile {
			display: flex;
			flex-direction: row-reverse;
			background-color: rgba(15, 23, 42, 0.8);
			position: absolute;
			right: 0;
			top: 0;
			margin: 0;
			width: 40vw;
			padding: 0 20px;
			height: 100vh;
			align-items: flex-start;
			justify-content: center;
			box-shadow:
				0 4px 8px 0 rgba(0, 0, 0, 0.1),
				0 6px 20px 0 rgba(0, 0, 0, 0.1);
			-webkit-animation-name: animatetop;
			-webkit-animation-duration: 0.4s;
			animation-name: animatetop;
			animation-duration: 0.4s;
		}

		/* Add Animation */
		@-webkit-keyframes animatetop {
			from {
				right: -300px;
				opacity: 1;
			}
			to {
				top: 0;
				opacity: 1;
			}
		}

		@keyframes animatetop {
			from {
				right: -300px;
				opacity: 1;
			}
			to {
				top: 0;
				opacity: 1;
			}
		}

		.nav-ul-mobile {
			flex-direction: column;
			width: 100%;
			padding: 0;
			padding-top: 1rem;
		}

		.nav-ul > li {
			padding: 1rem;
		}

		.hamburger {
			display: block;
			font-size: 25px;
			margin-right: 2rem;
		}
		.close-menu {
			display: inline-block;
			padding: 0.6rem 1rem 0 0;
			color: #fff;
			font-size: 40px;
		}
	}
`;
