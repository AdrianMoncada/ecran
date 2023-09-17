const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
	auth: {
		login: `${API}/authorization/users/login`,
		signUp: `${API}/authorization/users`,
		getProfile: (userid) => `${API}/users/${userid}`,
		update: (userid) => `${API}/users/${userid}`,
		profile: (userid) => `${API}/authorization/users/${userid}`,
		profilePicture: (userid) => `${API}/authorization/users/${userid}/image`,
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
