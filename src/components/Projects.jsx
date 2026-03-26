// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { web2Projects, web3Projects } from "../constants";

export default function Projects() {
  const allProjects = [...web2Projects, ...web3Projects,];

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
            Explore my portfolio of projects, showcasing my expertise in fullstack development.
          </p>
        </motion.div>

        <div className="w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}