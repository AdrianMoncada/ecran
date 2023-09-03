import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useAuth } from "@/hooks/useAuth";

const Layout = ({ children }) => {
	const auth = useAuth();
	return (
		<div>
			<header>
				<Header auth={auth} />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
