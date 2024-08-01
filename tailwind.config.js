import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
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
	plugins: []
};
