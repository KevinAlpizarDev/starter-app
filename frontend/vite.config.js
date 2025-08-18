import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Permite conexiones externas (desde tu PC)
    port: 5173,       // Puerto fijo
    strictPort: true, // Evita que Vite cambie el puerto automáticamente
    watch: {
      usePolling: true, // Necesario para hot-reload en Docker
    },
  },
});