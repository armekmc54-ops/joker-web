import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/joker-web/', // <-- AGREGA ESTA LÍNEA
  plugins: [react()],
})
