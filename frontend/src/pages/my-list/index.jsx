import { HeaderContainer, Container, AvatarContainer, TitleContainer } from "@/styles/pages.styles/my-list.styles";
import Carousel from "@components/carousel/Carousel";
import List from "@components/list/list";
import fetchMoviesWithTop, { fetchMovies, fetchMoviesDate } from "../../pages/api/movies";

const MyList = ({ response }) => {
	return (
		<>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<h2>IA</h2>
						</div>
					</AvatarContainer>
					<TitleContainer>
						<h2>Hola Isabela!</h2>
						<p>Editar perfil</p>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<List>
				<Carousel movies={response} top={false} />
			</List>
			<List>
				<Carousel movies={response} top={false} />
			</List>
		</>
	);
};

export async function getStaticProps() {
	const response = await fetchMovies();
	const moviesTop = await fetchMoviesWithTop();
	const moviesOld = await fetchMoviesDate(2000, 2004);
	return {
		props: {
			response,
			moviesTop,
			moviesOld,
		},
	};
}

export default MyList;
