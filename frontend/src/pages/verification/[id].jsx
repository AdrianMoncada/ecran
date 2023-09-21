import {
	Container,
	ContainerHead,
	ContainerFrom,
	Button,
	ImageContainer,
	SecondaryButton,
	ButtonsContainer,
} from "@styles/pages.styles/verification.styles";
import { Dot1, Dot2 } from "@styles/pages.styles/verification.styles";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Head from "next/head";
import endPoints from "@/service/api";
import Loader from "@components/loader/Loader";
import { dot1, dot2 } from "../../assets/svgs";
import { getUser } from "@/service/users/users.service";

const Verification = ({ id }) => {
	const [loading, setLoading] = useState(true);
	const [verificated, setVerificated] = useState(false);
	const [alreadyVerified, setAlreadyVerified] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(endPoints.auth.verification(id))
			.then(async (response) => {
				if (response.data.code === "300") {
					setVerificated(false);
					setAlreadyVerified(true);
					getUser(id);
				}
				if (response.data.code === "200") {
					setAlreadyVerified(false);
					setVerificated(true);
				}
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setError(true);
				setLoading(false);
			});
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			<Head>
				<title>ÉCRAN | Verification</title>
				<meta name="description" content="Esta es la página donde verificas tu cuenta" />
			</Head>
			<Dot1>{dot1}</Dot1>
			<Dot2>{dot2}</Dot2>

			{loading && <Loader color={"#7400FF"}></Loader>}
			{!loading && error && (
				<>
					<ContainerHead>
						<ImageContainer>
							<Link href="/">
								{/* eslint-disable-next-line */}
								<img src="https://ecran.s3.amazonaws.com/Logos/%C3%89CRAN.png" alt="ecranLogo" />
							</Link>
						</ImageContainer>
						<h3 className="title">Lo sentimos, hubo un error al verificar tu cuenta.</h3>
					</ContainerHead>
					<ContainerFrom>
						<p className="text">Por favor, intente más tarde.</p>
						<ButtonsContainer>
							<Link className="link" href="/">
								<Button>Inicio </Button>
							</Link>
							<Link className="link" href="/signIn">
								<SecondaryButton>Iniciar sesión </SecondaryButton>
							</Link>
						</ButtonsContainer>
					</ContainerFrom>
				</>
			)}
			{!loading && !error && alreadyVerified && (
				<>
					<ContainerHead>
						<ImageContainer>
							<Link href="/">
								{/* eslint-disable-next-line */}
								<img src="https://ecran.s3.amazonaws.com/Logos/%C3%89CRAN.png" alt="ecranLogo" />
							</Link>
						</ImageContainer>
						<h3 className="title">Tu cuenta ya estaba verificada!</h3>
					</ContainerHead>
					<ContainerFrom>
						<p className="text">Ya puedes acceder a todas nuestras increíbles funcionalidades con tu cuenta.</p>
						<ButtonsContainer>
							<Link className="link" href="/">
								<Button>Inicio </Button>
							</Link>
							<Link className="link" href="/signIn">
								<SecondaryButton>Iniciar sesión </SecondaryButton>
							</Link>
						</ButtonsContainer>
					</ContainerFrom>
				</>
			)}
			{!loading && !error && verificated && (
				<>
					<ContainerHead>
						<ImageContainer>
							<Link href="/">
								{/* eslint-disable-next-line */}
								<img src="https://ecran.s3.amazonaws.com/Logos/%C3%89CRAN.png" alt="ecranLogo" />
							</Link>
						</ImageContainer>
						<h3 className="title">Tu cuenta ha sido verificada con éxito!</h3>
					</ContainerHead>
					<ContainerFrom>
						<p className="text">
							Ahora puedes acceder a todas nuestras increíbles funcionalidades con tu nueva cuenta.
						</p>
						<ButtonsContainer>
							<Link className="link" href="/">
								<Button>Inicio </Button>
							</Link>
							<Link className="link" href="/signIn">
								<SecondaryButton>Iniciar sesión </SecondaryButton>
							</Link>
						</ButtonsContainer>
					</ContainerFrom>
				</>
			)}
			<Toaster richColors position="bottom-right" />
		</Container>
	);
};

export default Verification;

export async function getServerSideProps(context) {
	let id;
	context.params.id ? (id = context.params.id) : (id = null);

	return {
		props: {
			id,
		},
	};
}

Verification.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
