<template>
  <UCard 
    :class="[
      cardClasses,
      spacing
    ]"
    :ui="cardUi"
  >
    <template v-if="$slots.header || title || subtitle || icon" #header>
      <div class="flex items-center justify-between">
        <div v-if="title || subtitle || icon || $slots.title" class="flex-1">
          <slot name="title">
            <div v-if="title || icon" class="flex items-center gap-3">
              <UIcon v-if="icon" :name="icon" class="text-teal-600 text-2xl" />
              <h1 v-if="title" :class="titleClasses">{{ title }}</h1>
            </div>
            <p v-if="subtitle" :class="subtitleClasses">{{ subtitle }}</p>
          </slot>
        </div>
        <div v-if="$slots.headerAction" class="flex-shrink-0">
          <slot name="headerAction" />
        </div>
      </div>
      <slot name="header" />
    </template>

    <template v-if="$slots.default">
      <slot />
    </template>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script setup>
const props = defineProps({
  // Content props
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  
  // Styling props
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'hero', 'skills', 'experience'].includes(value)
  },
  
  // Spacing props
  spacing: {
    type: String,
    default: 'mb-8'
  },
  
  // Custom classes
  customClasses: {
    type: String,
    default: ''
  }
})

// Computed classes based on variant
const cardClasses = computed(() => {
  const baseClasses = props.customClasses
  
  switch (props.variant) {
    case 'hero':
      return `${baseClasses} bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border-teal-200 dark:border-teal-800`
    case 'skills':
      return `${baseClasses} bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700`
    case 'midnight':
      return `${baseClasses} bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-indigo-950 dark:to-slate-950 border-blue-200 dark:border-blue-800`
    default:
      return baseClasses
  }
})

const titleClasses = computed(() => {
  switch (props.variant) {
    case 'hero':
      return 'text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent'
    default:
      return 'text-xl font-semibold'
  }
})

const subtitleClasses = computed(() => {
  return 'text-lg text-gray-600 dark:text-gray-300 mt-1'
})

const cardUi = computed(() => {
  // Return any custom UI overrides if needed
  return {}
})
</script> 
 