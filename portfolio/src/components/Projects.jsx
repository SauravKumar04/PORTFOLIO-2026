import { useState } from 'react'
import Reveal from './Reveal'
import Modal from './Modal'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiStripe, SiSocketdotio, SiCloudinary } from 'react-icons/si'

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
  const [open, setOpen] = useState(null)

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
          <Card title="MedCare – Healthcare Appointment Management System" onOpen={() => setOpen('medcare')} number="01">
            Comprehensive appointment system for patients, doctors, and admins.
          </Card>
        </Reveal>
        <Reveal>
          <Card title="InvoX – Invoice Management Platform" onOpen={() => setOpen('invox')} number="02">
            End-to-end invoicing with auth, PDFs, templates, and payments.
          </Card>
        </Reveal>
        <Reveal>
          <Card title="StoryPad – Social Story Writing Platform" onOpen={() => setOpen('storypad')} number="03">
            Social platform for writing, reading, and engaging with stories.
          </Card>
        </Reveal>
      </div>

      <Modal open={open === 'medcare'} onClose={() => setOpen(null)} title="MedCare">
        <div className="space-y-6">
          <p className="text-lg border-l-4 border-black pl-4 italic">
            Healthcare Appointment Management System
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">For Patients</h4>
              <ul className="space-y-2 text-sm">
                <li>• Register / Login</li>
                <li>• Browse doctors by specialty</li>
                <li>• Book appointments with time slots</li>
                <li>• Razorpay secure payments</li>
                <li>• Manage appointments</li>
              </ul>
            </div>
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">For Doctors</h4>
              <ul className="space-y-2 text-sm">
                <li>• Secure login</li>
                <li>• Dashboard with stats</li>
                <li>• Manage appointments</li>
                <li>• Update profile & availability</li>
                <li>• Track earnings</li>
              </ul>
            </div>
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">For Admin</h4>
              <ul className="space-y-2 text-sm">
                <li>• Admin authentication</li>
                <li>• System-wide dashboard</li>
                <li>• Manage doctors</li>
                <li>• Oversee appointments</li>
                <li>• System configuration</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6">
            <h4 className="font-serif font-bold uppercase mb-4 tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiMongodb size={20} />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiExpress size={20} />
                <span className="text-sm font-medium">Express</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <FaReact size={20} />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <FaNodeJs size={20} />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiTailwindcss size={20} />
                <span className="text-sm font-medium">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6">
            <a
              href="https://medcare-frontend.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 font-bold uppercase tracking-wider text-sm"
            >
              View Live Demo →
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === 'invox'} onClose={() => setOpen(null)} title="InvoX">
        <div className="space-y-6">
          <p className="text-lg border-l-4 border-black pl-4 italic">
            Invoice Management Platform
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">User Management</h4>
              <ul className="space-y-2 text-sm">
                <li>• Email registration with OTP</li>
                <li>• JWT authentication</li>
                <li>• Profile & avatar management</li>
                <li>• Password recovery with OTP</li>
              </ul>
            </div>
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">Company Profile</h4>
              <ul className="space-y-2 text-sm">
                <li>• Company details auto-attached</li>
                <li>• Payment configuration per user</li>
              </ul>
            </div>
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">Invoice System</h4>
              <ul className="space-y-2 text-sm">
                <li>• Invoice creation & editing</li>
                <li>• Line items, tax, discount, total</li>
                <li>• Status: Draft / Sent / Paid</li>
                <li>• 4 PDF templates</li>
              </ul>
            </div>
            <div className="border-2 border-black p-4">
              <h4 className="font-serif font-bold text-lg uppercase mb-3 border-b border-black pb-2">Advanced</h4>
              <ul className="space-y-2 text-sm">
                <li>• PDF generation & email sending</li>
                <li>• Search, filter, sort</li>
                <li>• Dashboard analytics</li>
                <li>• QR-based payments</li>
                <li>• Stripe, UPI, PayPal, Crypto</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6">
            <h4 className="font-serif font-bold uppercase mb-4 tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiMongodb size={20} />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiExpress size={20} />
                <span className="text-sm font-medium">Express</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <FaReact size={20} />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <FaNodeJs size={20} />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiTailwindcss size={20} />
                <span className="text-sm font-medium">Tailwind</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiStripe size={20} />
                <span className="text-sm font-medium">Stripe</span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6">
            <a
              href="https://invox-invoicing.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 font-bold uppercase tracking-wider text-sm"
            >
              View Live Demo →
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={open === 'storypad'} onClose={() => setOpen(null)} title="StoryPad">
        <div className="space-y-6">
          <p className="text-lg border-l-4 border-black pl-4 italic">
            Social Story Writing Platform
          </p>

          <div className="border-2 border-black p-6">
            <h4 className="font-serif font-bold text-lg uppercase mb-4 border-b border-black pb-2">Core Features</h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div>• JWT authentication with bcrypt</div>
              <div>• User profiles & Cloudinary avatars</div>
              <div>• Follow system</div>
              <div>• Story creation with metadata</div>
              <div>• Multi-chapter stories</div>
              <div>• Rich reading experience</div>
              <div>• Likes, comments, bookmarks</div>
              <div>• Real-time notifications</div>
              <div>• Draft auto-save & recovery</div>
              <div>• Reading progress tracking</div>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6">
            <h4 className="font-serif font-bold uppercase mb-4 tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <FaReact size={20} />
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiTailwindcss size={20} />
                <span className="text-sm font-medium">Tailwind</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiSocketdotio size={20} />
                <span className="text-sm font-medium">Socket.io</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <FaNodeJs size={20} />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiExpress size={20} />
                <span className="text-sm font-medium">Express</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiMongodb size={20} />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <SiCloudinary size={20} />
                <span className="text-sm font-medium">Cloudinary</span>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6">
            <a
              href="https://story-pad-26tm.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 font-bold uppercase tracking-wider text-sm"
            >
              View Live Demo →
            </a>
          </div>
        </div>
      </Modal>
    </section>
  )
}
