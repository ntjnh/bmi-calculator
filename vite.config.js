import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    browser: {
      provider: 'playwright',
      enabled: true,
      instances: [
        { browser: 'chromium' }
      ],
      headless: true,
      viewport: {
        width: 1440, 
        height: 900
      }
    }
  }
})
