import React, { useState, useEffect } from "react";
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
import Image from "next/image";
import dataInput from "@/assets/input.json";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { MdOutlineModeEditOutline } from "react-icons/md";

const initalData = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const Profile = () => {
	const [submitted, setSubmitted] = useState(false);
	const auth = useAuth();
	const router = useRouter();
	const [profilePicture, setProfilePicture] = useState(null);
	const [profilePictureUrl, setProfilePictureUrl] = useState("");

	//Esta función se activa cada vez que el usuario selecciona un nuevo archivo de
	//imagen en el input de tipo archivo
	const handleProfilePictureChange = (event) => {
		const selectedFile = event.target.files[0];
		setProfilePicture(selectedFile);
		//busca el elemento HTML con el ID "profileImage"
		const profileImage = document.getElementById("profileImage");
		if (profileImage) {
			//crea una URL que representa el objeto seleccionado (selectedFile)
			const imageUrl = URL.createObjectURL(selectedFile);
			console.log(imageUrl);
			profileImage.src = imageUrl;
			setProfilePictureUrl(imageUrl);
		}
	};

	//Este efecto se activa cada vez que el valor de profilePicture cambia.
	useEffect(() => {
		if (profilePicture) {
			const imageUrl = URL.createObjectURL(profilePicture);
			setProfilePictureUrl(imageUrl);
		}
	}, [profilePicture]);

	const validate = Yup.object({
		firstName: Yup.string().max(15).required("*El nombre es obligatorio*"),
		lastName: Yup.string().max(15).required("*El apellido es obligatorio*"),
		email: Yup.string().email("Email invalido").required("*Obligatorio*"),
		password: Yup.string().min(6, "Contraseña debe ser de 6 o más caracteres").required("*Obligatorio*"),
	});

	const formik = useFormik({
		initialValues: initalData,
		onSubmit: async (formData) => {
			console.log(formData);
			try {
				auth
					.updateProfileInfo(formData)
					.then(() => {
						router.push("/");
						toast.success("Usuario actualizado con éxito!");
					})
					.catch((err) => {
						console.error(err);
						toast.error("Lo siento, intentelo de nuevo");
					});
				if (profilePicture) {
					const imageUrl = await auth.uploadProfilePicture(profilePicture);

					// Actualiza la información del usuario, incluida la URL de la nueva imagen
					formData.profilePicture = imageUrl;

					// Actualiza el usuario
					auth.updateUserProfile(formData);

					router.push("/");
					toast.success("Usuario actualizado con éxito!");
				}
			} catch (error) {
				console.error(error);
				toast.error("Lo siento, intentelo de nuevo");
			}
		},
		validationSchema: validate,
	});

	useEffect(() => {
		// Cuando se carga el componente, obtén la información del perfil del usuario
		const fetchProfileInfo = async () => {
			try {
				const user = await auth.getProfileInfo();
				if (user) {
					// Llena el formulario con los datos del usuario
					formik.setValues(user);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchProfileInfo();
	}, [auth, formik]);
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
								Actualizar
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
