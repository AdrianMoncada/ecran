import "@styles/globals.css";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
