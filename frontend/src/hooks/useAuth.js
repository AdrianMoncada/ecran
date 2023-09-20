import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import endPoints from "@/service/api";
import { toast } from "sonner";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
	return useContext(AuthContext);
};

function useProvideAuth() {
	const [user, setUser] = useState(null);

	// Función para verificar si el usuario está autenticado
	const isAuthenticated = () => {
		// Verifica si el usuario está autenticado, por ejemplo, comprobando si existe un token de sesión.
		const token = Cookie.get("token");
		return !!token; // Devuelve true si está autenticado, de lo contrario, false.
	};

	const signIn = async (email, password) => {
		const options = {
			headers: {
				accept: "*/*",
				"Content-Type": "application/json",
			},
		};
		await axios
			.post(endPoints.auth.login, { email, password }, options)
			.then(async (res) => {
				const response = res.headers;
				const token = response.token;
				//lógica para guardar estos datos en las cookies
				if (token) {
					Cookie.set("token", token, { expires: 2 });
					Cookie.set("userId", response.userid, { expires: 2 });
					axios.defaults.headers.Authorization = `Bearer ${token}`;
					const { data: user } = await axios.get(endPoints.auth.profile(response.userid));
					console.log("🚀 ~ file: useAuth.js:46 ~ .then ~ user:", user);
					setUser(user);
					const userInfoJSON = JSON.stringify(user);
					const encodedUserInfo = btoa(userInfoJSON);
					Cookie.set("userInfo", encodedUserInfo, { expires: 2 });
				}
			})
			.catch((err) => console.error(err));
	};

	const signUp = async (data) => {
		const options = {
			headers: {
				accept: "*/*",
				"Content-Type": "application/json",
			},
		};
		const response = await axios.post(endPoints.auth.signUp, data, options);
		if (response.status === 201) {
			await signIn(data.email, data.password);
		}
	};

	const signOut = () => {
		Cookie.remove("token");
		Cookie.remove("userInfo");
		Cookie.remove("userId");
		setUser(null);
	};

	const updateProfileInfo = async (updatedData) => {
		try {
			const userId = Cookie.get("userId");

			if (!userId) {
				return null;
			}

			const response = await axios.put(endPoints.auth.update(userId), updatedData, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.status === 200) {
				setUser(updatedData);
				toast.success("Perfil actualizado con éxito");
				return updatedData;
			}

			return null;
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	// Función para actualizar imagen del perfil del usuario
	const uploadProfilePicture = async (profilePicture) => {
		try {
			const formImageData = new FormData();
			// console.log("hooks/useAuth - profilePicture", profilePicture);
			// console.log("hooks/useAuth - formImageData - before", formImageData.get("file"));
			formImageData.append("file", profilePicture);
			// console.log("hooks/useAuth - formImageData - after", formImageData.get("file"));

			const token = Cookie.get("token");

			if (!token) {
				return null;
			}

			const headers = {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			};

			// console.log("hooks/useAuth - headers", headers);

			const imageResponse = await axios.post(endPoints.auth.profilePicture, formImageData, {
				headers,
			});

			// console.log("hooks/useAuth - imageResponse", imageResponse);
			const imageUrl = imageResponse.data;

			return imageUrl;
		} catch (error) {
			console.error(error);
			throw new Error("Error al cargar la imagen");
		}
	};

	return {
		user,
		isAuthenticated,
		setUser,
		signIn,
		signUp,
		signOut,
		updateProfileInfo,
		uploadProfilePicture,
	};
}
