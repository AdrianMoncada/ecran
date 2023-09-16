import styled from "styled-components";

export const ContainerComment = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 20px auto;

	.header {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.username {
		color: #ad5ef8;
		font-size: 17px;
	}

	.date {
		color: #64748b;
		font-size: 13px;
	}

	.comment {
		margin-top: 5px;
		color: #94a3b8;
	}
`;
