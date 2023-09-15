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
		const { headers } = await axios.post(endPoints.auth.login, { email, password }, options).then(res => console.log(res)).catch(err => console.err(err))
		const token = headers.token;
		if (token) {
			Cookie.set("token", token, { expires: 5 });
			Cookie.set("userId", headers.userid, { expires: 5 });
			const userInfo = {
				firstName: "Jacobo",
				lastName: "Arcila",
				email: "jacoboArcila1@gmail.com",
			};
			const userInfoJSON = JSON.stringify(userInfo);
			const encodedUserInfo = btoa(userInfoJSON);
			Cookie.set("userInfo", encodedUserInfo, { expires: 5 });
			setUser(userInfo);
			/* axios.defaults.headers.Authorization = `Bearer ${token}`;
			const options = {
				headers: {
					"Content-Type": "application/json",
				}
			}; */
			const { data: user } = await axios.get(endPoints.auth.profile(headers.userid), options);
			console.log(user);
			setUser(user);
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

	return {
		user,
		setUser,
		signIn,
		signUp,
		signOut,
	};
}
