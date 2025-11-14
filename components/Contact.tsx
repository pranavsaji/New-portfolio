'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Twitter, MapPin, Send, Brain } from 'lucide-react'
import { personalInfo } from '@/data/content'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialLinks = [
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'ai-pink' },
    { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'ai-cyan' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'ai-blue' },
    { icon: Twitter, href: personalInfo.twitter, label: 'Twitter', color: 'ai-purple' },
  ].filter(link => link.href)

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse-ai" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/10 rounded-full blur-3xl animate-pulse-ai" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center mb-16"
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
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-xl flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Brain size={20} className="text-ai-cyan animate-pulse-ai" />
            <span>Let&apos;s work together on something amazing</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="glass-ai rounded-2xl p-8 md:p-12 border border-ai-cyan/20 neural-glow relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Data stream effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-cyan/10 to-transparent data-stream" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <motion.p 
                className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </motion.p>
              {personalInfo.location && (
                <motion.div 
                  className="inline-flex items-center text-gray-400 glass-ai px-4 py-2 rounded-full border border-ai-cyan/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                >
                  <MapPin size={18} className="mr-2 text-ai-cyan" />
                  <span>{personalInfo.location}</span>
                </motion.div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                const getColorClasses = (color: string) => {
                  switch (color) {
                    case 'ai-pink':
                      return {
                        border: 'border-ai-pink/20 hover:border-ai-pink/60',
                        text: 'text-ai-pink',
                        bg: 'bg-ai-pink/20',
                      }
                    case 'ai-cyan':
                      return {
                        border: 'border-ai-cyan/20 hover:border-ai-cyan/60',
                        text: 'text-ai-cyan',
                        bg: 'bg-ai-cyan/20',
                      }
                    case 'ai-blue':
                      return {
                        border: 'border-ai-blue/20 hover:border-ai-blue/60',
                        text: 'text-ai-blue',
                        bg: 'bg-ai-blue/20',
                      }
                    case 'ai-purple':
                      return {
                        border: 'border-ai-purple/20 hover:border-ai-purple/60',
                        text: 'text-ai-purple',
                        bg: 'bg-ai-purple/20',
                      }
                    default:
                      return {
                        border: 'border-ai-cyan/20 hover:border-ai-cyan/60',
                        text: 'text-ai-cyan',
                        bg: 'bg-ai-cyan/20',
                      }
                  }
                }
                const colors = getColorClasses(social.color)
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className={`relative group/social flex flex-col items-center space-y-3 p-6 glass-ai rounded-xl border ${colors.border} transition-all neural-glow`}
                    initial={{ opacity: 0, y: 20, rotate: -10 }}
                    animate={inView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: -10 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.6,
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.1, y: -8, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 ${colors.bg} rounded-xl blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity`} />
                    
                    <div className={`relative p-3 glass-ai rounded-lg border ${colors.border.split(' ')[0]}`}>
                      <Icon size={28} className={`${colors.text} group-hover/social:text-white transition-colors`} />
                    </div>
                    <span className={`text-sm font-medium ${colors.text} group-hover/social:text-white transition-colors`}>
                      {social.label}
                    </span>
                  </motion.a>
                )
              })}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink text-white rounded-xl font-semibold overflow-hidden neural-glow"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="relative z-10">Send me an email</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 text-gray-500 text-sm flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-ai-cyan rounded-full"
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
        </motion.div>
      </div>
    </section>
  )
}

