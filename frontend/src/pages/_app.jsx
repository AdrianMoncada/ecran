import "@styles/globals.css";
import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import Layout from "@components/layout/Layout";
import Loader from "@components/loader/Loader";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GoogleOAuthProvider clientId="">
				<Suspense fallback={<Loader />}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Suspense>
			</GoogleOAuthProvider>
		</ThemeProvider>
	);
}
