import "@styles/globals.css";
import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import Layout from "@components/layout/Layout";
import Loader from "@components/loader/Loader";
import { ProviderAuth } from "@/hooks/useAuth";

export default function App({ Component, pageProps }) {
	if (Component.getLayout) {
		return (
			<ThemeProvider theme={theme}>
				<ProviderAuth>
					<Suspense fallback={<Loader />}>{Component.getLayout(<Component {...pageProps} />)}</Suspense>
				</ProviderAuth>
			</ThemeProvider>
		);
	}

	return (
		<ThemeProvider theme={theme}>
			<ProviderAuth>
				<Suspense fallback={<Loader />}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Suspense>
			</ProviderAuth>
		</ThemeProvider>
	);
}
