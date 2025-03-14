import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [process.env.APP_DOMAIN || ''],
  },
})
