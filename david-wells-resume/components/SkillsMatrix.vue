<template>
  <section
    id="skills"
    role="region"
    aria-labelledby="skills-heading"
    data-testid="skills-matrix"
    class="bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 py-16"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2
        id="skills-heading"
        data-testid="skills-title"
        class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-300 mb-12"
      >
        Skills & Expertise
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          data-testid="skill-category"
          class="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
        >
          <h3
            data-testid="category-title"
            class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center"
          >
            <span class="text-2xl mr-3">{{ category.icon }}</span>
            {{ category.title }}
          </h3>
          
          <div class="space-y-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              data-testid="skill-item"
              class="flex flex-col"
            >
              <div class="flex justify-between items-center mb-2">
                <span
                  data-testid="skill-name"
                  class="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {{ skill.name }}
                </span>
                <span
                  data-testid="skill-level"
                  class="text-xs text-gray-500 dark:text-gray-400"
                >
                  {{ skill.level }}
                </span>
              </div>
              
              <!-- Progress bar -->
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  data-testid="skill-progress"
                  class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  :style="{ width: getProgressWidth(skill.level) }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Skill {
  name: string
  level: string
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

// Constitutional compliance: Using verified authentic data from Dave
const { getSkillCategories, isContentVerified } = useResumeData()

// Transform Dave's verified skills data for display
const skillCategories = computed<SkillCategory[]>(() => 
  getSkillCategories().map((category: any) => ({
    title: category.name,
    icon: category.icon || '💻',
    skills: category.skills.map((skill: any) => ({
      name: skill.name,
      level: skill.proficiency
    }))
  }))
)

const getProgressWidth = (level: string): string => {
  switch (level.toLowerCase()) {
    case 'expert':
      return '90%'
    case 'advanced':
      return '75%'
    case 'intermediate':
      return '60%'
    case 'beginner':
      return '30%'
    default:
      return '50%'
  }
}
</script>

<style scoped>
/* Component uses Tailwind classes - no additional styles needed */
</style>