<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Navigation -->
    <NavigationBar />

    <!-- Hero Section with Neural Network Background -->
    <HeroSectionParallax background-type="neural" />

    <!-- About Section -->
    <AboutSection />

    <!-- Experience Timeline -->
    <ExperienceTimeline />

    <!-- Skills Matrix -->
    <SkillsMatrix />

    <!-- Freelance -->
    <FreelanceSection />

    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const siteUrl = (
  runtimeConfig.public.appUrl || 'https://davidwellsthedeveloper.com'
).replace(/\/$/, '')

const pageTitle = 'David T. Wells — Senior Software Engineer'
const pageDescription =
  'Senior software engineer with 9 years of experience building and scaling data platforms, analytics, and full-stack systems. View the resume, experience, and freelance web development work of David T. Wells.'
const shareImage = `${siteUrl}/og-image.png`

// Page configuration
definePageMeta({
  title: 'David T. Wells — Senior Software Engineer',
  description:
    'Senior software engineer with 9 years of experience building and scaling data platforms, analytics, and full-stack systems.',
})

// Constitutional compliance monitoring
const config = useResumeConfig()
const isCompliant = computed(() => config.isConstitutionallyCompliant)

// Page-specific SEO
useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  author: 'David T. Wells',
  robots:
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  ogType: 'website',
  ogSiteName: 'David T. Wells — Senior Software Engineer',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${siteUrl}/`,
  ogLocale: 'en_US',
  ogImage: shareImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'David T. Wells — Senior Software Engineer',
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'David T. Wells',
        jobTitle: 'Senior Software Engineer',
        description: pageDescription,
        url: `${siteUrl}/`,
        image: shareImage,
        email: 'mailto:dave1twells@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Fort Collins',
          addressRegion: 'CO',
          addressCountry: 'US',
        },
        sameAs: [
          'https://www.linkedin.com/in/davidwellsdeveloper/',
          'https://github.com/DavidWellsTheDeveloper',
          'https://focowebsites.com',
        ],
        knowsAbout: [
          'Software Engineering',
          'Data Platforms',
          'Data Analytics',
          'Full-Stack Development',
          'Vue.js',
          'Nuxt',
          'TypeScript',
          'Amazon Web Services',
          'Scrum',
        ],
      }),
    },
  ],
})
</script>

<style scoped>
/* Page-specific styles for constitutional compliance */
.min-h-screen {
  /* Ensure proper layout for all screen sizes */
  min-height: 100vh;
  min-height: 100dvh; /* Dynamic viewport height for mobile */
}
</style>
