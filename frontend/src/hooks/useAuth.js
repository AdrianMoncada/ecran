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
		const { headers } = await axios.post(endPoints.auth.login, { email, password }, options);
		const token = headers.token;
		if (token) {
			Cookie.set("token", token, { expires: 5 });
			Cookie.set("userId", headers.userid);
			const userInfo = {
				firstName: "Jacobo",
				lastName: "Arcila",
				email: "jacoboArcila1@gmail.com",
			};
			const userInfoJSON = JSON.stringify(userInfo);
			const encodedUserInfo = btoa(userInfoJSON);
			Cookie.set("userInfo", encodedUserInfo, { expires: 5 });
			setUser(userInfo);
			//Esto lo que hace es traer toda la info del usuario con el token
			/* axios.defaults.headers.Authorization = `Bearer ${token}`;
			const { data: user } = await axios.get();
			console.log(user);
			setUser(user); */
		}
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

	// Función para obtener la información del perfil del usuario
	const getProfileInfo = async () => {
		try {
			const token = Cookie.get("token");
			if (!token) {
				// Manejar la falta de token (usuario no autenticado)
				return null;
			}
			const userId = Cookie.get("userId");
			const response = await axios.get(endPoints.getProfile(userId), {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			});
			if (response.status === 200 && response.data) {
				const userInfo = response.data;
				setUser(userInfo);
				return userInfo;
			}
			return null;
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	// Función para actualizar la información del perfil del usuario
	const updateProfileInfo = async (updatedData) => {
		try {
			const token = Cookie.get("token");

			if (!token) {
				return null;
			}

			const userId = Cookie.get("userId");

			if (!userId) {
				return null;
			}

			const response = await axios.put(endPoints.update(userId), updatedData, {
				headers: {
					Authorization: `Bearer ${token}`,
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
			formImageData.append("file", profilePicture);

			const imageResponse = await axios.post(endPoints.auth.profilePicture, formImageData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const imageUrl = imageResponse.data.imageUrl;

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
		getProfileInfo,
		updateProfileInfo,
		uploadProfilePicture,
	};
}
