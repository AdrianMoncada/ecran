// Filters.js
import React, { useState, useEffect } from "react";
import Checkbox from "./help/Checkbox";
import RangeSlider from "./help/RangeSlider";
import { ContainerGenre, ContainerPlaforms, Container } from "./Filters.styles";
import CheckboxImage from "./help/CheckboxImage";
import endPoints from "@/service/api";
import { paginationMovies } from "@/service/movies/movies.service";

const MIN_DATE = 1914;
const MAX_DATE = 2023;

const Filters = ({ genresOptions, platformsOptions, setMovies, pagina, setCount, count, setControl }) => {
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [selectedPlatforms, setSelectedPlatforms] = useState([]);
	const [dateRange, setDateRange] = useState([MIN_DATE, MAX_DATE]);

	const handleGenreChange = (genre) => {
		if (selectedGenres.includes(genre)) {
			setSelectedGenres(selectedGenres.filter((item) => item !== genre));
		} else {
			setSelectedGenres([...selectedGenres, genre]);
		}
	};

	const handlePlatformChange = (platform) => {
		if (selectedPlatforms.includes(platform)) {
			setSelectedPlatforms(selectedPlatforms.filter((item) => item !== platform));
		} else {
			setSelectedPlatforms([...selectedPlatforms, platform]);
		}
	};

	const handleSliderChange = (value) => {
		setDateRange(value);
	};

	useEffect(() => {
		const queryParams = new URLSearchParams({
			genres: selectedGenres.join(","),
			platforms: selectedPlatforms.join(","),
			min_date: dateRange[0],
			max_date: dateRange[1],
			order: "desc",
		});

		const apiUrl = endPoints.movies.filters(queryParams, pagina);
		console.log("🚀 ~ file: Filters.jsx:48 ~ useEffect ~ apiUrl:", apiUrl);
		fetch(apiUrl)
			.then((response) => response.json())
			.then(async (data) => {
				if (data.movies.length === 0) {
					const response = await paginationMovies(pagina);
					setMovies(response.movies);
					setCount(response.size);
					setControl(false);
				} else {
					setMovies(data.movies);
					setCount(data.size);
					setControl(false);
				}
			})
			.catch((error) => console.log(error));
	}, [selectedGenres, selectedPlatforms, dateRange, pagina, count, setMovies, setCount]);

	return (
		<Container style={{ color: "#663B9F" }} className="p-4 space-y-4 text-center">
			<h2 className="font-bold  title">Elige una opción...</h2>
			<div>
				<h3 className="text-lg font-semibold">Géneros</h3>
				<ContainerGenre>
					{genresOptions.map((genre) => (
						<Checkbox
							key={genre}
							label={genre}
							isChecked={selectedGenres.includes(genre)}
							onChange={() => handleGenreChange(genre)}
						/>
					))}
				</ContainerGenre>
			</div>
			<div>
				<h2 className="text-lg font-semibold">Plataformas</h2>
				<ContainerPlaforms>
					{platformsOptions.map((platform) => (
						<CheckboxImage
							key={platform.id}
							label={platform}
							isChecked={selectedPlatforms.includes(platform.label)}
							onChange={() => handlePlatformChange(platform.label)}
						/>
					))}
				</ContainerPlaforms>
			</div>
			<div>
				<h2 className="text-lg font-semibold">Rango de Fechas</h2>
				<RangeSlider min={MIN_DATE} max={MAX_DATE} value={dateRange} onChange={handleSliderChange} />
			</div>
			<button
				onClick={() => {
					setSelectedGenres([]);
					setSelectedPlatforms([]);
					setDateRange([MIN_DATE, MAX_DATE]);
				}}
			>
				Limpiar filtros
			</button>
		</Container>
	);
};

export default Filters;
