<template>
  <section
    id="about"
    role="region"
    aria-labelledby="about-heading"
    data-testid="about-section"
    class="relative z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-blue-900 dark:to-slate-900 py-16"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <h2
        id="about-heading"
        data-testid="about-title"
        class="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-300 mb-12"
      >
        About Me
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content Column -->
        <div class="space-y-6">
          <div class="prose prose-gray dark:prose-invert max-w-none">
            <p
              data-testid="about-intro"
              class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {{ aboutContent.introduction }}
            </p>

            <div class="space-y-4 mt-6">
              <h3
                data-testid="approach-heading"
                class="text-xl font-semibold text-gray-900 dark:text-white"
              >
                My Approach
              </h3>
              <p
                data-testid="about-approach"
                class="text-gray-600 dark:text-gray-300"
              >
                {{ aboutContent.approach }}
              </p>
            </div>

            <div class="space-y-4 mt-6">
              <h3
                data-testid="passion-heading"
                class="text-xl font-semibold text-gray-900 dark:text-white"
              >
                What Drives Me
              </h3>
              <p
                data-testid="about-passion"
                class="text-gray-600 dark:text-gray-300"
              >
                {{ aboutContent.passion }}
              </p>
            </div>
          </div>
        </div>

        <!-- Highlights Column -->
        <div class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
          <h3
            data-testid="highlights-heading"
            class="text-xl font-semibold text-gray-900 dark:text-white mb-6"
          >
            Key Highlights
          </h3>

          <div class="space-y-4">
            <div
              v-for="(highlight, index) in highlights"
              :key="index"
              data-testid="highlight-item"
              class="flex items-start"
            >
              <div
                class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-1"
              >
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div class="ml-4">
                <h4
                  data-testid="highlight-title"
                  class="font-medium text-gray-900 dark:text-white"
                >
                  {{ highlight.title }}
                </h4>
                <p
                  data-testid="highlight-description"
                  class="text-sm text-gray-600 dark:text-gray-300 mt-1"
                >
                  {{ highlight.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Highlight {
  title: string
  description: string
}

interface AboutContent {
  introduction: string
  approach: string
  passion: string
}

// Constitutional compliance: Using verified authentic data from Dave
const { personal, getKeyHighlights, isContentVerified } = useResumeData()

// Constitutional Requirement III: User-Centric Experience - Safe SSR handling
const aboutContent: AboutContent = {
  introduction:
    personal?.bio ||
    'Experienced full-stack developer with a unique background in sociology and computer science, bringing both technical expertise and human-centered perspective to software development.',
  approach:
    personal?.philosophy ||
    'I believe the best software solutions come from understanding both the technical requirements and the human needs behind them.',
  passion:
    personal?.careerPassions?.join('. ') ||
    'Building scalable, maintainable systems and leading high-performing development teams.',
}

// Use Dave's verified key highlights with safe fallback
const highlights: Highlight[] = getKeyHighlights
  ? getKeyHighlights()
  : [
      {
        title: 'Full-Stack Development',
        description: '9+ years of experience with modern web technologies',
      },
      {
        title: 'Team Leadership',
        description: 'Scrum Master for a seven-person engineering team',
      },
    ]
</script>

<style scoped>
/* Component uses Tailwind classes - no additional styles needed */
</style>
