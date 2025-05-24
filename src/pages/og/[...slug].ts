import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import type { FontConfig, RGBColor } from "node_modules/astro-og-canvas/dist/types";

const entries = await getCollection("docs");

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

const font: FontConfig = {
	families: ["Rubik", "Noto Sans", "Noto Sans Arabic"],
};

export const { getStaticPaths, GET } = OGImageRoute({
	pages,
	param: "slug",
	getImageOptions: (_id, page: (typeof pages)[number]) => {
		return {
			title: page.data.title,
			description: page.data.description,
			bgGradient: [[24, 28, 32] as RGBColor],
			border: { color: [36, 40, 45], width: 20 },
			padding: 120,
			logo: {
				path: "./src/assets/logo-dark.png",
				size: [359, 72]
			},
			font: {
				title: {
					...font,
					color: [232, 236, 242],
					weight: "Bold",
				},
				description: {
					...font,
					color: [179, 190, 204],
				},
			},
			fonts: ["./src/assets/fonts/rubik/Rubik-VariableFont_wght.ttf"]
		}
	},
});

// [46, 204, 113], [39, 174, 117], [52, 152, 219]