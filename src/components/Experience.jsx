
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../constants';

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
