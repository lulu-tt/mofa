import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/mofa/", // GitHub Pages 리포지토리 이름
  plugins: [react()],
})
