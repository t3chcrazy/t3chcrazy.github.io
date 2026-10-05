import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://abhishekprashant.dev",
  integrations: [sitemap()],
  // Site CSS is small (~7 KB): inlining removes the render-blocking request that delayed FCP/LCP
  build: { inlineStylesheets: 'always' },
});