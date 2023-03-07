/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/index.css",
		"./src/**/*.{html,js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			animation: {
				slideInLeft: "slideInLeft 0.3s ease-in",
				slideInRight: "slideInRight 0.3s ease-in",
			},
			keyframes: {
				slideInLeft: {
					"0%": {
						transform: "translateX(300px)",
					},
					"100%": {
						transform: "translateX(0)",
					},
				},
				slideInRight: {
					"0%": {
						transform: "translateX(0)",
					},
					"100%": {
						transform: "translateX(300px)",
					},
				},
			},
			backgroundImage: {
				pattern: "url('/src/assets/images/diagonal-stripes.svg')",
				"black-pattern": "url('/src/assets/images/black-diagonal-stripes.svg')",
				hamburger: "url('/src/assets/images/hamburger.svg')",
				close: "url('/src/assets/images/close.svg')",
				arrow: "url('/src/assets/images/arrow.svg')",
			},
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
			colors: {
				white: "#FFFFFF",
			},
			variants: {
				extend: {
					opacity: ["disabled"],
				},
			},
		},

		// fontFamily: {
		// 	sans: ["ui-sans-serif", "system-ui", "Lato"],
		// 	serif: ["ui-serif", "Georgia", "Lato"],
		// },
	},
	plugins: [],
};
