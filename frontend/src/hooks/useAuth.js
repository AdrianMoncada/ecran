import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import endPoints from "@/service/api";

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
			setUser({
				firstName: "Jacobo",
				lastName: "Arcila",
				email: "jacoboArcila1@gmail.com",
			});
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
		// Elimina la cookie de token y establece el usuario en null para cerrar sesión.
		Cookie.remove("token");
		setUser(null);
	};

	return {
		user,
		signIn,
		signUp,
		signOut,
	};
}
