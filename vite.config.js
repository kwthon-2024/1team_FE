import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM 환경에서 __dirname을 설정
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Vite config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
