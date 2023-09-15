const API = process.env.NEXT_PUBLIC_API_URL;
const USER = process.env.NEXT_PUBLIC_USER;
const endPoints = {
	auth: {
		login: `${USER}/users/login`,
		signUp: `${USER}/users/signup`,
		profile: (userid) => `${USER}/users/${userid}`,
	},
	movies: {
		getMovie: (id) => `${API}/api/v1/movies/${id}`,
		movies: `${API}/api/v1/movies`,
		moviesDate: (minDate, maxDate) => `${API}/api/v1/movies/filter?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		filters: (queryParams) => `${API}/api/v1/movies/filter?${queryParams}`,
		search: (query) => `${API}/api/v1/movies/search?title=${query}`,
		watchlist: (userid) => `${USER}/users/${userid}/watchlist`,
	},
};

export default endPoints;
