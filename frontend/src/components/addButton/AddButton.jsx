import React from "react";
import { ButtonStyle } from "./AddButton.styles";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";
import Cookies from "js-cookie";

const AddButton = ({ movie }) => {
	const auth = useAuth();
	const router = useRouter();

	const addToWatchlist = async () => {
		try {
			if (!auth.user) {
				console.log("Usuario no autenticado, redirigiendo a la página de inicio de sesión");
				router.push("/signIn");
				return;
			}

			const movieId = movie;
			const userId = Cookies.get("userId");
			const url = `https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/${userId}/watchlist`;

			const body = {
				movieId: movieId,
			};

			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
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
