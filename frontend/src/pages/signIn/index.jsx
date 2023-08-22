import { Container, ContainerHead, ContainerFrom, SecondLabels, Button } from "@styles/pages.styles/SignIn.styles";
import Link from "next/link";
const SignIn = () => {
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
				<form>
					<SecondLabels>
						<label>Email</label>
						<input className="input" type="email"></input>
						<label>Contraseña</label>
						<input className="input" type="password"></input>
					</SecondLabels>
				</form>

				<Button>Sign In</Button>
				<p className="text">
					Don't have an account?{"   "}
					<Link className="link" href="/signUp">
						Sign Up
					</Link>
				</p>
			</ContainerFrom>
		</Container>
	);
};

export default SignIn;
