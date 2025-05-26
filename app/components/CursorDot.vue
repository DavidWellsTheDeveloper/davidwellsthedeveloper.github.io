<template>
  <div class="cursor-container">
    <!-- Following ring only -->
    <div 
      class="cursor-ring"
      :style="{
        left: ringPosition.x + 'px',
        top: ringPosition.y + 'px',
        transform: `scale(${isHovering ? 1.2 : 1})`,
        opacity: isHovering ? 0.8 : 0.6
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ringPosition = ref({ x: 0, y: 0 })
const isHovering = ref(false)

let targetX = 0
let targetY = 0

const handleMouseMove = (e) => {
  targetX = e.clientX - 8 // Center the smaller ring
  targetY = e.clientY - 8
}

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}

// Smooth animation for the ring
const animateRing = () => {
  const dx = targetX - ringPosition.value.x
  const dy = targetY - ringPosition.value.y
  
  ringPosition.value = {
    x: ringPosition.value.x + dx * 0.08, // Slightly slower following
    y: ringPosition.value.y + dy * 0.08
  }
  
  requestAnimationFrame(animateRing)
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseenter', handleMouseEnter, true)
  document.addEventListener('mouseleave', handleMouseLeave, true)
  
  // Start ring animation
  animateRing()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseenter', handleMouseEnter, true)
  document.removeEventListener('mouseleave', handleMouseLeave, true)
})
</script>

<style scoped>
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.cursor-ring {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1.5px solid rgba(13, 148, 136, 0.7);
  border-radius: 50%;
  transition: transform 0.3s ease, opacity 0.2s ease;
  box-shadow: 
    0 0 12px rgba(13, 148, 136, 0.4),
    0 0 24px rgba(13, 148, 136, 0.2),
    inset 0 0 8px rgba(13, 148, 136, 0.1);
}
</style> 