import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path'; 


export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'), // Configurer l'alias ici
    },
  },
});
