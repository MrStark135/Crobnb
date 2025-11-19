// tailwind.config.ts
// import type { Config } from 'tailwindcss'

export default <Partial<any>>{
	content: [
		'./app/**.{vue,js,ts}',
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.{vue,js,ts}',
		'./pages/**/*.{vue,js,ts}',
	],
	theme: {
		extend: {
			fontFamily: {
				museomoderno: ['MuseoModerno', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif'],
				ttnorms: ['TTNorms', 'sans-serif']
			},
			colors: {
				'primary-100': { DEFAULT: '#00526C;' },
				'primary-80': { DEFAULT: '#337589' },
				'primary-50': { DEFAULT: '#80A9B6' },
				'primary-20': { DEFAULT: '#CCDCE2' },
				'primary-10': { DEFAULT: '#E5EDF0' },
				'primary-05': { DEFAULT: '#F2F6F8' },
				'grayscale-100': { DEFAULT: '#202532' },
				'grayscale-80': { DEFAULT: '#50545E' },
				'grayscale-60': { DEFAULT: '#838791' },
				'grayscale-40': { DEFAULT: '#BEC0C5' },
				'grayscale-10': { DEFAULT: '#D9DADD' },
				'grayscale-05': { DEFAULT: '#EAEAEB' },
			},
			height: {
				'21': '5.125rem',
				'113': '28.25rem'
			}
		}
	},
	plugins: [],
}