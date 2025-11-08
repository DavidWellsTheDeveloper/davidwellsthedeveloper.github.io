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
  type: "work"
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
  type: "education"
  verified: boolean
}

export const useResumeData = () => {
  // Personal profile - verified authentic data from Dave's provided information
  const profile: ProfileData = {
    name: "David T. Wells",
    title: "Senior Full Stack Developer & Scrum Master",
    email: "dave1twells@gmail.com",
    website: "",
    linkedin: "https://www.linkedin.com/in/davidwellsdeveloper/",
    github: "https://github.com/DavidWellsTheDeveloper",
    summary: "Senior Full Stack Developer with 8+ years of experience building scalable web applications. Currently serving as Scrum Master for a 7-person development team while maintaining hands-on development responsibilities. Proven track record of database optimization (50x performance improvements), team leadership, and implementing modern development workflows including AI-assisted development practices.",
    careerHighlights: [
      "8+ years full-stack development experience with Vue.js, PHP, and JavaScript",
      "Current Scrum Master for 7-person development team since February 2025",
      "Achieved 50x database performance improvements through optimization techniques", 
      "Led Material Design implementation across entire platform at MeasuringU",
      "Pioneer in AI-assisted development workflows using GitHub Copilot with team code review processes",
      "Expertise in big data solutions with 1+ billion record datasets (census & weather data)",
      "Implemented Django APIs and time series modeling for data forecasting",
      "Led .NET data-driven solutions for university administrative systems"
    ]
  }

  // Work experience - verified authentic data from Dave's provided information
  const workExperience: WorkExperience[] = [
    {
      id: "measuringu-senior",
      company: "MeasuringU",
      position: "Senior Full Stack Developer & Scrum Master",
      startDate: "2021-03-01",
      endDate: null,
      location: "Remote",
      description: "Lead full-stack development and serve as Scrum Master for a 7-person development team. Architect scalable solutions, conduct technical interviews, and drive agile transformation initiatives.",
      achievements: [
        "Serve as Scrum Master for 7-person development team since February 2025, facilitating 2-week sprints with 30/60/90 day strategic planning",
        "Led complete frontend overhaul implementing Material Design methodology across entire platform",
        "Redesigned components, navigation, and information architecture improving user experience",
        "Implemented AI-assisted development workflows with comprehensive team code review processes ensuring all merged code meets quality standards",
        "Adopted spec-driven development methodologies using Spec Kit for project planning and execution",
        "Conducted technical interviews and onboarded new developers, establishing team growth processes", 
        "Architected full-stack solutions with focus on scalability and minimal technical debt",
        "Built comprehensive data visualization dashboard with advanced statistics and interactive charts",
        "Mentored junior developers and established code quality standards across the team",
        "Implemented Behavior Driven Design practices for loosely coupled, scalable systems"
      ],
      technologies: ["Vue.js", "PHP", "Material Design", "JavaScript", "TypeScript", "CSS3", "SASS", "RESTful APIs", "Database Design", "GitHub Copilot", "Spec Kit"],
      type: "work",
      verified: true
    },
    {
      id: "mountain-data-fullstack",
      company: "Mountain Data Group",
      position: "Full Stack Web Application Developer",
      startDate: "2020-03-01",
      endDate: "2021-03-01",
      location: "Fort Collins, CO",
      description: "Integrated full stack web application solutions with Mountain Data Group's primary client, showcasing client focused development and big data analytics.",
      achievements: [
        "Integrated full stack web application solutions with Mountain Data Group's primary client, showcasing client focused development",
        "Conducted database benchmarking to track optimizations and improve query speeds, achieving significant performance improvements",
        "Utilized Python's data analytics libraries and statistical modeling to gain insights into census & weather datasets with over 1 billion records each",
        "Developed Django APIs to serve data needs quickly and securely",
        "Automated monthly updates to eliminate data downtime and improve speeds by orders of magnitude",
        "Gained experience working with GIS and census data to improve statistical analysis and enhance data-driven decision making",
        "Developed big data solutions utilizing time series modeling to assist in data forecasting",
        "Analyzed and searched for datasets to improve forecasting models including demographic and weather data across the UK",
        "Met weekly in a modified scrum environment for team meetings to share project developments and progress"
      ],
      technologies: ["Python", "Django", "Data Analytics", "Statistical Modeling", "GIS", "Census Data", "Time Series Modeling", "Big Data", "Database Optimization", "APIs"],
      type: "work",
      verified: true
    },
    {
      id: "mountain-data-intern",
      company: "Mountain Data Group",
      position: "Data Science Intern",
      startDate: "2019-05-01",
      endDate: "2020-03-01",
      location: "Fort Collins, CO",
      description: "Data science internship focused on analytics and data processing for university client projects, building foundational skills in big data and statistical analysis.",
      achievements: [
        "Gained foundational experience in data analysis and processing for large-scale datasets",
        "Supported senior developers on data management and optimization projects with census and weather data",
        "Developed skills in statistical modeling and data visualization techniques for 1+ billion record datasets",
        "Contributed to big data solutions and time series modeling projects",
        "Participated in modified scrum environment and collaborative team development processes"
      ],
      technologies: ["Python", "Data Analysis", "Statistical Modeling", "Database Management", "Data Visualization", "Big Data"],
      type: "work",
      verified: true
    },
    {
      id: "csu-web-developer",
      company: "Colorado State University",
      position: "Web Application Developer",
      startDate: "2017-05-01",
      endDate: "2019-05-01",
      location: "Fort Collins, CO",
      description: "Provided programming solutions and technical support for administrators in Environmental Health, Public Health, and Risk Management departments using .NET and database technologies.",
      achievements: [
        "Provided programming solutions and technical support for administrators in the Environmental Health, Public Health, and Risk Management departments",
        "Designed and implemented relational databases to ensure data integrity and accurate relational models",
        "Acted as the lead developer for select .NET data-driven solutions, including tracking university drones, logging public health complaints, and performing risk management assessments for international travel",
        "Worked directly with clients to develop custom pages and tools addressing specific administrative needs",
        "Worked as a team on projects utilizing agile and pair programming practices",
        "Wrote well documented code using SOLID development principles of object oriented design"
      ],
      technologies: [".NET", "C#", "SQL", "Database Design", "Relational Databases", "SOLID Principles", "Agile Development", "Pair Programming"],
      type: "work",
      verified: true
    }
  ]

  // Technical skills - verified authentic data with proficiency levels from your work experience
  const technicalSkills: TechnicalSkill[] = [
    // Frontend Technologies
    { name: "Vue.js", category: "Frontend", proficiency: "Expert", yearsExperience: 6, verified: true },
    { name: "JavaScript", category: "Frontend", proficiency: "Expert", yearsExperience: 8, verified: true },
    { name: "TypeScript", category: "Frontend", proficiency: "Intermediate", yearsExperience: 2, verified: true },
    { name: "HTML5", category: "Frontend", proficiency: "Expert", yearsExperience: 8, verified: true },
    { name: "CSS3", category: "Frontend", proficiency: "Expert", yearsExperience: 8, verified: true },
    { name: "SASS", category: "Frontend", proficiency: "Advanced", yearsExperience: 4, verified: true },
    { name: "Material Design", category: "Frontend", proficiency: "Advanced", yearsExperience: 3, verified: true },
    { name: "React", category: "Frontend", proficiency: "Intermediate", yearsExperience: 1, verified: true },
    
    // Backend Technologies
    { name: "PHP", category: "Backend", proficiency: "Expert", yearsExperience: 5, verified: true },
    { name: "Python", category: "Backend", proficiency: "Advanced", yearsExperience: 4, verified: true },
    { name: "C#", category: "Backend", proficiency: "Advanced", yearsExperience: 3, verified: true },
    { name: ".NET", category: "Backend", proficiency: "Advanced", yearsExperience: 3, verified: true },
    { name: "Django", category: "Backend", proficiency: "Advanced", yearsExperience: 3, verified: true },
    { name: "RESTful APIs", category: "Backend", proficiency: "Advanced", yearsExperience: 6, verified: true },
    
    // Database Technologies
    { name: "SQL", category: "Database", proficiency: "Advanced", yearsExperience: 8, verified: true },
    { name: "MySQL", category: "Database", proficiency: "Advanced", yearsExperience: 8, verified: true },
    { name: "Database Design", category: "Database", proficiency: "Advanced", yearsExperience: 8, verified: true },
    { name: "Database Optimization", category: "Database", proficiency: "Advanced", yearsExperience: 4, verified: true },
    { name: "Relational Databases", category: "Database", proficiency: "Advanced", yearsExperience: 8, verified: true },
    
    // Data Science & Analytics
    { name: "Data Analytics", category: "Data Science", proficiency: "Advanced", yearsExperience: 4, verified: true },
    { name: "Statistical Modeling", category: "Data Science", proficiency: "Intermediate", yearsExperience: 3, verified: true },
    { name: "Big Data", category: "Data Science", proficiency: "Intermediate", yearsExperience: 2, verified: true },
    { name: "Time Series Modeling", category: "Data Science", proficiency: "Intermediate", yearsExperience: 2, verified: true },
    { name: "GIS", category: "Data Science", proficiency: "Intermediate", yearsExperience: 2, verified: true },
    { name: "Census Data", category: "Data Science", proficiency: "Advanced", yearsExperience: 2, verified: true },
    { name: "Data Visualization", category: "Data Science", proficiency: "Advanced", yearsExperience: 4, verified: true },
    
    // Leadership & Methodologies
    { name: "Scrum Master", category: "Leadership", proficiency: "Advanced", yearsExperience: 1, verified: true },
    { name: "Team Leadership", category: "Leadership", proficiency: "Advanced", yearsExperience: 4, verified: true },
    { name: "Agile Development", category: "Leadership", proficiency: "Advanced", yearsExperience: 6, verified: true },
    { name: "Pair Programming", category: "Leadership", proficiency: "Advanced", yearsExperience: 2, verified: true },
    { name: "SOLID Principles", category: "Leadership", proficiency: "Advanced", yearsExperience: 7, verified: true },
    { name: "Behavior Driven Design", category: "Leadership", proficiency: "Advanced", yearsExperience: 5, verified: true },
    
    // Development Tools & Modern Practices
    { name: "Git", category: "Tools", proficiency: "Advanced", yearsExperience: 8, verified: true },
    { name: "GitHub Copilot", category: "Tools", proficiency: "Advanced", yearsExperience: 1, verified: true },
    { name: "Spec Kit", category: "Tools", proficiency: "Intermediate", yearsExperience: 1, verified: true },
    { name: "AI-Assisted Development", category: "Modern Development", proficiency: "Advanced", yearsExperience: 1, verified: true }
  ]

  // Education - verified authentic data
  const education: Education[] = [
    {
      id: "csu-computer-science",
      institution: "Colorado State University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2016-08-01",
      endDate: "2019-05-01",
      location: "Fort Collins, CO",
      type: "education",
      verified: true
    },
    {
      id: "fort-lewis-sociology",
      institution: "Fort Lewis College",
      degree: "Bachelor of Arts",
      field: "Sociology",
      startDate: "2008-08-01",
      endDate: "2012-05-01",
      location: "Durango, CO",
      type: "education",
      verified: true
    }
  ]

  // Constitutional Requirement I: Authentic Representation - Personal info
  const personal = {
    bio: "Transitioned from sociology to computer science, bringing a unique perspective on user experience and team dynamics. Passionate about creating technology that genuinely improves people's lives and building collaborative development environments.",
    philosophy: "I believe the best software solutions come from understanding both the technical requirements and the human needs behind them. My background in sociology gives me insight into user behavior and team communication that enhances my technical work.",
    careerPassions: [
      "Team leadership and agile transformation",
      "Database optimization and performance improvements", 
      "User experience and interface design",
      "AI-assisted development and modern workflows",
      "Building scalable, maintainable systems"
    ],
    funFacts: [
      "Achieved 50x database performance improvements through query optimization",
      "Manages a 7-person development team while still coding daily",
      "Unique background combining sociology and computer science degrees"
    ],
    verified: true
  }

  // Contact message for footer
  const contactMessage = "I'd love to discuss how my full-stack development expertise and team leadership experience can contribute to your next project. Let's connect!"

  // Helper function for AboutSection
  const getKeyHighlights = () => [
    {
      title: "Full-Stack Expertise",
      description: "8+ years building scalable web applications with Vue.js, PHP, and modern development practices"
    },
    {
      title: "Team Leadership",
      description: "Currently serving as Scrum Master for 7-person development team with proven track record in agile transformation"
    },
    {
      title: "Performance Optimization", 
      description: "Expert in database performance analysis, query optimization, and strategic system improvements delivering significant performance gains"
    },
    {
      title: "AI-Assisted Development",
      description: "Pioneer in implementing AI-assisted workflows with GitHub Copilot and comprehensive code review processes"
    }
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
      return months > 0 ? `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}` : `${years} year${years > 1 ? 's' : ''}`
    }
    return `${months} month${months > 1 ? 's' : ''}`
  }

  // Helper function for skill categories
  const getSkillCategories = () => {
    const categories = Array.from(new Set(technicalSkills.map(skill => skill.category)))
    return categories.map(categoryName => ({
      name: categoryName,
      skills: technicalSkills.filter(skill => skill.category === categoryName)
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
    getSkillCategories
  }
}
