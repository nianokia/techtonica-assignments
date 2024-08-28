import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy connects front & back end to one another
  // connect route key to port to URL value
  server: {
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
})
