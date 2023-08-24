import React, { useEffect, useState } from "react";
import { Container, Filtros, List, ContainerSearch, ModalFilters } from "@/styles/Discover.styles";
import { fetchMovies } from "@/pages/api/movies";
import Filters from "@components/filtros/Filters";
import platformsOptions from "@/assets/platforms.json";
import Search from "@components/search/Search";
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';
import { Box, Modal, Button, Hidden } from "@mui/material";

const genresOptions = [
	"Acción",
	"Drama",
	"Comedia",
	"Aventura",
	"Fantasia",
	"Musicales",
	"Documentales",
	"Suspenso",
	"Horror",
	"Animadas",
	"Terror",
	"Ciencia ficcion",
];

const POR_PAGINA = 5;

const Discover = ({ response }) => {
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [showFiltered, setShowFiltered] = useState(false);
	const [count, setCount] = useState(0);
	const router = useRouter();
	const [pagina, setPagina] = useState(1);

	const toggleFilterVisibility = () => {
		setIsFilterVisible(prevState => !prevState);
	};

	const handleChange = (e, value) => {
		setPagina(value)
	}

	useEffect(() => {
		filteredMovies.length !== 0 ? setShowFiltered(true) : setShowFiltered(false);
		if (showFiltered) {
			setCount(filteredMovies.length / POR_PAGINA);
		} else {
			setCount(response.length / POR_PAGINA);
		}
	}, [filteredMovies]);

	const displayedMovies = showFiltered ? filteredMovies : response;

	function cortarTexto(texto, limite) {
		if (texto.length <= limite) {
			return texto;
		} else {
			const palabras = texto.split(" ");
			let resultado = "";
			let contador = 0;
			for (const palabra of palabras) {
				if (contador + palabra.length + resultado.length + 3 <= limite) {
					resultado += palabra + " ";
					contador += palabra.length + 1;
				} else {
					break;
				}
			}
			return resultado.trim() + "...";
		}
	}

	const limite = 300;

	return (
		<div>
			<Container>
				<Search />
			</Container>
			<ContainerSearch>
				<Hidden mdDown>
					<Filtros>
						<Filters
							genresOptions={genresOptions}
							platformsOptions={platformsOptions}
							setFilteredMovies={setFilteredMovies}
						/>
					</Filtros>
				</Hidden>
				<Hidden mdUp>
					{/* Botón para mostrar el modal del filtro en dispositivos móviles */}
					<Button onClick={toggleFilterVisibility}>
						Filtros
					</Button>
					{/* Modal para la sección de filtro en dispositivos móviles */}
					<Modal sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", height: "200px" }} open={isFilterVisible} onClose={toggleFilterVisibility}>
						<ModalFilters>
							<Filters
								genresOptions={genresOptions}
								platformsOptions={platformsOptions}
								setFilteredMovies={setFilteredMovies}
							/>
						</ModalFilters>
					</Modal>
				</Hidden>
				<div>
					{displayedMovies.slice((pagina - 1) * POR_PAGINA, (pagina - 1) * POR_PAGINA + POR_PAGINA).map((item) => (
						<List key={item.id} onClick={() => router.push(`/movies/${item.movieId}`)}>
							<div className="list">
								<div className="imageList">
									<img src={item?.image_url} alt={item?.title} className="image" width={100} height={200} />
								</div>
								<div className="descriptionList">
									<p className="textItem">{item.genres.map(i => i).join("/")}</p>
									<p className="textItem">{item.releaseDate}</p>
									<h3 className="titleList">{item.title}</h3>
									<p className="review">{cortarTexto(item.review, limite)}</p>
								</div>
							</div>
							<hr />
						</List>
					))}
					<Box sx={{ width: "100%", display: "flex", justifyContent: "center", margin: "20px 0" }}>
						<Pagination count={Math.round(count)} page={pagina} onChange={handleChange} color="secondary" variant="outlined" shape="rounded" />
					</Box>
				</div>
			</ContainerSearch>
		</div>
	);
};

export async function getStaticProps() {
	const response = await fetchMovies();
	return {
		props: {
			response,
		},
	};
}

export default Discover;
