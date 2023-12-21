import { defineConfig } from 'vite';
import reactJsxPlugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactJsxPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },    
    
  
  },
});