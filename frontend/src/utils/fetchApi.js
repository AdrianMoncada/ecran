export const postData = async (url, data) => {
	// eslint-disable-next-line no-useless-catch
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return response;
	} catch (error) {
		throw error;
	}
};
