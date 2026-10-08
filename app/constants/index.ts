// Navigation items
export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home'
  },
  {
    label: 'About',
    to: '/about',
    icon: 'i-lucide-user'
  },
  {
    label: 'Experience',
    to: '/experience',
    icon: 'i-lucide-briefcase'
  },
  {
    label: 'Projects',
    to: '/projects',
    icon: 'i-lucide-code'
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'i-lucide-mail'
  }
] as const

// Social links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/DavidWellsTheDeveloper',
    icon: 'i-simple-icons-github'
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/DavidWellsTheDeveloper',
    icon: 'i-simple-icons-gitlab'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/davidwellsdeveloper/',
    icon: 'i-simple-icons-linkedin'
  },
  {
    name: 'FoCo Websites',
    url: 'https://focowebsites.com',
    icon: 'i-lucide-globe'
  }
] as const

// Contact information
export const CONTACT_INFO = {
  email: 'dave1twells@gmail.com',
  phone: '(970) 691-3143',
  location: 'Fort Collins, CO'
} as const

// Resume download
export const RESUME_URL = '/David-Wells-Software-Engineer-Resume.pdf'
export const RESUME_FILENAME = 'David Wells Software Engineer Resume.pdf'

// Skills data
export const SKILLS = {
  core: [
    'JavaScript', 
    'TypeScript',
    'Vue.js', 
    'React', 
    'Nuxt', 
    'PHP',
    'Python',
    'Go',
    'HTML5/CSS3',
    'Tailwind CSS'
  ],
  backendData: [
    'REST APIs',
    'MySQL',
    'PostgreSQL',
    'SQL Server',
    'Database Design',
    'Django',
    'Laravel',
    'Redis Streams',
    'DynamoDB',
    'WebSockets',
    'Big Data Analytics',
    'Data Modeling'
  ],
  leadership: [
    'Scrum Master',
    'Agile Practices',
    'AI-Assisted Development',
    'AWS & GCP',
    'Team Mentoring',
    'Code Reviews',
    'CI/CD',
    'Process Improvement'
  ]
} as const

// Professional highlights
export const PROFESSIONAL_HIGHLIGHTS = [
  {
    title: 'AI Orchestration Platform',
    category: 'Architecture',
    type: 'Technical',
    description: 'Architected a multi-service, event-driven AI orchestration platform at MeasuringU (Go API, Python workers, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS) with human approval checkpoints, cutting planning from ~4 days to ~1 day.'
  },
  {
    title: 'Scrum Master & Team Leadership',
    category: 'Leadership',
    type: 'Leadership',
    description: 'Served as Scrum Master for a 7-person engineering team at MeasuringU, partnering with product stakeholders to clarify requirements and scope work realistically, raising team velocity by 50%.'
  },
  {
    title: 'Performance & Data at Scale',
    category: 'Performance',
    type: 'Performance',
    description: 'Designed normalized relational schemas and optimizations that improved load times 3–5x, and built interactive analytics dashboards processing 1M+ data points with PHP and Vue.js.'
  }
] as const
