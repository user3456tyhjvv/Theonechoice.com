import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5800,
  },base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Ensure all assets are copied and not inlined
    rollupOptions: {
input: '/index.html',

    },
  },
});
