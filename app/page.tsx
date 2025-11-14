'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import { personalInfo } from '@/data/content'

// Dynamically import WebGL component to avoid SSR issues
const WebGLBackground = dynamic(() => import('@/components/WebGLBackground'), {
  ssr: false,
})

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen">
      {mounted && <WebGLBackground />}
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

