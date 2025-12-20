import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from './Reveal'

function Card({ title, children, onOpen, number }) {
  return (
    <button
      onClick={onOpen}
      className="text-left w-full border border-black p-8 sm:p-10 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200 ease-out group relative bg-white hover:bg-gray-50"
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-black"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-black"></div>
      
      <div className="absolute top-4 right-4 border border-black w-12 h-12 flex items-center justify-center font-bold text-lg bg-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-200">
        {number}
      </div>
      <div className="pr-16">
        <div className="inline-block border-l-4 border-black pl-3 mb-3">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">{title}</h3>
        </div>
        <div className="text-base sm:text-lg leading-relaxed text-gray-600">{children}</div>
      </div>
      <div className="mt-6 inline-flex items-center gap-2 font-medium group-hover:gap-4 transition-all duration-200">
        <span className="border-b-2 border-black pb-1">Read full case study</span>
        <span className="text-xl">→</span>
      </div>
    </button>
  )
}

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 lg:px-12 py-20 sm:py-32">
      <Reveal>
        <div className="relative">
          <div className="border-y-4 border-black py-6 mb-4">
            <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-center">FEATURED PROJECTS</h2>
          </div>
          <div className="flex items-center gap-4 justify-center mb-12">
            <div className="h-px w-12 bg-black"></div>
            <p className="text-center text-gray-600 text-lg font-medium">Selected Works & Case Studies</p>
            <div className="h-px w-12 bg-black"></div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8">
        <Reveal>
          <Card title="MedCare – Healthcare Appointment Management System" onOpen={() => navigate('/project/medcare')} number="01">
            Comprehensive appointment system for patients, doctors, and admins.
          </Card>
        </Reveal>
        <Reveal>
          <Card title="InvoX – Invoice Management Platform" onOpen={() => navigate('/project/invox')} number="02">
            End-to-end invoicing with auth, PDFs, templates, and payments.
          </Card>
        </Reveal>
        <Reveal>
          <Card title="StoryPad – Social Story Writing Platform" onOpen={() => navigate('/project/storypad')} number="03">
            Social platform for writing, reading, and engaging with stories.
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
