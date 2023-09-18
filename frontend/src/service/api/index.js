const API = process.env.NEXT_PUBLIC_API_URL;
const USER = process.env.NEXT_PUBLIC_USER;
const endPoints = {
	auth: {
		login: `${API}/users/login`,
		signUp: `${API}/users/signup`,
		profile: (userid) => `${API}/users/${userid}`,
		verification: (userid) => `${API}/users/${userid}/confirm`,
		check: `${API}/users/status/check`,
		comment: (userid) => `${USER}/users/${userid}/comments`,
		sendEmail: (userid) => `${USER}/users/${userid}/sendemail`,
	},
	movies: {
		getMovie: (id) => `${API}/api/v1/movies/${id}`,
		movies: `${API}/api/v1/movies`,
		moviesDate: (minDate, maxDate) => `${API}/api/v1/movies/filter?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		filters: (queryParams) => `${API}/api/v1/movies/filter?${queryParams}`,
		search: (query) => `${API}/api/v1/movies/search?title=${query}`,
		watchlist: (userid) => `${API}/users/${userid}/watchlist`,
	},
};

export default endPoints;
