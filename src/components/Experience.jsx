
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

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

function Experience() {
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

export default Experience;
