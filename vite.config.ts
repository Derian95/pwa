import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA,VitePWAOptions } from 'vite-plugin-pwa'

const manifest2:VitePWAOptions = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "React-vite-app",
    short_name: "react-vite-app",
    description: "I am a simple vite app",
    icons: [{
      src: './icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: './icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: './icon-512x512.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: './icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#181818',
    background_color: '#e0cc3b',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  },
  injectRegister: false,
  minify: false,
  workbox: {
    clientsClaim: true,
    skipWaiting: true
  },
  injectManifest: undefined,
  includeManifestIcons: false,
  disable: false
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifest2)],
})
