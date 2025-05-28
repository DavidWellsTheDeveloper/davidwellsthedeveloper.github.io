<template>
  <div 
    ref="parallaxContainer"
    class="fixed inset-0 -z-10 overflow-hidden"
  >
    <div 
      ref="parallaxElement"
      class="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
      :style="{ 
        backgroundImage: 'url(/images/parallax-bg.jpg)',
        transform: `translateY(${parallaxOffset}px) scale(1.1)`
      }"
    />
    
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-gray-900/40 dark:bg-gray-900/60" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const parallaxContainer = ref(null)
const parallaxElement = ref(null)
const parallaxOffset = ref(0)

let ticking = false

const updateParallax = () => {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.5 // Adjust this value to control parallax speed
  
  parallaxOffset.value = rate
  ticking = false
}

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateParallax() // Initial call
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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