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
              <UIcon v-if="icon" :name="icon" class="text-teal-500 text-2xl" />
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
    validator: (value) => ['default', 'hero', 'skills', 'midnight'].includes(value)
  },
  
  // Spacing props
  spacing: {
    type: String,
    default: 'mb-20'
  },
  
  // Custom classes
  customClasses: {
    type: String,
    default: ''
  }
})

// Computed classes based on variant
const cardClasses = computed(() => {
  const baseClasses = `${props.customClasses} backdrop-blur-sm shadow-xl`
  
  switch (props.variant) {
    case 'hero':
      return `${baseClasses} bg-gradient-to-br from-teal-50/80 to-cyan-50/80 dark:from-primary-950/80 dark:to-slate-950/80 border-teal-200 dark:border-teal-800`
    case 'skills':
      return `${baseClasses} bg-gradient-to-br from-slate-50/80 to-slate-100/80 dark:from-primary-900/80 dark:to-slate-900/80 border-slate-200 dark:border-slate-700`
    case 'midnight':
      return `${baseClasses} bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-secondary-950/80 dark:to-slate-950/80 border-blue-200 dark:border-blue-800`
    default:
      return `${baseClasses} bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50`
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
  return {}
})
</script> 
 