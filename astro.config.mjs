import { defineConfig } from 'astro/config';
import tailwindcssPostcss from '@tailwindcss/postcss';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssPostcss
        ]
      }
    }
  }
});