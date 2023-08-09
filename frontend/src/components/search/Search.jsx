// import React, { useMemo, useRef, useState } from "react";
// import { createAutocomplete } from "@algolia/autocomplete-core";
// import Image from "next/image";
// import { Form, Input, InputContent } from "./Search.styles";

// interface AutocompleteItemProps {
// 	id: number;
// 	title: string;
// 	img: string;
// }

// interface Props {
// 	id: number;
// 	title: string;
// 	img: string;
// }

// const AutocompleteItem: React.FC<AutocompleteItemProps> = ({ id, title, img }) => {
// 	return (
// 		<li key={id}>
// 			<Image src={img} alt={title} className="w-12 h-12 object-contain" />
// 			<div>
// 				<h3 className="text-sm font-semibold">{title}</h3>
// 			</div>
// 		</li>
// 	);
// };

// export default function Search(props: Props) {
// 	const [autocompleteState, setAutocompleteState] = useState<any>({
// 		collections: [],
// 		isOpen: false,
// 	});

// 	//crear el autocomplete solo cuando cambie la props, con usememo
// 	const autocomplete = useMemo(
// 		() =>
// 			createAutocomplete({
// 				placeholder: "Nemo, The Walking Dead...",
// 				//calback que se va a ejcutar cada vez que cambie el estado del autocomplete
// 				onStateChange: ({ state }) => setAutocompleteState(state),
// 				//conecto con la api
// 				getSources: () => [
// 					{
// 						sourceId: "movies-api",
// 						getItems: ({ query }) => {
// 							if (query) {
// 								return fetch(`/api/search?q=${query}`).then((res) => res.json());
// 							}
// 						},
// 					},
// 				],
// 				...props,
// 			}),
// 		[props],
// 	);

// 	const formRef = useRef<HTMLFormElement>(null);
// 	const inputRef = useRef<HTMLInputElement>(null);
// 	//donde se vana dibujar los resultados de las busquedas
// 	const panelRef = useRef<HTMLDivElement>(null);

// 	//recuperamos las props
// 	const formProps = autocomplete.getFormProps({
// 		inputElement: inputRef.current,
// 	});
// 	const inputProps = autocomplete.getInputProps({
// 		inputElement: inputRef.current,
// 	});

// 	return (
// 		<Form ref={formRef} {...formProps}>
// 			<InputContent>
// 				<Input ref={inputRef} {...inputProps} />

// 				{autocompleteState.isOpen && (
// 					<div
// 						className="absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10"
// 						ref={panelRef}
// 						{...autocomplete.getPanelProps()}
// 					>
// 						{/* mostrar los resultados */}
// 						{autocompleteState.collections.map((collection: any, index: any) => {
// 							const { items } = collection;
// 							// console.log({ items });
// 							return (
// 								<section key={`section-${index}`}>
// 									{items.length > 0 && (
// 										<ul {...autocomplete.getListProps()}>
// 											{items.map((item: any) => (
// 												<AutocompleteItem key={item.id} {...item} />
// 											))}
// 										</ul>
// 									)}
// 								</section>
// 							);
// 						})}
// 					</div>
// 				)}
// 			</InputContent>
// 		</Form>
// 	);
// }
