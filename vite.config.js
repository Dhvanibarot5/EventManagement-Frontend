import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Simplifies imports from src folder
    },
  },
  build: {
    outDir: 'dist', // Directory where the build output will be placed
    assetsDir: 'assets', // Directory for static assets within dist
    sourcemap: true, // Helps with debugging in production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Splits vendor code
        },
      },
    },
  },
  server: {
    port: 3000, // Local dev server port
    open: true, // Automatically opens the browser on dev
  },
  preview: {
    port: 5000, // Port for Vite's preview server
  },
});
