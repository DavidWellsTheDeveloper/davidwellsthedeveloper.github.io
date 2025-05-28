<template>
  <div :class="containerClass">
    <UButton 
      v-for="link in SOCIAL_LINKS"
      :key="link.name"
      :to="link.url"
      target="_blank"
      :variant="variant"
      :size="size"
      :color="color"
      :class="buttonClass"
      :aria-label="`Visit ${link.name} profile`"
    >
      <UIcon :name="link.icon" :class="iconClass" />
      <span v-if="showLabels" class="ml-2">{{ link.name }}</span>
    </UButton>
  </div>
</template>

<script setup>
import { SOCIAL_LINKS } from '~/constants'

defineProps({
  variant: {
    type: String,
    default: 'ghost'
  },
  size: {
    type: String,
    default: 'sm'
  },
  color: {
    type: String,
    default: 'white'
  },
  showLabels: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String,
    default: 'flex justify-center space-x-4'
  },
  buttonClass: {
    type: String,
    default: 'text-white hover:text-teal-200'
  },
  iconClass: {
    type: String,
    default: 'text-lg'
  }
})
</script> 