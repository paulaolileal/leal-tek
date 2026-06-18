import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lealtek.com',
  integrations: [sitemap()],
  output: 'static',
});
