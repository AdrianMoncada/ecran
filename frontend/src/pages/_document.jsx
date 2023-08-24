import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/images/A.png" />
				<title>Ecrán</title>
				<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
