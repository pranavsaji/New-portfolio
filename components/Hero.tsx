'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Twitter, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/content'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse-ai" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl animate-pulse-ai" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-ai-pink/5 rounded-full blur-3xl animate-pulse-ai" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="inline-block mb-6 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Holographic avatar container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink blur-xl opacity-50 animate-hologram" />
              <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-5xl font-bold ai-text-gradient">
                  {personalInfo.name.charAt(0)}
                </div>
              </div>
              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div
                    className="absolute top-0 left-1/2 w-2 h-2 bg-ai-cyan rounded-full"
                    style={{
                      transform: `translate(-50%, -100%) translateY(-20px)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 glass-ai rounded-full text-sm text-ai-cyan mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Sparkles size={16} className="animate-pulse-ai" />
            <span>AI Developer & Engineer</span>
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 ai-text-gradient"
        >
          {personalInfo.name.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6 font-light"
        >
          <span className="inline-block data-stream px-2">{personalInfo.title}</span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-8 mb-16"
        >
          {personalInfo.github && (
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-ai-cyan/20 rounded-full blur-lg group-hover:bg-ai-cyan/40 transition-all" />
              <div className="relative glass-ai p-4 rounded-full border border-ai-cyan/30 group-hover:border-ai-cyan/60 transition-all">
                <Github size={24} className="text-ai-cyan group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          )}
          {personalInfo.linkedin && (
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-ai-blue/20 rounded-full blur-lg group-hover:bg-ai-blue/40 transition-all" />
              <div className="relative glass-ai p-4 rounded-full border border-ai-blue/30 group-hover:border-ai-blue/60 transition-all">
                <Linkedin size={24} className="text-ai-blue group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          )}
          {personalInfo.twitter && (
            <motion.a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-ai-purple/20 rounded-full blur-lg group-hover:bg-ai-purple/40 transition-all" />
              <div className="relative glass-ai p-4 rounded-full border border-ai-purple/30 group-hover:border-ai-purple/60 transition-all">
                <Twitter size={24} className="text-ai-purple group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          )}
          {personalInfo.email && (
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="relative group"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-ai-pink/20 rounded-full blur-lg group-hover:bg-ai-pink/40 transition-all" />
              <div className="relative glass-ai p-4 rounded-full border border-ai-pink/30 group-hover:border-ai-pink/60 transition-all">
                <Mail size={24} className="text-ai-pink group-hover:text-white transition-colors" />
              </div>
            </motion.a>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.a
            href="#experience"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 glass-ai rounded-full border border-ai-cyan/30 hover:border-ai-cyan/60 transition-all neural-glow"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-ai-cyan group-hover:text-white transition-colors font-medium">
              Explore My Work
            </span>
            <ArrowDown size={20} className="text-ai-cyan group-hover:text-white transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/0 via-ai-cyan/20 to-ai-cyan/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

