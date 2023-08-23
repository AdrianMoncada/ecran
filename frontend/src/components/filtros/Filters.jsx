// Filters.js
import React, { useState } from 'react';
import Checkbox from './help/Checkbox';
import RangeSlider from './help/RangeSlider';
import { ContainerGenre, ContainerPlaforms, Container } from "./Filters.styles"
import CheckboxImage from './help/CheckboxImage';

const MIN_DATE = 1990;
const MAX_DATE = 2023;

const Filters = ({ genresOptions, platformsOptions, applyFilters, clearFilters }) => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [dateRange, setDateRange] = useState([MIN_DATE, MAX_DATE]);

    const handleApplyFilters = () => {
        // Construir la URL con los parámetros seleccionados y llamar a la función applyFilters
        const filters = {
            genres: selectedGenres.join(','),
            platforms: selectedPlatforms.join(','),
            min_date: dateRange[0],
            max_date: dateRange[1],
            order: 'desc', // Puedes modificar esto según tus necesidades
        };
        applyFilters(filters);
    };

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
                            onChange={() => {
                                if (selectedGenres.includes(genre)) {
                                    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
                                } else {
                                    setSelectedGenres([...selectedGenres, genre]);
                                }
                            }}
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
                            onChange={() => {
                                if (selectedPlatforms.includes(platform.label)) {
                                    setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform.label));
                                } else {
                                    setSelectedPlatforms([...selectedPlatforms, platform.label]);
                                }
                            }}
                        />
                    ))}
                </ContainerPlaforms>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Rango de Fechas</h2>
                <RangeSlider
                    min={MIN_DATE}
                    max={MAX_DATE}
                    value={dateRange}
                    onChange={setDateRange}
                />
                <div className="flex justify-between">
                    <span>{dateRange.min}</span>
                    <span>{dateRange.max}</span>
                </div>
            </div>
            <button
                onClick={handleApplyFilters}
                className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
            >
                Aplicar Filtros
            </button>
        </Container>
    );
};

export default Filters;
