import styled from "styled-components";

export const FilterBlock = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 581.199px;
	border-radius: 0px 0px 48px 48px;
	margin: 10px auto 100px auto;
	background: radial-gradient(122.17% 122.17% at 50% 100%, #e9d5ff 0%, #a855f7 22.35%, rgba(15, 23, 42, 0) 100%);

	.suggestion_main_title {
		text-align: center;
		font-size: 56px;
		font-style: normal;
		font-weight: 800;
		line-height: 56px; /* 100% */
		letter-spacing: -0.5px;
		max-width: 900px;
	}

	.suggestion_p {
		margin: 40px auto 56px auto;
		text-align: center;
		color: rgba(203, 213, 225, 1);
		font-weight: 400;
		opacity: 0.7;
		font-size: 18px;
		font-style: normal;
		letter-spacing: -0.25px;
		max-width: 900px;
	}
`;
