import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 静态站。端口 5174：桌面端的 vite 占着 5173（strictPort）。
export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: { port: 5174, strictPort: true },
  build: { outDir: 'dist', emptyOutDir: true },
})
