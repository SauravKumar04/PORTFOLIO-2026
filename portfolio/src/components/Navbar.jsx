import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white border-b-2 border-black' : 'bg-white/95 border-b border-black'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#about" className="text-lg sm:text-xl font-serif font-bold tracking-tight hover:underline underline-offset-4 transition duration-200">
          SAURAV KUMAR
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <a href="#skills" className="hover:underline underline-offset-4 transition duration-200">
            Skills
          </a>
          <a href="#achievements" className="hover:underline underline-offset-4 transition duration-200">
            Achievements
          </a>
          <a href="#projects" className="hover:underline underline-offset-4 transition duration-200">
            Projects
          </a>
          <a href="#contact" className="border-2 border-black px-5 py-2 hover:bg-black hover:text-white transition duration-200">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden border-2 border-black px-4 py-2 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition duration-200"
          aria-label="Menu"
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4">
            <a
              href="#skills"
              onClick={() => setMobileOpen(false)}
              className="text-lg uppercase tracking-wider border-b border-black pb-3 hover:translate-x-2 transition duration-200"
            >
              Skills
            </a>
            <a
              href="#achievements"
              onClick={() => setMobileOpen(false)}
              className="text-lg uppercase tracking-wider border-b border-black pb-3 hover:translate-x-2 transition duration-200"
            >
              Achievements
            </a>
            <a
              href="#projects"
              onClick={() => setMobileOpen(false)}
              className="text-lg uppercase tracking-wider border-b border-black pb-3 hover:translate-x-2 transition duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-lg uppercase tracking-wider border-2 border-black px-6 py-3 text-center hover:bg-black hover:text-white transition duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
