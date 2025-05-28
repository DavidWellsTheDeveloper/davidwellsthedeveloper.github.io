<template>
  <div class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-secondary-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex-1">
    <h3 class="font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
      {{ header }}
    </h3>
    <div class="flex flex-wrap gap-2">
      <UBadge
        v-for="skill in skills"
        :key="skill"
        :color="badgeColor"
        variant="soft"
        class="transition-transform hover:scale-110"
      >
        {{ skill }}
      </UBadge>
    </div>
  </div>
</template>

<script setup>
defineProps({
  header: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  },
  badgeColor: {
    type: String,
    default: 'primary'
  }
})
</script> 