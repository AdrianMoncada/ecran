import React from "react";
import { ButtonStyle } from "./Button.styles";
import { FiPlus } from "react-icons/fi";

const Button = () => {
	return (
		<ButtonStyle>
			<FiPlus />
			<p>Agregar a mi lista</p>
		</ButtonStyle>
	);
};

export default Button;
