/**
 * PORTFOLIO DATA ARCHITECTURE
 * -------------------------------------------------------------
 * Clean, centralized, and fully editable.
 * All personal identity, projects, and contact channels are
 * structured as editable placeholders for the portfolio owner.
 * NO fictional entities, fake clients, fake awards, or fabricated statistics.
 */

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  description: string;
  image: string;
  videoUrl?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    intro: string;
    challenge: string;
    idea: string;
    process: string;
    build: string;
    result: string;
    galleryImages: string[];
  };
}

export interface CraftPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  disciplines: string[];
  statement: string;
}

export const PORTFOLIO_DATA = {
  creator: {
    name: "[YOUR NAME]",
    role: "[CREATIVE DEVELOPER & DESIGNER]",
    location: "[YOUR LOCATION]",
    availability: "[AVAILABLE FOR COMMISSIONS]",
    email: "[your.email@domain.com]",
    heroStatement: "I CRAFT DIGITAL EXPERIENCES THAT PEOPLE REMEMBER.",
    heroSubstatement:
      "[A short cinematic positioning statement describing your work at the intersection of design, code, and visual storytelling.]",
    manifesto: {
      line1: "I BUILD...",
      line2: "...DIGITAL EXPERIENCES...",
      line3: "...THAT PEOPLE REMEMBER.",
      supportingText:
        "[Add your design philosophy here. Describe how you approach code as a creative medium and how every scroll, transition, and composition serves the narrative.]",
    },
  },

  socials: [
    { label: "GitHub", url: "https://github.com/[your-handle]", handle: "@[github-handle]" },
    { label: "LinkedIn", url: "https://linkedin.com/in/[your-handle]", handle: "in/[handle]" },
    { label: "X / Twitter", url: "https://x.com/[your-handle]", handle: "@[x-handle]" },
    { label: "ReadCV", url: "https://read.cv/[your-handle]", handle: "read.cv/[handle]" },
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "[PROJECT 01: CINEMATIC SHOWCASE]",
      subtitle: "[Interactive Digital Experience]",
      category: "[Creative Development]",
      year: "[2026]",
      role: "[Lead Design & Development]",
      description:
        "[A feature presentation of your primary showcase project. Replace this placeholder with a short description of the core concept, artistic direction, and engineering execution.]",
      image: "/images/project_lumina_chronicles_1791386245032.jpg",
      technologies: ["[React / Next.js]", "[GSAP / Motion]", "[Tailwind CSS]", "[WebGL / Canvas]"],
      liveUrl: "https://[your-project-link.com]",
      githubUrl: "https://github.com/[your-handle]/[project-repo]",
      caseStudy: {
        intro:
          "[Describe the origin, client, or personal vision behind this project. What was the core creative brief?]",
        challenge:
          "[What was the primary design hurdle, performance constraint, or technical problem that needed to be solved?]",
        idea:
          "[What was the governing aesthetic and architectural concept you developed to solve the problem?]",
        process:
          "[How did you iterate between visual prototyping, typography direction, and responsive layout testing?]",
        build:
          "[What frameworks, animation choreography, shader math, and state management did you build with?]",
        result:
          "[Add your real project result, user feedback, launch milestone, or personal takeaway here.]",
        galleryImages: [
          "/images/project_lumina_chronicles_1791386245032.jpg",
          "/images/project_kinetic_vortex_1791386255557.jpg",
        ],
      },
    },
    {
      id: "project-02",
      number: "02",
      title: "[PROJECT 02: SPATIAL SYSTEM]",
      subtitle: "[Generative Audio-Visual Project]",
      category: "[Experimental Code]",
      year: "[2025]",
      role: "[Creative Engineering]",
      description:
        "[A showcase of an interactive, algorithmic, or motion-heavy web project. Describe how user interaction drives the visual scene.]",
      image: "/images/project_kinetic_vortex_1791386255557.jpg",
      technologies: ["[Interactive Canvas]", "[GSAP]", "[TypeScript]", "[Web Audio API]"],
      liveUrl: "https://[your-project-link.com]",
      githubUrl: "https://github.com/[your-handle]/[project-repo]",
      caseStudy: {
        intro:
          "[Provide background context on the purpose of this project, whether commercial, client-based, or experimental.]",
        challenge:
          "[Detail the specific complexity, such as high frame-rate rendering, responsiveness across viewports, or UX accessibility.]",
        idea:
          "[Explain the visual motif, typography hierarchy, and interaction mechanics.]",
        process:
          "[Explain how you structured the code, designed the assets, and refined the motion curves.]",
        build:
          "[Break down the technical stack, state architecture, and render loop optimizations.]",
        result:
          "[Summarize the launch outcome, reception, or engineering milestones achieved.]",
        galleryImages: [
          "/images/project_kinetic_vortex_1791386255557.jpg",
          "/images/project_solis_atelier_1791386264775.jpg",
        ],
      },
    },
    {
      id: "project-03",
      number: "03",
      title: "[PROJECT 03: DIGITAL FLAGSHIP]",
      subtitle: "[Editorial Web Application]",
      category: "[Full-Stack & UX]",
      year: "[2025]",
      role: "[Full-Stack Development]",
      description:
        "[An editorial, high-end digital flagship or interactive product experience combining refined typography and micro-interactions.]",
      image: "/images/project_solis_atelier_1791386264775.jpg",
      technologies: ["[Next.js]", "[TypeScript]", "[Tailwind CSS]", "[Animation Pipeline]"],
      liveUrl: "https://[your-project-link.com]",
      githubUrl: "https://github.com/[your-handle]/[project-repo]",
      caseStudy: {
        intro:
          "[Overview of the flagship project goals, audience, and visual tone.]",
        challenge:
          "[Explain what made this build demanding—e.g. typography balance, layout integrity, or asset optimization.]",
        idea:
          "[Describe the visual storytelling, editorial structure, and user flow decisions.]",
        process:
          "[Document the design tokens, component library assembly, and responsive testing.]",
        build:
          "[Explain the Next.js setup, caching strategies, and semantic accessibility implementations.]",
        result:
          "[Detail the delivered product, customer sentiment, or performance audit metrics.]",
        galleryImages: [
          "/images/project_solis_atelier_1791386264775.jpg",
          "/images/project_neoterra_satellite_1791386276521.jpg",
        ],
      },
    },
    {
      id: "project-04",
      number: "04",
      title: "[PROJECT 04: EXPLORATORY PLATFORM]",
      subtitle: "[Interactive Tool & Visualization]",
      category: "[Data & Interface]",
      year: "[2024]",
      role: "[Frontend Architecture]",
      description:
        "[A sophisticated web tool, interactive dashboard, or canvas visualization demonstrating high-density data and visual hierarchy.]",
      image: "/images/project_neoterra_satellite_1791386276521.jpg",
      technologies: ["[React]", "[TypeScript]", "[Interactive Visuals]", "[Performance Optimization]"],
      liveUrl: "https://[your-project-link.com]",
      githubUrl: "https://github.com/[your-handle]/[project-repo]",
      caseStudy: {
        intro:
          "[Context and goals of this exploratory application or data platform.]",
        challenge:
          "[Key challenges around information architecture, responsiveness, and clean component separation.]",
        idea:
          "[The visual approach chosen to make dense information feel clear, intuitive, and visually compelling.]",
        process:
          "[Iteration cycles, user feedback collection, and edge-case handling.]",
        build:
          "[Architecture decisions, component encapsulation, and GPU-conscious animations.]",
        result:
          "[Final deployment, test coverage, and project takeaways.]",
        galleryImages: [
          "/images/project_neoterra_satellite_1791386276521.jpg",
          "/images/project_lumina_chronicles_1791386245032.jpg",
        ],
      },
    },
  ] as ProjectCaseStudy[],

  craftPillars: [
    {
      id: "pillar-01",
      number: "01",
      title: "CREATIVE DEVELOPMENT",
      tagline: "[Interactive motion, WebGL, shaders & bespoke canvas art]",
      disciplines: [
        "[GSAP & ScrollTrigger]",
        "[WebGL & Shaders]",
        "[Camera Choreography]",
        "[Kinetic Typography]",
        "[Micro-Interactions]",
      ],
      statement:
        "[Describe your approach to creative code: treating the viewport as a camera, pacing user attention, and delivering fluid 60fps animations.]",
    },
    {
      id: "pillar-02",
      number: "02",
      title: "FRONTEND ARCHITECTURE",
      tagline: "[Scalable, accessible, and performant web foundations]",
      disciplines: [
        "[Next.js & React]",
        "[TypeScript]",
        "[Tailwind CSS]",
        "[WCAG AA Accessibility]",
        "[Core Web Vitals]",
      ],
      statement:
        "[Describe your engineering standards: strict TypeScript typing, modular component boundaries, semantic markup, and zero layout thrash.]",
    },
    {
      id: "pillar-03",
      number: "03",
      title: "UI / UX ART DIRECTION",
      tagline: "[Editorial visual hierarchy, typography & brand identity]",
      disciplines: [
        "[Editorial Layouts]",
        "[Typographic Pairing]",
        "[Design Systems]",
        "[Wireframing & Prototyping]",
        "[Spatial Math & Grids]",
      ],
      statement:
        "[Describe your eye for design: high-contrast typography, controlled whitespace, purposeful color systems, and restraint against generic AI tropes.]",
    },
    {
      id: "pillar-04",
      number: "04",
      title: "FULL-STACK & TOOLING",
      tagline: "[End-to-end applications, APIs & modern developer workflows]",
      disciplines: [
        "[API Architecture]",
        "[State Orchestration]",
        "[Database Integrations]",
        "[CI/CD & Deployment]",
        "[Automation Pipelines]",
      ],
      statement:
        "[Describe your full-stack capabilities: connecting client-side interactive choreography with reliable server infrastructure.]",
    },
  ] as CraftPillar[],
};
