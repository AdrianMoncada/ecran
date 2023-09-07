import React from "react";
import { TitleContainer, CardContainer } from "./List.slyles";
import ExportarExcel from "@components/files/export/Export";

const List = ({ children, watchlistMovies }) => {
	return (
		<>
			<TitleContainer>
				<div>
					<h3>Tu lista</h3>
					<p>Aquí podrás encontrar las películas y series que hayas guardado previamente.</p>
				</div>
				<div>
					<ExportarExcel listaPeliculas={watchlistMovies} />
				</div>
			</TitleContainer>
			<CardContainer>{children}</CardContainer>
		</>
	);
};

export default List;
