import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx';
import externalAnchorPlugin from './src/utils/externalAnchorPlugin';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: 'https://www.juan.fi',
  markdown: {
    remarkPlugins: [externalAnchorPlugin],
  },
});
