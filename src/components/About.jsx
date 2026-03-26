// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { User, Code, Cpu } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <User className="h-8 w-8 text-blue-400" />
            <span>About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              I am a passionate fullstack developer with experience integrating AI technologies into modern web applications.
            </p>
            <p className="text-lg text-gray-300">
              With a strong foundation in fullstack development and hands-on experience building AI-powered features, 
              I create innovative solutions that leverage modern AI technologies alongside best development practices.
            </p>
            <p className="text-lg text-gray-300">
              My passion for technology is matched only by my commitment to building secure, scalable, and user-friendly
              applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-lg border border-blue-500/30 shadow-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-300">My Journey</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Fullstack Development</h4>
                  <p className="text-gray-300">
                    Mastered frontend and backend technologies to build comprehensive web applications
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">AI Integration</h4>
                  <p className="text-gray-300">
                    Built intelligent applications with modern AI technologies and best practices
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Continuous Innovation</h4>
                  <p className="text-gray-300">
                    Constantly learning and adapting to new technologies in the rapidly evolving tech landscape
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
