import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://t3chcrazy.github.io",
  integrations: [image()]
});