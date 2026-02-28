import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: false,   // ← No source maps exposed to visitors
    minify: 'terser',   // ← Minify + mangle variable/function names
    terserOptions: {
      compress: {
        drop_console: true,   // Remove console.log statements
        drop_debugger: true,
      },
      mangle: true,           // Obfuscate variable/function names
    },
  },
})