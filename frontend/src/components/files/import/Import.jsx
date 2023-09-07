import React, { useState } from "react";
import * as XLSX from "xlsx";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalContainer } from "./Import.styles";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "black",
	border: "2px solid #683ca0",
	borderRadius: "20px",
	boxShadow: 24,
	p: 4,
};

function ImportarDesdeExcel({ fetchMovies, successMessage, errorMessage }) {
	const [typeError, setTyperError] = useState(null);
	const [excelFile, setExcelFile] = useState(null);
	const [loadingMessage, setLoadingMessage] = useState(false);

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
		setLoadingMessage(true);
		if (excelFile !== null) {
			try {
				const workbook = XLSX.read(excelFile, { type: "buffer" });
				const worksheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[worksheetName];
				const data = XLSX.utils.sheet_to_json(worksheet);
				await fetchMovies(data);

				setLoadingMessage(false); // Limpia el mensaje de carga
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
					<ModalContainer>
						<h1 className="title">Importar peliculas</h1>
						<form onSubmit={handleFileSubmit}>
							<input
								className="input-file"
								type="file"
								accept=".xlsx"
								placeholder="hidden_input"
								onChange={handleFileUpload}
							/>
							<button className="button-import" type="submit">
								{loadingMessage ? "Cargando Peliculas..." : "Cargar peliculas"}
							</button>
							{typeError && <div>{typeError}</div>}
						</form>
					</ModalContainer>
					<div style={{ color: "black" }}>
						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div>
				</Box>
			</Modal>
		</div>
	);
}

export default ImportarDesdeExcel;
