
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

// Sample experience data
const experiences = [
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

// Experience card component
const ExperienceCard = ({ experience, index }) => (
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

function WorkExperience() {
  return (
    <section id="work" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-blue-400" />
            <span>Work Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="mt-10 relative">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
