/**
 * experiences
 * @type {Array}
 * @description Array of experience objects with title, company_name, date, and points properties.
 */
export const experiences = [
  {
    title: "Software Engineer II",
    company_name: "Newtech S.R.L.",
    date: "July 2022 - Present",
    points: [
      "NT-Suite: A monolithic MVC designed to manage internal processes and employee information within the company.",
      "Focused on backend development using Go, designing and implementing scalable services to support business logic and data operations.",
      "Built and integrated frontend modules using React, creating intuitive, responsive interfaces aligned with internal design standards.",
      "Contributed to authentication workflows, permissions management, and data models for HR-related features.",
      "Proposed and led a comprehensive backend refactor implementing Vertical Slicing + Hexagonal Architecture, improving code maintainability, testability, and enabling better separation of concerns across business domains.",
      "S360: Contributed as a core developer in Verizon's enterprise-scale migration to a modern micro-frontend architecture, helping build performant, modular applications used by thousands of users.",
      "Developed micro-frontend modules in React and GraphQL to modernize legacy architecture and decouple business domains helped by Module Federation.",
      "Integrated remote components using Webpack Module Federation, enabling scalable deployments and independent team delivery.",
      "Built and maintained reusable UI components aligned with Verizon's Design System, improving consistency and accessibility.",
      "Applied advanced state management strategies using Zustand and custom hooks to enhance performance and developer experience.",
      "Collaborated across teams (design, QA, backend) to deliver production-ready features with strong attention to detail and scalability."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Intellisys D. Corp.",
    date: "April 2021 - July 2022",
    points: [
      "Accelerated the COVID-19 vaccination registration process to +10M people (Dominican Republic citizens)",
      "Worked across various teams as a fullstack developer utilizing React, Angular, Ionic, Golang, and Hyperledger Fabric",
      "Developed internal systems using Python, Node.js and React, improving operational efficiency",
      "Collaborated in cross-functional teams with different roles, adapting to project requirements and technologies"
    ],
  },
  {
    title: "VI & VR Developer",
    company_name: "T-eco Group",
    date: "April 2021 - November 2021",
    points: [
      "Developed immersive virtual reality experiences using Unity and C#",
      "Created interactive 3D visualizations for architectural and educational projects",
      "Optimized performance for VR applications to ensure smooth user experience",
      "Collaborated with designers and stakeholders to translate concepts into functional VR environments"
    ],
  },
];

/**
 * skills
 * @type {Array}
 * @description Array of skill objects with category, and technologies properties.
 */
export const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Angular", "Vue.js", "Svelte"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "FastAPI", "Golang", "Dotnet"],
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Expo", "Mobile UI/UX", "App Deployment"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Sql", "Supabase"],
  },
  {
    category: "Other",
    technologies: ["Git", "CI/CD", "Docker", "Unity", "ThreeJS", "AWS"],
  },
];

/**
 * web2Projects
 * @type {Array}
 * @description Array of web2 project objects with title, description, technologies, image, liveLink, and githubLink properties.
 */
export const web2Projects = [
  // {
  //   title: "E-commerce Platform",
  //   description:
  //     "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
  //   technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
  //   image: "/placeholder.svg?height=300&width=500",
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  {
    title: "Open Web3 Hub",
    description: "Open Web3 Hub is a platform designed to help users discover and explore open-source Web3 and AI projects.",
    technologies: ["Next.js", "Github API", "Tailwind CSS", "Community"],
    image: "/open-web3-hub-preview.png",
    liveLink: "https://openweb3hub.vercel.app/",
    githubLink: "https://github.com/Lenugo/open-web3-hub",
  },
  {
    title: "Tips Hub",
    description: "A platform to write and read other people's advices. Users can post tips, browse advice from the community, and save their favorite ones for later.",
    technologies: ["Vue", "Node.js", "Mongo", "Render", "Docker Image"],
    image: "/tips-hub-preview.png",
    liveLink: "https://lenugo.github.io/tips-hub/",
    githubLink: "https://github.com/Lenugo/tips-hub",
  },
];

/**
 * web3Projects
 * @type {Array}
 * @description Array of web3 project objects with title, description, technologies, image, liveLink, and githubLink properties.
*/
export const web3Projects = [
  {
    title: "Smart Vending Machine",
    description: "A blockchain-powered vending machine application that allows users to purchase and consume virtual products using Ethereum.",
    technologies: ["React", "Solidity", "Remix", "Ethereum", "IPFS", "Web3.js"],
    image: "/vending-machine-preview.png",
    liveLink: "https://lenugo.github.io/vending-machine-dapp/",
    githubLink: "https://github.com/Lenugo/vending-machine-dapp",
  },
];
