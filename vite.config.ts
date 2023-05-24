import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [svgr(), react()],
  
})
