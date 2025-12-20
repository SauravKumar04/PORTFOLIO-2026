import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiStripe, SiSocketdotio, SiCloudinary } from 'react-icons/si'

const projectData = {
  medcare: {
    title: 'MedCare',
    subtitle: 'Healthcare Appointment Management System',
    sections: [
      {
        title: 'For Patients',
        items: [
          'Register / Login',
          'Browse doctors by specialty',
          'Book appointments with time slots',
          'Razorpay secure payments',
          'Manage appointments'
        ]
      },
      {
        title: 'For Doctors',
        items: [
          'Secure login',
          'Dashboard with stats',
          'Manage appointments',
          'Update profile & availability',
          'Track earnings'
        ]
      },
      {
        title: 'For Admin',
        items: [
          'Admin authentication',
          'System-wide dashboard',
          'Manage doctors',
          'Oversee appointments',
          'System configuration'
        ]
      }
    ],
    techStack: [
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiExpress, name: 'Express' },
      { icon: FaReact, name: 'React' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiTailwindcss, name: 'Tailwind' }
    ],
    liveUrl: 'https://medcare-frontend.netlify.app/'
  },
  invox: {
    title: 'InvoX',
    subtitle: 'Invoice Management Platform',
    sections: [
      {
        title: 'User Management',
        items: [
          'Email registration with OTP',
          'JWT authentication',
          'Profile & avatar management',
          'Password recovery with OTP'
        ]
      },
      {
        title: 'Company Profile',
        items: [
          'Company details auto-attached',
          'Payment configuration per user'
        ]
      },
      {
        title: 'Invoice System',
        items: [
          'Invoice creation & editing',
          'Line items, tax, discount, total',
          'Status: Draft / Sent / Paid',
          '4 PDF templates'
        ]
      },
      {
        title: 'Advanced',
        items: [
          'PDF generation & email sending',
          'Search, filter, sort',
          'Dashboard analytics',
          'QR-based payments',
          'Stripe, UPI, PayPal, Crypto'
        ]
      }
    ],
    techStack: [
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiExpress, name: 'Express' },
      { icon: FaReact, name: 'React' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: SiStripe, name: 'Stripe' }
    ],
    liveUrl: 'https://invox-invoicing.netlify.app/'
  },
  storypad: {
    title: 'StoryPad',
    subtitle: 'Social Story Writing Platform',
    sections: [
      {
        title: 'Authentication & Users',
        items: [
          'JWT authentication with bcrypt',
          'User profiles & Cloudinary avatars',
          'Follow system',
          'Real-time notifications',
          'Reading progress tracking'
        ]
      },
      {
        title: 'Content Management',
        items: [
          'Story creation with metadata',
          'Multi-chapter stories',
          'Rich reading experience',
          'Likes, comments, bookmarks',
          'Draft auto-save & recovery'
        ]
      }
    ],
    techStack: [
      { icon: FaReact, name: 'React' },
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: SiSocketdotio, name: 'Socket.io' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiCloudinary, name: 'Cloudinary' }
    ],
    liveUrl: 'https://story-pad-26tm.vercel.app/'
  }
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projectData[projectId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  const handleBack = () => {
    navigate('/')
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 font-bold uppercase tracking-wider text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation Bar */}
      <nav className="border-b border-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-6">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 border border-black px-6 py-2 hover:bg-black hover:text-white transition duration-200 font-medium"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Project Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="border-y-4 border-black py-6 mb-6">
            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight">{project.title}</h1>
          </div>
          <p className="text-xl sm:text-2xl border-l-4 border-black pl-4 italic text-gray-700">
            {project.subtitle}
          </p>
        </div>

        {/* Sections */}
        <div className={`grid gap-6 mb-12 ${project.sections[0].grid ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
          {project.sections.map((section, idx) => (
            <div key={idx} className="border-2 border-black p-6">
              <h4 className="font-serif font-bold text-lg uppercase mb-4 border-b border-black pb-2">
                {section.title}
              </h4>
              <ul className={`space-y-2 text-sm ${section.grid ? 'grid gap-2' : ''}`}>
                {section.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="border-t-2 border-black pt-8 mb-12">
          <h4 className="font-serif font-bold text-xl uppercase mb-6 tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, idx) => {
              const Icon = tech.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 border border-black px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Live Demo Button */}
        <div className="border-t-2 border-black pt-8">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition duration-200 font-bold uppercase tracking-wider text-sm"
          >
            View Live Demo →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 lg:px-12 py-12 text-sm border-t border-black">
        © {new Date().getFullYear()} Saurav Kumar
      </footer>
    </div>
  )
}
