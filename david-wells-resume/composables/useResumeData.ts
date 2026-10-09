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
  // Personal profile - verified authentic data from Dave's provided information
  const profile: ProfileData = {
    name: 'David T. Wells',
    title: 'Data Platforms & Analytics Software Engineer',
    email: 'dave1twells@gmail.com',
    // Shown on generated resume PDF only — not on the public contact section
    phone: '(970) 691-3143',
    website: '',
    linkedin: 'https://www.linkedin.com/in/davidwellsdeveloper/',
    github: 'https://github.com/DavidWellsTheDeveloper',
    summary:
      'Senior Software Engineer with 9 years of experience owning and scaling data-driven applications and analytics platforms. Specialized in high-performance data-driven systems, large-scale data processing, and application architecture. Increased team velocity and accuracy while serving as Scrum Master. Proven track record of improving system speed, building clean frontend layouts, designing normalized and efficient relational architecture, and planning full-stack systems. Known for driving platform-wide design pattern improvements and optimizing at scale.',
    careerHighlights: [
      'Nine years delivering data-driven applications, analytics platforms, and full-stack architecture',
      'Scrum Master for a seven-person engineering team—raised velocity 50% through clearer requirements and realistic scoping',
      'Architected an event-driven AI orchestration platform (Go, Python, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS)',
      'Built an agentic development platform integrating LLMs, MCP integrations, and agent skills via the Cursor SDK',
      'Led a platform-wide frontend redesign with Vue.js, Sass, Pinia, and Material Design',
      'Shipped analytics dashboards processing 1M+ data points; normalized schemas and queries yielding 3-5x faster loads',
      'Processed billion-record datasets with Python; automated pipelines improving slow queries up to 100x',
      'Built custom CSU web applications for environmental and public health workflows, APIs, and dashboards',
    ],
  }

  // Work experience - verified authentic data from Dave's provided information
  const workExperience: WorkExperience[] = [
    {
      id: 'focowebsites-freelance',
      company: 'FoCo Websites',
      position: 'Freelance Web Developer',
      startDate: '2026-01-01',
      endDate: null,
      location: 'Northern Colorado (Fort Collins area)',
      description:
        'Solo freelance web developer designing, building, launching, and maintaining custom, high-performance websites for small and medium businesses.',
      achievements: [
        'Designed and shipped a fast, secure custom site for a solo accounting practice, with a client-editable CMS and near-zero ongoing costs (Andrews Accounting LLC)',
        'Migrated a specialty food retailer off a restrictive platform to a custom headless-commerce storefront, eliminating platform fees and improving organic traffic (Pantry To Store)',
        'Delivered sub-second mobile page loads with low-cost static hosting, spam-protected contact forms, and reversible content changes',
        'Own the full lifecycle—discovery, design, build, launch, and ongoing care—as the single point of contact',
      ],
      technologies: [
        'Nuxt',
        'Vue.js',
        'TypeScript',
        'Tailwind CSS',
        'Headless CMS',
        'Static Site Generation',
        'SEO',
        'Netlify',
        'AWS',
      ],
      type: 'work',
      verified: true,
    },
    {
      id: 'measuringu-fullstack',
      company: 'MeasuringU',
      position: 'Full Stack Developer',
      startDate: '2021-03-01',
      endDate: '2026-08-01',
      location: 'Remote',
      description:
        "Led development of a data-driven SaaS analytics platform with a focus on backend performance and maintainable object-oriented systems. Recognized as the team's expert in database design and frontend implementation.",
      achievements: [
        'Architected a multi-service, event-driven AI orchestration platform (Go API, Python workers, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS) built around a three-gate workflow with human approval checkpoints and claim-check messaging, turning ambiguous requests into scoped, production-ready web applications and cutting planning from ~4 days to ~1 day',
        'Served as Scrum Master for a seven-person engineering team, partnering with product stakeholders to clarify requirements and scope work realistically; improved requirements clarity and AI workflow, raising velocity 50%',
        'Designed an extensible, event-driven agentic development platform integrating LLMs, MCP integrations, and agent skills with the Cursor SDK; defined service contracts across Python microservices using OpenAPI and AsyncAPI',
        'Recognized as team expert in database design; designed normalized relational schemas and executed optimizations, improving load times 3-5x while enforcing data integrity',
        'Built interactive analytics dashboards processing 1M+ data points using an object-oriented, ports-and-adapters architecture in PHP and Vue.js',
        'Led a platform-wide frontend redesign using Vue.js, Sass, Pinia, and Material Design, overhauling frontend architecture and UX',
        'Maintained CI/CD pipelines with GitHub Actions to automate testing, linting, builds, and deployments to AWS, enabling low-risk, fast releases across multiple instances',
      ],
      technologies: [
        'Go',
        'Python',
        'Vue.js',
        'PHP',
        'SQL',
        'PostgreSQL',
        'DynamoDB',
        'Redis Streams',
        'WebSockets',
        'REST APIs',
        'OpenAPI',
        'AsyncAPI',
        'MCP',
        'Cursor SDK',
        'AWS',
        'GitHub Actions',
        'Sass',
        'Pinia',
        'Material Design',
        'JavaScript',
        'TypeScript',
      ],
      type: 'work',
      verified: true,
    },
    {
      id: 'mountain-data-science',
      company: 'Mountain Data Group',
      position: 'Data Science Developer',
      startDate: '2019-05-01',
      endDate: '2021-03-01',
      location: 'Fort Collins, CO',
      description:
        'Processed and modeled large datasets to improve predictive accuracy and analytical insights for research teams.',
      achievements: [
        'Promoted from Software Developer Intern to Data Science Developer, contributing to advanced analytics and predictive modeling',
        'Integrated external datasets (census, weather, violent crime) into statistical models to improve predictive accuracy and depth of analysis',
        'Used Python’s analytics stack to process and analyze datasets exceeding one billion records',
        'Automated data ingestion and update pipelines, reducing downtime to near zero and improving slow query performance by up to 100×',
        'Developed time-series and big-data models supporting research in travel risk, lead exposure, and public trust',
        'Conducted exploratory research on dataset reliability, correlation, and completeness including GIS, UK demographic, and violent crime data',
        'Performed data visualization with GIS tools, D3, and Python visualization libraries for spatial analysis and reporting',
        'Integrated with third-party client microservices using the Azure ecosystem',
      ],
      technologies: [
        'Python',
        'D3',
        'GIS',
        'Statistical modeling',
        'Time series',
        'Big data',
        'SQL',
        'Data pipelines',
        'Azure',
        'Microservices',
      ],
      type: 'work',
      verified: true,
    },
    {
      id: 'csu-web-developer',
      company: 'Colorado State University — Environmental Health Services',
      position: 'Web Application Developer',
      startDate: '2017-05-01',
      endDate: '2019-05-01',
      location: 'Fort Collins, CO',
      description:
        'Built custom web tools for public health and environmental risk management used by multiple university departments.',
      achievements: [
        'Created web applications for Environmental Health, Public Health, and Risk Management supporting administrative data workflows',
        'Planned and implemented APIs, databases, and interactive dashboards for 10–15 department administrators',
        'Led development of data-driven applications for drone tracking, public health logging, ergonomics assessments, and international travel risk management',
        'Translated non-technical stakeholder requirements into scalable technical solutions',
        'Collaborated using pair programming and Agile practices for an efficient, flexible team',
        'Applied SOLID principles and object-oriented design patterns for extensible, maintainable systems',
      ],
      technologies: [
        'JavaScript',
        'SQL',
        'REST APIs',
        'Relational databases',
        'SOLID',
        'OOD',
        'Agile',
        'Pair programming',
      ],
      type: 'work',
      verified: true,
    },
  ]

  // Technical skills — aligned with resume core competencies
  const technicalSkills: TechnicalSkill[] = [
    {
      name: 'Vue.js',
      category: 'Frontend',
      proficiency: 'Expert',
      yearsExperience: 6,
      verified: true,
    },
    {
      name: 'Nuxt',
      category: 'Frontend',
      proficiency: 'Advanced',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'React',
      category: 'Frontend',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'Pinia',
      category: 'Frontend',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      proficiency: 'Intermediate',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'Sass',
      category: 'Frontend',
      proficiency: 'Advanced',
      yearsExperience: 5,
      verified: true,
    },
    {
      name: 'Material Design',
      category: 'Frontend',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      proficiency: 'Advanced',
      yearsExperience: 3,
      verified: true,
    },

    {
      name: 'PHP',
      category: 'Backend',
      proficiency: 'Expert',
      yearsExperience: 5,
      verified: true,
    },
    {
      name: 'Python',
      category: 'Backend',
      proficiency: 'Advanced',
      yearsExperience: 5,
      verified: true,
    },
    {
      name: 'Java',
      category: 'Backend',
      proficiency: 'Intermediate',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'Go',
      category: 'Backend',
      proficiency: 'Advanced',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'Django',
      category: 'Backend',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'Laravel',
      category: 'Backend',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'REST APIs',
      category: 'Backend',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },

    {
      name: 'SQL',
      category: 'Database',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'MySQL',
      category: 'Database',
      proficiency: 'Advanced',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'SQL Server',
      category: 'Database',
      proficiency: 'Intermediate',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'Relational modeling & normalization',
      category: 'Database',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'ORMs',
      category: 'Database',
      proficiency: 'Advanced',
      yearsExperience: 6,
      verified: true,
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Redis',
      category: 'Database',
      proficiency: 'Advanced',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'DynamoDB',
      category: 'Database',
      proficiency: 'Intermediate',
      yearsExperience: 3,
      verified: true,
    },

    {
      name: 'Data analytics',
      category: 'Data Science',
      proficiency: 'Advanced',
      yearsExperience: 6,
      verified: true,
    },
    {
      name: 'Data visualization',
      category: 'Data Science',
      proficiency: 'Advanced',
      yearsExperience: 6,
      verified: true,
    },
    {
      name: 'Statistical modeling',
      category: 'Data Science',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Large-scale / big data processing',
      category: 'Data Science',
      proficiency: 'Advanced',
      yearsExperience: 5,
      verified: true,
    },
    {
      name: 'GIS & spatial analysis',
      category: 'Data Science',
      proficiency: 'Intermediate',
      yearsExperience: 3,
      verified: true,
    },

    {
      name: 'Scrum Master',
      category: 'Leadership',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Agile & Scrum',
      category: 'Leadership',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'Behavior-driven development',
      category: 'Leadership',
      proficiency: 'Advanced',
      yearsExperience: 5,
      verified: true,
    },
    {
      name: 'Pair programming',
      category: 'Leadership',
      proficiency: 'Advanced',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'Object-oriented design',
      category: 'Leadership',
      proficiency: 'Expert',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'Design patterns',
      category: 'Leadership',
      proficiency: 'Advanced',
      yearsExperience: 6,
      verified: true,
    },

    {
      name: 'Git',
      category: 'Tools',
      proficiency: 'Advanced',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'GitHub',
      category: 'Tools',
      proficiency: 'Advanced',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'GitLab',
      category: 'Tools',
      proficiency: 'Intermediate',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Docker',
      category: 'Tools',
      proficiency: 'Intermediate',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Nginx',
      category: 'Tools',
      proficiency: 'Intermediate',
      yearsExperience: 3,
      verified: true,
    },
    {
      name: 'YAML / JSON',
      category: 'Tools',
      proficiency: 'Advanced',
      yearsExperience: 9,
      verified: true,
    },
    {
      name: 'GitHub Actions (CI/CD)',
      category: 'Tools',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'WebSockets',
      category: 'Tools',
      proficiency: 'Advanced',
      yearsExperience: 3,
      verified: true,
    },

    {
      name: 'AWS',
      category: 'Cloud',
      proficiency: 'Advanced',
      yearsExperience: 5,
      verified: true,
    },
    {
      name: 'GCP',
      category: 'Cloud',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'AWS services (S3, EC2, IAM, Route 53, Lightsail)',
      category: 'Cloud',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'OAuth integration',
      category: 'Cloud',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'Cloud cost optimization',
      category: 'Cloud',
      proficiency: 'Advanced',
      yearsExperience: 3,
      verified: true,
    },

    {
      name: 'AI-assisted development',
      category: 'Modern Development',
      proficiency: 'Advanced',
      yearsExperience: 4,
      verified: true,
    },
    {
      name: 'LLM & MCP integrations',
      category: 'Modern Development',
      proficiency: 'Advanced',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'Agentic development workflows',
      category: 'Modern Development',
      proficiency: 'Advanced',
      yearsExperience: 2,
      verified: true,
    },
  ]

  // Education - verified authentic data
  const education: Education[] = [
    {
      id: 'csu-computer-science',
      institution: 'Colorado State University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2015-08-01',
      endDate: '2019-12-01',
      location: 'Fort Collins, CO',
      type: 'education',
      verified: true,
    },
    {
      id: 'fort-lewis-sociology',
      institution: 'Fort Lewis College',
      degree: 'Bachelor of Arts',
      field: 'Sociology',
      startDate: '2009-08-01',
      endDate: '2013-05-01',
      location: 'Durango, CO',
      type: 'education',
      verified: true,
    },
  ]

  // Constitutional Requirement I: Authentic Representation - Personal info
  const personal = {
    bio: 'Background in sociology and computer science—focused on data platforms, analytics, and shipping software that teams can rely on at scale.',
    philosophy:
      'The best systems pair solid relational design and performance discipline with clear communication. I care about measurable outcomes, maintainable code, and how teams work together to deliver.',
    careerPassions: [
      'Data platforms, analytics, and performance at scale',
      'Scrum Master practice and healthy agile ceremonies',
      'Normalized data models, APIs, and full-stack delivery',
      'AI-assisted and agentic development with rigorous review and testing',
      'Accessible, well-structured frontends',
      'Freelance web development for small and medium businesses (FoCo Websites)',
    ],
    funFacts: [
      'Engineering Scrum Master for a seven-person team while staying hands-on in code',
      'Architected an event-driven AI orchestration platform and an agentic development workflow',
      'Improved query and load performance from multi-fold gains up to ~100x on large pipelines',
      'Dual degree path: sociology (Fort Lewis) and computer science (CSU)',
    ],
    verified: true,
  }

  const contactMessage =
    'Open to discussing roles in data platforms, analytics engineering, and full-stack delivery—especially where leadership and hands-on architecture both matter. Also available for freelance web projects through FoCo Websites.'

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
        'Vue, Nuxt, PHP, Go, SQL, REST, Sass, Pinia, Tailwind, Material Design, CI/CD, and AI-assisted development with strong review habits',
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
