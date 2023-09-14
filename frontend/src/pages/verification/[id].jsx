// import { Container, ContainerHead, ContainerFrom, SecondLabels, Button } from "@styles/pages.styles/SignIn.styles";
import { Container, ContainerHead, ContainerFrom } from "@styles/pages.styles/SignIn.styles";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import dataInput from "@/assets/login.json";
// import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { fetchMovieId, fetchMovies } from "@/service/movies/movies.service";
import endPoints from "@/service/api";

// const initalData = {
// 	email: "",
// 	password: "",
// };

const Verification = ({ userId }) => {
	const auth = useAuth();
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [verificated, setVerificated] = useState(false);
	const [error, setError] = useState(false);
	const [response, setResponse] = useState(false);

	// const formik = useFormik({
	// 	// initialValues: initalData,
	// 	onSubmit: async (formData) => {
	// 		auth
	// 			.signIn(formData.email, formData.password)
	// 			.then(() => {
	// 				const prevPage = router.query.prevPage || "/";
	// 				router.push(prevPage);
	// 				toast.success("Inicio de sesión exitoso");
	// 			})
	// 			.catch((err) => {
	// 				toast.error("Sus credenciales son incorrectas");
	// 				console.error(err);
	// 			});
	// 	},
	// 	// validationSchema: validate,
	// });

	useEffect(() => {
		axios
			.get(endPoints.auth.verification(userId))
			.then((response) => {
				setVerificated(true);
				setLoading(false);
				setResponse(response);
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
			{loading && <p>Cargando</p>}
			{!loading && error && (
				<>
					<ContainerHead>
						<Link href="/">
							<Image src="/images/signLogo.png" alt="ecranLogo" width={100} height={100} />
						</Link>
						<h3 className="title">Lo sentimos, hubo un error al verificar tu cuenta.</h3>
					</ContainerHead>
					<ContainerFrom>
						<p className="text">Por favor, intente más tarde.</p>
						<Link className="link" href="/signIn">
							Iniciar sesión
						</Link>
					</ContainerFrom>
				</>
			)}
			{!loading && !error && verificated && (
				<>
					<ContainerHead>
						<Link href="/">
							<Image src="/images/signLogo.png" alt="ecranLogo" width={100} height={100} />
						</Link>
						<h3 className="title">Tu cuenta ha sido verificada con éxito!</h3>
					</ContainerHead>
					<ContainerFrom>
						<p className="text">
							Ahora puedes acceder a todas nuestras increíbles funcionalidades con tu nueva cuenta.
						</p>
						{/* <p className="text">
					No tienes una cuenta? */}
						<Link className="link" href="/signIn">
							Iniciar sesión
						</Link>
						{/* </p> */}
					</ContainerFrom>
				</>
			)}
			<Toaster richColors position="bottom-right" />
		</Container>
	);
};

export default Verification;

export async function getServerSideProps(context) {
	let userId;
	console.log(context.params);
	// const { userId } = context.params;
	context.params.userId ? (userId = context.params.userId) : (userId = null);

	return {
		props: {
			userId,
		},
	};
}

Verification.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
