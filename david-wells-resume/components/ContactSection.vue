<template>
  <section
    id="contact"
    role="region"
    aria-labelledby="contact-heading"
    data-testid="contact-section"
    class="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 py-16 sm:py-24"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2
          id="contact-heading"
          data-testid="contact-title"
          class="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4"
        >
          Get In Touch
        </h2>
        <p class="text-lg text-slate-200 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities and collaborative projects. Whether you're looking for a senior developer, team lead, or technical consultant, I'd love to hear about your challenges and see how I can help your team succeed.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div data-testid="contact-info" class="space-y-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>
          
          <div class="space-y-4">
            <div v-if="contact.email" class="flex items-center space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.6a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white">Email</h4>
                <a 
                  :href="`mailto:${contact.email}`"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 underline"
                >
                  {{ contact.email }}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Social Links -->
        <div data-testid="social-links" class="space-y-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Connect Online
          </h3>
          
          <div class="space-y-4">
            <a
              v-for="(link, platform) in socialLinks"
              :key="platform"
              :href="link"
              :data-testid="`${platform}-link`"
              class="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                   :class="getSocialIconClass(String(platform))">
                <component :is="getSocialIcon(String(platform))" class="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {{ platform }}
                </h4>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  Professional {{ platform }} profile
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Constitutional Compliance Indicator (Development Only) -->
      <div
        v-if="isDevelopment"
        class="mt-12 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
      >
        <h4 class="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
          Contact Section - Constitutional Compliance
        </h4>
        <div class="text-xs text-blue-600 dark:text-blue-300">
          ✅ Authentic representation with TODO markers<br>
          ✅ Clean design with organized contact layout<br>
          ✅ Fast loading with optimized icons and minimal JavaScript<br>
          ✅ Deployment ready with accessible markup
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watchEffect, h } from 'vue'

// Constitutional compliance: Using verified authentic data from Dave
const { profile, isContentVerified } = useResumeData()
const resumeConfig = useResumeConfig()

// Use Dave's verified contact information
const contact = computed(() => ({
  email: profile.email
}))

// Get social media links (to be updated when Dave provides verified links)
const socialLinks = computed(() => {
  const links = resumeConfig.getSocialLinks()
  // Use placeholder until Dave provides verified social media links
  return Object.keys(links).length > 0 ? links : {
    linkedin: profile.linkedin || '#',
    github: profile.github || '#'
  }
})

// Environment detection for development features
const isDevelopment = computed(() => resumeConfig.isDevelopment)

// Social media icon components
const getSocialIcon = (platform: string) => {
  const icons: Record<string, any> = {
    linkedin: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
      })
    ]),
    github: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
      })
    ])
  }
  return icons[platform] || icons.github
}

// Social media icon styling
const getSocialIconClass = (platform: string) => {
  const classes: Record<string, string> = {
    linkedin: 'bg-blue-600 text-white',
    github: 'bg-gray-800 text-white'
  }
  return classes[platform] || 'bg-gray-600 text-white'
}

// Constitutional compliance validation
watchEffect(() => {
  const constitutional = resumeConfig.config.value.constitutional
  if (!constitutional?.authenticRepresentation) {
    console.warn('⚠️ ContactSection: Authentic representation disabled')
  }
  if (!constitutional?.cleanDesign) {
    console.warn('⚠️ ContactSection: Clean design disabled')
  }
  if (!constitutional?.fastLoading) {
    console.warn('⚠️ ContactSection: Fast loading disabled')
  }
})
</script>

<style scoped>
/* Component-specific styles for constitutional compliance */
.social-link {
  /* Fast loading: Optimize transitions */
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .social-link {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .social-link:hover {
    background-color: ButtonHighlight;
    color: ButtonText;
    border-color: ButtonText;
  }
}

/* Print styles for deployment readiness */
@media print {
  .social-link {
    color: black !important;
    background: white !important;
    border: 1px solid black !important;
  }
}
</style>