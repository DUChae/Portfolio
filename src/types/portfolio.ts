// src/types/portfolio.ts
export interface BasicInfo {
  name?: string;
  titles?: string[];
  social?: Array<{
    name: string;
    url: string;
    class: string;
  }>;
  image?: string;
  description_header?: string;
  section_name?: {
    about?: string;
    projects?: string;
    skills?: string;
    experience?: string;
  };
}

export interface AboutSection {
  title: string;
  details: string[];
}

export interface Skill {
  name: string;
  class?: string;
  icon?: string;
  level: string;
}

export interface ProjectTechnology {
  name: string;
  class?: string;
}

export interface Project {
  title: string;
  startDate: string;
  description: string;
  images: string[];
  url: string;
  live?: string;
  technologies: ProjectTechnology[];
}

export interface Experience {
  company: string;
  title: string;
  years: string;
  mainTech: string[];
  technologies: string[];
}
