import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/doctorspub-bickfaya/",
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,jpeg,jpg,png,woff2}'],
      },
      manifest: {
        name: "Doctor's Pub - Bickfaya",
        short_name: "Doctor's Pub",
        description: "Café by day, pub by night. Sports & live entertainment in Bickfaya.",
        theme_color: '#D4AF37',
        background_color: '#000000',
        start_url: '/doctorspub-bickfaya/',
        scope: '/doctorspub-bickfaya/',
        display: 'standalone',
        icons: [
          { src: 'IMG_9912.jpeg', sizes: '512x512', type: 'image/jpeg', purpose: 'any' },
          { src: 'IMG_9913.jpeg', sizes: '192x192', type: 'image/jpeg', purpose: 'any' },
          { src: 'icons/mask-icon.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'maskable' }
        ]
      }
    })
  ]
})
