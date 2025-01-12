import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5800,
  },
  base: '/TheOneChoice/', // Match your repository name
  build: {
    outDir: 'dist',
  },
});
