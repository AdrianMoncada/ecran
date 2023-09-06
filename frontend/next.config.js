/** @type {import('next').NextConfig} */
const { parsed: env } = require("dotenv").config();
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
	images: {
		domains: ["ecran.s3.amazonaws.com", "hydramovies.com"],
		env,
		// Agrega el dominio de las imágenes aquí
	},
};
