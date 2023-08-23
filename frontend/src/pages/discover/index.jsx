import React, { useState } from 'react'
import { Container, Filtros, List } from "@/styles/Discover.styles";
import { fetchMovies } from "@/pages/api/movies";
import Filters from '@components/filtros/Filters';
import platformsOptions from "@/assets/platforms.json"
import Search from '@components/search/Search';
import { useRouter } from "next/router";

const genresOptions = ["Acción", "Drama", "Comedia", "Aventura", "Fantasia", "Musicales", "Documentales", "Suspenso", "Horror", "Animadas", "Terror", "Ciencia ficcion"]

const index = ({ response }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);
    const router = useRouter();

    const applyFilters = async (filters) => {
        const apiUrl = `http://54.234.185.146:8080/api/v1/movies/filter?genres=${filters.genres}&platforms=${filters.platforms}&min_date=${filters.min_date}&max_date=${filters.max_date}&order=${filters.order}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setFilteredMovies(data);
            setShowFiltered(true);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const clearFilters = () => {
        setShowFiltered(false);
        setFilteredMovies([]);
    };

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
                    // 3 es la longitud de "..."
                    resultado += palabra + " ";
                    contador += palabra.length + 1; // +1 para el espacio
                } else {
                    break;
                }
            }
            return resultado.trim() + "...";
        }
    }

    const limite = 200;

    return (
        <div>
            <Container>
                <Search />
            </Container>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <Filtros>
                    <Filters genresOptions={genresOptions}
                        platformsOptions={platformsOptions}
                        applyFilters={applyFilters}
                        clearFilters={clearFilters}
                    />
                </Filtros>
                <div>
                    {displayedMovies.map((item) => (
                        <List key={item.id} onClick={() => router.push(`/movies/${item.movieId}`)}>
                            <div className="list">
                                <div className="imageList">
                                    <img src={item?.image_url} alt={item?.title} className="image" width={100} height={200} />
                                </div>
                                <div className="descriptionList">
                                    <p className="textItem">{item.genre}</p>
                                    <p className="textItem">{item.releaseDate}</p>
                                    <h3 className="titleList">{item.title}</h3>
                                    <p className='review'>{cortarTexto(item.review, limite)}</p>
                                </div>
                            </div>
                            <hr />
                        </List>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetchMovies();
    return {
        props: {
            response,
        },
    };
}

export default index