/** @type {import('next').NextConfig} */
const { parsed: env } = require("dotenv").config();
const withPWA = require("next-pwa");
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
	images: {
		domains: ["ecran.s3.amazonaws.com", "hydramovies.com", "https://image.tmdb.org"],
		env,
		// Agrega el dominio de las imágenes aquí
	},
};

module.exports = withPWA({
	dest: "public",
	register: "true",
	skipWaiting: true,
});
