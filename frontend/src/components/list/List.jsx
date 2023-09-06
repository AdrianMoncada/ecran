import React from "react";
import { TitleContainer, CardContainer } from "./List.slyles";

const List = ({ children }) => {
	return (
		<>
			<TitleContainer>
				<div>
					<h3>Tu lista</h3>
					<p>Aquí podrás encontrar las películas y series que hayas guardado previamente.</p>
				</div>
				<div>
					<button>Exportar</button>
				</div>
			</TitleContainer>
			<CardContainer>{children}</CardContainer>
		</>
	);
};

export default List;
