// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Server, Smartphone, Cpu } from "lucide-react";
import { skills } from "../constants";

function Skills() {

  const getIconForCategory = (category) => {
    switch (category) {
      case "Frontend":
        return <Globe className="size-6" />;
      case "Backend":
        return <Server className="size-6" />;
      case "Mobile":
        return <Smartphone className="size-6" />;
      case "Blockchain":
        return <Layers className="size-6" />;
      case "Database":
        return <Database className="size-6" />;
      case "Other":
        return <Code className="size-6" />;
      default:
        return <Code className="size-6" />;
    }
  };

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
          {skills.map((skill, index) => {
            // const icon = getIconForCategory(skill.category);
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-6 rounded-lg border border-blue-500/30 hover:border-blue-400 transition-all shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">{getIconForCategory(skill.category)}</div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
