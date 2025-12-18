import Reveal from './Reveal'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function ContactLink({ href, icon: Icon, label, description }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      className="relative flex flex-col gap-4 border border-black p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 ease-out group bg-white hover:bg-gray-50"
    >
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-black"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-black"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-black"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-black"></div>
      
      <div className="flex items-center gap-3">
        <div className="p-3 border border-gray-300 group-hover:border-black transition-colors">
          <Icon className="text-black" size={24} aria-hidden="true" />
        </div>
        <div>
          <span className="text-lg font-bold font-serif block">{label}</span>
          <span className="text-sm text-gray-600">{description}</span>
        </div>
      </div>
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 lg:px-12 py-20 sm:py-32">
      <Reveal>
        <div className="relative">
          <div className="border-y-4 border-black py-6 mb-4">
            <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-center">GET IN TOUCH</h2>
          </div>
          <p className="text-center text-gray-600 mb-12 text-lg">Let's connect and discuss opportunities</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ContactLink href="mailto:your.email@example.com" icon={FaEnvelope} label="Email" description="Drop a message" />
          <ContactLink href="https://github.com/SauravKumar04" icon={FaGithub} label="GitHub" description="View repositories" />
          <ContactLink href="https://www.linkedin.com/in/saurav-kumar-32b61128a/" icon={FaLinkedin} label="LinkedIn" description="Professional network" />
        </div>
      </Reveal>
    </section>
  )
}
