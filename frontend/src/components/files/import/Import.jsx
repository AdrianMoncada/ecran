import React, { useState } from "react";
import { ModalContainer, LinkButton } from "./Import.styles";
import { useAuth } from "@/hooks/useAuth";
import { Toaster, toast } from "sonner";
import Modal from "@mui/material/Modal";
import endPoints from "@/service/api";
import Box from "@mui/material/Box";
import * as XLSX from "xlsx";
import Link from "next/link";
import axios from "axios";

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

function ImportarDesdeExcel({ fetchMovies, successMessage, errorMessage, isVerified, isLogged }) {
	const [typeError, setTyperError] = useState(null);
	const [excelFile, setExcelFile] = useState(null);
	const [loadingMessage, setLoadingMessage] = useState(false);
	const auth = useAuth();

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
				setTyperError("Por favor seleccione un archivo con extensión xls");
			}
		} else {
			console.log("Por favor seleccione su archivo");
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

	const sendEmail = async () => {
		axios
			.get(endPoints.auth.sendEmail(auth.user.userId))
			.then((response) => {
				if (response.data === 200) {
					toast.success("Se envió el email a su correo. Por favor, revise su casilla de correo.");
				} else {
					toast.error("Ocurrió un error al enviar el email. Por favor, intente más tarde.");
				}
			})
			.catch((e) => {
				console.log(e);
				toast.error("Ocurrió un error al enviar el email. Por favor, intente más tarde.");
			});
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
					{isLogged ? (
						isVerified ? (
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
						) : (
							<ModalContainer>
								<h1 className="title">No estás verificado</h1>
								<p>Revisa tu casilla de correo para verificar tu cuenta y poder acceder a esta funcionalidad.</p>
								<p className="second-line">
									No te llegó el correo? <LinkButton onClick={() => sendEmail()}>Reenviar</LinkButton>
								</p>
							</ModalContainer>
						)
					) : (
						<ModalContainer>
							<h1 className="title">No iniciaste sesión</h1>
							<p>Inicia sesión con tu cuenta para poder exportar tu lista de películas.</p>
							<p className="second-line">
								No tienes cuenta?
								<LinkButton>
									<Link href="/signUp">Registrarse</Link>
								</LinkButton>
							</p>
						</ModalContainer>
					)}

					<div style={{ color: "black" }}>
						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div>
				</Box>
			</Modal>
			<Toaster richColors position="bottom-right" />
		</div>
	);
}

export default ImportarDesdeExcel;
