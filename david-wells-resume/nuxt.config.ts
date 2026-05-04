// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-05',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Fira Code': [400, 500],
    },
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },
  app: {
    head: {
      title: 'David T. Wells - Digital Resume',
      meta: [
        {
          name: 'description',
          content:
            'Professional digital resume for David T. Wells — data platforms, analytics, and full-stack software engineering',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          sizes: '16x16',
          href: '/favicon-16x16.svg',
        },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    // Private keys (only available on server-side)
    // SMTP configuration
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,

    // Email service API keys
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    mailgunApiKey: process.env.MAILGUN_API_KEY,
    resendApiKey: process.env.RESEND_API_KEY,

    // AWS configuration
    awsRegion: process.env.AWS_REGION,
    awsS3Bucket: process.env.AWS_S3_BUCKET,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsCloudfrontDistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,

    // Security
    sentryDsn: process.env.SENTRY_DSN,
    newRelicLicenseKey: process.env.NEW_RELIC_LICENSE_KEY,
    datadogApiKey: process.env.DATADOG_API_KEY,

    // Rate limiting
    rateLimitMaxRequests: process.env.RATE_LIMIT_MAX_REQUESTS,
    rateLimitWindowMs: process.env.RATE_LIMIT_WINDOW_MS,

    // Public keys (exposed to client-side)
    public: {
      // Application metadata
      nodeEnv: process.env.NODE_ENV,
      appUrl: process.env.NUXT_PUBLIC_APP_URL,
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      appDescription: process.env.NUXT_PUBLIC_APP_DESCRIPTION,

      // Constitutional principles
      authenticRepresentation: process.env.NUXT_PUBLIC_AUTHENTIC_REPRESENTATION,
      cleanDesign: process.env.NUXT_PUBLIC_CLEAN_DESIGN,
      fastLoading: process.env.NUXT_PUBLIC_FAST_LOADING,

      // Performance targets
      targetLoadTime: process.env.NUXT_PUBLIC_TARGET_LOAD_TIME,
      targetFCP: process.env.NUXT_PUBLIC_TARGET_FCP,
      targetLCP: process.env.NUXT_PUBLIC_TARGET_LCP,

      // Contact information
      email: process.env.NUXT_PUBLIC_EMAIL,
      phone: process.env.NUXT_PUBLIC_PHONE,
      location: process.env.NUXT_PUBLIC_LOCATION,

      // Social media
      linkedin: process.env.NUXT_PUBLIC_LINKEDIN,
      github: process.env.NUXT_PUBLIC_GITHUB,
      twitter: process.env.NUXT_PUBLIC_TWITTER,

      // Analytics
      googleAnalytics: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS,
      gtmId: process.env.NUXT_PUBLIC_GTM_ID,

      // Features
      cspEnabled: process.env.NUXT_PUBLIC_CSP_ENABLED,
      logRocketAppId: process.env.LOGROCKET_APP_ID,
    },
  },
})
