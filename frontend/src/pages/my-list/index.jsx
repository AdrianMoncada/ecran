import { HeaderContainer, Container, AvatarContainer, TitleContainer } from "@/styles/pages.styles/my-list.styles";
import Carousel from "@components/carousel/Carousel";
import List from "@components/list/list";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const MyList = () => {
	const auth = useAuth();
	const [watchlistMovies, setWatchlistMovies] = useState([]);

	useEffect(() => {
		if (auth.user) {
			// const userId = auth.user.userId;
			console.log(auth.user);
			const userId = Cookies.get("userId");
			const url = `https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/authorization/users/${userId}/watchlist`;

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setWatchlistMovies(data);
					console.log(data);
				})
				.catch((error) => {
					console.error("Error al obtener las películas guardadas:", error);
				});
		}
	}, [auth.user]);

	return (
		<>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<h2>
								{auth.user.firstName.charAt(0)}
								{auth.user.lastName.charAt(0)}
							</h2>
						</div>
					</AvatarContainer>
					<TitleContainer>
						<h2>Hola, {auth.user.firstName}!</h2>
						<p>Editar perfil</p>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<List>
				<Carousel movies={watchlistMovies} top={false} />
			</List>
		</>
	);
};

export default MyList;
