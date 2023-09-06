import React from "react";
import ExcelJS from "exceljs";

function ExportarExcel({ listaPeliculas }) {
	const exportToExcel = async () => {
		const workbook = new ExcelJS.Workbook();
		const worksheet = workbook.addWorksheet("Lista de Películas");

		worksheet.columns = [
			{ header: "ID", key: "movieId", width: 30 },
			{ header: "Título", key: "title", width: 50 },
			{ header: "Date", key: "release_date", width: 30 },
		];

		listaPeliculas.forEach((pelicula) => {
			worksheet.addRow(pelicula);
		});

		const blob = await workbook.xlsx.writeBuffer();

		const url = window.URL.createObjectURL(new Blob([blob]));
		const a = document.createElement("a");
		a.href = url;
		a.download = "lista_peliculas.xlsx";
		a.click();
		window.URL.revokeObjectURL(url);
	};

	return (
		<div>
			<button onClick={exportToExcel}>Exportar</button>
		</div>
	);
}

export default ExportarExcel;
