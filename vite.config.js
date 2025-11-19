import { defineConfig } from 'vite'

// Use dynamic base for GitHub Pages project sites.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
})
