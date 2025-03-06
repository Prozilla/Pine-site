import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://pine.prozilla.dev",
	integrations: [
		starlight({
			title: "Pine Wiki",
			social: {
				discord: "https://discord.gg/JwbyQP4tdz",
				github: "https://github.com/Prozilla/Pine",
			},
			logo: {
				src: "./public/favicon.svg",
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
			customCss: [
				"./src/styles/custom.css",
			],
		}),
	],
	server: {
		port: 3000,
	},
	devToolbar: {
		enabled: false,
	},
});
