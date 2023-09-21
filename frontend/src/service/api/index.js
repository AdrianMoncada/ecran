const API = process.env.NEXT_PUBLIC_API_URL;
const endPoints = {
	auth: {
		login: `${API}/users/login`,
		signUp: `${API}/users/signup`,
		profile: (userid) => `${API}/users/${userid}`,
		verification: (userid) => `${API}/users/${userid}/confirm`,
		check: `${API}/users/status/check`,
		profilePicture: `${API}/users/image`,
		update: (userid) => `${API}/users/${userid}`,
		comment: (userid) => `${API}/users/${userid}/comments`,
		sendEmail: (userid) => `${API}/users/${userid}/sendemail`,
	},
	movies: {
		getMovie: (id) => `${API}/api/v1/movies/${id}`,
		movies: `${API}/api/v1/movies`,
		moviesDate: (minDate, maxDate) =>
			`${API}/api/v1/movies/filter/1?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		filters: (queryParams, page) => `${API}/api/v1/movies/filter/${page}?${queryParams}`,
		search: (query) => `${API}/api/v1/movies/search?title=${query}`,
		watchlist: (userid) => `${API}/users/${userid}/watchlist`,
		avatar: `${API}/users/image`,
		top: `${API}/api/v1/movies/top`,
		genre: `${API}/api/v1/movies/filter/1?=Drama`,
		pagination: (page) => `${API}/api/v1/movies/page/${page}`,
		suggestion: `${API}/api/v1/movies/suggestions`,
	},
};

export default endPoints;
