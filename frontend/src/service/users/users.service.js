import endPoints from "../api";

export async function verificateUser(id) {
	try {
		await fetch(endPoints.auth.verification(id));
	} catch (error) {
		console.error("Error verificating user:", error);
		throw error;
	}
}
