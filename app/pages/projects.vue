<template>
  <div class="space-y-12 py-8">
    <!-- Page Header -->
    <PageCard variant="hero" title="Technical Projects & Achievements" icon="i-lucide-code">
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          A showcase of key technical projects and achievements from my 9 years of professional development experience. From <strong>billion-record data optimization</strong> to <strong>AI orchestration platforms</strong>, these projects demonstrate expertise in fullstack development, database architecture, and performance engineering.
        </p>
        <div class="flex flex-wrap gap-4">
          <UBadge color="success" variant="soft" size="lg">Data Analytics</UBadge>
          <UBadge color="primary" variant="soft" size="lg">Performance Optimization</UBadge>
          <UBadge color="secondary" variant="soft" size="lg">Database Architecture</UBadge>
          <UBadge color="info" variant="soft" size="lg">Fullstack Development</UBadge>
        </div>
      </div>
    </PageCard>

    <!-- Selected Projects at MeasuringU -->
    <PageCard variant="skills" title="Selected Projects - MeasuringU" icon="i-lucide-trending-up">
      <div class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4 p-6 bg-teal-50 dark:bg-teal-950 rounded-lg border border-teal-200 dark:border-teal-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-bot" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">AI Orchestration Platform</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Architected a multi-service, event-driven platform (<strong>Go API, Python workers, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS</strong>) with a three-gate workflow and human approval checkpoints — cutting planning from ~4 days to ~1 day.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Go</UBadge>
              <UBadge color="primary" variant="soft">Python</UBadge>
              <UBadge color="secondary" variant="soft">Redis Streams</UBadge>
              <UBadge color="info" variant="soft">AWS</UBadge>
            </div>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
              <p class="text-sm text-green-700 dark:text-green-300 font-semibold">
                🚀 Achievement: Planning time reduced from ~4 days to ~1 day
              </p>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-cyan-50 dark:bg-cyan-950 rounded-lg border border-cyan-200 dark:border-cyan-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-brain" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-cyan-700 dark:text-cyan-300">Agentic Development Platform</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Designed an extensible platform integrating <strong>LLMs, MCP integrations, and agent skills</strong> with the Cursor SDK, defining service contracts across Python microservices using OpenAPI and AsyncAPI.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">LLMs</UBadge>
              <UBadge color="primary" variant="soft">MCP</UBadge>
              <UBadge color="secondary" variant="soft">OpenAPI</UBadge>
              <UBadge color="info" variant="soft">Cursor SDK</UBadge>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-indigo-50 dark:bg-indigo-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-database" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Scalable Analytics Platform</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Built interactive analytics dashboards processing <strong>1M+ data points</strong> using an object-oriented, ports and adapters architecture in <strong>PHP and Vue.js</strong>, backed by normalized relational schemas.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">PHP</UBadge>
              <UBadge color="primary" variant="soft">Vue.js</UBadge>
              <UBadge color="secondary" variant="soft">PostgreSQL</UBadge>
              <UBadge color="info" variant="soft">Ports &amp; Adapters</UBadge>
            </div>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
              <p class="text-sm text-green-700 dark:text-green-300 font-semibold">
                🚀 Achievement: Load times improved 3–5x through schema optimization
              </p>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-teal-50 dark:bg-teal-950 rounded-lg border border-teal-200 dark:border-teal-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-users" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">Agile Team Leadership</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Served as <strong>Scrum Master</strong> for a 7-person engineering team, leading ceremonies, sprint planning, and retrospectives while partnering with stakeholders on requirements and realistic scoping.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Scrum Master</UBadge>
              <UBadge color="primary" variant="soft">Team Leadership</UBadge>
              <UBadge color="secondary" variant="soft">Mentoring</UBadge>
              <UBadge color="info" variant="soft">Code Reviews</UBadge>
            </div>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
              <p class="text-sm text-green-700 dark:text-green-300 font-semibold">
                🚀 Achievement: Team velocity raised by 50%
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageCard>

    <!-- Big Data Projects at Mountain Data Group -->
    <PageCard variant="midnight" title="Big Data Analytics - Mountain Data Group" icon="i-lucide-bar-chart">
      <div class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-zap" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-blue-700 dark:text-blue-300">Performance Optimization</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Leveraged Python's analytics stack on datasets with <strong>over 1 billion records</strong>, automating ingestion pipelines to reduce downtime to near zero and improving slow query performance by <strong>up to 100X</strong>.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Python</UBadge>
              <UBadge color="primary" variant="soft">Big Data</UBadge>
              <UBadge color="secondary" variant="soft">Query Optimization</UBadge>
              <UBadge color="info" variant="soft">Automation</UBadge>
            </div>
            <div class="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 dark:border-green-800">
              <p class="text-sm text-green-700 dark:text-green-300 font-semibold">
                🚀 Achievement: Improved query speeds by an order of magnitude
              </p>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-indigo-50 dark:bg-indigo-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-globe" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-indigo-700 dark:text-indigo-300">Statistical Modeling & Forecasting</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Integrated large external datasets including <strong>census, weather, and violent crime data</strong> into statistical models, supporting time-series research on travel risk, lead exposure, and public trust.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Statistical Modeling</UBadge>
              <UBadge color="primary" variant="soft">Time Series</UBadge>
              <UBadge color="secondary" variant="soft">Data Integration</UBadge>
              <UBadge color="info" variant="soft">GIS</UBadge>
            </div>
          </div>
        </div>
      </div>
    </PageCard>

    <!-- University Projects at CSU -->
    <PageCard variant="skills" title="Enterprise Solutions - Colorado State University" icon="i-lucide-building">
      <div class="space-y-6">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="space-y-4 p-6 bg-emerald-50 dark:bg-emerald-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-plane" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-emerald-300">Drone Tracking System</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Lead developer for .NET data-driven solution tracking university drones. Ensured data integrity and reliability for Environmental Health department.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">.NET</UBadge>
              <UBadge color="primary" variant="soft">SQL Server</UBadge>
              <UBadge color="secondary" variant="soft">Lead Developer</UBadge>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-shield" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-purple-700 dark:text-purple-300">Public Health Complaint System</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Developed comprehensive logging system for public health complaints with attractive informative dashboards for administrators.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Dashboard Design</UBadge>
              <UBadge color="primary" variant="soft">Data Visualization</UBadge>
              <UBadge color="secondary" variant="soft">Public Health</UBadge>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-map" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-orange-700 dark:text-orange-300">Risk Management Platform</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Built risk management system for international travel, working directly with clients to develop custom administrative tools.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="success" variant="soft">Risk Management</UBadge>
              <UBadge color="primary" variant="soft">Client Collaboration</UBadge>
              <UBadge color="secondary" variant="soft">Custom Solutions</UBadge>
            </div>
          </div>
        </div>
      </div>
    </PageCard>

    <!-- Technical Achievements Summary -->
    <PageCard variant="midnight" title="Key Technical Achievements" icon="i-lucide-trophy">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center space-y-3 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950 dark:to-cyan-950 rounded-lg border border-teal-200 dark:border-teal-800">
          <div class="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-database" class="text-white text-xl" />
          </div>
          <h3 class="font-semibold text-teal-700 dark:text-teal-300">1B+ Records</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Optimized datasets with over 1 billion records</p>
        </div>

        <div class="text-center space-y-3 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-zap" class="text-white text-xl" />
          </div>
          <h3 class="font-semibold text-blue-700 dark:text-blue-300">Up to 100x</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Slow query performance improvement</p>
        </div>

        <div class="text-center space-y-3 p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-users" class="text-white text-xl" />
          </div>
          <h3 class="font-semibold text-emerald-700 dark:text-emerald-300">Team Leadership</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Scrum Master for a 7-person agile team</p>
        </div>

        <div class="text-center space-y-3 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border border-purple-200 dark:border-purple-800">
          <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-code" class="text-white text-xl" />
          </div>
          <h3 class="font-semibold text-purple-700 dark:text-purple-300">9 Years</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Professional software development experience</p>
        </div>
      </div>
    </PageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Projects',
  description:
    'Technical projects and achievements — AI orchestration platforms, billion-record data optimization, analytics dashboards, and agile team leadership.',
  ogTitle: 'Projects | David Wells',
  ogDescription:
    'Technical projects and achievements — AI orchestration platforms, billion-record data optimization, analytics dashboards, and agile team leadership.',
  ogUrl: 'https://davidwellsthedeveloper.github.io/projects'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://davidwellsthedeveloper.github.io/projects' }]
})
</script> 