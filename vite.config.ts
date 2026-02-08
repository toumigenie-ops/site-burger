import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/site-burger/',
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
  },
});
