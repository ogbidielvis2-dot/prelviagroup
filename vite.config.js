import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://<user>.github.io/prelviagroup/, so assets need this base path.
export default defineConfig({ base: '/prelviagroup/', plugins: [react()] });
