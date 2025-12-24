import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { fileURLToPath, URL } from "node:url";
import starlightKbd from "starlight-kbd";

// https://astro.build/config
export default defineConfig({
	site: "https://pine.prozilla.dev",
	integrations: [
		starlight({
			title: "Pine Engine",
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/Prozilla/Pine" },
				{ icon: "discord", label: "Discord", href: "https://discord.gg/JwbyQP4tdz" },
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
				Header: "./src/components/Header.astro",
				MobileMenuFooter: "./src/components/MobileMenuFooter.astro",
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
			plugins: [
				starlightKbd({
					globalPicker: false,
					types: [
						{ id: "mac", label: "macOS" },
						{ id: "windows", label: "Windows", default: true },
						{ id: "linux", label: "Linux" },
					],
				}),
			],
		}),
	],
	server: ({ command }) => ({ port: command === "preview" ? 8080 : 3000 }),
	devToolbar: {
		enabled: false,
	},
	vite: {
		resolve: {
			alias: {
				"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
			}
		}
	},
	redirects: {
		"/reference/configuration": "/guides/distribution/#configuration"
	}
});
