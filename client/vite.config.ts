import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["slice-quest-server-xblm.onrender.com", "https://slice-quest-client-skbk.onrender.com", "0.0.0.0"],
    host: "0.0.0.0",
    port: 3001,
    open: true,
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'https://slice-quest-server-xblm.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'https://slice-quest-server-xblm.onrender.com/api',
        changeOrigin: true,
        secure: false,
      },
    } : undefined,
  },
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env.VITE_API_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL),
  },
  preview: {
    host: true,
    port: 3000,
  },
});
