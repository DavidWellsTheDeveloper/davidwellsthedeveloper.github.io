<template>
  <section
    id="freelance"
    role="region"
    aria-labelledby="freelance-heading"
    data-testid="freelance-section"
    class="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 sm:py-20"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div
        class="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-8 sm:p-12"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Copy -->
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-wide text-blue-300 mb-3"
            >
              Freelance
            </p>
            <h2
              id="freelance-heading"
              data-testid="freelance-title"
              class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4"
            >
              Custom websites that earn their keep
            </h2>
            <p
              data-testid="freelance-description"
              class="text-slate-300 leading-relaxed"
            >
              Through FoCo Websites, I design, build, launch, and maintain fast,
              custom sites for small and medium businesses — one developer who
              actually answers the phone, from first sketch to long-term care.
            </p>
          </div>

          <!-- CTA + case studies -->
          <div class="flex flex-col items-start md:items-end gap-5">
            <a
              href="https://focowebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="freelance-cta"
              class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              Visit FoCo Websites
              <svg
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <p
              data-testid="freelance-case-studies"
              class="text-sm text-slate-400"
            >
              Recent work:
              <a
                href="https://andrewsaccountingllc.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="freelance-case-study"
                class="text-slate-300 hover:text-blue-300 underline decoration-slate-600 hover:decoration-blue-300 transition-colors duration-200"
              >
                Andrews Accounting
              </a>
              <span class="mx-2 text-slate-600">·</span>
              <a
                href="https://pantrytostore.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="freelance-case-study"
                class="text-slate-300 hover:text-blue-300 underline decoration-slate-600 hover:decoration-blue-300 transition-colors duration-200"
              >
                Pantry To Store
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isContentVerified } = useResumeData()

if (!isContentVerified()) {
  console.warn('⚠️ FreelanceSection: Authentic representation disabled')
}
</script>

<style scoped>
/* Component uses Tailwind classes - no additional styles needed */
</style>
