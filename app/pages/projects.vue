<template>
  <div class="space-y-8">
    <!-- Page Header -->
    <PageCard variant="hero" title="Technical Projects & Achievements" icon="i-lucide-code">
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          A showcase of key technical projects and achievements from my 8+ years of professional development experience. From <strong>billion-record data optimization</strong> to <strong>scalable analytics platforms</strong>, these projects demonstrate expertise in fullstack development, database architecture, and performance engineering.
        </p>
        <div class="flex flex-wrap gap-4">
          <UBadge color="primary" variant="soft" size="lg">Data Analytics</UBadge>
          <UBadge color="secondary" variant="soft" size="lg">Performance Optimization</UBadge>
          <UBadge color="success" variant="soft" size="lg">Database Architecture</UBadge>
          <UBadge color="orange" variant="soft" size="lg">Fullstack Development</UBadge>
        </div>
      </div>
    </PageCard>

    <!-- Current Projects at MeasuringU -->
    <PageCard variant="skills" title="Current Projects - MeasuringU" icon="i-lucide-trending-up">
      <div class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4 p-6 bg-teal-50 dark:bg-teal-950 rounded-lg border border-teal-200 dark:border-teal-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-database" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">Scalable Analytics Platform</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Leading design and development of data analytics solutions using <strong>PHP and Vue.js</strong>. Built to scale and grow with normalized relational database systems ensuring data integrity and performance.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="primary" variant="soft">PHP</UBadge>
              <UBadge color="primary" variant="soft">Vue.js</UBadge>
              <UBadge color="secondary" variant="soft">MySQL</UBadge>
              <UBadge color="success" variant="soft">Database Design</UBadge>
            </div>
          </div>

          <div class="space-y-4 p-6 bg-cyan-50 dark:bg-cyan-950 rounded-lg border border-cyan-200 dark:border-cyan-800">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                <UIcon name="i-lucide-users" class="text-white" />
              </div>
              <h3 class="text-lg font-semibold text-cyan-700 dark:text-cyan-300">Agile Team Leadership</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              Serving as <strong>Scrum Master</strong>, leading ceremonies, sprint planning, and retrospectives. Contributing to organizational direction through backlog and roadmap meetings while mentoring development teams.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="primary" variant="soft">Scrum Master</UBadge>
              <UBadge color="secondary" variant="soft">Team Leadership</UBadge>
              <UBadge color="success" variant="soft">Mentoring</UBadge>
              <UBadge color="orange" variant="soft">Code Reviews</UBadge>
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
              Optimized queries on datasets with <strong>over 1 billion records</strong>, improving performance by orders of magnitude. Automated monthly updates to eliminate downtime and save development time.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="primary" variant="soft">Python</UBadge>
              <UBadge color="secondary" variant="soft">Big Data</UBadge>
              <UBadge color="success" variant="soft">Query Optimization</UBadge>
              <UBadge color="orange" variant="soft">Automation</UBadge>
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
              Enhanced statistical models by incorporating external datasets including <strong>census, weather, and crime data</strong>. Developed time series modeling for data forecasting across UK demographics.
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge color="primary" variant="soft">Statistical Modeling</UBadge>
              <UBadge color="secondary" variant="soft">Time Series</UBadge>
              <UBadge color="success" variant="soft">Data Integration</UBadge>
              <UBadge color="orange" variant="soft">GIS</UBadge>
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
              <UBadge color="primary" variant="soft">.NET</UBadge>
              <UBadge color="secondary" variant="soft">SQL Server</UBadge>
              <UBadge color="success" variant="soft">Lead Developer</UBadge>
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
              <UBadge color="primary" variant="soft">Dashboard Design</UBadge>
              <UBadge color="secondary" variant="soft">Data Visualization</UBadge>
              <UBadge color="success" variant="soft">Public Health</UBadge>
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
              <UBadge color="primary" variant="soft">Risk Management</UBadge>
              <UBadge color="secondary" variant="soft">Client Collaboration</UBadge>
              <UBadge color="success" variant="soft">Custom Solutions</UBadge>
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
          <h3 class="font-semibold text-blue-700 dark:text-blue-300">10x Performance</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Improved query speeds by orders of magnitude</p>
        </div>

        <div class="text-center space-y-3 p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-users" class="text-white text-xl" />
          </div>
          <h3 class="font-semibold text-emerald-700 dark:text-emerald-300">Team Leadership</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Scrum Master leading agile development teams</p>
        </div>

        <div class="text-center space-y-3 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border border-purple-200 dark:border-purple-800">
          <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
            <UIcon name="i-lucide-code" class="text-white text-xl" />
          </div>
          <h3 class="font-semibold text-purple-700 dark:text-purple-300">8+ Years</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">Professional fullstack development experience</p>
        </div>
      </div>
    </PageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 