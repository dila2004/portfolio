import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/', // Required for GitHub Pages
  plugins: [
    react(),           // Enables React Fast Refresh and JSX
    tailwindcss(),     // Enables Tailwind
  ],
})

