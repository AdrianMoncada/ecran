const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
	auth: {
		login: `${API}/users/login`,
		signUp: `${API}/users/signup`,
		profile: (userid) => `${API}/users/${userid}`,
		verification: (userid) => `${API}/users/confirm/${userid}`,
	},
	movies: {
		getMovie: (id) => `${API}/api/v1/movies/${id}`,
		movies: `${API}/api/v1/movies`,
		moviesDate: (minDate, maxDate) => `${API}/api/v1/movies/filter?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		filters: (queryParams) => `${API}/api/v1/movies/filter?${queryParams}`,
		search: (query) => `${API}/api/v1/movies/search?title=${query}`,
		watchlist: (userid) => `${API}/authorization/users/${userid}/watchlist`,
	},
};

export default endPoints;
