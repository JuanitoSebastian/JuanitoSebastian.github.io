import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx';
import externalAnchorPlugin from './src/utils/externalAnchorPlugin';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://JuanitoSebastian.github.io',
  markdown: {
    remarkPlugins: [externalAnchorPlugin],
  },
});
