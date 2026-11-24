// Content of record lives in content/*.json (mirrored here via build-time imports)
import profileData from '../../content/profile.json'
import workData from '../../content/experience/work.json'
import projectsData from '../../content/projects.json'
import skillsData from '../../content/skills/skills.json'
import educationData from '../../content/education.json'
import personalData from '../../content/personal.json'

interface ProfileData {
  name: string
  title: string
  email: string
  phone?: string
  location?: string
  website: string
  linkedin: string
  github: string
  summary: string
  careerHighlights: string[]
}

interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string | null
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'work'
  verified: boolean
}

interface Project {
  id: string
  name: string
  period: string
  summary: string
  stack: string[]
  link: string | null
  type: 'project'
  verified: boolean
}

interface TechnicalSkill {
  name: string
  category: string
  proficiency: string
  yearsExperience: number
  verified: boolean
}

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string | null
  location: string
  gpa?: string
  honors?: string[]
  type: 'education'
  verified: boolean
}

export const useResumeData = () => {






  const contactMessage =
    'Open to discussing roles in application development, data platforms, and full-stack delivery—especially where leadership and hands-on architecture both matter. Also available for freelance web projects through FoCo Websites.'

  // Data sourced from content/*.json — the single source of record
  const profile: ProfileData = {
    name: profileData.name,
    title: profileData.title,
    email: profileData.email,
    phone: profileData.phone,
    location: profileData.location,
    website: profileData.website,
    linkedin: profileData.linkedin,
    github: profileData.github,
    summary: profileData.summary,
    careerHighlights: profileData.careerHighlights,
  }

  const workExperience = workData as WorkExperience[]
  const projects = projectsData as Project[]
  const technicalSkills = skillsData as TechnicalSkill[]
  const education = educationData as Education[]

  const personal = {
    ...personalData,
    verified: true,
  }

  // Helper function for AboutSection
  const getKeyHighlights = () => [
    {
      title: 'Data platforms & analytics',
      description:
        'Nine years building data-driven applications, large-scale processing, and analytics experiences end to end',
    },
    {
      title: 'Engineering leadership',
      description:
        'Scrum Master for a seven-person team—raised velocity 50% through clearer requirements, refinement, and retrospectives',
    },
    {
      title: 'Performance & data modeling',
      description:
        'Normalized relational design, query tuning, and dashboards at millions of points—with measured load and latency wins',
    },
    {
      title: 'Modern full-stack craft',
      description:
        'Vue, Nuxt, Django, Go, SQL, REST, SCSS, Pinia, Tailwind, Material Design, CI/CD, and AI-assisted development with strong review habits',
    },
    {
      title: 'Support & training',
      description:
        'Provided direct technical and application support to department administrators—trained end-users, resolved issues, and translated non-technical requirements',
    },
    {
      title: 'Freelance web development',
      description:
        'Through FoCo Websites, I design, build, launch, and care for fast, custom sites for small and medium businesses',
    },
  ]

  // Helper function for content verification
  const isContentVerified = () => true

  // Helper function for experience duration calculation
  const getExperienceDuration = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const years = Math.floor(diffDays / 365)
    const months = Math.floor((diffDays % 365) / 30)

    if (years > 0) {
      return months > 0
        ? `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}`
        : `${years} year${years > 1 ? 's' : ''}`
    }
    return `${months} month${months > 1 ? 's' : ''}`
  }

  // Helper function for skill categories
  const getSkillCategories = () => {
    const categories = Array.from(
      new Set(technicalSkills.map(skill => skill.category))
    )
    return categories.map(categoryName => ({
      name: categoryName,
      skills: technicalSkills.filter(skill => skill.category === categoryName),
    }))
  }

  return {
    profile,
    workExperience,
    projects,
    technicalSkills,
    education,
    personal,
    contactMessage,
    getKeyHighlights,
    isContentVerified,
    getExperienceDuration,
    getSkillCategories,
  }
}
