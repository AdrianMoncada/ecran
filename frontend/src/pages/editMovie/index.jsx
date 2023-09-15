import React from "react";
import Head from "next/head";
import Image from "next/image";
import { HeaderContainer, Container, AvatarContainer, TitleContainer } from "@/styles/pages.styles/admin.styles";

const EditMovie = () => {
	return (
		<>
			<Head>
				<meta
					name="add movie"
					content="Esta seccion es de uso privado para administradores de la pagina web para agregar peliculas"
				/>
			</Head>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<h2>
								<Image src="images/pencil.svg" alt="plus sign" width={54} height={54} className="icon" />
							</h2>
						</div>
					</AvatarContainer>
					<TitleContainer>
						<h2>Editar pelicula</h2>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<div></div>
		</>
	);
};

export default EditMovie;
