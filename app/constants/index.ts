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
  }
] as const

// Contact information
export const CONTACT_INFO = {
  email: 'dave1twells@gmail.com',
  phone: '(970) 691-3143',
  location: 'Fort Collins, CO'
} as const

// Skills data
export const SKILLS = {
  core: [
    'JavaScript', 
    'Vue.js', 
    'React', 
    'Nuxt', 
    'PHP',
    'Python',
    'HTML5/CSS3',
    'Tailwind CSS'
  ],
  backendData: [
    'RESTful APIs',
    'MySQL',
    'SQL Server',
    'Database Design',
    'Django',
    'Laravel',
    'Big Data Analytics',
    'Data Modeling'
  ],
  leadership: [
    'Scrum Master',
    'Agile Practices',
    'Team Mentoring',
    'Code Reviews',
    'Sprint Planning',
    'Technical Documentation',
    'Process Improvement'
  ]
} as const

// Professional highlights
export const PROFESSIONAL_HIGHLIGHTS = [
  {
    title: 'Scrum Master & Team Leadership',
    category: 'Leadership',
    type: 'Leadership',
    description: 'Leading scrum ceremonies, sprint planning, and retrospectives at MeasuringU. Mentoring developers and contributing to organizational direction through backlog and roadmap meetings.'
  },
  {
    title: 'Big Data Performance Optimization',
    category: 'Performance',
    type: 'Performance',
    description: 'Optimized queries on datasets with 1+ billion records, improving performance by orders of magnitude. Automated monthly updates to eliminate downtime and save development time.'
  },
  {
    title: 'Scalable Analytics Solutions',
    category: 'Architecture',
    type: 'Technical',
    description: 'Designed and developed scalable data analytics solutions using PHP and Vue.js at MeasuringU, built to last and continue growing with normalized relational database systems.'
  }
] as const 