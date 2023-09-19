import React, { useState } from "react";
import dataInput from "@/assets/input.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
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

const Profile = () => {
	const [submitted, setSubmitted] = useState(false);
	const auth = useAuth();
	const { user, updateProfileInfo, uploadProfilePicture } = auth;
	const router = useRouter();
	const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl || "");
	// const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);

	const initalData = {
		firstName: user?.firstName,
		lastName: user?.lastName,
		email: user?.email,
		password: user?.password,
	};

	const validate = Yup.object({
		firstName: Yup.string().max(15).required("*El nombre es obligatorio*"),
		lastName: Yup.string().max(15).required("*El apellido es obligatorio*"),
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const handleProfilePictureChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setProfilePictureUrl(imageUrl);
			// setSelectedProfilePicture(file);
		}
	};

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			console.log(formData);
			try {
				if (profilePictureUrl) {
					const imageUrl = await uploadProfilePicture(profilePictureUrl);
					formData.profilePictureUrl = imageUrl;
				}
				updateProfileInfo(formData)
					.then(() => {
						router.push("/");
						toast.success("Perfil actualizado con exito!");
					})
					.catch((err) => {
						console.error(err);
						toast.error("Lo siento, intentelo de nuevo");
					});
			} catch (error) {
				console.error(error);
				toast.error("Error al cargar la imagen");
			}
		},
		validationSchema: validate,
	});

	return (
		<>
			<Head>
				<meta name="description" content="Esta es la página en la que puedes actualizar y configurar tu perfil" />
			</Head>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<Image
								src={profilePictureUrl || "/images/A.png"}
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
		</>
	);
};

export default Profile;

Profile.getLayout = function PageLayout(page) {
	return <>{page}</>;
};
