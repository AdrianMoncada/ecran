import {
	HeaderContainer,
	Container,
	AvatarContainer,
	TitleContainer,
	CardContainer,
	TitleListContainer,
} from "@/styles/pages.styles/my-list.styles";
import ImportarDesdeExcel from "@components/files/import/Import";
import ExportarExcel from "@components/files/export/Export";
import Carousel from "@components/carousel/Carousel";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import endPoints from "@/service/api";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import ProtectedRoute from "@components/protectedRoute/ProtectedRoute";
import { getUser } from "@/service/users/users.service";

const MyList = () => {
	const auth = useAuth();
	const [watchlistMovies, setWatchlistMovies] = useState([]);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isVerified, setVerified] = useState(false);
	const [isLogged, setLogged] = useState(true);
	const token = Cookies.get("token");
	const userId = Cookies.get("userId");
	const encodedUserInfo = Cookies.get("userInfo");

	const fetchWatchList = () => {
		fetch(endPoints.movies.watchlist(userId), {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setWatchlistMovies(data);
			})
			.catch((error) => {
				console.error("Error al obtener las películas guardadas:", error);
			});
	};

	useEffect(() => {
		getUser(userId);
		if (userId) {
			const userInfoJSON = atob(encodedUserInfo);
			const userInfo = JSON.parse(userInfoJSON);
			// const userId = auth.user.userId;
			userInfo.enabled ? setVerified(true) : setVerified(false);
			setLogged(true);
			fetchWatchList();
		} else {
			setLogged(false);
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
						Authorization: `Bearer ${token}`,
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
		<ProtectedRoute>
			<Head>
				<meta
					name="description"
					content="Esta es la página en la que puedes ver una lista de tus peliculas guardadas y la lista para ver las peliculas que has puntuado"
				/>
			</Head>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<img
								src={auth.user?.imageUrl || "/image/profile.png"} // Ruta de la imagen de perfil
								alt="Imagen de perfil"
								width={150}
								height={150}
							/>
						</div>
					</AvatarContainer>
					<TitleContainer>
						<h2>Hola, {auth.user?.firstName}!</h2>
						<Link href="/profile">
							<p>Editar perfil</p>
						</Link>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<TitleListContainer>
				<div>
					<h3>Tu lista</h3>
					<p>Aquí podrás encontrar las películas y series que hayas guardado previamente.</p>
				</div>
				<div className="buttons">
					<ExportarExcel listaPeliculas={watchlistMovies} isVerified={isVerified} isLogged={isLogged} />
					<ImportarDesdeExcel
						fetchMovies={fetchMovies}
						successMessage={successMessage}
						errorMessage={errorMessage}
						isVerified={isVerified}
						isLogged={isLogged}
					/>
				</div>
			</TitleListContainer>
			<CardContainer>
				<Carousel movies={watchlistMovies} top={false} />
			</CardContainer>
		</ProtectedRoute>
	);
};

export default MyList;
