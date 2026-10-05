// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

// Mode par défaut : statique. Les routes dynamiques utilisent `prerender = false`.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});
