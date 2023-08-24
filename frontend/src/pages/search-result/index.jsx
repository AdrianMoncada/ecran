import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Search from "@components/search/Search";
import { SearchResultsContainer, ResultsContainer } from "@styles/pages.styles/search-results.styles";
import AutocompleteItem from "@/components/results/AutocompleteItem";
import notFound from '@public/images/Not-found.png'

const SearchResults = () => {
	const router = useRouter();
	const { query, items } = router.query;

	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (query && items) {
			const results = JSON.parse(items);
			setSearchResults(results);
		}
	}, [query, items]);

	return (
		<>
			<SearchResultsContainer>
				<Search showAutocomplete={false} />
			</SearchResultsContainer>

			<ResultsContainer>
				<div>
					<h1 className="title-results">
						Resultados para: <span className="result">{query}</span>
					</h1>
				</div>
				<div className="container-list">
					{searchResults.length > 0 ? (
						<ul>
							{searchResults.map((item) => (
								<List key={item.id}>
									<div className="list">
										<div className="imageList">
											<Image src={item.image_url} alt={item.title} className="image" width={100} height={200} />
										</div>

										<div className="descriptionList">
											<h3 className="titleList">{item.title}</h3>
											<p>Genero</p>
											<p>Año</p>
										</div>
									</div>
									<hr />
								</List>
							))}
						</ul>
					) : (
						<NotFound>
							<img src={notFound} alt="" />
							<div className="not-found-text">
								<h2>Oops!</h2>
								<p>No hay resultados para tu busqueda</p>
							</div>
						</NotFound>
						

					)}
				</div>
			</ResultsContainer>
		</>
	);
};

export default SearchResults;
