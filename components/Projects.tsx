'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import { projects } from '@/data/content'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold mb-6 ai-text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Sparkles size={20} className="text-ai-cyan animate-pulse-ai" />
            <span>Some of my recent work</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-ai rounded-xl overflow-hidden border border-ai-cyan/20 hover:border-ai-cyan/50 transition-all duration-500 group relative neural-glow"
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -20 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -15, rotateY: 5 }}
              style={{ perspective: '1000px' }}
            >
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-ai-cyan/0 via-ai-purple/0 to-ai-pink/0 group-hover:from-ai-cyan/10 group-hover:via-ai-purple/10 group-hover:to-ai-pink/10 transition-all duration-500 z-10 pointer-events-none" />
              
              {/* Data stream effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-cyan/20 to-transparent data-stream" />
              </div>

              {/* Project Image/Header */}
              <div className="h-56 bg-gradient-to-br from-ai-cyan/20 via-ai-purple/20 to-ai-pink/20 flex items-center justify-center relative overflow-hidden group-hover:from-ai-cyan/30 group-hover:via-ai-purple/30 group-hover:to-ai-pink/30 transition-all">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
                
                {/* Glowing orb effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ai-cyan/20 rounded-full blur-2xl group-hover:bg-ai-cyan/40 group-hover:scale-150 transition-all duration-500" />
                
                <motion.div 
                  className="text-7xl font-bold ai-text-gradient relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {project.title.charAt(0)}
                </motion.div>
              </div>

              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3 group-hover:text-ai-cyan transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1.5 glass-ai text-ai-cyan rounded-full text-xs border border-ai-cyan/30 hover:border-ai-cyan/60 transition-all"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ 
                        delay: index * 0.15 + 0.3 + idx * 0.05,
                        type: 'spring',
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4 border-t border-ai-cyan/20">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 glass-ai rounded-lg border border-ai-cyan/30 hover:border-ai-cyan/60 text-ai-cyan hover:text-white transition-all group/link"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} className="group-hover/link:rotate-45 transition-transform" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 glass-ai rounded-lg border border-ai-purple/30 hover:border-ai-purple/60 text-ai-purple hover:text-white transition-all group/link"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} className="group-hover/link:rotate-12 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-ai-cyan/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

