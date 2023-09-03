// Filters.js
import React, { useState, useEffect } from "react";
import Checkbox from "./help/Checkbox";
import RangeSlider from "./help/RangeSlider";
import { ContainerGenre, ContainerPlaforms, Container } from "./Filters.styles";
import CheckboxImage from "./help/CheckboxImage";
import endPoints from "@/service/api";

const MIN_DATE = 1990;
const MAX_DATE = 2023;

const Filters = ({ genresOptions, platformsOptions, setFilteredMovies, setShowFiltered }) => {
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

		const apiUrl = endPoints.movies.filters(queryParams);
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => setFilteredMovies(data))
			.catch((error) => console.log(error));
	}, [selectedGenres, selectedPlatforms, dateRange]);

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
					setShowFiltered(false);
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
