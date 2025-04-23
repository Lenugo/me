/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function ExperienceCard({ experience, index }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 sm:pl-12 py-6 group"
    >
      {/* Timeline line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 group-last:bg-gradient-to-b group-last:from-blue-500 group-last:to-transparent"></div>

      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#050b18] z-10"></div>

      {/* Content */}
      <div className="bg-[#0f172a] p-6 rounded-lg border border-blue-500/30 shadow-xl">
        <span className="text-blue-300 text-sm font-medium mb-2 block">{experience.date}</span>
        <h3 className="text-2xl font-bold text-white mb-1">{experience.title}</h3>
        <p className="text-blue-300 font-semibold mb-4">{experience.company_name}</p>

        <ul className="space-y-2 text-gray-300">
          {experience.points.map((point, pointIndex) => (
            <li key={pointIndex} className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
