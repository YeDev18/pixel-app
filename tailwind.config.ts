import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/core/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				red: {
					300: "#ffa99a",
					400: "#ff7961",
					850: "#dc0000",
				},
				blue: {
					500: "#00c0e2",
					700: "#057999",
					800: "#0e617c",
					900: "#115068",

					950: "#04374b",
				},
				light: {
					100: "#fae3cf",
					200: "#f6cfb2",
					300: "#f0ae81",
					600: "#d54c21",
					950: "#3d120d",
				},
			},
		},
	},
	plugins: [],
};
export default config;
