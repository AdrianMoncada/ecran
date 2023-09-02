import React, { useState } from "react";
import Link from "next/link";
import { Container, ContainerHead, ContainerFrom, Button } from "@styles/pages.styles/SignUp.styles";
import dataInput from "@/assets/input.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { postData } from "@/utils/fetchApi";

const initalData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const BASE_URL = "https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com";

const SignUp = () => {
	const [submitted, setSubmitted] = useState(false);

	const validate = Yup.object({
		firstName: Yup.string().max(15).required("*El nombre es obligatorio*"),
		lastName: Yup.string().max(15).required("*El apellido es obligatorio*"),
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			try {
				const response = await postData(`${BASE_URL}/authorization/users`, formData);
				console.log(response);
				if (response.status === 201) {
					const data = {
						email: formData.email,
						password: formData.password,
					};
					const login = await postData(`${BASE_URL}/authorization/users/login`, data);
					console.log(login.headers);
					toast.success("Usuario creado con éxito");
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
				<h3 className="title">Se parte de nuestra comunidad!</h3>
			</ContainerHead>
			<ContainerFrom>
				<form onSubmit={formik.handleSubmit}>
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
					<Button type="submit" onClick={() => setSubmitted(true)}>
						Sign Up
					</Button>
				</form>
				<p className="text">
					Already have an account?{"   "}
					<Link className="link" href="/signIn">
						Sign In
					</Link>
				</p>
				<Toaster richColors position="bottom-right" />
			</ContainerFrom>
		</Container>
	);
};

export default SignUp;
