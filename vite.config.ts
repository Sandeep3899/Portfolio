import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Portfolio/",  // Use your repository name here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
