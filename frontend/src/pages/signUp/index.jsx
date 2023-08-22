import React from "react";
import Link from "next/link";
import {
	Container,
	ContainerHead,
	FirstLabels,
	ContainerFrom,
	SecondLabels,
	Button,
} from "@styles/pages.styles/SignUp.styles";
const SignUp = () => {
	return (
		<Container>
			<ContainerHead>
				<Link href="/">
					<img src="./EcranLogo.png" alt="ecranLogo" />
				</Link>
				<h3 className="title">Se parte de nuestra comunidad!</h3>
			</ContainerHead>
			<ContainerFrom>
				<form>
					<FirstLabels>
						<div className="separator">
							<label>Nombre</label>
							<input className="input" type="text" placeholder="E.g., Jhon"></input>
						</div>
						<div className="separator">
							<label>Apellido</label>
							<input className="input" type="text" placeholder="E.g., Smith"></input>
						</div>
					</FirstLabels>
					<SecondLabels>
						<label>Username</label>
						<input className="input" type="text" placeholder="E.g., JhonS"></input>
						<label>Email</label>
						<input className="input" type="email" placeholder="mail@mail.com"></input>
						<label>Fecha de nacimiento</label>
						<input className="date" type="date" id="birthday" name="birthday"></input>
					</SecondLabels>
				</form>

				<Button>Sign Up</Button>
				<p className="text">
					Already have an account?{"   "}
					<Link className="link" href="/signIn">
						Sign In
					</Link>
				</p>
			</ContainerFrom>
		</Container>
	);
};

export default SignUp;
