import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import axios from 'axios'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080', 
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  },
},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
