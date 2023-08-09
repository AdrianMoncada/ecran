import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
