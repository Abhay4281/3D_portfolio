import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  stpi,
  lafetch,
  digixito,
  carrent,
  jobit,
  tripguide,
  threejs,
  collegeLogo,
  leapahead,
  ambud,
  sayuj,
  lfProject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "LaFetch",
    icon: lafetch,
    iconBg: "black",
    date: "January 2026 - Present",
    points: [
      "Contributed to a high-traffic e-commerce platform serving 90K+ monthly visitors, building scalable frontend features using React.js, Redux, and React Router with a focus on performance, scalability, and cross-browser compatibility.",
      "Reduced initial page load time by 1.2s and eliminated 60% of redundant network requests through TanStack Query caching, lazy loading, request deduplication, debouncing, and Redux state optimization.",
      "Optimized the build pipeline using Webpack and Vite, reducing bundle size and improving Lighthouse scores; wrote unit and integration tests with Jest and React Testing Library to prevent regressions.",
      "Architected backend features using Node.js, Express.js, GraphQL, and PostgreSQL in a microservices-oriented architecture, including RBAC and a personalized recommendation engine for context-aware product suggestions.",
      "Containerized services with Docker for consistent development and deployment environments; integrated Meta Pixel, Google Tag Manager, GA4, Conversion API (CAPI), and Netcore to improve ad spend efficiency by 30%.",
      "Designed a reusable library of 20+ React.js/Next.js components used across 30+ pages, reducing feature development time by 35% while implementing pixel-perfect, responsive interfaces from Figma.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Software Technology Parks of India",
    icon: stpi,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrating RESTful APIs and third-party services to enhance application functionality",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Digixito",
    icon: digixito,
    iconBg: "#E6DEDD",
    date: "March 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Contributing to the planning and estimation of development tasks during agile sprint cycles.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bachelor's of Technology (ECE)",
    company_name: "BHARATI VIDYAPEETH'S COLLEGE OF ENGINEERING",
    icon: collegeLogo,
    iconBg: "#E6DEDD",
    date: "2020-2024",
    points: [
      "Consistent Academic Performance: Maintained a strong academic record with CGPAs of 8.2 reflecting dedication and consistent performance throughout my bachelors.",
      "Leadership Roles: Held key positions such as Sponsorship and Publicity Head and Executive Member in student bodies like BVPISTE and BVP Higher Study Cell, showcasing leadership and organizational skills.",
      "Technical Achievements: Secured a spot among the Top 10 teams in HACK-BVP (BVCOE Technical Fest) and Top 5 in Placement Bootcamp conducted by the Training & Placement Cell.",
      "Certifications and Skill Development: Completed industry-relevant certifications in MERN Stack Development (Udemy) and C++ with Data Structures (Coding Ninjas).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LaFetch",
    description:
      "Developed production-ready features for a large-scale e-commerce platform serving 90K+ monthly visitors. Reduced page load time by 1.2s, eliminated 60% of redundant API requests, built reusable React components, integrated analytics and marketing tools, and contributed to a scalable microservices architecture.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "TanStack Query",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: lfProject,
    source_code_link: "https://la-fetch.com", // or your case study/GitHub if available
  },
  {
    name: "SAYUJ",
    description:
      "Sayuj is a unified networking and resource discovery platform that connects and empowers the entire startup ecosystem with tools for collaboration, resource access, and opportunity management.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5 CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "MONGODB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sayuj,
    source_code_link: "https://sayuj.net",
  },
  {
    name: "Leapahead 2.0",
    description:
      "LEAP AHEAD 2.0 is a 3-month hybrid accelerator program by STPI and TiE Delhi-NCR, offering tech startups mentorship, training, and investor access to scale and grow.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5 CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leapahead,
    source_code_link: "https://leapahead.sayuj.net/",
  },
  {
    name: "AMBUD",
    description:
      "This cloud service platform supports the Government of India’s MeghRaj initiative by enabling user departments to adopt and leverage cloud computing efficiently.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5 CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ambud,
    source_code_link: "https://ambud.meity.gov.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
