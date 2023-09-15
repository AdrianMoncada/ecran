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
		await axios
			.post(endPoints.auth.login, { email, password }, options)
			.then(async (res) => {
				const response = res.headers;
				console.log("🚀 ~ file: useAuth.js:31 ~ signIn ~ headers:", res);
				const token = response.token;
				if (token) {
					Cookie.set("token", token, { expires: 5 });
					Cookie.set("userId", response.userid, { expires: 5 });
					/* axios.defaults.headers.Authorization = `Bearer ${token}`; */
					const { data: user } = await axios.get(endPoints.auth.profile(response.userid));
					console.log("🚀 ~ file: useAuth.js:38 ~ .then ~ user:", user);
					setUser(user);
					const userInfoJSON = JSON.stringify(user);
					const encodedUserInfo = btoa(userInfoJSON);
					Cookie.set("userInfo", encodedUserInfo, { expires: 5 });
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

	return {
		user,
		setUser,
		signIn,
		signUp,
		signOut,
	};
}
