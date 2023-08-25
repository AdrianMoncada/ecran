import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Search from "@components/search/Search";
import { SearchResultsContainer, ResultsContainer, NotFound } from "@styles/pages.styles/search-results.styles";
import AutocompleteItem from "@/components/results/AutocompleteItem";
import Image from "next/image";

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
								<AutocompleteItem key={item.id} movieId={item.id} {...item} />
							))}
						</ul>
					) : (
						<NotFound>
							<Image src="/images/Not-found.png" alt="" width={200} height={200} />
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
