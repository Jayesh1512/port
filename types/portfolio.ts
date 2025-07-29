export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  dateOfBirth: string
  linkedin: string
  github: string
  codolio: string
  bio: string
}

export interface Education {
  degree: string
  institution: string
  duration: string
  grade: string
}

export interface Experience {
  title: string
  company: string
  duration: string
  description: string[]
  certificate?: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  code?: string
  supervisor?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Achievement {
  title: string
  description: string
  date?: string
  certificate?: string
}

export interface Interest {
  name: string
  icon: string
  description: string
}

export interface PortfolioData {
  personal: PersonalInfo
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: Skill[]
  achievements: Achievement[]
  interests: Interest[]
}
