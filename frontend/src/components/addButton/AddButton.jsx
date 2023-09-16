import React from "react";
import { ButtonStyle } from "./AddButton.styles";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";
import endPoints from "@/service/api";

const AddButton = ({ movie }) => {
	const auth = useAuth();
	const router = useRouter();

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
				toast.success("Película agregada a la lista");
				console.log("Película agregada a la lista");
			} else {
				toast.error("Error al agregar la película a la lista");
				console.error("Error al agregar la película a la lista");
			}
		} catch (error) {
			console.error("Error al agregar la película a la lista:", error);
		}
	};
	return (
		<>
			<ButtonStyle onClick={addToWatchlist}>
				<FiPlus />
				<p>Agregar a mi lista</p>
			</ButtonStyle>
			<Toaster richColors position="bottom-right" />
		</>
	);
};

export default AddButton;
