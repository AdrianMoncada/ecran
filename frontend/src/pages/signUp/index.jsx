import React, { useState } from "react";
import Link from "next/link";
import { Container, ContainerHead, ContainerFrom, Button } from "@styles/pages.styles/SignUp.styles";
import dataInput from "@/assets/input.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Image from "next/image";

const initalData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const SignUp = () => {
	const [submitted, setSubmitted] = useState(false);
	const auth = useAuth();
	const router = useRouter();

	const validate = Yup.object({
		firstName: Yup.string().max(15).required("*El nombre es obligatorio*"),
		lastName: Yup.string().max(15).required("*El apellido es obligatorio*"),
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			auth
				.signUp(formData)
				.then(() => {
					router.push("/");
					toast.success("Cuenta creada con exito!");
				})
				.catch((err) => {
					console.error(err);
					toast.error("Lo siento, intentelo de nuevo");
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
				<h3 className="title">Se parte de nuestra comunidad!</h3>
			</ContainerHead>
			<ContainerFrom>
				<form onSubmit={formik.handleSubmit}>
					{dataInput.map((item) => (
						<div key={item.id} className="separator">
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

SignUp.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
