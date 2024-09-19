import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animated';
import intersect from 'tailwindcss-intersect';

/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.violet,
				secondary: colors.indigo,
				tertiary: colors.emerald,
				error: colors.red
			},
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		animate,
		intersect
	]
};
