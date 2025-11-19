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
        start_url: '.',
        scope: '/doctorspub-bickfaya/',
        display: 'standalone',
        icons: [
          { src: 'https://neejad-md-mba.github.io/doctorspub-bickfaya/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'https://neejad-md-mba.github.io/doctorspub-bickfaya/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'https://neejad-md-mba.github.io/doctorspub-bickfaya/icons/mask-icon.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'maskable' }
        ]
      }
    })
  ]
})
