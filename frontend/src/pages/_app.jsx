import "@styles/globals.css";
import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import Layout from "@components/layout/Layout";
import Loader from "@components/loader/Loader";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<Loader />}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Suspense>
		</ThemeProvider>
	);
}
