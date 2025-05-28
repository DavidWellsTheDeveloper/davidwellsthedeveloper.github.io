<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'custom-cursor': cursorEnabled }">
    <!-- Mobile Header (visible on small screens only) -->
    <div class="block lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-teal-600 to-cyan-700 shadow-lg">
      <div class="flex items-center justify-between h-16 px-4">
        <h1 class="text-xl font-bold text-white">David Wells</h1>
        <UButton
          @click="toggleMobileMenu"
          variant="ghost"
          size="sm"
          class="text-white hover:text-teal-200"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <UIcon :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="text-xl" />
        </UButton>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-50 lg:hidden"
        @click="closeMobileMenu"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50"></div>
        
        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            v-if="mobileMenuOpen"
            class="relative w-64 h-full bg-gradient-to-b from-teal-600 to-cyan-700 shadow-lg"
            @click.stop
          >
            <div class="flex h-full flex-col">
              <!-- Mobile Menu Header -->
              <div class="flex h-16 items-center justify-between px-4 border-b border-teal-500/30">
                <h1 class="text-xl font-bold text-white">David Wells</h1>
                <UButton
                  @click="closeMobileMenu"
                  variant="ghost"
                  size="sm"
                  class="text-white hover:text-teal-200"
                  aria-label="Close menu"
                >
                  <UIcon name="i-lucide-x" class="text-xl" />
                </UButton>
              </div>

              <!-- Mobile Navigation Menu -->
              <nav class="flex-1 space-y-1 px-4 py-6">
                <UNavigationMenu
                  :items="navigationItems"
                  orientation="vertical"
                  class="space-y-2"
                  @click="closeMobileMenu"
                />
              </nav>

              <!-- Mobile Cursor Animation Toggle -->
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

              <!-- Mobile Footer Links -->
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
        </Transition>
      </div>
    </Transition>

    <!-- Desktop Navigation Drawer (hidden on mobile) -->
    <div class="hidden lg:block fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-teal-600 to-cyan-700 shadow-lg">
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
    <div class="pt-16 lg:pt-0 pl-0 lg:pl-64">
      <main class="p-8">
        <slot />
      </main>
    </div>

    <!-- Cursor Animation (only show when enabled) -->
    <CursorDot v-if="cursorEnabled" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursorEnabled = ref(true) // Default to enabled
const mobileMenuOpen = ref(false)

const toggleCursor = () => {
  cursorEnabled.value = !cursorEnabled.value
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu on escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Close mobile menu on route change
const router = useRouter()
router.afterEach(() => {
  closeMobileMenu()
})

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})

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