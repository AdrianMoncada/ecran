import React, { useState } from "react";
import * as XLSX from "xlsx";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

function ImportarDesdeExcel({ fetchMovies, successMessage, errorMessage }) {
	const [typeError, setTyperError] = useState(null);
	const [excelFile, setExcelFile] = useState(null);
	const [loadingMessage, setLoadingMessage] = useState("");

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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

	const handleFileSubmit = async (e) => {
		e.preventDefault();
		setLoadingMessage("Cargando...");
		if (excelFile !== null) {
			try {
				const workbook = XLSX.read(excelFile, { type: "buffer" });
				const worksheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[worksheetName];
				const data = XLSX.utils.sheet_to_json(worksheet);
				console.log(fetchMovies);
				await fetchMovies(data);

				setLoadingMessage(""); // Limpia el mensaje de carga
			} catch (error) {
				console.error("Error al leer el archivo Excel:", error);
				setTyperError("Error al leer el archivo Excel.");
			}
		}
	};

	return (
		<div style={{ color: "black" }}>
			<button style={{ color: "white" }} onClick={handleOpen}>
				Importar
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<form onSubmit={handleFileSubmit}>
						<input type="file" onChange={handleFileUpload} />
						<button className="" style={{ color: "black" }} type="submit">
							Cargar peliculas
						</button>
						{typeError && <div>{typeError}</div>}
					</form>
					<div style={{ color: "black" }}>
						{loadingMessage && <p>{loadingMessage}</p>}
						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div>
				</Box>
			</Modal>
		</div>
	);
}

export default ImportarDesdeExcel;
