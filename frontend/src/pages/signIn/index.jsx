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
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			auth
				.signIn(formData.email, formData.password)
				.then(() => {
					router.push("/");
					toast.success("Inicio de sesión exitoso");
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
						Sign In
					</Button>
				</form>
				<p className="text">
					No tienes una cuenta?
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
