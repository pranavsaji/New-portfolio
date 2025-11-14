'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-ai border-b border-ai-cyan/20 shadow-[0_0_30px_rgba(6,182,212,0.2)]'
          : 'bg-transparent'
      }`}
    >
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-gradient-to-r from-ai-cyan/0 via-ai-purple/0 to-ai-pink/0 transition-opacity duration-500 ${
        isScrolled ? 'opacity-10' : 'opacity-0'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold ai-text-gradient relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={24} className="text-ai-cyan animate-pulse-ai" />
            <span>Portfolio</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ai-cyan to-ai-purple group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'text-white glass-ai border border-ai-cyan/50'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-ai-cyan/20 to-ai-purple/20"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-ai-cyan to-ai-purple rounded-full"
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white glass-ai p-2 rounded-lg border border-ai-cyan/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-ai border-t border-ai-cyan/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'text-white glass-ai border border-ai-cyan/50'
                        : 'text-gray-300 hover:text-white hover:bg-ai-cyan/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

