<template>
  <div
    class="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
    data-testid="experience-card"
  >
    <!-- Timeline dot connector -->
    <div
      class="absolute -left-8 top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-sm"
    ></div>

    <!-- Main card content -->
    <div class="p-6">
      <!-- Header with position and company -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4"
      >
        <div class="flex-1">
          <h3
            data-testid="experience-position"
            class="text-lg font-semibold text-gray-900 dark:text-white mb-1"
          >
            {{ experience.position }}
          </h3>
          <div class="flex items-center space-x-2 mb-2">
            <p
              data-testid="experience-company"
              class="text-blue-600 dark:text-blue-400 font-medium"
            >
              {{ experience.company }}
            </p>
            <span class="text-gray-400">•</span>
            <span
              data-testid="experience-location"
              class="text-sm text-gray-500 dark:text-gray-400"
            >
              {{ experience.location }}
            </span>
          </div>
        </div>
        <span
          data-testid="experience-duration"
          class="text-sm text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start"
        >
          {{ experience.duration }}
        </span>
      </div>

      <!-- Summary description -->
      <p
        data-testid="experience-description"
        class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
      >
        {{ experience.description }}
      </p>

      <!-- Technology tags -->
      <div
        v-if="experience.technologies && experience.technologies.length > 0"
        class="mb-4"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in experience.technologies.slice(
              0,
              showAllTechnologies ? experience.technologies.length : 6
            )"
            :key="tech"
            data-testid="experience-tech"
            class="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-100 dark:border-blue-800"
          >
            {{ tech }}
          </span>
          <button
            v-if="experience.technologies.length > 6"
            @click="showAllTechnologies = !showAllTechnologies"
            class="px-3 py-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {{
              showAllTechnologies
                ? 'Show less'
                : `+${experience.technologies.length - 6} more`
            }}
          </button>
        </div>
      </div>
    </div>

    <!-- Expansion panel -->
    <div
      v-if="hasDetailedContent"
      class="border-t border-gray-100 dark:border-gray-700"
    >
      <button
        @click="toggleExpanded"
        :aria-expanded="isExpanded"
        :aria-controls="`experience-details-${experience.id}`"
        data-testid="expand-button"
        class="w-full px-6 py-3 flex items-center justify-between text-left bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 rounded-b-xl"
      >
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
          {{ isExpanded ? 'Hide Details' : 'View Key Achievements' }}
        </span>
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isExpanded }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Expanded content -->
      <div
        v-show="isExpanded"
        :id="`experience-details-${experience.id}`"
        data-testid="experience-details"
        class="experience-details px-6 pb-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      >
        <div class="pt-4">
          <!-- Key achievements -->
          <div
            v-if="experience.achievements && experience.achievements.length > 0"
            class="mb-4"
          >
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center"
            >
              <svg
                class="w-4 h-4 mr-2 text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Key Achievements
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(achievement, index) in experience.achievements"
                :key="index"
                data-testid="experience-achievement"
                class="flex items-start text-sm text-gray-600 dark:text-gray-300"
              >
                <div
                  class="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-2 mr-3"
                ></div>
                {{ achievement }}
              </li>
            </ul>
          </div>

          <!-- Additional technologies (if any were hidden) -->
          <div
            v-if="
              experience.technologies &&
              experience.technologies.length > 6 &&
              !showAllTechnologies
            "
            class="mb-4"
          >
            <h4
              class="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center"
            >
              <svg
                class="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              Additional Technologies
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in experience.technologies.slice(6)"
                :key="tech"
                class="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-100 dark:border-purple-800"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | null
  location: string
  description: string
  achievements?: string[]
  technologies?: string[]
  duration: string
}

interface Props {
  experience: Experience
}

const props = defineProps<Props>()

// Component state
const isExpanded = ref(false)
const showAllTechnologies = ref(false)

// Check if there's detailed content to show
const hasDetailedContent = computed(() => {
  return (
    (props.experience.achievements &&
      props.experience.achievements.length > 0) ||
    (props.experience.technologies && props.experience.technologies.length > 6)
  )
})

// Toggle expansion
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

// Accessibility and smooth animation
watch(isExpanded, (newValue: boolean) => {
  if (newValue) {
    // Smooth scroll to expanded content after animation
    nextTick(() => {
      const element = document.getElementById(
        `experience-details-${props.experience.id}`
      )
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    })
  }
})
</script>

<style scoped>
/* Smooth transitions for expansion */
.experience-details {
  transition: all 0.3s ease-in-out;
}

/* Enhanced hover effects */
.experience-card:hover {
  transform: translateY(-1px);
}

/* Gradient enhancements */
.bg-gradient-to-br {
  background-attachment: fixed;
}
</style>
