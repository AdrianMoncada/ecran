import React, { useState } from "react";
import { ModalContainer, LinkButton } from "./Export.styles";
import { useAuth } from "@/hooks/useAuth";
import Modal from "@mui/material/Modal";
import { Toaster, toast } from "sonner";
import endPoints from "@/service/api";
import Box from "@mui/material/Box";
import ExcelJS from "exceljs";
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

function ExportarExcel({ listaPeliculas, isVerified, isLogged }) {
	const auth = useAuth();
	const [open, setOpen] = useState(false);
	const handleErrorOpen = () => setOpen(true);
	const handleErrorClose = () => setOpen(false);

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
		<div>
			<button onClick={isVerified ? exportToExcel : handleErrorOpen}>Exportar</button>
			<Modal
				open={open}
				onClose={handleErrorClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{isLogged ? (
						<ModalContainer>
							<h1 className="title">No estás verificado</h1>
							<p>Revisa tu casilla de correo para verificar tu cuenta y poder acceder a esta funcionalidad.</p>
							<p className="second-line">
								No te llegó el correo? <LinkButton onClick={() => sendEmail()}>Reenviar</LinkButton>
							</p>
						</ModalContainer>
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

					{/* <div style={{ color: "black" }}>
						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div> */}
				</Box>
			</Modal>
			<Toaster richColors position="bottom-right" />
		</div>
	);
}

export default ExportarExcel;
