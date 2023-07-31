/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'rgba(0,0,0,0.6)',
				fresh: '#4ABDAC',
				vermillion: '#FC4A1A',
				sunshine: '#F7B733',
				clean: '#DFDCE3',
				  midnight: '#121063',
			},
			
		},
	},
	plugins: [
		require('tailwindcss-animated')
	  ],
}
