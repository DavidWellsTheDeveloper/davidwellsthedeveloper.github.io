<template>
  <div 
    ref="parallaxContainer"
    class="fixed inset-0 -z-10 overflow-hidden"
  >
    <div 
      ref="parallaxElement"
      class="absolute inset-0 w-full bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
      :style="{ 
        backgroundImage: 'url(/images/parallax-bg.jpg)',
        height: `${backgroundHeight}px`,
        transform: `translateY(${parallaxOffset}px) scale(1.1)`
      }"
    />
    
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gray-900/40 dark:bg-gray-900/60" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const parallaxContainer = ref(null)
const parallaxElement = ref(null)
const parallaxOffset = ref(0)
const backgroundHeight = ref(0)

let ticking = false

const calculateBackgroundHeight = () => {
  // Get the full document height
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  )
  
  // Add extra height to ensure coverage during parallax movement
  // The extra 50% ensures we have enough background even with parallax offset
  backgroundHeight.value = documentHeight + (window.innerHeight * 0.5)
}

const updateParallax = () => {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.3 // Slightly reduced parallax speed for better mobile performance
  
  parallaxOffset.value = rate
  ticking = false
}

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax)
    ticking = true
  }
}

const handleResize = () => {
  calculateBackgroundHeight()
}

onMounted(() => {
  nextTick(() => {
    calculateBackgroundHeight()
    updateParallax()
  })
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  
  // Recalculate on route changes (for different page heights)
  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      calculateBackgroundHeight()
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Ensure smooth performance */
.parallax-bg {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style> 