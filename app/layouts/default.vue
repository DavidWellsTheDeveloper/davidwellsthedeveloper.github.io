<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'custom-cursor': cursorEnabled }">
    <!-- Navigation Drawer -->
    <div class="fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-teal-600 to-cyan-700 shadow-lg">
      <div class="flex h-full flex-col">
        <!-- Logo/Brand -->
        <div class="flex h-16 items-center justify-center border-b border-teal-500/30">
          <h1 class="text-xl font-bold text-white">David Wells</h1>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="flex-1 space-y-1 px-4 py-6">
          <UNavigationMenu 
            :items="navigationItems" 
            orientation="vertical"
            class="space-y-2"
          />
        </nav>
        
        <!-- Cursor Animation Toggle -->
        <div class="border-t border-teal-500/30 p-4">
          <div class="mb-4">
            <UButton 
              @click="toggleCursor"
              variant="ghost" 
              size="sm"
              class="text-white hover:text-teal-200 w-full justify-center"
            >
              <UIcon :name="cursorEnabled ? 'i-lucide-mouse-pointer-2' : 'i-lucide-mouse-pointer'" class="mr-2" />
              {{ cursorEnabled ? 'Disable' : 'Enable' }} Cursor FX
            </UButton>
          </div>
        </div>
        
        <!-- Footer Links -->
        <div class="border-t border-teal-500/30 p-4">
          <div class="flex justify-center space-x-4">
            <UButton 
              to="https://github.com/DavidWellsTheDeveloper" 
              target="_blank"
              variant="ghost" 
              size="sm"
              class="text-white hover:text-teal-200"
            >
              <UIcon name="i-simple-icons-github" class="text-lg" />
            </UButton>
            <UButton 
              to="https://gitlab.com/DavidWellsTheDeveloper" 
              target="_blank"
              variant="ghost" 
              size="sm"
              class="text-white hover:text-teal-200"
            >
              <UIcon name="i-simple-icons-gitlab" class="text-lg" />
            </UButton>
            <UButton 
              to="https://linkedin.com/in/davidwellsthedeveloper" 
              target="_blank"
              variant="ghost" 
              size="sm"
              class="text-white hover:text-teal-200"
            >
              <UIcon name="i-simple-icons-linkedin" class="text-lg" />
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pl-64">
      <main class="p-8">
        <slot />
      </main>
    </div>

    <!-- Cursor Animation (only show when enabled) -->
    <CursorDot v-if="cursorEnabled" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cursorEnabled = ref(true) // Default to enabled

const toggleCursor = () => {
  cursorEnabled.value = !cursorEnabled.value
}

const navigationItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home'
  },
  {
    label: 'About',
    to: '/about',
    icon: 'i-lucide-user'
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'i-lucide-mail'
  }
]
</script>

<style>
/* Override navigation text colors for better contrast */
.cursor-pointer {
  color: white !important;
}

/* Inactive navigation items */
[data-headlessui-state=""] .cursor-pointer {
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Active navigation items */
[data-headlessui-state="selected"] .cursor-pointer {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Hover state */
[data-headlessui-state=""]:hover .cursor-pointer {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.05) !important;
}
</style>