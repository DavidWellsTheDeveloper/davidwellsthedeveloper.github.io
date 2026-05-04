<template>
  <div>
    <!-- Nuxt will render page content here -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Global app configuration
const config = useResumeConfig()

// Global SEO defaults
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#ffffff' },
  ],
})

// Constitutional compliance monitoring
onMounted(() => {
  if (config.isDevelopment) {
    console.log('🏛️ Constitutional Compliance Status:', {
      authentic: config.config.value.constitutional.authenticRepresentation,
      clean: config.config.value.constitutional.cleanDesign,
      fast: config.config.value.constitutional.fastLoading,
      compliant: config.isConstitutionallyCompliant,
    })
  }
})
</script>
