// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Optimize CSS delivery
      applyBaseStyles: false,
    }),
    alpinejs()
  ],
  vite: {
    build: {
      // Optimize CSS splitting
      cssCodeSplit: true,
      // Minify CSS
      cssMinify: true,
    },
    // Optimize CSS processing
    css: {
      devSourcemap: false,
    },
    // Optimize asset loading
    optimizeDeps: {
      exclude: ['@fontsource/inter', '@fontsource/lexend'],
    },
  }
});
