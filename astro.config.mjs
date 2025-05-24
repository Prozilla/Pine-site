import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://pine.prozilla.dev",
	integrations: [
		starlight({
			title: "Pine Engine",
			social: [
				{ icon: "discord", label: "Discord", href: "https://discord.gg/JwbyQP4tdz" },
				{ icon: "github", label: "GitHub", href: "https://github.com/Prozilla/Pine" },
			],
			logo: {
				dark: "./public/logo-dark.svg",
				light: "./public/logo-light.svg",
				replacesTitle: true,
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: { directory: "guides" },
				},
				{
					label: "Resources",
					autogenerate: { directory: "resources" },
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			components: {
				PageTitle: "./src/components/PageTitle.astro",
			},
			customCss: [
				"./src/styles/custom.css",
				"@fontsource-variable/rubik",
				"@fontsource-variable/jetbrains-mono",
			],
			expressiveCode: {
				themes: ["one-dark-pro", "one-light"]
			},
			editLink: {
				baseUrl: "https://github.com/Prozilla/Pine-site/edit/main/"
			},
			routeMiddleware: "./src/routeData.ts",
		}),
	],
	server: {
		port: 3000,
	},
	devToolbar: {
		enabled: false,
	},
});
