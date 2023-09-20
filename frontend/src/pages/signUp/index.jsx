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
import Head from "next/head";

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
			const backgroundColorOptions = [
				"b6e3f4",
				"c0aede",
				"d1d4f9",
				"ffd5dc",
				"ffdfbf",
				"126D11",
				"CCAC6E",
				"7477C0",
				"BA7BD1",
				"803D31",
				"4A15F5",
				"2CBF5D",
				"B3D690",
				"CC2FAB",
				"DD1B47",
				"EBB652",
				"8961E4",
				"BBADC2",
				"3A202B",
			];
			const backgroundTypeOptions = ["gradientLinear", "solid"];
			const eyesOptions = [
				"bulging",
				"dizzy",
				"eva",
				"frame1",
				"frame2",
				"glow",
				"happy",
				"hearts",
				"robocop",
				"round",
				"roundFrame01",
				"roundFrame02",
				"sensor",
				"shade01",
			];
			const mouthOptions = [
				"bite",
				"diagram",
				"grill01",
				"grill02",
				"grill03",
				"smile01",
				"smile02",
				"square01",
				"square02",
			];
			function getRandomValueFromArray(arr) {
				const randomIndex = Math.floor(Math.random() * arr.length);
				return arr[randomIndex];
			}
			function generateRandomAvatarUrl() {
				const backgroundColor = getRandomValueFromArray(backgroundColorOptions);
				const backgroundColor2 = getRandomValueFromArray(backgroundColorOptions);
				const backgroundType = getRandomValueFromArray(backgroundTypeOptions);
				const eyes = getRandomValueFromArray(eyesOptions);
				const mouth = getRandomValueFromArray(mouthOptions);
				const avatarUrl = `https://api.dicebear.com/7.x/bottts-neutral/svg?&backgroundColor=${backgroundColor},${backgroundColor2}&backgroundType=${backgroundType}&eyes=${eyes}&mouth=${mouth}`;
				return avatarUrl;
			}

			const randomAvatarUrl = generateRandomAvatarUrl();

			const datas = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
				imageUrl: randomAvatarUrl,
			};
			auth
				.signUp(datas)
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
			<Head>
				<title>ÉCRAN | SignUp</title>
				<meta name="description" content="Esta es la página donde puedes registrar tu cuenta" />
			</Head>
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
						Iniciar Sesión
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
