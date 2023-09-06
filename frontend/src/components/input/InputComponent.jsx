import React from "react";
import styled from "styled-components";

const Input = styled.input`
	background-color: #1e293b;
	border: 0px solid transparent;
	border-radius: 5px;
	color: #64748b;
	font-size: 13px;
	height: 40px;
	width: 500px;
	padding: 5px;
	margin-top: 5px;
	margin-bottom: 15px;
`;

const InputComponent = ({ handleState, name, placeholder, type, value }) => {
	return (
		<Input placeholder={placeholder} type={type} value={value} onChange={(e) => handleState(e.target.value, name)} />
	);
};

export default InputComponent;
