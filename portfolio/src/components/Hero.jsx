import Reveal from './Reveal'
import profileImg from '../assets/profile.jpeg'

export default function Hero() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 lg:px-16 py-12 min-h-[70vh] flex items-center">
      <Reveal>
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500 font-medium">
                Web Developer 
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight font-serif animate-fadeInUp" style={{
                letterSpacing: '-0.02em',
                fontWeight: '600',
                animation: 'fadeInUp 0.8s ease-out'
              }}>
                SAURAV
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Text Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-2">
                  Pre-final year student at <span className="font-medium text-black">National Institute of Technology, Jamshedpur</span>
                </p>
                <p className="text-sm leading-[1.6] text-gray-600">
                  Passionate about building scalable web applications and solving complex algorithmic problems. 
                  Experienced in full-stack development with expertise in modern frameworks and technologies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/Resume.pdf"
                  download="Saurav_Kumar_Resume.pdf"
                  className="inline-flex items-center justify-center border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors font-medium uppercase tracking-wide text-xs"
                >
                  <span>Download Resume</span>
                  <span className="ml-2">↓</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center border border-gray-300 px-6 py-2 text-gray-700 hover:border-black hover:text-black transition-colors font-medium text-xs"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full border border-gray-300 overflow-hidden bg-white p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={profileImg}
                      alt="Saurav Kumar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleInHorizontal {
            from {
              transform: scaleX(0);
              opacity: 0;
            }
            to {
              transform: scaleX(1);
              opacity: 1;
            }
          }
        `}</style>
      </Reveal>
    </section>
  )
}
