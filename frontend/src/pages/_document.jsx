import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/images/A.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<meta name="theme-color" content="#0f172a" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
