import { Comments } from "@styles/pages.styles/movies.styles";
import { ModalContainer, LinkButton } from "./Comments.styles";
import CommentsUser from "@components/comments/CommentsUser";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Modal from "@mui/material/Modal";
import { Toaster, toast } from "sonner";
import endPoints from "@/service/api";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";
import Link from "next/link";
import axios from "axios";

const Comentarios = ({ movies }) => {
	const [inputComments, setInputComments] = useState("");
	const [sendComment, setSendCommment] = useState("");
	const [newComment, setNewComment] = useState([]);
	const auth = useAuth();
	const [isLogged, setLogged] = useState(false);
	const [isVerified, setVerified] = useState(false);
	const [open, setOpen] = useState(false);
	const handleErrorOpen = () => setOpen(true);
	const handleErrorClose = () => {
		setOpen(false);
		// setInputComments("");
	};

	function obtenerFechaActual() {
		const fecha = new Date();
		const dia = fecha.getDate().toString().padStart(2, "0");
		const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
		const año = fecha.getFullYear();
		const fechaFormateada = `${dia}/${mes}/${año}`;
		return fechaFormateada;
	}

	const handleComment = () => {
		const token = Cookies.get("token");
		const userId = Cookies.get("userId");
		const encodedUserInfo = Cookies.get("userInfo");
		const userInfoJSON = atob(encodedUserInfo);
		const userInfo = JSON.parse(userInfoJSON);
		const fechaActual = obtenerFechaActual();
		const data = {
			movie: movies.movieId,
			comment: sendComment,
		};
		const options = {
			headers: {
				accept: "*/*",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		if (inputComments === "") {
			userId === undefined
				? toast.error("Necesitas estar registrado")
				: toast.error("Escribe tu opinion sobre la película");
		} else {
			if (userId === undefined) {
				toast.error("Necesitas estar registrado");
			} else {
				setNewComment((prevState) => [
					...prevState,
					{
						comment: sendComment,
						date: fechaActual,
						username: `${userInfo.firstName} ${userInfo.lastName}`,
						imageUrl: userInfo.imageUrl,
					},
				]);
				axios
					.post(endPoints.auth.comment(userId), data, options)
					.then(() => {
						setInputComments("");
						toast.success("Comentario enviado con éxito");
					})
					.catch((err) => {
						console.error(err);
						toast.error("Error al publicar tu comentario");
					});
			}
		}
	};

	const handleChange = (e) => {
		const newText = e.target.value;
		const textWithLineBreaks = newText.replace(/\n/g, "<br />");
		setSendCommment(textWithLineBreaks);
		setInputComments(newText);
	};

	useEffect(() => {
		if (!auth.user) {
			setLogged(false);
		} else {
			setLogged(true);
			if (auth.user.enabled) {
				setVerified(true);
			} else {
				setVerified(false);
			}
		}
		console.log(auth.user);
	}, [auth]);

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
		<Comments>
			<h2 className="comments-title">Queremos escucharte...</h2>
			<div className="comments-text">
				<textarea
					cols="40"
					rows="5"
					placeholder="Queremos escuchar tu opinión..."
					value={inputComments}
					onChange={handleChange}
				/>
				<button onClick={isVerified ? handleComment : handleErrorOpen}>Enviar</button>
			</div>
			<div className="comments-comments">
				<h4 className="title">{movies.comments?.length} Comentarios</h4>
				{movies.comments?.map((user, key) => (
					<CommentsUser key={key} user={user} />
				))}
				{newComment.map((user, key) => (
					<CommentsUser key={key} user={user} />
				))}
			</div>
			<Toaster richColors position="bottom-right" />
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
							<p>Revisa tu casilla de correo para verificar tu cuenta y poder publicar un comentario.</p>
							<p className="second-line">
								No te llegó el correo? <LinkButton onClick={() => sendEmail()}>Reenviar</LinkButton>
							</p>
						</ModalContainer>
					) : (
						<ModalContainer>
							<h1 className="title">No iniciaste sesión</h1>
							<p>Inicia sesión con tu cuenta para poder publicar un comentario.</p>
							<p className="second-line">
								No tienes cuenta?
								<LinkButton>
									<Link href="/signUp">Registrarse</Link>
								</LinkButton>
							</p>
						</ModalContainer>
					)}
				</Box>
			</Modal>
		</Comments>
	);
};

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
export default Comentarios;
