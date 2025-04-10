import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base :'/Zero-Day-Heroes-Frontend/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
