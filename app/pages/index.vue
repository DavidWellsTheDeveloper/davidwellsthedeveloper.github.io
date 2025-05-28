<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <PageCard 
      variant="hero" 
      spacing="mb-8"
    >
      <template #header>
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <h1 class="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">David T. Wells</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 mt-1">Fullstack Developer & Scrum Master</p>
          </div>
          <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
            <UIcon name="i-lucide-code" class="text-white text-2xl" />
          </div>
        </div>
      </template>

      <div class="space-y-6">
        <p class="text-lg leading-relaxed">Highly skilled Fullstack Developer with <strong>8+ years of experience</strong> designing, developing, and maintaining scalable, data-driven applications. Currently serving as <strong>Scrum Master</strong> at MeasuringU, leading agile teams and delivering cutting-edge analytics solutions.</p>
        <p class="leading-relaxed">Proven expertise in Vue.js, React, PHP, and Python with a track record of working with <strong>billion-record datasets</strong>, optimizing performance by orders of magnitude, and mentoring development teams to maintain high coding standards.</p>
      </div>
      <template #footer>
        <div class="flex flex-wrap gap-3 pt-2">
          <UButton to="/about" color="primary" size="lg">About Me</UButton>
          <UButton to="/experience" color="secondary" variant="outline" size="lg">Experience</UButton>
          <UButton to="/projects" color="success" variant="outline" size="lg">Projects</UButton>
          <UButton to="/contact" color="orange" variant="outline" size="lg">Contact</UButton>
        </div>
      </template>
    </PageCard>

    <!-- Skills Section -->
    <PageCard variant="skills" title="Core Technical Competencies" icon="i-lucide-wrench">
      <div class="flex flex-col md:flex-row gap-4">
        <SkillsList 
          header="Core Technologies" 
          :skills="coreSkills" 
          badge-color="primary" 
          class="flex-1"
        />
        <USeparator class="hidden lg:block h-48" orientation="vertical" color="secondary" />
        <SkillsList 
          header="Backend & Data" 
          :skills="backendDataSkills" 
          badge-color="secondary"
          class="flex-1" 
        />
        <USeparator class="hidden lg:block h-48" orientation="vertical" color="secondary" />
        <SkillsList 
          header="Leadership & Process" 
          :skills="leadershipSkills" 
          badge-color="success"
          class="flex-1"
        />
      </div>
    </PageCard>

    <!-- Experience Highlight -->
    <PageCard variant="skills" spacing="mb-0" title="Professional Highlights" icon="i-lucide-briefcase">
      <div>
        <div v-for="(highlight, index) in professionalHighlights" :key="index">
          <UDivider v-if="index > 0" class="my-6" />
          <div class="space-y-2">
            <div class="flex items-start justify-between">
              <h3 class="font-semibold text-lg text-teal-700 dark:text-teal-300">{{ highlight.title }}</h3>
              <UBadge :color="highlight.type === 'Leadership' ? 'primary' : highlight.type === 'Performance' ? 'secondary' : 'success'" variant="soft">
                {{ highlight.category }}
              </UBadge>
            </div>
            <p class="leading-relaxed">{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <UButton to="/projects" variant="ghost" color="primary" trailing-icon="i-lucide-arrow-right" size="lg">
            View Technical Projects
          </UButton>
        </div>
      </template>
    </PageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

// Updated skills based on resume
const coreSkills = ref([
  'JavaScript', 
  'Vue.js', 
  'React', 
  'Nuxt', 
  'PHP',
  'Python',
  'HTML5/CSS3',
  'Tailwind CSS'
])

const backendDataSkills = ref([
  'RESTful APIs',
  'MySQL',
  'SQL Server',
  'Database Design',
  'Django',
  'Laravel',
  'Big Data Analytics',
  'Data Modeling'
])

const leadershipSkills = ref([
  'Scrum Master',
  'Agile Practices',
  'Team Mentoring',
  'Code Reviews',
  'Sprint Planning',
  'Technical Documentation',
  'Process Improvement'
])

// Real professional highlights from resume
const professionalHighlights = ref([
  {
    title: 'Scrum Master & Team Leadership',
    category: 'Leadership',
    type: 'Leadership',
    description: 'Leading scrum ceremonies, sprint planning, and retrospectives at MeasuringU. Mentoring developers and contributing to organizational direction through backlog and roadmap meetings.'
  },
  {
    title: 'Big Data Performance Optimization',
    category: 'Performance',
    type: 'Performance',
    description: 'Optimized queries on datasets with 1+ billion records, improving performance by orders of magnitude. Automated monthly updates to eliminate downtime and save development time.'
  },
  {
    title: 'Scalable Analytics Solutions',
    category: 'Architecture',
    type: 'Technical',
    description: 'Designed and developed scalable data analytics solutions using PHP and Vue.js at MeasuringU, built to last and continue growing with normalized relational database systems.'
  }
])
</script>
