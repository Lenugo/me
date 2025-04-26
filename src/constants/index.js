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
      "Migrated several applications from the Verizon ecosystem using Micro-Frontend architecture with React",
      "Increased speed by improving the search and filtering algorithms from the frontend",
      "Built a map integrating one with multiple modern functionalities in an old version of Angular (Angular 5)",
      "Led teams of developers by assigning tasks and contributing ideas for optimal app performance"
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
    technologies: ["React", "Next.js", "Angular", "Vue.js", "Nuxt"],
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
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "Foundry", "Web3.js", "Hardhat", "Hyperledger"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Sql", "Supabase"],
  },
  {
    category: "Other",
    technologies: ["AI Integration", "Git", "CI/CD", "Docker", "Unity", "ThreeJS", "AWS"],
  },
];

/**
 * web2Projects
 * @type {Array}
 * @description Array of web2 project objects with title, description, technologies, image, liveLink, and githubLink properties.
 */
export const web2Projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/placeholder.svg?height=300&width=500",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Open Web3 Hub",
    description: "Open Web3 Hub is a platform designed to help users discover and explore open-source Web3 and AI projects.",
    technologies: ["Next.js", "Github API", "Tailwind CSS", "Community"],
    image: "src/assets/images/open-web3-hub-preview.png",
    liveLink: "https://openweb3hub.vercel.app/",
    githubLink: "https://github.com/Lenugo/open-web3-hub",
  },
  {
    title: "Real Estate Listing Platform",
    description: "A platform for listing and searching real estate properties with advanced filtering options.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "Google Maps API"],
    image: "/placeholder.svg?height=300&width=500",
    liveLink: "#",
    githubLink: "#",
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
    image: "src/assets/images/vending-machine-preview.png",
    liveLink: "https://lenugo.github.io/vending-machine-dapp/",
    githubLink: "https://github.com/Lenugo/vending-machine-dapp",
  },
];
