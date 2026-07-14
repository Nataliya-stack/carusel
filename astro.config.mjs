import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nataliya-stack.github.io/', 
  base: '/carusel/', 
  vite: {
    plugins: [tailwindcss()]
  }
});
