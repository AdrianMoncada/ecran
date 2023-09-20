// components/ProtectedRoute.js
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";
import decodeJwt from "@/utils/decodeJwt";

function ProtectedRouteAdmin({ children }) {
	const router = useRouter();
	const token = Cookies.get("token");

	useEffect(() => {
		if (token) {
			const decodeToken = decodeJwt(token);
			if (decodeToken.payload.scope[1].authority === "ROLE_USER") {
				router.replace("/");
			}
		} else {
			router.replace("/signIn");
		}
	}, [token, router]);

	return children;
}

export default ProtectedRouteAdmin;
