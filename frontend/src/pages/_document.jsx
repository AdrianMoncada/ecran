import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/manifest.json" />
				<link rel="manifest" href="/images/A.png" />
				<meta name="theme-color" content="#0f172a" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
