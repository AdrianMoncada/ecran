import React, { useState } from "react";
import * as XLSX from "xlsx";

function ImportarDesdeExcel() {
	const [typeError, setTyperError] = useState(null);
	const [excelFile, setExcelFile] = useState(null);
	const [excelData, setExcelData] = useState(null);

	const handleFileUpload = (e) => {
		let fileTypes = [
			"application/vnd.ms-excel",
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"text/csv",
		];
		let selectedFile = e.target.files[0];
		if (selectedFile) {
			if (selectedFile && fileTypes.includes(selectedFile.type)) {
				console.log(selectedFile);
				let reader = new FileReader();
				reader.readAsArrayBuffer(selectedFile);
				reader.onload = (e) => {
					setExcelFile(e.target.result);
				};
			} else {
				setTyperError("porfavor seleccione un archivo con extension xls");
			}
		} else {
			console.log("Porfavor seleccione su archivo");
		}
	};

	const handleFileSubmit = (e) => {
		e.preventDefault();
		if (excelFile !== null) {
			try {
				const workbook = XLSX.read(excelFile, { type: "buffer" });
				const worksheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[worksheetName];
				const data = XLSX.utils.sheet_to_json(worksheet);
				setExcelData(data.slice(0, 10));
				console.log(excelData);
			} catch (error) {
				console.error("Error al leer el archivo Excel:", error);
				setTyperError("Error al leer el archivo Excel.");
			}
		}
	};

	return (
		<form onSubmit={handleFileSubmit}>
			<input type="file" onChange={handleFileUpload} />
			<button type="submit">Upload</button>
			{typeError && <div>{typeError}</div>}
		</form>
	);
}

export default ImportarDesdeExcel;
