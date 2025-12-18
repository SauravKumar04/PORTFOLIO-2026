import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 20)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`min-h-screen bg-white text-black ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar />
      <main className="pt-16 divide-y divide-black">
        <Hero />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <footer className="max-w-5xl mx-auto px-6 lg:px-12 py-12 text-sm">
        © {new Date().getFullYear()} Saurav Kumar
      </footer>
    </div>
  )
}

export default App
