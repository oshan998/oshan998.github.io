// Portfolio configuration and static data
import { TimelineItem, SkillCategory, ProficiencyLevel } from '@/types';

export const siteConfig = {
  name: 'Oshan Nanayakkara',
  title: 'Software Engineer',
  description:
    'A passionate software engineer building modern web applications with React, Angular, Java and Spring Boot. Explore my projects, articles, and professional journey.',
  url: 'https://oshan998.github.io',
  ogImage: '/og-image.jpg',
  profileImage: '/profile.png', // Add your profile image path here, e.g., '/profile.jpg'
  keywords: [
    'software engineer',
    'web developer',
    'full stack developer',
    'react developer',
    'Angular developer',
    'Java developer',
    'frontend developer',
    'backend developer',
    'javascript',
    'portfolio',
    'web development',
    'software development',
  ],
  author: {
    name: 'Oshan Nanayakkara',
    email: 'oshan.nanayakkara@outlook.com',
    url: 'https://github.com/oshan998',
  },
  links: {
    github: `https://github.com/oshan998`,
    linkedin: 'https://linkedin.com/in/oshann',
    twitter: '',
    email: '',
  },
  // GitHub integration settings
  github: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'oshan998',
    showForks: false,
    maxRepos: 6,
    featuredRepos: ['https://github.com/oshan998/Computer-Integrated-System---Feedback-System'], // Add repository names you want to feature
    excludeRepos: ['oshan998', 'oshan998.github.io'], // Repos to exclude from display
    showPrivateRepos: false, // Only works with GitHub token
  },
  // Medium integration settings
  medium: {
    username: process.env.NEXT_PUBLIC_MEDIUM_USERNAME || '@oshan.nanayakkara',
    maxArticles: 3,
    featuredArticles: [], // Add article titles or URLs you want to feature
  },
  // SEO settings
  seo: {
    defaultTitle: 'Oshan Nanayakkara - Software Engineer',
    titleTemplate: '%s | Oshan Nanayakkara',
    defaultDescription:
      'A passionate software engineer building modern web applications with React, Angular, Java and Spring Boot. Explore my projects, articles, and professional journey.',
    siteUrl: 'https://oshan998.github.io',
    defaultImage: '/og-image.jpg',
    twitterUsername: '',
    facebookAppId: '', // Add if you have one
    googleSiteVerification: '', // Add your Google verification code
    bingSiteVerification: '', // Add your Bing verification code
  },
};

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Articles', href: '#articles' },
  { name: 'Contact', href: '#contact' },
];

// This will be populated with actual data later
export const personalInfo = {
  name: siteConfig.name,
  title: siteConfig.title,
  bio: 'Hi, I\'m Oshan Nanayakkara!',
  location: 'Sri Lanka',
  availability: 'Available for new opportunities',
};

// Sample timeline data structure - replace with your actual career journey
export const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'B.Sc. (Hons) Computer Science & Software Engineering',
    subtitle: 'University of Bedfordshire',
    date: new Date('2019-02-01'),
    endDate: new Date('2022-03-03'),
    description: 'Graduated with First Class honors, Computer Science & Software Engineering.',
    details: [
      'Relevant Coursework: Research Methodologies & Emerging Technologies, Comparative Integrated Systems, Social & Professional Project Management',
      'Research Project: Beyond Altitude: An Artificial Intelligence  Based Chatbot for an Entertainment Website',
      'GPA: 3.7/4.0 - First Class Honors',
    ],
    technologies: ['Java', 'React', 'Angular', 'SQL'],
    location: 'Colombo, Sri Lanka',
    color: '#3B82F6',
  },
  {
    id: '2',
    type: 'work',
    title: 'Associate Software Engineer',
    subtitle: 'Virtusa Pvt. Ltd.',
    date: new Date('2022-02-28'),
    endDate: new Date('2023-11-01'),
    description: 'Worked in the Bank of New York Mellon Marketplace Sandbox project.',
    details: [
      'Implemented new client requirements in two backend microservices by adding new fields to request and response models and integrating input validations using Java and Spring Boot.',
      'Resolved multiple frontend and backend defects by enhancing Angular components for improved performance and user experience and refactoring Spring Boot microservices to increase system stability and efficiency.',
      'Upgraded project dependencies by replacing deprecated libraries with newer, compatible versions to ensure smooth integration with the latest Angular release.',
      'Resolved build optimization issues in the Angular frontend by addressing and eliminating all optimization bailout warnings during production builds.',
      'Resolved CORS communication issues in the Node.js based communication server by upgrading and reconfiguring Socket.IO, ensuring seamless real time communication.',
    ],
    technologies: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL'],
    location: 'Colombo, Sri Lanka',
    color: '#10B981',
  },
  {
    id: '3',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'Virtusa Pvt. Ltd.',
    date: new Date('2023-11-02'),
    endDate: new Date('2024-08-02'),
    description: 'Worked in the Bank of New York Mellon Marketplace Sandbox project.',
    details: [
      'Implemented a Keycloak based Authentication for an Angular application by integrating a predefined Keycloak Realm to ensure secure user login and access control.',
      'Enhanced UI/UX across the application by replacing legacy Angular components with modern UI elements, improving performance, maintainability and visual consistency.',
      'Optimized PostgreSQL database performance through advanced schema design and SQL optimization, reducing query latency for high-volume microservices.',
      'Designed and implemented RESTful APIs and scalable backend systems within a microservices architecture to support high-volume data exchange and system reliability.',
      'Developed a Scheduler in a Spring Boot microservice using Spring ShedLock to automate periodic cleanup of database records based on predefined business conditions.',
      'Containerized microservices using Docker and Kubernetes, deploying workloads to Azure to streamline CI/CD pipelines and enhance system autonomy and scalability.',
    ],
    technologies: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL'],
    location: 'Colombo, Sri Lanka',
    color: '#10B981',
  },
  {
    id: '4',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'IFS R&D Pvt. Ltd.',
    date: new Date('2024-08-05'),
    endDate: new Date('2026-01-31'),
    description: 'Worked in the SouthWest Airlines project in Aerospace & Defence.',
    details: [
      'Designed and implemented a robust Java-based XSLT validation framework using Apache Olingo (OData), enabling the detection of unsafe transformations and mitigating security vulnerabilities to ensure safe and secure rendering within the Integrated Parts Catalog (IPC) viewer.',
      'Improved and expanded the Angular-based XML viewer for Integrated Parts Catalog (IPC) documents by developing new features, optimizing performance, and enhancing usability to deliver better user experience.',
      'Participated in agile development processes',
      'Delivered numerous high-impact defect fixes and feature enhancements across IFS Cloud 24R2, 25R1, and 25R2 releases, resolving PL/SQL backend issues and addressing defects in the Angular-based XML viewer, thereby strengthening platform stability, performance, and overall user experience.',
      'Developed a document upload platform using Java and the OData protocol to ingest XML documents into Azure Document Intelligence, enabling downstream AI/ML-powered intelligent document search and analytics.',
      'Developed and architected a high-throughput CGM conversion pipeline using Golang, ensuring the delivery of scalable services and production-ready code for the 2026 modernization roadmap.',
      'Led multiple R&D spikes on XSLT security sanitization, effectivity-driven UI logic, and document transformation workflows to optimize the Integrated Parts Catalogue (IPC).',
      'Contributed to the architecture design of the upcoming SGML (Standard Generalized Markup Language) Viewer, a key component of the release.',
      'Mentored and guided junior team members, conducting thorough code reviews to enforce coding standards and foster professional skill development within the team. Shared knowledge and best practices with peer developers to uplift overall team capability.',
    ],
    technologies: ['Angular', 'Java', 'PL/SQL', 'Oracle DB'],
    // achievements: ['Delivered 5+ successful projects', 'Improved application performance by 30%'],
    location: 'Colombo, Sri Lanka',
    color: '#10B981',
  },
  {
    id: '5',
    type: 'work',
    title: 'Senior Software Engineer',
    subtitle: 'Rootcode',
    date: new Date('2026-02-09'),
    description: 'Currently working in the Rootcode AI Team.',
    details: [
      'Working along with the team to develop and maintain AI-powered applications and services.',
    ],
    technologies: ['React', 'Java', 'LLM', 'PostgreSQL'],
    // achievements: [
    //   'Led team of 4 developers',
    //   'Reduced deployment time by 50%',
    //   'Implemented CI/CD pipeline',
    // ],
    location: 'Colombo, Sri Lanka',
    color: '#8B5CF6',
  },
  // Add more timeline items as needed
];

// Sample skills data - replace with your actual skills
export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    skills: [
      {
        id: 'Angular',
        name: 'Angular',
        proficiency: ProficiencyLevel.EXPERT,
        yearsOfExperience: 4,
      },
      {
        id: 'react',
        name: 'React',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 2,
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        proficiency: ProficiencyLevel.INTERMEDIATE,
        yearsOfExperience: 2,
      },
      {
        id: 'javascript/css',
        name: 'JavaScript/CSS',
        proficiency: ProficiencyLevel.EXPERT,
        yearsOfExperience: 2,
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Development',
    skills: [
      {
        id: 'Java',
        name: 'Java',
        proficiency: ProficiencyLevel.EXPERT,
        yearsOfExperience: 4,
      },
      {
        id: 'Spring Boot',
        name: 'Spring Boot',
        proficiency: ProficiencyLevel.EXPERT,
        yearsOfExperience: 3,
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 3,
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        proficiency: ProficiencyLevel.INTERMEDIATE,
        yearsOfExperience: 2,
      },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    skills: [
      {
        id: 'git',
        name: 'Git',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 4,
      },
      {
        id: 'docker',
        name: 'Docker',
        proficiency: ProficiencyLevel.INTERMEDIATE,
        yearsOfExperience: 2,
      },
      {
        id: 'aws',
        name: 'AWS',
        proficiency: ProficiencyLevel.BEGINNER,
        yearsOfExperience: 1,
      },
      {
        id: 'Azure',
        name: 'Azure',
        proficiency: ProficiencyLevel.ADVANCED,
        yearsOfExperience: 2,
      },
    ],
  },
];
