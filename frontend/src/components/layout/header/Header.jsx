import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HeaderContainer } from "./Header.styles";
import { MdExplore } from "react-icons/md";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<HeaderContainer isScrolled={isScrolled}>
			{/* <div className="header-content"> */}
			<Link href="/" className="logo">
				<Image src="/images/home/ecran.svg" alt="logo ecran" width={50} height={100} />{" "}
			</Link>
			<nav className={openNav ? "nav nav-mobile" : "nav"}>
				<div>
					<MdClose className={openNav ? "close-menu" : "noshow"} onClick={() => setOpenNav(false)} />
				</div>
				<ul className={openNav ? "nav-ul-mobile" : "nav-ul"}>
					{/* <li>
						<Link href="/signIn" className="link_text">
							Inicia sesion
						</Link>
					</li>
					<li>
						<Link href="/signUp" className="link_text">
							Registrate
						</Link>
					</li> */}
					<li>
						<Link href="/discover" className="buttonExplore">
							<MdExplore className="icon" />
							Explorar
						</Link>
					</li>
				</ul>
			</nav>
			<RxHamburgerMenu className={openNav ? "noshow" : "hamburger"} onClick={() => setOpenNav(true)} />
			{/* </div> */}
		</HeaderContainer>
		// <div>
		// 	<HeaderContainer>
		// 		<Link href="/" className="logo">
		// 			<Image src="/images/home/ecran.svg" alt="logo ecran" width={50} height={100} />
		// 		</Link>
		// 		<section className="links">
		// 			<Link href="/signIn">
		// 				{" "}
		// 				<span className="link_text">Inicia sesion</span>
		// 			</Link>
		// 			<Link href="/signUp">
		// 				{" "}
		// 				<span className="link_text">Registrate</span>
		// 			</Link>
		// 		</section>
		// 	</HeaderContainer>
		// </div>
	);
};

export default Header;
