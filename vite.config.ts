import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // la racine est bien frontend
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // chemin absolu relatif au projet
    },
  },
})