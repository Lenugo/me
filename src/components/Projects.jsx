import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { web2Projects, web3Projects } from "../constants";

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