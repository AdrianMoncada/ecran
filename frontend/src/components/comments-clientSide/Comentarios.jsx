import { Comments } from "@styles/pages.styles/movies.styles";
import React, { useState } from "react";
import endPoints from "@/service/api";
import CommentsUser from "@components/comments/CommentsUser";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";
import axios from "axios";

const Comentarios = ({ movies }) => {
	const [inputComments, setInputComments] = useState("");
	const [sendComment, setSendCommment] = useState("");
	const [newComment, setNewComment] = useState([]);

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
					.then(() => toast.success("Comentario enviado con éxito"))
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
				<button onClick={handleComment}>Enviar</button>
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
		</Comments>
	);
};

export default Comentarios;
