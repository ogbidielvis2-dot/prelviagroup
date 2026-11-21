import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// BASE_PATH is "/prelviagroup/" for GitHub Pages (set in the deploy workflow);
// everywhere else (Replit, Render, Netlify, custom domain) the site is served from "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      // Two pages: the public site (/) and the staff portal (/portal/).
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        portal: resolve(import.meta.dirname, 'portal/index.html'),
      },
    },
  },
  preview: { host: '0.0.0.0', allowedHosts: true },
  server: { host: '0.0.0.0', port: 5173, allowedHosts: true },
});
