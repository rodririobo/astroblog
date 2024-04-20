
//astro.config.mjs

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	
    site: "https://rodririobo.github.io",

	base: "/astroblog",

	integrations: [mdx(), sitemap()],

	assetPrefix: '/fonts',

});