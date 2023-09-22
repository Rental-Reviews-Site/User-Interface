import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: sveltePreprocess({
				postcss: {},
				scss: {},
				sass: {},
			})
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
