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
// Page configuration
definePageMeta({
  title: 'David T. Wells — Digital Resume',
  description:
    'Senior software engineer focused on data platforms, analytics, and full-stack systems—with Scrum Master experience.',
})

// Constitutional compliance monitoring
const config = useResumeConfig()
const isCompliant = computed(() => config.isConstitutionallyCompliant)

// Page-specific SEO
useSeoMeta({
  title: 'David T. Wells — Digital Resume',
  description:
    'Senior software engineer focused on data platforms, analytics, and full-stack systems—with Scrum Master experience.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
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
