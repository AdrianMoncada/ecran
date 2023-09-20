import { Container, ContainerHead, ContainerFrom, SecondLabels, Button } from "@styles/pages.styles/SignIn.styles";
import Link from "next/link";
import React, { useState } from "react";
import dataInput from "@/assets/login.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Cookies from "js-cookie";
import decodeJwt from "@/utils/decodeJwt";

const initalData = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [submitted, setSubmitted] = useState(false);
	const auth = useAuth();
	const router = useRouter();

	const validate = Yup.object({
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(5, "Contraseña debe ser de 5 o más caracteres").required("*Obligatorio*"),
	});

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			auth
				.signIn(formData.email, formData.password)
				.then(() => {
					const prevPage = router.query.prevPage || "/";
					const token = Cookies.get("token");
					const decodeToken = decodeJwt(token);
					if (decodeToken.payload.scope[1].authority === "ROLE_USER") {
						router.push(prevPage);
						toast.success("Inicio de sesión exitoso");
					} else {
						router.push("/admin");
						toast.success("Hola Admin");
					}
				})
				.catch((err) => {
					toast.error("Sus credenciales son incorrectas");
					console.error(err);
				});
		},
		validationSchema: validate,
	});

	return (
		<Container>
			<Head>
				<title>ÉCRAN | SignIn</title>
				<meta name="description" content="Esta es la página donde puedes ingresar a tu cuenta" />
			</Head>
			<ContainerHead>
				<Link href="/">
					<Image src="/images/signLogo.png" alt="ecranLogo" width={100} height={100} />
				</Link>
				<h3 className="title">
					Bienvenido a la comunidad <br></br> Écran
				</h3>
			</ContainerHead>
			<ContainerFrom>
				<form onSubmit={formik.handleSubmit}>
					<SecondLabels>
						{dataInput.map((item, key) => (
							<div key={key} className="separator">
								<label>{item.label}</label>
								<input
									className={`input ${submitted && formik.errors[item.name] ? "input-error" : ""}`}
									type={item.type}
									name={item.name}
									onChange={formik.handleChange}
									placeholder={item.placeholder}
								/>
								<span
									className={`message-error ${
										submitted && formik.touched[item.name] && formik.errors[item.name] ? "visible" : ""
									}`}
								>
									{formik.touched[item.name] && formik.errors[item.name]}
								</span>
							</div>
						))}
					</SecondLabels>
					<Button type="submit" onClick={() => setSubmitted(true)}>
						Iniciar Sesión
					</Button>
				</form>
				<p className="text">
					¿No tienes una cuenta?
					<Link className="link" href="/signUp">
						Registrarse
					</Link>
				</p>
				<Toaster richColors position="bottom-right" />
			</ContainerFrom>
		</Container>
	);
};

export default SignIn;

SignIn.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
