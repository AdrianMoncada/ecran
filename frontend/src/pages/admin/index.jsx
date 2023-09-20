import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
	HeaderContainer,
	Container,
	AvatarContainer,
	TitleContainer,
	TitleListContainer,
} from "@/styles/pages.styles/admin.styles";
import ProtectedRouteAdmin from "@components/protectedRoute/ProtectedAdmin";

const AdminPage = () => {
	return (
		<ProtectedRouteAdmin>
			<Head>
				<meta name="admin page" content="Esta seccion es de uso privado para administradores de la pagina web" />
			</Head>
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
						<h2>Hola, Admin 👋</h2>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<TitleListContainer>
				<div>
					<h3>Acciones</h3>
					<div>
						<Link href={"/admin/addMovie"} className="actions-container">
							<Image src="images/plus.svg" alt="plus sign" width={24} height={24} className="icon" />
							<p>Agregar nueva película</p>
						</Link>
					</div>
					<hr></hr>
					<div>
						<Link href={"/admin/editMovie"} className="actions-container">
							<Image src="images/pencil.svg" alt="pencil sign" width={24} height={24} className="icon" />
							<p>Editar película</p>
						</Link>
					</div>
				</div>
			</TitleListContainer>
		</ProtectedRouteAdmin>
	);
};

export default AdminPage;
