// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	app: {
		head: {
			title: "Udemy Clone",
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/icon?family=Material+Icons",
				},
			],
		},
	},
	vite: {
		optimizeDeps: {
			include: ["tailwindcss"],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ["~/assets/css/main.css"],
});
