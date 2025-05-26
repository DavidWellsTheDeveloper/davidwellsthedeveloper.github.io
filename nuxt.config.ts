// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',
  
  // Configure for static site generation
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // Ensure proper static generation
  experimental: {
    payloadExtraction: false
  }
})