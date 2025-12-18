import Reveal from './Reveal'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaTools, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiExpress, SiPostman, SiMysql, SiTailwindcss } from 'react-icons/si'

function SkillItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-4 group border border-gray-300 p-3 hover:border-black transition-colors duration-200">
      <Icon className="text-black flex-shrink-0" size={48} aria-hidden="true" />
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 lg:px-12 py-20 sm:py-32">
      <Reveal>
        <div className="border-y-4 border-black py-6 mb-12">
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-center">TECHNICAL SKILLS</h2>
        </div>
      </Reveal>
      <div className="mt-12 space-y-16">
        <Reveal>
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-lg font-serif font-bold uppercase tracking-widest text-gray-600 mb-8">Languages & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
              <SkillItem icon={FaHtml5} label="HTML" />
              <SkillItem icon={FaCss3Alt} label="CSS" />
              <SkillItem icon={SiJavascript} label="JavaScript" />
              <SkillItem icon={FaReact} label="React" />
              <SkillItem icon={SiTailwindcss} label="Tailwind CSS" />
              <SkillItem icon={SiMongodb} label="MongoDB" />
              <SkillItem icon={FaNodeJs} label="Node.js" />
              <SkillItem icon={SiExpress} label="Express.js" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-lg font-serif font-bold uppercase tracking-widest text-gray-600 mb-8">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
              <SkillItem icon={FaCode} label="VS Code" />
              <SkillItem icon={FaTools} label="Replit" />
              <SkillItem icon={SiPostman} label="Postman" />
              <SkillItem icon={FaGitAlt} label="Git" />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-l-4 border-black pl-6">
            <h3 className="text-lg font-serif font-bold uppercase tracking-widest text-gray-600 mb-8">Fundamentals</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
              <SkillItem icon={FaDatabase} label="DBMS" />
              <SkillItem icon={FaTools} label="Computer Networks" />
              <SkillItem icon={SiMysql} label="SQL" />
              <SkillItem icon={FaTools} label="OOPs" />
              <SkillItem icon={FaTools} label="Operating Systems" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
