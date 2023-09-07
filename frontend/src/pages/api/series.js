export async function fetchSeries() {
	try {
		const response = await fetch("https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/series");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching series data:", error);
		throw error;
	}
}
