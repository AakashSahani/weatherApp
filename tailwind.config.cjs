/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
			},
			colors: {
				bgMain: '#1E213A',
				bgHighlight: '#100E1D',
				bgBtn: '#3C47E9',
			},
		},
	},
	plugins: [],
};
