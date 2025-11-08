<template>
  <div class="inline-flex items-center">
    <button
      @click="downloadResume"
      :disabled="isGenerating"
      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      :class="{ 'animate-pulse': isGenerating }"
    >
      <svg 
        v-if="!isGenerating"
        class="w-4 h-4 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <svg 
        v-else
        class="w-4 h-4 mr-2 animate-spin" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          class="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          stroke-width="4"
        />
        <path 
          class="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {{ isGenerating ? 'Generating...' : 'Download Resume' }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})

// Get authenticated resume data
const { profile, personal, workExperience, technicalSkills, getKeyHighlights } = useResumeData()

// Download state
const isGenerating = ref(false)

// Generate and download resume PDF
const downloadResume = async () => {
  if (isGenerating.value) return
  
  isGenerating.value = true
  
  try {
    // Create resume content for PDF generation
    const resumeContent = generateResumeContent()
    
    // Generate PDF (browser-based approach for now)
    await generatePDF(resumeContent)
    
  } catch (error) {
    console.error('Resume download failed:', error)
    // Could add toast notification here
  } finally {
    isGenerating.value = false
  }
}

// Generate structured resume content
const generateResumeContent = () => {
  return {
    profile: {
      name: profile.name,
      title: profile.title,
      email: profile.email,
      summary: profile.summary
    },
    highlights: getKeyHighlights(),
    experience: workExperience.map(job => ({
      company: job.company,
      position: job.position,
      duration: `${formatDate(job.startDate)} - ${formatDate(job.endDate)}`,
      description: job.description,
      achievements: job.achievements.slice(0, 4), // Top 4 achievements
      technologies: job.technologies
    })),
    skills: {
      frontend: technicalSkills.filter(s => s.category === 'Frontend'),
      backend: technicalSkills.filter(s => s.category === 'Backend'),
      database: technicalSkills.filter(s => s.category === 'Database'),
      dataScience: technicalSkills.filter(s => s.category === 'Data Science'),
      leadership: technicalSkills.filter(s => s.category === 'Leadership'),
      tools: technicalSkills.filter(s => s.category === 'Tools'),
      modern: technicalSkills.filter(s => s.category === 'Modern Development')
    },
    about: {
      bio: personal.bio,
      philosophy: personal.philosophy
    }
  }
}

// Simple date formatter
const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'Present'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

// Generate PDF using browser's print functionality
const generatePDF = async (content: any) => {
  // Create a new window with resume content
  const printWindow = window.open('', '_blank')
  
  if (!printWindow) {
    throw new Error('Unable to open print window. Please allow popups for this site.')
  }
  
  // Generate HTML content for PDF
  const htmlContent = generateResumeHTML(content)
  
  // Write content to new window
  printWindow.document.write(htmlContent)
  printWindow.document.close()
  
  // Wait for content to load
  await new Promise(resolve => {
    printWindow.onload = resolve
    setTimeout(resolve, 1000) // Fallback timeout
  })
  
  // Trigger print dialog
  printWindow.print()
  
  // Close window after printing
  setTimeout(() => {
    printWindow.close()
  }, 1000)
}

// Generate HTML content for PDF
const generateResumeHTML = (content: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${content.profile.name} - Resume</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.3;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 15px;
          font-size: 11px;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        .name {
          font-size: 24px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 5px;
        }
        .title {
          font-size: 16px;
          color: #2563eb;
          margin-bottom: 8px;
        }
        .contact {
          font-size: 11px;
          color: #6b7280;
        }
        .section {
          margin-bottom: 15px;
        }
        .section-title {
          font-size: 14px;
          font-weight: bold;
          color: #1f2937;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 3px;
          margin-bottom: 8px;
        }
        .job {
          margin-bottom: 15px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        .job-title {
          font-weight: bold;
          color: #1f2937;
        }
        .company {
          color: #2563eb;
          font-weight: 500;
        }
        .duration {
          color: #6b7280;
          font-size: 11px;
        }
        .description {
          margin-bottom: 8px;
          color: #4b5563;
        }
        .achievements {
          list-style: none;
          padding: 0;
          margin: 8px 0;
        }
        .achievements li {
          margin-bottom: 4px;
          padding-left: 15px;
          position: relative;
          color: #4b5563;
          font-size: 11px;
        }
        .achievements li:before {
          content: "•";
          color: #2563eb;
          position: absolute;
          left: 0;
        }
        .technologies {
          margin-top: 8px;
        }
        .tech-tag {
          display: inline-block;
          background: #f3f4f6;
          color: #374151;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 10px;
          margin-right: 5px;
          margin-bottom: 3px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .skill-category {
          background: #f9fafb;
          padding: 12px;
          border-radius: 6px;
        }
        .skill-category-title {
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
          font-size: 12px;
        }
        .skill-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
          font-size: 10px;
        }
        .skill-name {
          color: #4b5563;
        }
        .skill-level {
          color: #2563eb;
          font-weight: 500;
        }
        .summary {
          background: #f9fafb;
          padding: 10px;
          border-radius: 6px;
          font-style: italic;
          color: #4b5563;
          margin-bottom: 15px;
          font-size: 11px;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 15px;
        }
        .highlight-item {
          background: #f9fafb;
          padding: 8px;
          border-radius: 4px;
          border-left: 3px solid #2563eb;
        }
        .highlight-title {
          font-weight: bold;
          color: #1f2937;
          font-size: 11px;
          margin-bottom: 3px;
        }
        .highlight-desc {
          color: #4b5563;
          font-size: 10px;
        }
        .first-page-content {
          page-break-after: auto;
          page-break-inside: avoid;
        }
        @media print {
          body { margin: 0; padding: 12px; }
          .section { page-break-inside: avoid; }
          .header { page-break-after: avoid; }
          .section:nth-child(1) { page-break-after: avoid; } /* Professional Summary */
          .section:nth-child(2) { page-break-after: avoid; } /* Key Highlights */
          .section:nth-child(3) .job:first-child { page-break-inside: avoid; } /* First job */
          .section:nth-child(3) .job:nth-child(2) { page-break-before: avoid; } /* Second job */
          .first-page-content { page-break-after: avoid; }
          .job { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="first-page-content">
        <div class="header">
          <div class="name">${content.profile.name}</div>
          <div class="title">${content.profile.title}</div>
          <div class="contact">
            ${content.profile.email}
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Professional Summary</div>
          <div class="summary">${content.profile.summary}</div>
        </div>
        
        <div class="section">
          <div class="section-title">Key Highlights</div>
          <div class="highlights-grid">
            ${content.highlights.map((highlight: any) => `
              <div class="highlight-item">
                <div class="highlight-title">${highlight.title}</div>
                <div class="highlight-desc">${highlight.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">Professional Experience</div>
          ${content.experience.slice(0, 1).map((job: any) => `
            <div class="job">
              <div class="job-header">
                <div>
                  <div class="job-title">${job.position}</div>
                  <div class="company">${job.company}</div>
                </div>
                <div class="duration">${job.duration}</div>
              </div>
              <div class="description">${job.description}</div>
              <ul class="achievements">
                ${job.achievements.slice(0, 3).map((achievement: string) => `<li>${achievement}</li>`).join('')}
              </ul>
              <div class="technologies">
                ${job.technologies.slice(0, 8).map((tech: string) => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Professional Experience (Continued)</div>
        ${content.experience.slice(1).map((job: any) => `
          <div class="job">
            <div class="job-header">
              <div>
                <div class="job-title">${job.position}</div>
                <div class="company">${job.company}</div>
              </div>
              <div class="duration">${job.duration}</div>
            </div>
            <div class="description">${job.description}</div>
            <ul class="achievements">
              ${job.achievements.map((achievement: string) => `<li>${achievement}</li>`).join('')}
            </ul>
            <div class="technologies">
              ${job.technologies.map((tech: string) => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-category-title">Frontend</div>
            ${content.skills.frontend.map((skill: any) => `
              <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.proficiency}</span>
              </div>
            `).join('')}
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Backend</div>
            ${content.skills.backend.map((skill: any) => `
              <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.proficiency}</span>
              </div>
            `).join('')}
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Database</div>
            ${content.skills.database.map((skill: any) => `
              <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.proficiency}</span>
              </div>
            `).join('')}
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Data Science</div>
            ${content.skills.dataScience.map((skill: any) => `
              <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.proficiency}</span>
              </div>
            `).join('')}
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Leadership</div>
            ${content.skills.leadership.map((skill: any) => `
              <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.proficiency}</span>
              </div>
            `).join('')}
          </div>
          <div class="skill-category">
            <div class="skill-category-title">Tools & Modern Dev</div>
            ${content.skills.tools.concat(content.skills.modern).map((skill: any) => `
              <div class="skill-item">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.proficiency}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">About</div>
        <div>${content.about.bio}</div>
        <br>
        <div><strong>Philosophy:</strong> ${content.about.philosophy}</div>
      </div>
    </body>
    </html>
  `
}
</script>

<style scoped>
/* Component-specific styles if needed */
</style>