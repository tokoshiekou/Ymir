import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'


export default defineConfig({
  plugins: [
    vue(),
    crx({ manifest })
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      port: 443,
    },
  },
})
