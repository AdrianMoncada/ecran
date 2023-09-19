const API = process.env.NEXT_PUBLIC_API_URL;
const endPoints = {
	auth: {
		login: `${API}/users/login`,
		signUp: `${API}/users/signup`,
		profile: (userid) => `${API}/users/${userid}`,
		verification: (userid) => `${API}/users/${userid}/confirm`,
		check: `${API}/users/status/check`,
		comment: (userid) => `${API}/users/${userid}/comments`,
	},
	movies: {
		getMovie: (id) => `${API}/api/v1/movies/${id}`,
		movies: `${API}/api/v1/movies`,
		moviesDate: (minDate, maxDate) => `${API}/api/v1/movies/filter?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		filters: (queryParams) => `${API}/api/v1/movies/filter?${queryParams}`,
		search: (query) => `${API}/api/v1/movies/search?title=${query}`,
		watchlist: (userid) => `${API}/users/${userid}/watchlist`,
		avatar: `${API}/users/image`,
		top: `${API}/api/v1/movies/top`,
		genre: `${API}/api/v1/movies/filter?=Drama`,
		pagination: (page) => `${API}/api/v1/movies/page/${page}`,
	},
};

export default endPoints;
