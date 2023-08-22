import React from "react";
import { HeaderContainer } from "./Header.styles";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	// const [isScrolled, setIsScrolled] = useState(false);

	// const handleScroll = () => {
	// 	if (window.scrollY > 0) {
	// 		setIsScrolled(true);
	// 	} else {
	// 		setIsScrolled(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<div>
			<HeaderContainer>
				<Link href="/" className="logo">
					<Image src="/images/home/ecran.svg" alt="logo ecran" width={50} height={100} />
				</Link>
				<section className="links">
					<Link href="/signIn">
						{" "}
						<span className="link_text">Inicia sesion</span>
					</Link>
					<Link href="/signUp">
						{" "}
						<span className="link_text">Registrate</span>
					</Link>
				</section>
			</HeaderContainer>
		</div>
	);
};

export default Header;
