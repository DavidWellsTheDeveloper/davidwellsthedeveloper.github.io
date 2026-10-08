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

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Senior Software Engineer & Scrum Master',
      titleTemplate: '%s | David Wells',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of David Wells, a Senior Software Engineer and Scrum Master with 9 years of experience in scalable application development, data platforms, and team leadership.'
        },
        { name: 'theme-color', content: '#0d9488' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'David Wells' },
        { property: 'og:title', content: 'David Wells — Senior Software Engineer & Scrum Master' },
        {
          property: 'og:description',
          content:
            'Senior Software Engineer and Scrum Master with 9 years of experience scaling data-driven applications, analytics platforms, and agile teams.'
        },
        { property: 'og:url', content: 'https://davidwellsthedeveloper.github.io/' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // Configure for static site generation
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/experience',
        '/projects',
        '/contact'
      ]
    }
  },

  // Ensure proper static generation
  experimental: {
    payloadExtraction: false
  }
})