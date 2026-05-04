<template>
  <section
    class="hero-parallax relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    role="banner"
    aria-labelledby="hero-heading"
  >
    <!-- Parallax Background Container -->
    <div class="absolute inset-0 z-0">
      <!-- Background Image with Parallax Effect -->
      <div
        ref="backgroundLayer"
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{
          backgroundImage: `url('${selectedBackground}')`,
          transform: `translateY(${parallaxOffset * 0.5}px) scale(1.1)`,
        }"
      ></div>

      <!-- Additional Parallax Layers -->
      <div
        ref="midLayer"
        class="absolute inset-0 opacity-30"
        :style="{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
        }"
      >
        <!-- Dynamic floating elements -->
        <div
          v-for="(particle, index) in floatingParticles"
          :key="index"
          class="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"
          :style="{
            left: particle.x + '%',
            top: particle.y + '%',
            width: particle.size + 'px',
            height: particle.size + 'px',
            animationDelay: particle.delay + 's',
            transform: `translateY(${parallaxOffset * particle.speed}px)`,
          }"
        ></div>
      </div>

      <!-- Foreground parallax layer -->
      <div
        ref="foregroundLayer"
        class="absolute inset-0 opacity-20"
        :style="{
          transform: `translateY(${parallaxOffset * 0.8}px)`,
        }"
      >
        <!-- Gradient overlay for text readability -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"
        ></div>
      </div>
    </div>

    <!-- Content Container -->
    <div
      class="relative z-10 max-w-6xl mx-auto text-center px-4 py-16 md:py-24"
    >
      <div class="space-y-8" ref="contentContainer">
        <!-- Professional Name with enhanced animation -->
        <h1
          id="hero-heading"
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 leading-tight transform transition-all duration-1000"
          :style="{
            transform: `translateY(${contentOffset}px)`,
            opacity: contentOpacity,
          }"
        >
          {{ profile?.name || 'David T. Wells' }}
        </h1>

        <!-- Professional Title with staggered animation -->
        <h2
          class="text-xl md:text-2xl lg:text-3xl font-medium text-slate-200 max-w-4xl mx-auto transform transition-all duration-1000 delay-200"
          :style="{
            transform: `translateY(${contentOffset * 0.8}px)`,
            opacity: contentOpacity,
          }"
        >
          {{ profile?.title || 'Data Platforms & Analytics Software Engineer' }}
        </h2>

        <!-- Value Proposition with enhanced readability -->
        <p
          class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-slate-900/20 rounded-lg p-6 border border-slate-700/50 transform transition-all duration-1000 delay-400"
          :style="{
            transform: `translateY(${contentOffset * 0.6}px)`,
            opacity: contentOpacity,
          }"
        >
          {{
            profile?.summary ||
            'Senior Software Engineer focused on data platforms, analytics, and full-stack systems—with experience as a Scrum Master and a track record of performance and clean architecture.'
          }}
        </p>

        <!-- Enhanced CTA Buttons with parallax hover effects -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transform transition-all duration-1000 delay-600"
          :style="{
            transform: `translateY(${contentOffset * 0.4}px)`,
            opacity: contentOpacity,
          }"
        >
          <NuxtLink
            to="#contact"
            class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 backdrop-blur-sm"
            aria-describedby="hero-contact-desc"
            @mouseenter="onButtonHover"
            @mouseleave="onButtonLeave"
          >
            Get In Touch
            <svg
              class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="#experience"
            class="group inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-semibold rounded-lg transform hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300/50 backdrop-blur-sm"
            aria-describedby="hero-work-desc"
            @mouseenter="onButtonHover"
            @mouseleave="onButtonLeave"
          >
            View My Work
            <svg
              class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </NuxtLink>
        </div>

        <!-- Accessibility descriptions -->
        <div class="sr-only">
          <p id="hero-contact-desc">
            Navigate to contact section to get in touch
          </p>
          <p id="hero-work-desc">Navigate to work experience section</p>
        </div>

        <!-- Enhanced scroll indicator with parallax -->
        <div
          class="pt-16 animate-bounce transform transition-all duration-1000 delay-800"
          :style="{
            transform: `translateY(${contentOffset * 0.2}px)`,
            opacity: contentOpacity * 0.8,
          }"
        >
          <svg
            class="w-6 h-6 mx-auto text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Props for background selection
interface Props {
  backgroundType?: 'geometric' | 'waves' | 'neural'
}

const props = withDefaults(defineProps<Props>(), {
  backgroundType: 'neural',
})

// Constitutional compliance flags
const CONSTITUTIONAL = {
  authenticRepresentation: process.env.NODE_ENV === 'production',
  cleanDesign: process.env.NODE_ENV === 'production',
  fastLoading: process.env.NODE_ENV === 'production',
}

// Resume data
const { profile } = useResumeData()

const selectedBackground = computed(
  () => `/images/hero-bg-${props.backgroundType}.svg`
)

// Parallax state
const scrollY = ref(0)
const parallaxOffset = computed(() => scrollY.value * 0.5)
const contentOffset = computed(() => Math.max(0, scrollY.value * 0.1 - 20))
const contentOpacity = computed(() => Math.max(0.3, 1 - scrollY.value * 0.001))

// Floating particles for additional depth
const floatingParticles = ref([
  { x: 10, y: 20, size: 4, speed: 0.1, delay: 0 },
  { x: 80, y: 30, size: 6, speed: 0.15, delay: 1 },
  { x: 15, y: 70, size: 3, speed: 0.08, delay: 2 },
  { x: 90, y: 60, size: 5, speed: 0.12, delay: 0.5 },
  { x: 50, y: 15, size: 4, speed: 0.09, delay: 1.5 },
  { x: 25, y: 85, size: 7, speed: 0.14, delay: 0.8 },
  { x: 75, y: 80, size: 3, speed: 0.07, delay: 2.2 },
  { x: 60, y: 45, size: 5, speed: 0.11, delay: 1.8 },
])

// Scroll event handler
const handleScroll = () => {
  scrollY.value = window.scrollY
}

// Button hover effects
const onButtonHover = (event: Event) => {
  const button = event.target as HTMLElement
  button.style.transform = 'translateY(-8px) scale(1.05)'
}

const onButtonLeave = (event: Event) => {
  const button = event.target as HTMLElement
  button.style.transform = 'translateY(-4px) scale(1)'
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Initial animation
  setTimeout(() => {
    const content = document.querySelector('.hero-parallax .space-y-8')
    if (content) {
      content.classList.add('animate-fade-in-up')
    }
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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
</script>

<style scoped>
/* Enhanced animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1.2s ease-out forwards;
}

/* Smooth performance optimizations */
.hero-parallax {
  transform: translateZ(0);
  will-change: transform;
  /* Ensure the section doesn't interfere with following content */
  border-bottom: 1px solid transparent;
}

.hero-parallax * {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Ensure background layers stay within bounds */
.hero-parallax .absolute {
  clip-path: inset(0);
}

/* Enhanced hover effects */
.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Improved backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Responsive text adjustments */
@media (max-width: 768px) {
  .hero-parallax .space-y-8 > * + * {
    margin-top: 1.5rem;
  }
}

/* Performance optimization for parallax */
@media (prefers-reduced-motion: reduce) {
  .hero-parallax [style*='transform'] {
    transform: none !important;
  }

  .animate-bounce {
    animation: none;
  }
}
</style>
