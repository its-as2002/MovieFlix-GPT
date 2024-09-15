/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				netflixBlack: "#141414",
				netflixRed: "#b9090b",
			},
			animation: {
				shine: "shine 1.5s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
