import {
	HeaderContainer,
	Container,
	AvatarContainer,
	TitleContainer,
	CardContainer,
	TitleListContainer,
} from "@/styles/pages.styles/my-list.styles";
import Carousel from "@components/carousel/Carousel";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import endPoints from "@/service/api";
import ImportarDesdeExcel from "@components/files/import/Import";
import ExportarExcel from "@components/files/export/Export";

const MyList = () => {
	const auth = useAuth();
	const [watchlistMovies, setWatchlistMovies] = useState([]);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const fetchWatchList = () => {
		const userId = Cookies.get("userId");
		fetch(endPoints.movies.watchlist(userId))
			.then((response) => response.json())
			.then((data) => {
				setWatchlistMovies(data);
			})
			.catch((error) => {
				console.error("Error al obtener las películas guardadas:", error);
			});
	};

	useEffect(() => {
		if (auth.user) {
			// const userId = auth.user.userId;
			fetchWatchList();
		}
	}, [auth.user]);

	const fetchMovies = async (data) => {
		console.log(data);
		const successfulImports = [];
		const failedImports = [];

		for (const item of data) {
			const body = {
				movieId: item.ID,
			};
			try {
				const userId = Cookies.get("userId");
				await fetch(endPoints.movies.watchlist(userId), {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(body),
				});
				successfulImports.push(item);
			} catch (error) {
				failedImports.push(item);
			}
		}

		if (successfulImports.length > 0) {
			fetchWatchList();
			setSuccessMessage(`Se cargaron ${successfulImports.length} películas con éxito.`);
		}

		if (failedImports.length > 0) {
			setErrorMessage(`No se pudieron cargar ${failedImports.length} películas.`);
		}
	};

	return (
		<>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<h2>
								{/* {auth.user?.firstName.charAt(0)}
								{auth.user?.lastName.charAt(0)} */}
							</h2>
						</div>
					</AvatarContainer>
					<TitleContainer>
						<h2>Hola!</h2>
						<p>Editar perfil</p>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<TitleListContainer>
				<div>
					<h3>Tu lista</h3>
					<p>Aquí podrás encontrar las películas y series que hayas guardado previamente.</p>
				</div>
				<div className="buttons">
					<ExportarExcel listaPeliculas={watchlistMovies} />
					<ImportarDesdeExcel fetchMovies={fetchMovies} successMessage={successMessage} errorMessage={errorMessage} />
				</div>
			</TitleListContainer>
			<CardContainer>
				<Carousel movies={watchlistMovies} top={false} />
			</CardContainer>
		</>
	);
};

export default MyList;
