import React, { useState } from "react";
import dataInput from "@/assets/input.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Head from "next/head";
import {
	HeaderContainer,
	Container,
	AvatarContainer,
	TitleContainer,
	SectionForm,
	ContainerFrom,
	Button,
	ContainerImage,
	EditButton,
} from "@styles/pages.styles/profile.styles";
import { MdOutlineModeEditOutline } from "react-icons/md";
import ProtectedRoute from "@components/protectedRoute/ProtectedRoute";
import Cookies from "js-cookie";

const Profile = () => {
	const [submitted, setSubmitted] = useState(false);
	const auth = useAuth();
	const { updateProfileInfo, uploadProfilePicture } = auth;

	const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
	// const defaultImage = "https://api.dicebear.com/7.x/bottts-neutral/svg";
	// const user = Cookies.get("userInfo");

	const encodedUserInfo = Cookies.get("userInfo");
	const userInfoJSON = atob(encodedUserInfo);
	const user = JSON.parse(userInfoJSON);
	const [profilePicture, setProfilePicture] = useState(user?.profilePictureUrl || "");

	console.log("profile/index - user.imageUrl de la API", user?.imageUrl);
	const initalData = {
		firstName: user?.firstName,
		lastName: user?.lastName,
		email: user?.email,
		password: user?.password,
		imageUrl: user?.imageUrl,
	};
	console.log("profile/index - user.imageUrl calculado", initalData.imageUrl);

	const validate = Yup.object({
		firstName: Yup.string().max(15).required("*El nombre es obligatorio*"),
		lastName: Yup.string().max(15).required("*El apellido es obligatorio*"),
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const handleProfilePictureChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			console.log("profile/index - file", file);
			const imageUrl = URL.createObjectURL(file);
			// console.log("profile/index - imageURL", imageUrl);
			setProfilePicture(file);
			setSelectedProfilePicture(imageUrl);
		}
	};

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			const data = {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
				imageUrl: formData.imageUrl,
			};
			const cookieOld = {
				...user,
				data,
			};

			console.log(cookieOld);
			try {
				if (profilePicture) {
					const imageUrl = await uploadProfilePicture(profilePicture);
					console.log(imageUrl);
					data.imageUrl = imageUrl;
				}
				console.log(data);
				updateProfileInfo(data)
					.then(() => {
						const userInfoJSON = JSON.stringify(cookieOld);
						const encodedUserInfo = btoa(userInfoJSON);
						Cookies.set("userInfo", encodedUserInfo, { expires: 2 });
						toast.success("Perfil actualizado con exito!");
					})
					.catch((err) => {
						console.error(err);
						toast.error("Lo siento, intentelo de nuevo");
					});
			} catch (error) {
				console.error("Error al cargar la imagen:", error);
				toast.error("Error al cargar la imagen");
			}
		},
		validationSchema: validate,
	});

	return (
		<ProtectedRoute>
			<Head>
				<meta name="description" content="Esta es la página en la que puedes actualizar y configurar tu perfil" />
			</Head>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<img
								src={selectedProfilePicture || initalData.imageUrl}
								alt="Imagen de perfil"
								width={150}
								height={150}
								id="profileImage"
							/>
						</div>
						<input
							type="file"
							id="fileInput"
							accept="image/*"
							style={{ display: "none" }}
							onChange={handleProfilePictureChange}
						/>
						<EditButton onClick={() => document.getElementById("fileInput").click()}>
							<MdOutlineModeEditOutline>Cambiar foto de perfil</MdOutlineModeEditOutline>
						</EditButton>
					</AvatarContainer>
					<TitleContainer>
						<h2>Hola!</h2>
					</TitleContainer>
				</Container>
			</HeaderContainer>
			<section>
				<SectionForm>
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
										defaultValue={
											item.name === "firstName"
												? formik.initialValues.firstName
												: item.name === "lastName"
												? formik.initialValues.lastName
												: item.name === "email"
												? formik.initialValues.email
												: item.name === "password"
												? "********"
												: null
										}
										disabled={item.name === "password" ? true : false}
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
								Actualizar perfil
							</Button>
						</form>
						<Toaster richColors position="bottom-right" />
					</ContainerFrom>
					<ContainerImage>
						<Image src="/images/profile.png" width={300} height={300} alt="iconos-ecran"></Image>
					</ContainerImage>
				</SectionForm>
			</section>
		</ProtectedRoute>
	);
};

export default Profile;
