/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens:{
				'xs': {'min': '200px', 'max': '370px'},
			},
			colors: {
				transparent: 'rgba(0,0,0,0.6)',
				fresh: '#B4F8C8',
				vermillion: '#FFAEBC',
				sunshine: '#FBE7C6',
				clean: '#A0E7E5',
				midnight: '#121063',
				yellowGreen: '#C8DF52',
				blueAqua: '#00a6be',
				babyBlue: "#C5E3F2",
				beige: '#E9DAC4'

			},
			
		},
	},
	plugins: [
		require('tailwindcss-animated')
	  ],
}
