<template>
  <section 
    class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4 py-16 md:py-24"
    role="banner"
    aria-labelledby="hero-heading"
  >
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
    
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="space-y-8">
        <!-- Professional Name -->
        <h1
          id="hero-heading"
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 leading-tight"
        >
          {{ profile?.name || 'TODO: Verify with Dave - Professional Name' }}
        </h1>

        <!-- Professional Title -->
        <h2 class="text-xl md:text-2xl lg:text-3xl font-medium text-slate-200 max-w-4xl mx-auto">
          {{ profile?.title || 'TODO: Verify with Dave - Professional Title' }}
        </h2>

        <!-- Value Proposition -->
        <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {{ profile?.summary || 'TODO: Verify with Dave - Professional Summary' }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <NuxtLink
            to="#contact"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-describedby="hero-contact-desc"
          >
            Get In Touch
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          
          <NuxtLink
            to="#experience"
            class="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300/50"
            aria-describedby="hero-work-desc"
          >
            View My Work
          </NuxtLink>
        </div>

        <!-- Accessibility descriptions -->
        <div class="sr-only">
          <p id="hero-contact-desc">Navigate to contact section to get in touch</p>
          <p id="hero-work-desc">Navigate to work experience section</p>
        </div>

        <!-- Scroll indicator -->
        <div class="pt-16 animate-bounce">
          <svg class="w-6 h-6 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Constitutional compliance flags
const CONSTITUTIONAL = {
  authenticRepresentation: process.env.NODE_ENV === 'production',
  cleanDesign: process.env.NODE_ENV === 'production',
  fastLoading: process.env.NODE_ENV === 'production'
}

// Constitutional validation
if (!CONSTITUTIONAL.authenticRepresentation) {
  console.warn('⚠️ HeroSection: Authentic representation disabled')
}
if (!CONSTITUTIONAL.cleanDesign) {
  console.warn('⚠️ HeroSection: Clean design disabled')
}
if (!CONSTITUTIONAL.fastLoading) {
  console.warn('⚠️ HeroSection: Fast loading disabled')
}

// Resume data
const { profile } = useResumeData()

// SEO metadata (commented out due to test environment)
// useHead({
//   title: () => `${profile?.contact?.name} - ${profile?.title}`,
//   meta: [
//     {
//       name: 'description',
//       content: () => profile?.summary
//     },
//     {
//       property: 'og:title',
//       content: () => `${profile?.contact?.name} - Digital Resume`
//     },
//     {
//       property: 'og:description',
//       content: () => profile?.summary
//     }
//   ]
// })
</script>

<style scoped>
/* Enhanced gradient animations */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-to-br {
  background-size: 400% 400%;
  animation: gradient-shift 20s ease infinite;
}

/* Smooth text gradient animation */
.text-transparent.bg-clip-text {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease-in-out infinite;
}

/* Responsive font sizing improvements */
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
  }
}

/* Focus improvements for accessibility */
.focus\:ring-4:focus {
  box-shadow: 0 0 0 4px var(--ring-color);
}
</style>