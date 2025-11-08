<template>
  <nav
    role="navigation"
    aria-label="Main navigation"
    data-testid="navigation-bar"
    class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Name -->
        <div class="flex-shrink-0">
          <a
            href="#hero"
            data-testid="nav-logo"
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            @click="scrollToSection('hero', $event)"
          >
            {{ profile.name }}
          </a>
        </div>
        
        <!-- Desktop Navigation Links -->
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                @click="scrollToSection(item.href.substring(1), $event)"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {{ item.name }}
              </a>
              <!-- Download Resume Button -->
              <div class="ml-4">
                <ResumeDownload />
              </div>
            </div>
          </div>        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            type="button"
            data-testid="mobile-menu-button"
            class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">{{ isMobileMenuOpen ? 'Close main menu' : 'Open main menu' }}</span>
            <!-- Menu icon -->
            <svg 
              v-if="!isMobileMenuOpen"
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close icon -->
            <svg 
              v-else
              class="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      v-show="isMobileMenuOpen"
      id="mobile-menu"
      class="md:hidden border-t border-gray-200 dark:border-gray-700"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
        <a
          href="#about"
          class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          @click="scrollToSection('about', $event); closeMobileMenu()"
        >
          About
        </a>
        <a
          href="#experience"
          class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          @click="scrollToSection('experience', $event); closeMobileMenu()"
        >
          Experience
        </a>
        <a
          href="#skills"
          class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          @click="scrollToSection('skills', $event); closeMobileMenu()"
        >
          Skills
        </a>
        <a
          href="#contact"
          class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          @click="scrollToSection('contact', $event); closeMobileMenu()"
        >
          Contact
        </a>
        <!-- Download Resume Button for Mobile -->
        <div class="px-3 py-2">
          <ResumeDownload />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Constitutional compliance and configuration
const resumeConfig = useResumeConfig()
const { profile } = useResumeData()

// Get contact information (keeping the old structure for other potential uses)
const contact = computed(() => {
  const publicContact = resumeConfig.getPublicContact()
  return {
    name: publicContact.name || profile.name
  }
})

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation menu items
const navigation = ref([
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
])

// Navigation methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Smooth scrolling to sections
const scrollToSection = (sectionId: string, event: Event) => {
  event.preventDefault()
  
  const element = document.getElementById(sectionId)
  if (element) {
    // Smooth scroll with offset for sticky header
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const nav = document.querySelector('[data-testid="navigation-bar"]')
    if (nav && !nav.contains(event.target as Node)) {
      isMobileMenuOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)
  
  // Cleanup
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Constitutional compliance validation
watchEffect(() => {
  const constitutional = resumeConfig.config.value.constitutional
  if (!constitutional?.authenticRepresentation) {
    console.warn('⚠️ NavigationBar: Authentic representation disabled')
  }
  if (!constitutional?.cleanDesign) {
    console.warn('⚠️ NavigationBar: Clean design disabled')
  }
  if (!constitutional?.fastLoading) {
    console.warn('⚠️ NavigationBar: Fast loading disabled')
  }
})
</script>

<style scoped>
/* Component-specific styles for constitutional compliance */
.nav-link {
  /* Fast loading: Optimize transitions */
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-link {
  /* Clean design: Consistent mobile styling */
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .mobile-nav-link {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .nav-link:hover,
  .mobile-nav-link:hover {
    background-color: ButtonHighlight;
    color: ButtonText;
  }
}

/* Print styles for deployment readiness */
@media print {
  nav {
    display: none;
  }
}
</style>