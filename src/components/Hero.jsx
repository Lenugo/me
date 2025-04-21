import React from "react";
import { motion } from "framer-motion";
import { Download, Code, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4 relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-xl shadow-blue-500/20">
                <img
                  src="https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae"
                  alt="Leobardo Núñez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    // e.target.src = "https://via.placeholder.com/150?text=LN";
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-full shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl text-blue-100 mb-2">
              Hello, I'm <span className="font-bold text-blue-300">Leobardo Núñez</span> 👋
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              <span className="block">Software Full-stack</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Blockchain Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            I build modern web applications and blockchain solutions that bridge the gap between traditional development and decentralized technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4 pt-2"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-blue-500/20"
          >
            View My Work
          </a>

          <a
            href="/leobardo-nunez-cv.pdf"
            download
            className="px-8 py-3 bg-transparent border border-blue-500 rounded-full text-blue-400 font-medium hover:bg-blue-500/10 transition-all flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}