import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Search from "@components/search/Search";
import { SearchResultsContainer, ResultsContainer, List } from "@styles/pages.styles/search-results.styles";

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
				<Search />
			</SearchResultsContainer>

			<ResultsContainer>
				<div>
					<h1 className="title-results">
						Resultados para: <span className="result">{query}</span>
					</h1>
				</div>
				<div className="container-list">
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
				</div>
			</ResultsContainer>
		</>
	);
};

export default SearchResults;
