import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH is "/prelviagroup/" for GitHub Pages (set in the deploy workflow);
// everywhere else (Replit, Netlify, custom domain) the site is served from "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  preview: { host: '0.0.0.0', allowedHosts: true },
  server: { host: '0.0.0.0', port: 5173, allowedHosts: true },
});
