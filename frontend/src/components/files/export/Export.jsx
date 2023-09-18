import React, { useEffect, useState } from "react";
import ExcelJS from "exceljs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalContainer, LinkButton } from "./Export.styles";
import axios from "axios";
import endPoints from "@/service/api";

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

function ExportarExcel({ listaPeliculas, isVerified }) {
	const [open, setOpen] = useState(false);
	const [sent, setSent] = useState(false);
	const handleErrorOpen = () => setOpen(true);
	const handleErrorClose = () => setOpen(false);
	// useEffect
	useEffect(() => {
		console.log(isVerified);
	}, [isVerified]);
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
	const sendEmail = async () => {
		axios
			.get(endPoints.auth.sendEmail(id))
			.then((response) => {

				// setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setError(true);
				setLoading(false);
			});
	};

	return (
		<div>
			<button onClick={isVerified ? exportToExcel : handleErrorOpen}>Exportar</button>
			<Modal
				open={open}
				onClose={handleErrorClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<ModalContainer>
						<h1 className="title">No estás verificado</h1>
						<p>Revisa tu casilla de correo para verificar tu cuenta y poder acceder a esta funcionalidad.</p>
						<p className="second-line">
							No te llegó el correo? <LinkButton>Reenviar</LinkButton>
						</p>
					</ModalContainer>
					{/* <div style={{ color: "black" }}>
						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div> */}
				</Box>
			</Modal>
		</div>
	);
}

export default ExportarExcel;
