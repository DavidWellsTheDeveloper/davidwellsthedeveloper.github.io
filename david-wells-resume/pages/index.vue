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
    
    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
// Page configuration
definePageMeta({
  title: 'Dave Wells - Professional Digital Resume',
  description: 'Minimalist digital resume showcasing authentic professional experience and verified skills.'
})

// Constitutional compliance monitoring
const config = useResumeConfig()
const isCompliant = computed(() => config.isConstitutionallyCompliant)

// Page-specific SEO
useSeoMeta({
  title: 'Dave Wells - Professional Digital Resume',
  description: 'Minimalist digital resume showcasing authentic professional experience and verified skills.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
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