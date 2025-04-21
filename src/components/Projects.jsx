import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ExternalLink, Github } from "lucide-react";

// Sample project data - replace with actual projects
const web2Projects = [
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

const web3Projects = [
  {
    title: "NFT Marketplace",
    description: "A decentralized marketplace for creating, buying, and selling NFTs with wallet integration.",
    technologies: ["React", "Solidity", "Ethereum", "IPFS", "Web3.js"],
    image: "/placeholder.svg?height=300&width=500",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "DeFi Lending Platform",
    description: "A decentralized finance platform for lending and borrowing crypto assets with interest.",
    technologies: ["Next.js", "Solidity", "Hardhat", "Ethers.js", "The Graph"],
    image: "/placeholder.svg?height=300&width=500",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "DAO Governance System",
    description: "A decentralized autonomous organization with voting mechanisms and proposal systems.",
    technologies: ["React", "Solidity", "IPFS", "Gnosis Safe", "Snapshot"],
    image: "/placeholder.svg?height=300&width=500",
    liveLink: "#",
    githubLink: "#",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm rounded-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between">
            <a
              href={project.githubLink}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 px-4 py-2 rounded-md text-sm"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
            <a
              href={project.liveLink}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 px-4 py-2 rounded-md text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("web3");

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Layers className="h-8 w-8 text-blue-400" />
            <span>My Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of Web2 and Web3 projects, showcasing my expertise in fullstack development and
            blockchain technologies.
          </p>
        </motion.div>

        <div className="w-full">
          <div className="flex justify-center mb-12">
            <div className="bg-blue-900/40 p-1 border border-blue-500/30 rounded-md">
              <button
                onClick={() => setActiveTab("web3")}
                className={`px-8 py-3 rounded-md ${activeTab === "web3" ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white" : "text-gray-300"}`}
              >
                Web3 Projects
              </button>
              <button
                onClick={() => setActiveTab("web2")}
                className={`px-8 py-3 rounded-md ${activeTab === "web2" ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white" : "text-gray-300"}`}
              >
                Web2 Projects
              </button>
            </div>
          </div>

          {activeTab === "web3" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {web3Projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          )}

          {activeTab === "web2" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {web2Projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}