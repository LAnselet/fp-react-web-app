import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/api/': 'http://localhost:5001',
      '/api': 'https://fp-node-server-app.onrender.com',
      // '/upload/': 'http://localhost:5001',
      '/upload': 'https://fp-node-server-app.onrender.com',
    },
  },
});
