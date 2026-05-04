<template>
  <section
    id="experience"
    role="region"
    aria-labelledby="experience-heading"
    data-testid="experience-timeline"
    class="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2
        id="experience-heading"
        data-testid="experience-title"
        class="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-12"
      >
        Professional Experience
      </h2>

      <div class="relative">
        <!-- Enhanced timeline line with gradient -->
        <div
          class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800"
        ></div>

        <!-- Experience Cards -->
        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id || index"
            class="relative flex items-start"
          >
            <!-- Use the new ExperienceCard component -->
            <div class="ml-16 w-full">
              <ExperienceCard :experience="exp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Experience {
  id: string
  position: string
  company: string
  startDate: string
  endDate: string | null
  duration: string
  description: string
  location: string
  achievements?: string[]
  technologies?: string[]
}

// Constitutional compliance: Using verified authentic data from Dave
const { workExperience, getExperienceDuration, isContentVerified } =
  useResumeData()

// Transform Dave's verified work experience data for display with full details
const experiences = computed<Experience[]>(() =>
  workExperience.map((job: any) => ({
    id: job.id,
    position: job.position,
    company: job.company,
    location: job.location,
    startDate: job.startDate,
    endDate: job.endDate,
    duration: getExperienceDuration(job.startDate, job.endDate),
    description: job.description,
    achievements: job.achievements,
    technologies: job.technologies,
  }))
)
</script>

<style scoped>
/* Component uses Tailwind classes - no additional styles needed */
</style>
