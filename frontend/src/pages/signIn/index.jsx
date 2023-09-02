import { Container, ContainerHead, ContainerFrom, SecondLabels, Button } from "@styles/pages.styles/SignIn.styles";
import Link from "next/link";
import React, { useState } from "react";
import dataInput from "@/assets/login.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { postData } from "@/utils/fetchApi";

const initalData = {
	email: "",
	password: "",
};
const BASE_URL = "https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com";

const SignIn = () => {
	const [submitted, setSubmitted] = useState(false);

	const validate = Yup.object({
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			try {
				const response = await postData(`${BASE_URL}/authorization/users/login`, formData);
				console.log(response);
				if (response.status === 200) {
					toast.success("Inicio de sesión exitoso");
				} else {
					toast.error("Error, por favor inténtelo de nuevo");
				}
			} catch (error) {
				toast.error("Error, por favor inténtelo de nuevo");
				console.error("Error registering:", error);
			}
		},
		validationSchema: validate,
	});

	return (
		<Container>
			<ContainerHead>
				<Link href="/">
					<img src="./EcranLogo.png" alt="ecranLogo" />
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
