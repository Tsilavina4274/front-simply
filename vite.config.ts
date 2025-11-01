import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for the frontend project. We set `root` to ./src so source files
// are colocated there, but output the build to ../dist (frontend/dist) which
// is what Vercel expects when using static builds.
export default defineConfig({
  root: './src',
  base: '/',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
