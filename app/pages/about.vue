<template>
  <div class="py-8">
    <PageCard variant="midnight" title="About Me" icon="i-lucide-user">
      <div class="space-y-6">
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Professional Profile</h2>
          <p class="text-lg leading-relaxed">
            Senior Software Engineer with <strong>9 years of experience</strong> owning and scaling data-driven applications and analytics platforms. Most recently served as <strong>Full Stack Developer and Scrum Master</strong> at MeasuringU in Fort Collins, Colorado through August 2026.
          </p>
          <p class="leading-relaxed">
            I specialize in leading agile teams, delivering user-friendly interfaces, and solving challenging technical problems. My expertise spans from integrating APIs and processing billion-record datasets to designing normalized relational databases and building AI-assisted development platforms with technologies like Vue.js, React, TypeScript, and AWS.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Leadership & Mentoring</h2>
          <p class="leading-relaxed">
            As <strong>Scrum Master for a 7-person engineering team</strong> at MeasuringU, I led scrum ceremonies including daily stand-ups, sprint planning, and retrospectives, partnering with product stakeholders to clarify requirements and scope work realistically — raising team velocity by 50%.
          </p>
          <p class="leading-relaxed">
            I'm passionate about conducting code reviews, outlining functional requirements, and sharing specialized technical skills to drive continuous improvement in coding standards and processes.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Technical Expertise</h2>
          <p class="leading-relaxed">
            My technical journey includes working with <strong>datasets containing over 1 billion records</strong>, where I've improved query performance by up to 100x and automated pipelines to reduce downtime to near zero. I have extensive experience in:
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>Fullstack Development:</strong> Vue.js, React, Nuxt, TypeScript, PHP, Python, JavaScript</li>
            <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, Route 53, IAM), Google Cloud Platform, GitHub Actions CI/CD</li>
            <li><strong>Database Architecture:</strong> Designing normalized relational systems, PostgreSQL, MySQL, SQL Server</li>
            <li><strong>Data Analytics:</strong> Statistical modeling, time series forecasting, big data solutions, GIS & data visualization</li>
            <li><strong>API & Systems Design:</strong> REST APIs, OpenAPI/AsyncAPI contracts, event-driven microservices, ports & adapters</li>
            <li><strong>Agile & AI Practices:</strong> SCRUM methodologies, behavior-driven design, AI-assisted development with LLMs and MCP integrations</li>
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
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Recent Focus</h2>
          <p class="leading-relaxed">
            In my most recent role at MeasuringU, I architected a multi-service, event-driven AI orchestration platform (Go API, Python workers, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS) and led a platform-wide frontend redesign with Vue.js, Sass, Pinia, and Material Design — all while maintaining high standards for clean, maintainable, scalable, and readable code.
          </p>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <UButton to="/experience" color="primary" size="lg">View Experience</UButton>
          <UButton to="/contact" color="secondary" variant="outline" size="lg">Get In Touch</UButton>
          <UButton
            :href="RESUME_URL"
            :download="RESUME_FILENAME"
            target="_blank"
            color="info"
            variant="subtle"
            size="lg"
            trailing-icon="i-lucide-download"
          >
            Download Resume
          </UButton>
        </div>
      </template>
    </PageCard>
  </div>
</template>

<script setup>
import { RESUME_URL, RESUME_FILENAME } from '~/constants'

definePageMeta({
  layout: 'default'
})
</script> 