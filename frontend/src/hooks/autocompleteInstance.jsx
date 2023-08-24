import { useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { fetchMoviesByTitle } from "@/pages/api/search";

export const useAutocomplete = () => {
	const [autocompleteState, setAutocompleteState] = useState({
		collections: [],
		isOpen: false,
	});

	const autocomplete = createAutocomplete({
		placeholder: "Nemo, The Walking Dead...",
		onStateChange: ({ state }) => setAutocompleteState(state),
		getSources: () => [
			{
				sourceId: "movies-api",
				getItems: async ({ query }) => {
					if (query) {
						const movies = await fetchMoviesByTitle(query);
						const items = movies?.map((movie) => ({
							id: movie.movieId,
							title: movie.title,
							image_url: movie.image_url,
						}));
						return items;
					}
				},
			},
		],
		// ...props,
	});

	return { autocomplete, autocompleteState };
};
