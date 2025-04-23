/**
 * experiences
 * @type {Array}
 * @description Array of experience objects with title, company_name, date, and points properties.
 */
export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tech Innovations",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and Node.js",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback",
      "Building RESTful APIs and integrating with third-party services"
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Web3 Solutions",
    date: "May 2020 - Dec 2021",
    points: [
      "Developing smart contracts using Solidity for decentralized applications",
      "Building frontend interfaces that interact with blockchain networks",
      "Implementing secure transaction handling and wallet integration",
      "Optimizing gas costs and ensuring contract security through testing"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Digital Creations",
    date: "Aug 2018 - Apr 2020",
    points: [
      "Creating responsive user interfaces with React and modern CSS frameworks",
      "Collaborating with designers to implement pixel-perfect designs",
      "Optimizing application performance and load times",
      "Mentoring junior developers and leading frontend initiatives"
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
    technologies: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "ThreeJS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL", "AWS"],
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Expo", "Mobile UI/UX", "App Deployment"],
  },
  {
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "Foundry", "Web3.js", "Hardhat", "Truffle"],
  },
  {
    category: "Database",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
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
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
    image: "/placeholder.svg?height=300&width=500",
    liveLink: "#",
    githubLink: "#",
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
    technologies: ["React", "Solidity", "Ethereum", "IPFS", "Web3.js"],
    image: "src/assets/images/vending-machine-preview.png",
    liveLink: "https://lenugo.github.io/vending-machine-dapp/",
    githubLink: "https://github.com/Lenugo/vending-machine-dapp",
  },
];
