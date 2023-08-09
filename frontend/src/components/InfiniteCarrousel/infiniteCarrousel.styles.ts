import styled, { keyframes } from "styled-components";

//Global container brands
export const Slider = styled.div`
	height: 150px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 99%;
	background: #0f172a;

	&::after {
		background: linear-gradient(90deg, rgba(15, 23, 42, 1) 40%, rgba(0, 0, 0, 0));
		content: "";
		content: "";
		height: 150px;
		position: absolute;
		width: 300px;
		z-index: 2;
		right: 0;
		top: 0;
		border: 1px solid red;
		transform: rotateZ(180deg);
	}
	&::before {
		border: 1px solid red;
		background: linear-gradient(90deg, rgba(15, 23, 42, 1) 40%, rgba(0, 0, 0, 0));
		content: "";
		content: "";
		height: 150px;
		position: absolute;
		width: 300px;
		z-index: 2;
		left: 0;
		top: 0;
	}
`;

//Keyframes and animations
const Myscroll = keyframes`

    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    
      100% {
        -webkit-transform: translateX(calc(-200px * 7));
        /* transform: translateX(calc(-200px * 4)); */
        transform: translateX(calc(-200px * 7));
      }

`;

export const SlideTrack = styled.div`
	display: flex;
	gap: 100px;
	animation: ${Myscroll} 40s linear infinite;
	-webkit-animation: ${Myscroll} 40s linear infinite;
	width: calc(200px * 14);
`;

export const Slide = styled.div`
	width: 200px;
	margin: auto;
`;

export const Brand = styled.img`
	/* width: 100%;
	height: 100%; */
`;
