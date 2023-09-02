import { HeaderContainer, Container, AvatarContainer, TitleContainer } from "@/styles/pages.styles/my-list.styles";
import Carousel from "@components/carousel/Carousel";
import List from "@components/list/list";

const MyList = () => {
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
				<Carousel />
			</List>
			<List>
				<Carousel />
			</List>
		</>
	);
};

export default MyList;
