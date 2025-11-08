# Data Model: Resume Content Structure

## Core Entities

### Profile
```typescript
interface Profile {
  name: string
  title: string
  email: string
  phone?: string
  location: string
  website?: string
  linkedin?: string
  github?: string
  photo: string
  summary: string
  tagline: string
}
```

### Experience
```typescript
interface Experience {
  id: string
  company: string
  position: string
  startDate: Date
  endDate?: Date // null = current position
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  type: 'work' | 'volunteer' | 'project'
}
```

### Skill
```typescript
interface Skill {
  name: string
  category: SkillCategory
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsExperience?: number
  verified: boolean // Constitutional requirement
}

type SkillCategory = 
  | 'programming-languages'
  | 'frameworks'
  | 'tools'
  | 'databases'
  | 'cloud-platforms'
  | 'methodologies'
  | 'soft-skills'
```

### Education
```typescript
interface Education {
  institution: string
  degree: string
  field: string
  startDate: Date
  endDate?: Date
  gpa?: number
  honors?: string[]
  relevantCoursework?: string[]
}
```

### PersonalInfo
```typescript
interface PersonalInfo {
  interests: string[]
  careerPassions: string[]
  volunteerWork?: Experience[]
  languages?: {
    name: string
    proficiency: 'basic' | 'conversational' | 'fluent' | 'native'
  }[]
}
```

## Content Organization

### File Structure
```
content/
├── profile.json          # Basic profile information
├── experience/
│   ├── work.json         # Professional experience
│   ├── projects.json     # Personal/side projects
│   └── volunteer.json    # Volunteer experience
├── skills/
│   ├── technical.json    # Technical skills by category
│   └── soft.json         # Soft skills and methodologies
├── education.json        # Educational background
├── personal.json         # Personal interests and passions
└── assets/
    ├── profile-photo.jpg
    └── company-logos/
```

### Navigation Structure
```typescript
interface Navigation {
  home: {
    highlights: string[]     // Key achievements for homepage
    recentWork: Experience[] // 2-3 most recent/relevant positions
    topSkills: Skill[]      // Most important skills to highlight
  }
  about: {
    bio: string
    photo: string
    personalInfo: PersonalInfo
  }
  experience: {
    timeline: Experience[]   // Chronologically ordered
    featured: Experience[]   // Most impressive projects
  }
  skills: {
    byCategory: Record<SkillCategory, Skill[]>
    endorsed: Skill[]       // Skills verified by others
  }
}
```

## Data Validation Rules

### Constitutional Compliance
- All skills must have `verified: true` before display
- Experience achievements must be factual and specific
- No placeholder or aspirational content allowed

### Content Quality
- Dates must be valid and logical (start < end)
- All required fields must be present
- URLs must be valid and accessible
- Images must have alt text for accessibility

### Performance Constraints
- JSON files should be under 50KB each
- Images optimized for web delivery
- Content structure supports lazy loading