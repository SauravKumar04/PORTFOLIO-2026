import Reveal from './Reveal'
import { SiCodechef, SiCodeforces, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

function LinkItem({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 underline decoration-black underline-offset-4 transition duration-200 ease-out"
    >
      {children}
    </a>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 lg:px-12 py-20 sm:py-32">
      <Reveal>
        <div className="border-y-4 border-black py-6 mb-12">
          <h2 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-center">ACHIEVEMENTS</h2>
        </div>
      </Reveal>

      <div className="mt-12 space-y-8">
        <Reveal>
          <div className="border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group">
            <div className="border-b-2 border-black px-8 py-4 bg-gray-100">
              <div className="text-xs uppercase tracking-widest mb-1 text-gray-600">Achievement 01</div>
              <h3 className="text-2xl font-serif font-bold">Solved 500+ quality DSA problems</h3>
            </div>
            <div className="p-8 flex flex-wrap gap-4">
              <LinkItem href="https://www.geeksforgeeks.org/profile/sauravkuzhb">
                <SiGeeksforgeeks className="inline" size={16} /> GeeksforGeeks Profile
              </LinkItem>
              <LinkItem href="https://leetcode.com/u/saurav_kumar_2002/">
                <SiLeetcode className="inline" size={16} /> LeetCode Profile
              </LinkItem>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group">
            <div className="border-b-2 border-black px-8 py-4 bg-gray-100">
              <div className="text-xs uppercase tracking-widest mb-1 text-gray-600">Achievement 02</div>
              <h3 className="text-2xl font-serif font-bold">Competitive Programming Profiles</h3>
            </div>
            <div className="p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="border-l-4 border-black pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SiCodechef size={20} />
                    <div className="text-xs uppercase tracking-wider text-gray-600">CodeChef</div>
                  </div>
                  <div className="font-bold text-3xl mb-2">1400+</div>
                  <LinkItem href="https://www.codechef.com/users/saurav_cp01">View Profile</LinkItem>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SiCodeforces size={20} />
                    <div className="text-xs uppercase tracking-wider text-gray-600">Codeforces</div>
                  </div>
                  <div className="font-bold text-3xl mb-2">1100+</div>
                  <LinkItem href="https://codeforces.com/profile/saurav_cp">View Profile</LinkItem>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SiLeetcode size={20} />
                    <div className="text-xs uppercase tracking-wider text-gray-600">LeetCode</div>
                  </div>
                  <div className="font-bold text-3xl mb-2">1800+</div>
                  <LinkItem href="https://leetcode.com/u/saurav_kumar_2002/">View Profile</LinkItem>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group">
            <div className="border-b-2 border-black px-8 py-4 bg-gray-100">
              <div className="text-xs uppercase tracking-widest mb-1 text-gray-600">Achievement 03</div>
              <h3 className="text-2xl font-serif font-bold">Backend Development & APIs Certification</h3>
            </div>
            <div className="p-8 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600 mb-2">Issued by FreeCodeCamp</div>
                <div className="text-lg font-medium">Back End Development and APIs</div>
              </div>
              <LinkItem href="https://www.freecodecamp.org/certification/sauravkumar9798/back-end-development-and-apis">
                <span className="border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors duration-200">View Certificate</span>
              </LinkItem>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
