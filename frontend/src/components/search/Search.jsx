import { useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
// import Link from "next/link";
import { Form, Input, InputContent, DropdownConteiner } from "./Search.styles";
import { FiSearch } from "react-icons/fi";
import { fetchMoviesByTitle } from "@/pages/api/search";
import { useRouter } from "next/router";
import AutocompleteItem from "@/components/results/AutocompleteItem";

export default function Search({ showAutocomplete, props }) {
	const [autocompleteState, setAutocompleteState] = useState({
		collections: [],
		isOpen: false,
	});

	const router = useRouter();

	//useMemo para asegurarse de que la instancia del componente de autocompletado no se cree innecesariamente en cada renderizado
	const autocomplete = useMemo(
		() =>
			//función que crea un componente de autocompletado.
			createAutocomplete({
				placeholder: "Buscando a Nemo, El Padrino...",
				//función que se invocará cuando cambie el estado del componente de autocompletado.
				onStateChange: ({ state }) => setAutocompleteState(state),
				// función que devuelve un array con datos
				getSources: () => [
					{
						sourceId: "movies-api",
						getItems: async ({ query }) => {
							//Si query (el texto ingresado por el usuario) tiene algún valor, se llama a la función fetchMoviesByTitle(query)
							if (query) {
								const movies = await fetchMoviesByTitle(query);
								const items = movies?.map((movie) => ({
									id: movie.movieId,
									title: movie.title,
									image_url: movie.image_url,
									genre: movie.genres.join(", "),
									year: movie.release_date,
								}));
								return items;
							}
						},
					},
				],
				//props contiene algunas propiedades que se deben pasar a la instancia del componente de autocompletado.
				...props,
			}),
		[props],
	);

	//Las referencias se utilizan para acceder a los elementos DOM directamente. Aquí referencian los elementos del formulario, el campo de entrada y el panel de resultados del autocompletado respectivamente.
	const formRef = useRef(null);
	const inputRef = useRef(null);
	const panelRef = useRef(null);

	//necesario para que el autocompletado pueda controlar el comportamiento del formulario y la entrada.
	const formProps = autocomplete.getFormProps({
		inputElement: inputRef.current,
		onSubmit: async (event) => {
			event.preventDefault();
			if (inputProps.value) {
				const movies = await fetchMoviesByTitle(inputProps.value);
				const items = movies.map((movie) => ({
					id: movie.movieId,
					title: movie.title,
					image_url: movie.image_url,
					genre: movie.genres.join(", "),
					year: movie.release_date,
				}));
				router.push({
					pathname: "/search-result",
					query: { query: inputProps.value, items: JSON.stringify(items) },
					// Pasamos los resultados serializados como cadena en la URL.
				});
			}
		},
	});

	// ... (resto del código)

	//devuelve propiedades que deben aplicarse al campo de entrada
	const inputProps = autocomplete.getInputProps({
		inputElement: inputRef.current,
	});

	return (
		<Form ref={formRef} {...formProps}>
			<InputContent>
				<Input ref={inputRef} {...inputProps} />
				<FiSearch className="iconSearch" />
				{/* verifica si el estado del autocompletadoestá abierto. Si es así, se procede a renderizar el panel de resultados. */}
				{showAutocomplete && autocompleteState.isOpen && (
					/* Esto permite al autocompletado controlar la visibilidad y posicionamiento del panel. */
					<DropdownConteiner ref={panelRef} {...autocomplete.getPanelProps()}>
						{autocompleteState.collections.map((collection, index) => {
							const { items } = collection;
							console.log({ items });
							return (
								<section key={`section-${index}`}>
									{items.length > 0 && (
										<ul {...autocomplete.getListProps()}>
											{items.map((item) => (
												<AutocompleteItem key={item.id} movieId={item.id} {...item} />
											))}
										</ul>
									)}
								</section>
							);
						})}
					</DropdownConteiner>
				)}
			</InputContent>
		</Form>
	);
}
