<template>
  <div class="space-y-12 py-8">
    <!-- Page Header -->
    <PageCard variant="hero" title="Professional Experience" icon="i-lucide-briefcase">
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          <strong>9 years</strong> of professional software development experience, progressing from intern to <strong>Scrum Master</strong> and team leader. Specialized in fullstack development, data platforms, AI-assisted systems, and agile team leadership.
        </p>
        <div class="flex flex-wrap gap-4">
          <UBadge color="primary" variant="soft" size="lg">Scrum Master</UBadge>
          <UBadge color="secondary" variant="soft" size="lg">Team Leadership</UBadge>
          <UBadge color="success" variant="soft" size="lg">Big Data Analytics</UBadge>
          <UBadge color="info" variant="soft" size="lg">Performance Optimization</UBadge>
          <UBadge color="warning" variant="soft" size="lg">AI Platforms</UBadge>
        </div>
        <div class="pt-2">
          <UButton
            :href="RESUME_URL"
            :download="RESUME_FILENAME"
            target="_blank"
            color="primary"
            variant="outline"
            size="lg"
            trailing-icon="i-lucide-download"
          >
            Download Resume
          </UButton>
        </div>
      </div>
    </PageCard>

    <!-- Experience Timeline -->
    <PageCard variant="skills" title="Career Timeline" icon="i-lucide-timeline">
      <div class="space-y-8">
        <!-- MeasuringU -->
        <div class="relative pl-8 border-l-2 border-teal-200 dark:border-teal-700">
          <div class="absolute -left-3 top-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-white dark:border-gray-900"></div>
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 class="text-xl font-bold text-teal-700 dark:text-teal-300">Full Stack Developer & Scrum Master</h3>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">MeasuringU</p>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 md:text-right">
                <p class="font-semibold">March 2021 - August 2026</p>
                <p>5 years 5 months</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200">Leadership & Agile Practices:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Served as <strong>Scrum Master</strong> for a 7-person engineering team, partnering with product stakeholders to clarify requirements and scope work realistically</li>
                <li>Raised team velocity by 50% while improving requirements clarity and AI workflows</li>
                <li>Mentored new and experienced developers to ensure high quality coding practices and conduct code reviews</li>
                <li>Led organizational planning through backlog and roadmap discussions</li>
              </ul>
              
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mt-4">Technical Achievements:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Architected a multi-service, event-driven <strong>AI orchestration platform</strong> (Go API, Python workers, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS), cutting planning from ~4 days to ~1 day</li>
                <li>Designed an agentic development platform integrating <strong>LLMs, MCP integrations, and agent skills</strong> with the Cursor SDK, defining service contracts via OpenAPI and AsyncAPI</li>
                <li>Recognized as team expert in database design; optimized normalized schemas to improve load times <strong>3–5x</strong></li>
                <li>Built interactive analytics dashboards processing <strong>1M+ data points</strong> using ports &amp; adapters architecture in PHP and Vue.js</li>
                <li>Led a platform-wide frontend redesign with Vue.js, Sass, Pinia, and Material Design</li>
                <li>Maintained <strong>CI/CD pipelines with GitHub Actions</strong> for automated testing, builds, and deployments to AWS</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mountain Data Group -->
        <div class="relative pl-8 border-l-2 border-teal-200 dark:border-teal-700">
          <div class="absolute -left-3 top-0 w-6 h-6 bg-cyan-600 rounded-full border-4 border-white dark:border-gray-900"></div>
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 class="text-xl font-bold text-cyan-700 dark:text-cyan-300">Data Science Developer <span class="text-sm font-medium">(promoted from Intern)</span></h3>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">Mountain Data Group</p>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 md:text-right">
                <p class="font-semibold">May 2019 - March 2021</p>
                <p>1 year 10 months</p>
              </div>
            </div>

            <div class="space-y-3">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200">Big Data & Analytics:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Integrated large external datasets (<strong>census, weather, and violent crime data</strong>) into statistical models to improve predictive accuracy</li>
                <li>Leveraged Python's data analytics stack to process scientific datasets <strong>exceeding 1 billion records</strong></li>
                <li>Developed time-series and big-data models supporting academic research in travel risk analysis, lead exposure, and public trust</li>
                <li>Conducted exploratory research on dataset reliability, correlation, and completeness including GIS and demographic data</li>
                <li>Performed data visualization with <strong>GIS tools, D3, and Python</strong> libraries supporting spatial analysis and visual reporting</li>
                <li>Worked with the <strong>Azure ecosystem</strong> to integrate third-party client microservice systems</li>
              </ul>

              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mt-4">Performance & Automation:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Automated data ingestion and update pipelines, reducing downtime to near zero</li>
                <li>Improved slow query performance by <strong>up to 100X</strong></li>
                <li>Built performant dashboards relying on extensive aggregations and time series data with rock-solid data integrity</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CSU Environmental Health Services -->
        <div class="relative pl-8 border-l-2 border-teal-200 dark:border-teal-700">
          <div class="absolute -left-3 top-0 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white dark:border-gray-900"></div>
          <div class="space-y-4">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 class="text-xl font-bold text-emerald-700 dark:text-emerald-300">Web Application Developer</h3>
                <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">Environmental Health Services at CSU</p>
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400 md:text-right">
                <p class="font-semibold">May 2017 - May 2019</p>
                <p>2 years</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200">Full Stack Development:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Created custom web applications for Environmental Health, Public Health, and Risk Management departments supporting internal administrative data workflows</li>
                <li>Planned and implemented APIs, databases, and interactive dashboards supporting <strong>10–15 CSU department administrators</strong></li>
                <li>Led development of data-driven applications for drone tracking, public health logging, ergonomics assessments, and international travel risk management</li>
              </ul>

              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mt-4">Client Collaboration & Best Practices:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Translated non-technical stakeholder requirements into <strong>scalable technical solutions</strong> and workflows</li>
                <li>Collaborated on team projects using <strong>pair programming and Agile practices</strong></li>
                <li>Applied <strong>SOLID principles</strong> and object-oriented design patterns to produce extensible, maintainable systems</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Timeline End -->
        <div class="relative pl-8">
          <div class="absolute -left-3 top-0 w-6 h-6 bg-gray-400 rounded-full border-4 border-white dark:border-gray-900"></div>
          <div class="text-gray-500 dark:text-gray-400">
            <p class="font-semibold">Career Start</p>
            <p class="text-sm">May 2017</p>
          </div>
        </div>
      </div>
    </PageCard>

    <!-- Key Achievements -->
    <PageCard variant="midnight" title="Key Achievements" icon="i-lucide-trophy">
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300">Leadership Impact</h3>
          <ul class="space-y-2">
            <li class="flex items-start space-x-3">
              <UIcon name="i-lucide-check-circle" class="text-green-600 mt-1 flex-shrink-0" />
              <span>Successfully transitioned from developer to Scrum Master role</span>
            </li>
            <li class="flex items-start space-x-3">
              <UIcon name="i-lucide-check-circle" class="text-green-600 mt-1 flex-shrink-0" />
              <span>Mentored multiple developers in coding best practices</span>
            </li>
            <li class="flex items-start space-x-3">
              <UIcon name="i-lucide-check-circle" class="text-green-600 mt-1 flex-shrink-0" />
              <span>Led organizational planning and roadmap discussions</span>
            </li>
          </ul>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300">Technical Excellence</h3>
          <ul class="space-y-2">
            <li class="flex items-start space-x-3">
              <UIcon name="i-lucide-check-circle" class="text-green-600 mt-1 flex-shrink-0" />
              <span>Optimized billion-record datasets, improving query performance up to 100x</span>
            </li>
            <li class="flex items-start space-x-3">
              <UIcon name="i-lucide-check-circle" class="text-green-600 mt-1 flex-shrink-0" />
              <span>Designed scalable, normalized database architectures</span>
            </li>
            <li class="flex items-start space-x-3">
              <UIcon name="i-lucide-check-circle" class="text-green-600 mt-1 flex-shrink-0" />
              <span>Built data analytics solutions serving multiple industries</span>
            </li>
          </ul>
        </div>
      </div>
    </PageCard>
  </div>
</template>

<script setup>
import { RESUME_URL, RESUME_FILENAME } from '~/constants'

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Experience',
  description:
    '9 years of software development experience — from intern to Scrum Master — across AI platforms, big data analytics, and fullstack development.',
  ogTitle: 'Experience | David Wells',
  ogDescription:
    '9 years of software development experience — from intern to Scrum Master — across AI platforms, big data analytics, and fullstack development.',
  ogUrl: 'https://davidwellsthedeveloper.github.io/experience'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://davidwellsthedeveloper.github.io/experience' }]
})
</script> 