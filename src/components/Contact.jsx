// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Mail className="h-8 w-8 text-blue-400" />
            <span>Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a collaboration? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 p-8 rounded-lg border border-blue-500/30 shadow-xl backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="p-6 bg-blue-500/20 rounded-full text-blue-400">
                <Mail className="h-12 w-12" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-blue-300">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  Ready to start a project or have questions? Send me an email and I'll get back to you as soon as
                  possible.
                </p>

                <a
                  href="mailto:contact.lenugo@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg hover:shadow-blue-500/20"
                >
                  <Mail className="h-5 w-5" />
                  contact.lenugo@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/30">
              <h4 className="text-xl font-bold mb-6 text-center">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/Lenugo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-blue-400 hover:text-blue-300 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https:/linkedin.com/in/lenugo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-blue-400 hover:text-blue-300 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
