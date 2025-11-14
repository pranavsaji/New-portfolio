'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '@/data/content'
import { Cpu, Database, Wrench } from 'lucide-react'

const skillCategories = [
  { 
    name: 'Frontend', 
    skills: skills.frontend, 
    gradient: 'from-ai-cyan to-ai-blue',
    icon: Cpu,
    color: 'ai-cyan'
  },
  { 
    name: 'Backend', 
    skills: skills.backend, 
    gradient: 'from-ai-purple to-ai-pink',
    icon: Database,
    color: 'ai-purple'
  },
  { 
    name: 'Tools', 
    skills: skills.tools, 
    gradient: 'from-ai-blue to-ai-cyan',
    icon: Wrench,
    color: 'ai-blue'
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Technologies I work with
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                className="glass-ai rounded-xl p-8 border border-ai-cyan/20 hover:border-ai-cyan/50 transition-all duration-500 neural-glow group relative overflow-hidden"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Data stream effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-cyan/20 to-transparent data-stream" />
                </div>

                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 mb-8"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 glass-ai rounded-lg border ${
                      category.color === 'ai-cyan' ? 'border-ai-cyan/30' :
                      category.color === 'ai-purple' ? 'border-ai-purple/30' :
                      'border-ai-blue/30'
                    }`}>
                      <Icon size={28} className={
                        category.color === 'ai-cyan' ? 'text-ai-cyan' :
                        category.color === 'ai-purple' ? 'text-ai-purple' :
                        'text-ai-blue'
                      } />
                    </div>
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.name}
                    </h3>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.05,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -5,
                          rotate: 5,
                          boxShadow: `0 0 20px rgba(6, 182, 212, 0.4)`
                        }}
                        className="px-4 py-2.5 glass-ai rounded-lg border border-ai-cyan/20 hover:border-ai-cyan/50 transition-all cursor-default group/skill relative overflow-hidden"
                      >
                        {/* Skill hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/0 via-ai-cyan/20 to-ai-cyan/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative text-white text-sm font-medium z-10">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Neural network visualization indicator */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-ai rounded-full border border-ai-cyan/30">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-ai-cyan rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-ai-cyan text-sm ml-2">Continuously Learning & Evolving</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

