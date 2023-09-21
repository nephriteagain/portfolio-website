/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#F1EFEF',
				secondary: '#CCC8AA',
				background: '#7D7C7C',
				dark: '#191717'   
			}
		},
	},
	plugins: [],
}
