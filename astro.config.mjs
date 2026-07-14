import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://github.io', 
  base: '/carusel/', 
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          // Отключаем случайные хэши для CSS файлов при сборке!
          assetFileNames: 'assets/[name][extname]', 
        }
      }
    }
  }
});


