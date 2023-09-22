import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess({
				postcss: {},
				scss: {},
				sass: {},
			})
		}),
		htmlPurge({}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
