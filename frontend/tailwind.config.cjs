/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/index.css",
		"./src/**/*.{html,js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
			},
		},

		// fontFamily: {
		// 	sans: ["ui-sans-serif", "system-ui", "Lato"],
		// 	serif: ["ui-serif", "Georgia", "Lato"],
		// },
	},
	plugins: [],
};
