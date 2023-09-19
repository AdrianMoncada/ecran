import styled from "styled-components";

export const SearchBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 80px;

	input {
		background: #1e293b;
		border: 0px solid transparent;
		width: 480px;
		height: 46px;
		padding: 10px 10px 10px 10px;
		border-radius: 10px;
	}
	button {
		width: 150px;
		padding: 10px;
		color: #fff;
		border: none;
		border-radius: 18px;
		background: #a855f7;
		margin-top: 50px;
		margin-bottom: 20px;
	}
`;

export const Title = styled.div`
	h2 {
		margin-top: 50px;
		margin-bottom: 30px;
		margin-left: 10%;
		font-family: Inter;
		font-size: 25px;
		font-style: normal;
		font-weight: 800;
		line-height: 44px; /* 97.778% */
		letter-spacing: -0.45px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 50px;
	object-fit: content;
	margin-left: 10%;
	margin-right: 10%;
	margin-top: 8%;
`;

export const GeneralInfo = styled.div`
	display: flex;
	flex-direction: column;

	.custom-textarea {
		color: #cbd5e1;
		font-family: Inter;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 22px;
		background: #1e293b;
		width: 445px;
		border: 1px solid transparent;
		padding: 5px;
		border-radius: 4px;
		@media (max-width: 900px) {
			width: 380px;
		}
	}

	.info-group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.info-field {
		flex: 1;
		margin-right: 10px;
	}
`;

export const GenreAvailabilityRatings = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 50px;

	.genre-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
		gap: 20px;
	}

	.genre-fields {
		display: grid;
		margin-left: 8%;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, auto);
		gap: 10px;
	}

	.genre-field {
		display: flex;
		align-items: center;
	}

	.genre-field input {
		margin-right: 5px;
	}

	.availability-group {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		margin-bottom: 80px;
	}

	.availability-fields {
		display: grid;
		margin-left: 8%;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, auto);
		gap: 10px;
	}

	.availability-field {
		display: flex;
		align-items: center;
	}

	.platform-label {
		display: flex;
		align-items: center;
	}

	.platform-label input {
		margin-right: 5px;
	}

	.califi-group {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
		margin-bottom: 80px;
	}
	.califi-fields {
		display: grid;
		margin-left: 4%;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, auto);
		gap: 1px;
	}

	.califi-field {
		flex: 1;
		margin-right: 10px;
	}

	.calification {
		width: 70px;
	}
`;

export const SectionTitle = styled.h5`
	margin-bottom: 30px;
	color: #e7ebf0;
	font-family: Inter;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 22px;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	color: #cbd5e1;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 5px;
	margin-bottom: 10px;
	border-radius: 4px;
	background: #1e293b;
	border: 0px solid transparent;
`;

export const Checkbox = styled.input`
	margin-right: 5px;
`;

export const SubmitButton = styled.button`
	margin-top: 10px;
	margin-bottom: 100px;
	margin-left: 40%;
	width: 250px;
	padding: 10px;
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 18px;
	background: #a855f7;
	@media (max-width: 900px) {
		margin-left: 30%;
	}
`;
