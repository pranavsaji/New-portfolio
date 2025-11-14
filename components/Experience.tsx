'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, Zap } from 'lucide-react'
import { professionalExperience } from '@/data/content'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="experience"
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
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Zap size={20} className="text-ai-cyan animate-pulse-ai" />
            <span>My journey through the tech industry</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Enhanced Timeline line with data flow */}
          <div className="absolute left-8 top-0 bottom-0 w-1 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-ai-cyan via-ai-purple to-transparent opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-ai-cyan via-ai-purple to-transparent opacity-60 data-stream" />
          </div>

          <div className="space-y-16">
            {professionalExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-0 md:pl-20 group"
              >
                {/* Enhanced Timeline dot with neural pulse */}
                <div className="absolute left-6 top-8 w-6 h-6 hidden md:block z-10">
                  <div className="absolute inset-0 bg-ai-cyan rounded-full animate-neural-pulse opacity-60" />
                  <div className="absolute inset-1 bg-ai-purple rounded-full animate-neural-pulse opacity-80" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute inset-2 bg-ai-cyan rounded-full border-2 border-black" />
                </div>

                <motion.div
                  className="glass-ai rounded-xl p-6 md:p-8 border border-ai-cyan/20 hover:border-ai-cyan/50 transition-all duration-500 neural-glow group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Data flow effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-cyan/10 to-transparent data-stream" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-ai-cyan transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {exp.role}
                        </motion.h3>
                        <motion.h4 
                          className="text-xl md:text-2xl ai-text-gradient mb-3"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.company}
                        </motion.h4>
                      </div>
                      <div className="flex flex-col md:items-end space-y-3 mt-4 md:mt-0">
                        <motion.div 
                          className="flex items-center text-gray-400 glass-ai px-3 py-1.5 rounded-full border border-ai-cyan/20"
                          whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                        >
                          <Calendar size={16} className="mr-2 text-ai-cyan" />
                          <span className="text-sm">{exp.period}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center text-gray-400 glass-ai px-3 py-1.5 rounded-full border border-ai-purple/20"
                          whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                        >
                          <MapPin size={16} className="mr-2 text-ai-purple" />
                          <span className="text-sm">{exp.location}</span>
                        </motion.div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <motion.h5 
                        className="text-white font-semibold mb-4 flex items-center text-lg"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Briefcase size={18} className="mr-2 text-ai-cyan" />
                        Key Achievements:
                      </motion.h5>
                      <ul className="space-y-3 text-gray-300 ml-6">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="text-sm md:text-base relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-ai-cyan before:rounded-full before:animate-pulse-ai"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 + 0.4 + idx * 0.05 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-ai-cyan/20">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-4 py-2 glass-ai text-ai-cyan rounded-full text-sm border border-ai-cyan/30 hover:border-ai-cyan/60 transition-all cursor-default"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            delay: index * 0.1 + 0.5 + idx * 0.03,
                            type: 'spring',
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.15, 
                            y: -3,
                            boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

