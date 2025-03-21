// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appDomain: process.env.APP_DOMAIN,
      gitHash: process.env.GITHUB_SHA,
      releaseVersion: process.env.RELEASE_VERSION,
    },
  },
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['@/assets/css/index.css'],
  modules: ['@nuxtjs/i18n', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/icon'],
  i18n: { vueI18n: './i18n.config.ts' },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [process.env.APP_DOMAIN || ''],
    },
  },

  components: [
    { path: '@/components/common', pathPrefix: false },
    { path: '@/components/parts', pathPrefix: false },
  ],

  nitro: {
    preset: process.env.NITRO_PRESET || 'node-server',
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: 'icon/haizalian-icon.png' }],
    },
  },
})
