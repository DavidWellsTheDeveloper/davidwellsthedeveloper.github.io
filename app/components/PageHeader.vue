<template>
  <div class="mb-6">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-gray-500 mt-1">{{ subtitle }}</p>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script> 