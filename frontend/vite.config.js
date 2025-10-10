import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // <--- добавляем, чтобы сборка использовала относительные пути
  plugins: [react()]
})