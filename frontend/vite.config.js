import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  // process.env works in GitHub Actions; .env files work locally
  const base = process.env.VITE_BASE_URL || '/';

  return {
    plugins: [react()],
    base,
    server: {
      port: 5173,
      proxy: {
        // In dev, proxy /api to backend
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            hls: ['hls.js'],
          },
        },
      },
    },
  };
});
