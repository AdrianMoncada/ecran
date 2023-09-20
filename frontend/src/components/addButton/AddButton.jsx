import React, { useEffect, useState } from "react";
import { ButtonStyle } from "./AddButton.styles";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";
import endPoints from "@/service/api";
import axios from "axios";
import { MdDone } from "react-icons/md";

const AddButton = ({ movie }) => {
	const auth = useAuth();
	const router = useRouter();
	const [isAdd, setIsAdd] = useState(false);

	useEffect(() => {
		const fetch = async () => {
			try {
				const token = Cookies.get("token");
				if (token) {
					const userId = Cookies.get("userId");
					const movies = await axios.get(endPoints.movies.watchlist(userId), {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					const movieEncontrada = movies.data.find((obj) => obj.movieId === movie);
					movieEncontrada ? setIsAdd(true) : setIsAdd(false);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetch();
	}, [isAdd]);

	const addToWatchlist = async () => {
		try {
			if (!auth.user) {
				console.log("Usuario no autenticado, redirigiendo a la página de inicio de sesión");
				router.push(`/signIn?prevPage=${router.asPath}`);
				return;
			}

			const movieId = movie;
			const userId = Cookies.get("userId");
			const token = Cookies.get("token");

			const body = {
				movieId: movieId,
			};

			const response = await fetch(endPoints.movies.watchlist(userId), {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(body),
			});

			if (response.ok) {
				!isAdd ? toast.success("Película agregada a la lista") : toast.error("La película se eliminó de la lista");
				setIsAdd((prev) => !prev);
			} else {
				toast.error("Error al agregar la película a la lista");
			}
		} catch (error) {
			console.error("Error al agregar la película a la lista:", error);
		}
	};
	return (
		<>
			<ButtonStyle onClick={addToWatchlist}>
				{isAdd ? (
					<>
						<MdDone />
						<p>Agregada</p>
					</>
				) : (
					<>
						<FiPlus />
						<p>Agregar a mi lista</p>
					</>
				)}
			</ButtonStyle>
			<Toaster richColors position="bottom-right" />
		</>
	);
};

export default AddButton;
