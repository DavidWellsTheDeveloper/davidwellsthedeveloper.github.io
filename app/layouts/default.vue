<template>
  <div class="flex">
    <!-- Navigation Drawer - Gradient Background -->
    <div class="w-64 h-screen sticky top-0 bg-gradient-to-b from-teal-900 to-cyan-700 text-white py-6 px-4">
      <div class="mb-8">
        <h2 class="text-xl font-bold text-white">Site Nav</h2>
      </div>
      
      <div>
        <UNavigationMenu
          orientation="vertical"
          :items="navigationItems"
        />
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <UContainer class="py-8 px-6">
        <slot />
      </UContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navigationItems = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Main Navigation',
      type: 'label'
    },
    {
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/'
    },
    {
      label: 'About',
      icon: 'i-lucide-info',
      to: '/about'
    },
    {
      label: 'Contact',
      icon: 'i-lucide-mail',
      to: '/contact'
    }
  ],
  [
    {
      label: 'External Links',
      type: 'label'
    },
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/DavidWellsTheDeveloper',
      target: '_blank'
    },
    {
      label: 'GitLab',
      icon: 'i-simple-icons-gitlab',
      to: 'https://gitlab.com/DaveWells',
      target: '_blank'
    },
    {
      label: 'LinkedIn',
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/in/davidwellsdeveloper/',
      target: '_blank'
    }
  ]
])
</script>

<style>
 
</style>