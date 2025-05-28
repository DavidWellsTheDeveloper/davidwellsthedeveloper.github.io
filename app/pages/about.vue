<template>
  <div class="py-8">
    <PageCard variant="midnight" title="About Me" icon="i-lucide-user">
      <div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Professional Profile</h2>
          <p class="text-lg leading-relaxed">
            Highly skilled Fullstack Developer with <strong>8+ years of experience</strong> designing, developing, and maintaining scalable, data-driven applications. Currently serving as <strong>Full Stack Developer and Scrum Master</strong> at MeasuringU in Fort Collins, Colorado.
          </p>
          <p class="leading-relaxed">
            I specialize in leading agile teams, delivering user-friendly interfaces, and solving challenging technical problems. My expertise spans from integrating APIs and utilizing large public datasets to designing complex relational databases and implementing cutting-edge technologies like Vue.js and React.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Leadership & Mentoring</h2>
          <p class="leading-relaxed">
            As a <strong>Scrum Master</strong>, I lead scrum ceremonies including daily stand-ups, sprint planning, and retrospectives. I contribute to organizational direction by engaging as a leader in backlog and roadmap meetings, while mentoring both new and experienced developers to ensure high-quality coding practices.
          </p>
          <p class="leading-relaxed">
            I'm passionate about conducting code reviews, outlining functional requirements, and sharing specialized technical skills to drive continuous improvement in coding standards and processes.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Technical Expertise</h2>
          <p class="leading-relaxed">
            My technical journey includes working with <strong>datasets containing over 1 billion records</strong>, where I've optimized performance by orders of magnitude and automated processes to eliminate downtime. I have extensive experience in:
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Fullstack Development:</strong> Vue.js, React, PHP, Python, JavaScript</li>
            <li><strong>Database Architecture:</strong> Designing normalized relational systems, MySQL, SQL Server</li>
            <li><strong>Data Analytics:</strong> Statistical modeling, time series forecasting, big data solutions</li>
            <li><strong>API Development:</strong> RESTful APIs, external dataset integration</li>
            <li><strong>Agile Practices:</strong> SCRUM methodologies, behavior-driven design</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Education & Background</h2>
          <div class="space-y-3">
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold">Bachelor of Science in Computer Science</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Colorado State University, Fort Collins, CO • December 2019</p>
              <p class="text-sm mt-2">Specialized in database design, relational algebra, and advanced SQL. Worked in paid software development positions during final 2 years while completing degree.</p>
            </div>
            <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 class="font-semibold">Bachelor of Arts in Sociology</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Fort Lewis College, Durango, CO • May 2013</p>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Current Focus</h2>
          <p class="leading-relaxed">
            At MeasuringU, I lead the design and development of scalable projects using PHP and Vue.js to deliver data analytics solutions that are built to last and continue to grow. I work in an agile team environment using standard SCRUM practices while maintaining high standards for clean, maintainable, scalable, and readable code.
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <UButton to="/experience" color="primary" size="lg">View Experience</UButton>
          <UButton to="/contact" color="secondary" variant="outline" size="lg">Get In Touch</UButton>
        </div>
      </template>
    </PageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 