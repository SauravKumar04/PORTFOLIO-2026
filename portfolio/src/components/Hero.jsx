import Reveal from './Reveal'
import profileImg from '../assets/profile.jpeg'

export default function Hero() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 lg:px-12 py-16 sm:py-20 min-h-screen flex items-center">
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="border-b-4 border-black pb-6 mb-8">
              <div className="text-xs uppercase tracking-widest mb-3">Portfolio • 2025</div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black leading-[1.05] tracking-tighter">
                SAURAV
              </h1>
            </div>
            <p className="text-xl sm:text-2xl font-serif italic border-l-4 border-black pl-6 mb-8">
              Pre-final year student at National Institute of Technology, Jamshedpur
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify">
              <span className="text-4xl font-serif float-left mr-2 leading-none">A</span> passionate software developer with expertise in Data Structures & Algorithms and Full-Stack Web Development. Specializing in building scalable, high-performance backend systems and crafting intuitive, user-centric interfaces. Committed to writing clean, maintainable code and solving complex problems through innovative technical solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Resume.pdf"
                download="Saurav_Kumar_Resume.pdf"
                className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 font-bold uppercase tracking-wider text-sm"
              >
                View Resume →
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-first lg:order-last flex justify-center lg:justify-end">
            <div className="relative border-4 border-black p-2 bg-white w-64 sm:w-72">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-black bg-white"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-black bg-white"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-black bg-white"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-black bg-white"></div>
              
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={profileImg}
                  alt="Saurav Kumar"
                  className="w-full h-full object-cover object-top grayscale contrast-125 brightness-110"
                />
              </div>
              <div className="border-t-2 border-black mt-2 pt-2 text-xs uppercase tracking-widest text-center">
                Saurav Kumar — Developer & Engineer
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
