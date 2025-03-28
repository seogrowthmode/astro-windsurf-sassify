// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs()
  ],
  vite: {
    build: {
      // Optimize CSS splitting
      cssCodeSplit: true,
      // Minify CSS
      cssMinify: true,
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // Optimize code splitting
          manualChunks: {
            // Group Alpine.js into a single chunk
            alpine: ['alpinejs'],
          },
        },
      },
    },
    // Optimize CSS processing
    css: {
      devSourcemap: false,
    },
    // Optimize asset loading
    optimizeDeps: {
      // Preload critical dependencies
      include: ['alpinejs'],
    },
  }
});
