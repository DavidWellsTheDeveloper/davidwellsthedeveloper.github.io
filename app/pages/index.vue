<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <UCard class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 border-teal-200 dark:border-teal-800">
      <template #header>
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">David Wells</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300 mt-1">Full Stack Developer</p>
          </div>
          <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
            <UIcon name="i-lucide-code" class="text-white text-2xl" />
          </div>
        </div>
      </template>

      <div class="space-y-6">
        <p class="text-lg leading-relaxed">I'm a passionate full stack developer with expertise in building modern web applications that deliver exceptional user experiences.</p>
        <p class="leading-relaxed">Specializing in front-end technologies like Vue.js and back-end solutions with Django, I create scalable, performant applications that solve real business problems.</p>
        <div class="flex flex-wrap gap-3 pt-2">
          <UButton to="/about" color="primary" size="lg">About Me</UButton>
          <UButton to="/contact" color="secondary" variant="outline" size="lg">Contact</UButton>
        </div>
      </div>
    </UCard>

    <!-- Skills Section -->
    <UCard class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-primary-900 border-slate-200 dark:border-slate-700">
      <template #header>
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-wrench" class="text-teal-600" />
          <h2 class="text-xl font-semibold">Technical Skills</h2>
        </div>
      </template>

      <div>
        <div class="flex gap-4">
          <SkillsList 
            header="Front-end" 
            :skills="frontendSkills" 
            badge-color="primary" 
          />
          <USeparator class="h-48" orientation="vertical" color="secondary" />
          <SkillsList 
            header="Back-end" 
            :skills="backendSkills" 
            badge-color="secondary" 
          />
          <USeparator class="h-48" orientation="vertical" color="secondary" />
          <SkillsList 
            header="DevOps & Tools" 
            :skills="devopsSkills" 
            badge-color="success" 
          />
        </div>
      </div>
    </UCard>

    <!-- Experience Highlight -->
    <UCard class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-primary-900 border-slate-200 dark:border-slate-700">
      <template #header>
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-briefcase" class="text-teal-600" />
          <h2 class="text-xl font-semibold">Recent Project Highlights</h2>
        </div>
      </template>

      <div>
        <div v-for="(project, index) in projects" :key="index">
          <UDivider v-if="index > 0" class="my-6" />
          <div class="space-y-2">
            <div class="flex items-start justify-between">
              <h3 class="font-semibold text-lg text-teal-700 dark:text-teal-300">{{ project.title }}</h3>
              <UBadge :color="project.type === 'Full Stack' ? 'primary' : project.type === 'Front-End' ? 'secondary' : 'tertiary'" variant="soft">
                {{ project.role }}
              </UBadge>
            </div>
            <p class="leading-relaxed">{{ project.description }}</p>
          </div>
        </div>

        <div class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <UButton to="/about" variant="ghost" color="primary" trailing-icon="i-lucide-arrow-right" size="lg">
            View Full Portfolio
          </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

// Skills data
const frontendSkills = ref([
  'Vue.js', 
  'Nuxt', 
  'JavaScript', 
  'TypeScript', 
  'Tailwind CSS',
  'React',
  'HTML5/CSS3'
])

const backendSkills = ref([
  'Node.js',
  'Express',
  'Python',
  'REST APIs',
  'GraphQL',
  'SQL',
  'NoSQL'
])

const devopsSkills = ref([
  'Git',
  'Docker',
  'CI/CD',
  'AWS',
  'Testing',
  'GitHub Actions',
  'Vercel'
])

// Project data
const projects = ref([
  {
    title: 'E-Commerce Platform',
    role: 'Full Stack Development',
    type: 'Full Stack',
    description: 'Built a modern e-commerce solution with Vue.js frontend and Node.js backend, integrating payment processing and inventory management.'
  },
  {
    title: 'Data Analytics Dashboard',
    role: 'Front-End Development',
    type: 'Front-End',
    description: 'Designed and implemented a responsive dashboard that visualizes complex data sets using Vue.js and D3.js.'
  },
  {
    title: 'API Integration Service',
    role: 'Back-End Development',
    type: 'Back-End',
    description: 'Developed a microservice architecture to integrate multiple third-party APIs into a unified platform.'
  }
])
</script>
