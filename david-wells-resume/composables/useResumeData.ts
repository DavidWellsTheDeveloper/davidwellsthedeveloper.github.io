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
  // Personal profile - verified authentic data from Dave's provided information
  const profile: ProfileData = {
    name: 'David T. Wells',
    title: 'Software Engineer — Data Platforms & Full-Stack Applications',
    email: 'dave1.t.wells@gmail.com',
    // Shown on generated resume PDF only — not on the public contact section
    phone: '(970) 691-3143',
    website: 'https://davidwellsthedeveloper.com/',
    linkedin: 'https://www.linkedin.com/in/davidwellsdeveloper/',
    github: 'https://github.com/DavidWellsTheDeveloper',
    summary:
      'Software Engineer with 9 years of experience owning and scaling data-driven web applications and analytics platforms. Specialized in high-performance data-driven systems, large-scale data processing, and application architecture. Experienced with VB.NET, Entity Framework, T-SQL, SQL Server, Python, and PHP. Increased team velocity and accuracy while serving as Scrum Master. Known for improving system speed, driving platform-wide design pattern improvements, optimizing at scale, and working effectively both independently and as part of a development team.',
    careerHighlights: [
      'Nine years delivering data-driven web applications, analytics platforms, and full-stack architecture',
      'Built a Django event-registration platform for a Northern Colorado nonprofit, from discovery to launch',
      'Scrum Master for a seven-person engineering team—raised velocity 50% through clearer requirements and realistic scoping',
      'Architected an event-driven AI orchestration platform (Go, Python, Redis Streams, WebSockets, DynamoDB/PostgreSQL on AWS)',
      'Developed, tested, and published web services with OpenAPI and AsyncAPI contracts across Python microservices',
      'Led a platform-wide frontend redesign with Vue.js, SCSS, Pinia, and Material Design',
      'Shipped analytics dashboards processing 1M+ data points; normalized schemas and queries yielding 3-5x faster loads',
      'Built custom CSU web applications in VB.NET with Entity Framework, backed by SQL Server and T-SQL',
      'Trained end-users and provided direct technical and application support to department administrators',
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
        'Solo freelance web developer designing, building, launching, and maintaining custom, high-performance websites and applications for small and medium businesses and nonprofits.',
      achievements: [
        'Designed and built a custom Django platform for a Northern Colorado nonprofit, replacing a failing Wix site with account-based event registration, atomic spot reservation to prevent overbooking, versioned waiver capture, volunteer-friendly admin tools with CSV roster export, and Stripe Checkout donations',
        'Migrated a specialty food retailer off a restrictive platform to a custom headless-commerce storefront, eliminating platform fees and improving organic traffic (Pantry To Store)',
        'Designed and shipped a custom site for a solo accounting practice, powered by a custom headless CMS with client-editable content and near-zero ongoing costs (Andrews Accounting LLC)',
        'Implemented authentication and authorization (sessions, JWT, OAuth) and secrets management, designing data handling around COPPA and Colorado Privacy Act obligations for minors\u2019 data',
        'Deployed and operated client applications on Google Cloud Platform and low-cost static hosting, using GitHub Actions CI/CD for repeatable releases',
        'Delivered sub-second mobile page loads with spam-protected contact forms and reversible content changes',
        'Own the full lifecycle—discovery, design, build, launch, and ongoing care—as the single point of contact, using AI-assisted development for scoped tasks while reviewing and holding approval gates on all core code',
      ],
      technologies: [
        'Django',
        'Python',
        'Stripe',
        'Vue.js',
        'TypeScript',
        'Tailwind CSS',
        'Headless CMS',
        'Static Site Generation',
        'SEO',
        'OAuth',
        'Google Cloud Platform',
        'AWS',
        'GitHub Actions',
        'Netlify',
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
        'Designed an extensible, event-driven agentic development platform integrating LLMs, MCP integrations, and agent skills with the Cursor SDK; developed, tested, and published web services, defining contracts across Python microservices using OpenAPI and AsyncAPI',
        'Recognized as team expert in database design; designed normalized relational schemas and executed optimizations, improving load times 3-5x while enforcing data integrity',
        'Built interactive analytics dashboards processing 1M+ data points using an object-oriented, ports-and-adapters architecture in PHP and Vue.js, serving JSON RESTful APIs',
        'Led a platform-wide frontend redesign using Vue.js, SCSS, Pinia, and Material Design, overhauling frontend architecture and UX',
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
        'SCSS',
        'Pinia',
        'Material Design',
        'JavaScript',
        'TypeScript',
        'JSON',
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
        'Built and maintained data engineering pipelines and analytics platforms for large-scale academic research, emphasizing data integrity, query performance, and automation.',
      achievements: [
        'Promoted from Software Developer Intern to Data Science Developer',
        'Specialized in data engineering on a small team—rock-solid data integrity and performant dashboards built on extensive aggregations and time-series data',
        'Conducted exploratory research to evaluate dataset reliability, correlation, and completeness, integrating large external datasets (census, weather, GIS, violent crime) into statistical models',
        'Used Python’s analytics stack to process and analyze datasets exceeding one billion records',
        'Automated data ingestion and update pipelines, reducing downtime to near zero and improving slow query performance by up to 100×',
        'Performed data visualization with GIS tools, D3, and Python visualization libraries for spatial analysis and visual reporting',
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
        'Developed custom web applications in VB.NET with Entity Framework for public health and environmental risk management, used by multiple university departments.',
      achievements: [
        'Developed custom web applications in VB.NET with Entity Framework supporting internal administrative data workflows for Environmental Health, Public Health, and Risk Management departments',
        'Planned and implemented APIs, SQL Server databases, interactive dashboards, and operational reports using XML and JSON data interchange, backed by databases queried with T-SQL',
        'Led development of data-driven applications for drone tracking, public health logging, ergonomics assessments, and international travel risk management',
        'Provided direct technical and application support to 10–15 department administrators: trained end-users, resolved application issues, and translated non-technical requirements into scalable solutions',
        'Collaborated using pair programming and Agile practices for an efficient, flexible team',
        'Applied SOLID principles and object-oriented design patterns for extensible, maintainable systems',
      ],
      technologies: [
        'VB.NET',
        '.NET Framework',
        'Entity Framework',
        'SQL Server',
        'T-SQL',
        'XML',
        'JSON',
        'REST APIs',
        'SOLID',
        'OOD',
        'Agile',
        'Pair programming',
      ],
      type: 'work',
      verified: true,
    },
  ]

  // Selected projects — verified authentic data; headless CMS and Pantry To Store are separate projects
  const projects: Project[] = [
    {
      id: 'nonprofit-event-platform',
      name: 'Nonprofit Event Platform',
      period: 'Recent',
      summary:
        'Custom Django platform replacing a failing Wix site for a Northern Colorado nonprofit—account-based event registration, atomic spot reservation to prevent overbooking, versioned waiver capture, volunteer-friendly admin tools with CSV roster export, and Stripe Checkout donations.',
      stack: ['Django', 'Python', 'Stripe', 'Google Cloud Platform', 'GitHub Actions'],
      link: 'https://focowebsites.com',
      type: 'project',
      verified: true,
    },
    {
      id: 'pantry-to-store',
      name: 'Pantry To Store',
      period: 'Recent',
      summary:
        'Food waste reduction platform for a specialty food retailer—migrated off a restrictive platform to a custom headless-commerce storefront, eliminating platform fees and improving organic traffic.',
      stack: ['Vue.js', 'Headless Commerce', 'Static Site Generation', 'SEO'],
      link: 'https://pantrytostore.com',
      type: 'project',
      verified: true,
    },
    {
      id: 'andrews-accounting',
      name: 'Andrews Accounting',
      period: 'Recent',
      summary:
        'Designed and shipped a custom site for a solo accounting practice, powered by a custom headless CMS with client-editable content and near-zero ongoing hosting costs.',
      stack: ['Headless CMS', 'Static Site Generation', 'SEO', 'Netlify'],
      link: 'https://andrewsaccountingllc.com',
      type: 'project',
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
      name: 'Python',
      category: 'Backend',
      proficiency: 'Advanced',
      yearsExperience: 5,
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
      name: 'VB.NET',
      category: 'Backend',
      proficiency: 'Intermediate',
      yearsExperience: 2,
      verified: true,
    },
    {
      name: 'Entity Framework',
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
      name: 'XML / JSON',
      category: 'Backend',
      proficiency: 'Advanced',
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
      name: 'T-SQL',
      category: 'Database',
      proficiency: 'Advanced',
      yearsExperience: 2,
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
      name: 'AWS services (S3, EC2, IAM)',
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
    bio: 'Background in sociology and computer science—focused on building reliable full-stack applications, data platforms, and software that users are confident running.',
    philosophy:
      'The best systems pair solid relational design and performance discipline with clear communication. I care about measurable outcomes, maintainable code, and how teams work together to deliver.',
    careerPassions: [
      'Full-stack application development from design through deployment',
      'Data platforms, analytics, and performance at scale',
      'Database design—normalized schemas, T-SQL, and query optimization',
      'Training end-users and providing direct technical support',
      'Scrum Master practice and healthy agile ceremonies',
      'AI-assisted and agentic development with rigorous review and testing',
      'Freelance web development for small and medium businesses (FoCo Websites)',
    ],
    funFacts: [
      'Engineering Scrum Master for a seven-person team while staying hands-on in code',
      'Architected an event-driven AI orchestration platform and an agentic development workflow',
      'Built custom VB.NET and Entity Framework applications for university departments at CSU',
      'Improved query and load performance from multi-fold gains up to ~100x on large pipelines',
      'Dual degree path: sociology (Fort Lewis) and computer science (CSU)',
    ],
    verified: true,
  }

  const contactMessage =
    'Open to discussing roles in application development, data platforms, and full-stack delivery—especially where leadership and hands-on architecture both matter. Also available for freelance web projects through FoCo Websites.'

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
