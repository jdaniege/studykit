// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://studykit.jesusdanielv16.workers.dev',
  integrations: [sitemap()],
});