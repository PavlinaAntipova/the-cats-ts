import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  
})
