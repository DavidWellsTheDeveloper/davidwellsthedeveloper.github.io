<template>
  <div class="space-y-8">
    <!-- Page Header -->
    <PageCard variant="hero" title="Professional Experience" icon="i-lucide-briefcase">
      <div class="space-y-4">
        <p class="text-lg leading-relaxed">
          <strong>8+ years</strong> of professional software development experience, progressing from intern to <strong>Scrum Master</strong> and team leader. Specialized in fullstack development, data analytics, and agile team leadership.
        </p>
        <div class="flex flex-wrap gap-4">
          <UBadge color="primary" variant="soft" size="lg">Scrum Master</UBadge>
          <UBadge color="secondary" variant="soft" size="lg">Team Leadership</UBadge>
          <UBadge color="success" variant="soft" size="lg">Big Data Analytics</UBadge>
          <UBadge color="orange" variant="soft" size="lg">Performance Optimization</UBadge>
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
                <p class="font-semibold">March 2021 - Present</p>
                <p>3+ years</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-800 dark:text-gray-200">Leadership & Agile Practices:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Lead scrum ceremonies including daily stand-ups, sprint planning, and retrospectives as <strong>Scrum Master</strong></li>
                <li>Contribute to organizational direction by engaging as a leader in backlog and roadmap meetings</li>
                <li>Mentor new and experienced developers to ensure high quality coding practices and conduct code reviews</li>
                <li>Deliver consistent results in an agile team environment using standard SCRUM practices</li>
              </ul>
              
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mt-4">Technical Achievements:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Lead design and development of scalable projects using <strong>PHP and Vue.js</strong> to deliver data analytics solutions</li>
                <li>Design and implement normalized relational database systems to streamline performance and maintain data integrity</li>
                <li>Maintain high standards for clean, maintainable, scalable and readable code</li>
                <li>Outline functional requirements and share specialized technical skills across the team</li>
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
                <h3 class="text-xl font-bold text-cyan-700 dark:text-cyan-300">Software Developer Intern → Data Science Developer</h3>
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
                <li>Enhanced statistical models by incorporating external datasets including <strong>census data, weather data, and crime data</strong></li>
                <li>Utilized Python's data analytics libraries and statistical modeling to gain insights into datasets with <strong>over 1 billion records</strong></li>
                <li>Developed big data solutions utilizing <strong>time series modeling</strong> to assist in data forecasting performance</li>
                <li>Analyzed and searched for datasets to improve forecasting models including demographic and weather data across the UK</li>
              </ul>
              
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mt-4">Performance & Automation:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Automated monthly updates to eliminate downtime and save development time</li>
                <li>Improved speeds of slow queries by <strong>an order of magnitude</strong></li>
                <li>Gained experience working with <strong>GIS and data visualization</strong> software</li>
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
                <li>Provided programming solutions and technical support for Environmental Health, Public Health, and Risk Management departments</li>
                <li>Designed full stack systems including databases, models, and attractive informative dashboards ensuring data integrity and reliability</li>
                <li>Acted as <strong>lead developer</strong> for select .NET data-driven solutions for tracking university drones, logging public health complaints, and performing risk management for international travel</li>
              </ul>
              
              <h4 class="font-semibold text-gray-800 dark:text-gray-200 mt-4">Client Collaboration & Best Practices:</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>Worked directly with clients to develop custom pages and tools for administrative problems and needs</li>
                <li>Worked as a team on projects utilizing <strong>agile and pair programming</strong> practices</li>
                <li>Wrote well documented code using <strong>SOLID development principles</strong> of object oriented design</li>
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
              <span>Optimized billion-record datasets by orders of magnitude</span>
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
definePageMeta({
  layout: 'default'
})
</script> 