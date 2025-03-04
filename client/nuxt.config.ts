// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  modules: ['@nuxtjs/i18n'],
  vite:{
    plugins:[
      tailwindcss()
    ]
  },
  i18n: {vueI18n: './i18n.config.ts'}
})