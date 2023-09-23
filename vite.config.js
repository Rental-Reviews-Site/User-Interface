import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
	plugins: [
		sveltekit({}),
		htmlPurge({}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
