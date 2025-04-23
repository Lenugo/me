import React from 'react';
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Server, Smartphone, Cpu } from "lucide-react";

function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "ThreeJS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL", "AWS"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ["React Native", "Expo", "Mobile UI/UX", "App Deployment"],
    },
    {
      category: "Blockchain",
      icon: <Layers className="h-6 w-6" />,
      technologies: ["Solidity", "Ethereum", "Foundry", "Web3.js", "Hardhat", "Truffle"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    },
    {
      category: "Other",
      icon: <Code className="h-6 w-6" />,
      technologies: ["Git", "CI/CD", "Docker", "Unity", "ThreeJS", "AWS"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Cpu className="h-8 w-8 text-blue-400" />
            <span>Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                    <span className="text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
