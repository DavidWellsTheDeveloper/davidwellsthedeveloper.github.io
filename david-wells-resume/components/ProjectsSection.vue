<template>
  <section
    id="projects"
    role="region"
    aria-labelledby="projects-heading"
    data-testid="projects-section"
    class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 sm:py-20"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-12">
        <p
          class="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-3"
        >
          Selected Work
        </p>
        <h2
          id="projects-heading"
          data-testid="projects-title"
          class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
        >
          Projects I've shipped
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="project in projects"
          :key="project.id"
          data-testid="project-card"
          class="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-6 sm:p-8 flex flex-col"
        >
          <div class="flex items-start justify-between gap-4 mb-3">
            <h3
              data-testid="project-name"
              class="text-xl font-semibold text-white"
            >
              {{ project.name }}
            </h3>
            <span
              data-testid="project-period"
              class="text-xs font-medium uppercase tracking-wide text-blue-300 whitespace-nowrap"
            >
              {{ project.period }}
            </span>
          </div>

          <p
            data-testid="project-summary"
            class="text-slate-300 leading-relaxed mb-5"
          >
            {{ project.summary }}
          </p>

          <ul
            data-testid="project-stack"
            class="flex flex-wrap gap-2 mb-6 mt-auto"
            aria-label="Technologies used"
          >
            <li
              v-for="tech in project.stack"
              :key="tech"
              class="text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1"
            >
              {{ tech }}
            </li>
          </ul>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="project-link"
            class="inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-200"
          >
            View project
            <svg
              class="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useResumeData } from '~/composables/useResumeData'

const { projects, isContentVerified } = useResumeData()

if (!isContentVerified()) {
  console.warn('⚠️ ProjectsSection: Authentic representation disabled')
}
</script>

<style scoped>
/* Component uses Tailwind classes - no additional styles needed */
</style>
