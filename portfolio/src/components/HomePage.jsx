import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import Achievements from './Achievements'
import Projects from './Projects'
import Contact from './Contact'

const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage
