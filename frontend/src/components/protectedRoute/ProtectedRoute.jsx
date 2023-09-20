// components/ProtectedRoute.js
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/router";

function ProtectedRoute({ children }) {
	const router = useRouter();
	const token = Cookies.get("token");

	useEffect(() => {
		if (!token) {
			router.replace("/signIn");
		}
	}, [token, router]);

	return children;
}

export default ProtectedRoute;
