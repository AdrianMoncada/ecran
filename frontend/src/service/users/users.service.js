import Cookies from "js-cookie";
import endPoints from "../api";
import axios from "axios";

export async function verificateUser(id) {
	try {
		await fetch(endPoints.auth.verification(id));
	} catch (error) {
		console.error("Error verificating user:", error);
		throw error;
	}
}

export async function getUser(id) {
	const token = Cookies.get("token");
	axios.defaults.headers.Authorization = `Bearer ${token}`;
	const { data: user } = await axios.get(endPoints.auth.profile(id));
	const userInfoJSON = JSON.stringify(user);
	const encodedUserInfo = btoa(userInfoJSON);
	Cookies.set("userInfo", encodedUserInfo, { expires: 2 });
}
