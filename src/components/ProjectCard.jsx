// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="overflow-hidden bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm rounded-lg h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            loading="lazy"
            height={300}
            width={500}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto mb-6">
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 px-4 py-2 rounded-md text-sm"
            >
              <Github className="size-4" />
              Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 px-4 py-2 rounded-md text-sm"
            >
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
