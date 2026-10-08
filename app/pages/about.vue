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

        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Freelance Web Development</h2>
          <p class="leading-relaxed">
            Outside of full-time roles I run
            <a
              href="https://focowebsites.com"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-teal-700 dark:text-teal-300 hover:underline"
            >FoCo Websites</a>
            — a solo freelance practice in Northern Colorado where I design, build, launch, and maintain custom websites for local businesses: custom website design, redesigns, development support, and ongoing maintenance &amp; care plans.
          </p>
          <p class="leading-relaxed">
            Freelancing means owning the whole job — and the skills that come with it:
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><strong>End-to-end delivery:</strong> discovery → proposal → design → build → launch → ongoing support, with plain-talk communication at every step</li>
            <li><strong>Performance-first builds:</strong> static-first architecture with sub-second mobile load times, SEO from day one, and hosting that costs pennies per month</li>
            <li><strong>Client empowerment:</strong> headless CMS setups so clients update their own content — tracked, reversible, no developer required</li>
            <li><strong>Modern stack:</strong> Nuxt/TypeScript, Vue, Astro, and Laravel, deployed on AWS (S3, CloudFront, Route 53) with GitHub Actions CI/CD</li>
            <li><strong>Shipped client work:</strong> <a href="https://andrewsaccountingllc.com" target="_blank" rel="noopener noreferrer" class="hover:underline">Andrews Accounting</a> (static site + self-serve CMS) and <a href="https://pantrytostore.com" target="_blank" rel="noopener noreferrer" class="hover:underline">Pantry To Store</a> (custom storefront that eliminated platform fees)</li>
          </ul>
        </div>
      </div>

      <template #footer>
        <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <UButton to="/experience" color="primary" size="lg">View Experience</UButton>
          <UButton to="/contact" color="secondary" variant="outline" size="lg">Get In Touch</UButton>
          <UButton
            href="https://focowebsites.com"
            target="_blank"
            rel="noopener noreferrer"
            color="success"
            variant="outline"
            size="lg"
            trailing-icon="i-lucide-external-link"
          >
            Visit FoCo Websites
          </UButton>
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

useSeoMeta({
  title: 'About',
  description:
    'About David Wells — Senior Software Engineer and Scrum Master with 9 years of experience in scalable applications, data platforms, team leadership, and freelance web development.',
  ogTitle: 'About | David Wells',
  ogDescription:
    'Senior Software Engineer and Scrum Master with 9 years of experience in scalable applications, data platforms, team leadership, and freelance web development.',
  ogUrl: 'https://davidwellsthedeveloper.github.io/about'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://davidwellsthedeveloper.github.io/about' }]
})
</script> 