<template>
  <a
    :href="resumeHref"
    download="David-Wells-Software-Developer-Resume.pdf"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
  >
    <svg
      class="w-4 h-4 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    Download Resume
  </a>
</template>

<script setup lang="ts">
import { joinURL } from 'ufo'

/** Static resume PDF shipped from `public/` (same file as `supportingDocs/David Wells Software Developer Resume.pdf`). */
const RESUME_FILE = 'David-Wells-Software-Developer-Resume.pdf'

const resumeHref = computed(() => {
  const base = useRuntimeConfig().app.baseURL || '/'
  return joinURL(base, RESUME_FILE)
})
</script>
