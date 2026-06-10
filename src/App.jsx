import { useState } from 'react'
import { motion } from 'framer-motion'
import profileImage from './assets/profile.png'

const resumeHref = '/Karan-Singh-Bhanwal-Resume.pdf'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/karansinghbhanwal' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/karan-singh-bhanwal' },
  { label: 'Email', href: 'mailto:Karann.bhanwal@gmail.com' },
]

const contactLinks = {
  email: 'mailto:Karann.bhanwal@gmail.com',
  whatsapp: 'https://wa.me/917452009449',
}

const stats = [
  { label: 'LeetCode + GFG Problems', value: '300+' },
  { label: 'Current CGPA', value: '8.2 / 10' },
  { label: 'Technologies', value: '15+' },
]

const education = [
  {
    title: 'Bachelor of Technology in Computer Science',
    subtitle: 'Graphic Era Hill University, Uttarakhand',
    meta: 'CGPA: 8.2 / 10',
  },
  {
    title: 'Class XII',
    subtitle: 'Beersheba Senior Secondary School',
    meta: '89% · 2022',
  },
  {
    title: 'Class X',
    subtitle: 'Beersheba Senior Secondary School',
    meta: '84% · 2020',
  },
]

const experience = [
  {
    company: 'CodeOptimizer',
    role: 'Backend Developer & Project Lead',
    duration: 'Jan 2025 - May 2025',
    meta: 'React.js, Python · Academic Team Project, Graphic Era Hill University',
    links: [{ label: 'GitHub', href: 'https://github.com/karansinghbhanwal' }],
    bullets: [
      'Directed an 8-member team from requirement gathering through deployment to deliver the project on schedule with zero critical post-launch bugs.',
      'Built a full-stack platform that analyzes Python code and generates optimized rewrites, with measured 29% lower time complexity and 23% lower execution space across test cases.',
      'Designed 10+ REST API endpoints with JWT authentication for secure developer workflow integration and code review pipelines.',
      'Engineered the FastAPI backend with PostgreSQL persistence to support concurrent analysis requests and per-user optimization history.',
    ],
  },
]

const projects = [
  {
    title: 'Streaks - Habit Tracker',
    year: '2023',
    description:
      'React.js, Node.js, Express.js, MongoDB. Built JWT-based authentication with RBAC, shipped REST APIs for habit and streak tracking, and improved backend response time with optimized MongoDB queries and indexed fields.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'GitHub'],
    github: 'https://github.com/karansinghbhanwal',
  },
  {
    title: 'TaskFlow - Role-Based Task Management System',
    year: '2025',
    description:
      'React.js, Tailwind CSS, JavaScript ES6. Implemented Admin and Employee workflows with protected routing, persistent session logic using Context API and localStorage, and a clearer full-responsive UI.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript ES6', 'GitHub'],
    github: 'https://github.com/karansinghbhanwal',
  },
]

const skills = [
  {
    title: 'DSA & Problem Solving',
    items: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Recursion', 'Sorting', 'Searching'],
  },
  { title: 'Languages', items: ['Java (primary)', 'JavaScript', 'SQL', 'Python'] },
  {
    title: 'Core CS',
    items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Agile Development Practices'],
  },
  { title: 'Frontend', items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs', 'JWT Authentication'] },
  { title: 'Database & Tools', items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Linux', 'VS Code', 'Vercel', 'Postman'] },
]

const certifications = [
  'DSA with Java - Apna College (2024)',
  'Frontend Development - Udemy',
  '100 Days of Code: Python Bootcamp - Udemy',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const themeClass = theme === 'dark' ? 'dark' : ''

  return (
    <div className={themeClass}>
      <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero-surface opacity-90 dark:opacity-100"></div>
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

          <header className="relative mx-auto flex max-w-7xl items-center justify-end gap-3 px-6 py-8 sm:px-10">
            <a
              href={resumeHref}
              download
              className="inline-flex items-center rounded-full border border-accent/40 bg-accent px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-white hover:text-slate-950"
            >
              Download Resume
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm text-slate-700 transition hover:border-accent hover:text-slate-950 dark:border-slate-600/40 dark:bg-white/5 dark:text-slate-100 dark:hover:text-white"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </header>

          <main className="mx-auto max-w-7xl px-6 pb-24 sm:px-10">
            <section className="mb-10">
              <div className="inline-flex max-w-3xl rounded-[28px] border border-slate-200 bg-white/80 px-6 py-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                <p className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">Karan Singh Bhanwal</p>
              </div>
            </section>

            <section className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-8"
              >
                <div className="max-w-3xl rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                    <span className="block">Software Engineer</span>
                    <span className="mt-2 block text-slate-600 dark:text-slate-300">Backend Development</span>
                  </h1>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/10 dark:bg-slate-950/60">MERN Stack</span>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/10 dark:bg-slate-950/60">Python</span>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/10 dark:bg-slate-950/60">SQL</span>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/10 dark:bg-slate-950/60">REST APIs</span>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-white/10 dark:bg-slate-950/60">Data Structures &amp; Algorithms</span>
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-accent">300+ Problems in Java</span>
                  </div>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                    Experienced with MERN development, Python, SQL, REST API design, and data structures and algorithms in Java. Passionate about building practical software systems with strong backend foundations.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="inline-flex h-10 items-center rounded-full bg-slate-200 px-4 text-slate-800 shadow-glow dark:bg-slate-950/40 dark:text-slate-100">Haldwani, Uttarakhand, India</span>
                    <a
                      href={contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center rounded-full border border-slate-300 bg-white px-4 text-slate-700 transition hover:border-accent hover:text-slate-950 dark:border-slate-600/40 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                    >
                      +91 7452009449
                    </a>
                    <a
                      href={contactLinks.email}
                      className="inline-flex h-10 items-center rounded-full border border-slate-300 bg-white px-4 text-slate-700 transition hover:border-accent hover:text-slate-950 dark:border-slate-600/40 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                    >
                      Karann.bhanwal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -4 }}
                      className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
                    >
                      <p className="text-4xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <div className="absolute left-8 top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl"></div>
                <div className="absolute -right-12 top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
                <div className="relative space-y-6">
                  <div className="w-full max-w-sm rounded-[32px] border border-slate-200 bg-slate-100 p-3 shadow-soft dark:border-white/10 dark:bg-slate-950/70">
                    <div className="overflow-hidden rounded-[24px] bg-white">
                      <img
                        src={profileImage}
                        alt="Karan Singh Bhanwal"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                    Software developer focused on full-stack and backend systems.
                  </div>
                  <div className="space-y-4 rounded-[32px] border border-slate-200 bg-slate-100/90 p-6 dark:border-slate-700/60 dark:bg-slate-950/80">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-500">Summary</p>
                      <p className="mt-3 text-slate-700 dark:text-slate-300">
                        Software Engineer and Computer Science graduate with 300+ DSA problems solved in Java and hands-on experience in backend-focused full-stack development. Skilled in Python, MERN Stack, SQL, REST APIs, database design, and authentication systems, with experience building scalable web applications, improving backend performance, and leading end-to-end projects.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl bg-white p-5 text-slate-700 dark:bg-slate-950/95 dark:text-slate-300">Hands-on with MERN stack, RESTful API design, and database management.</div>
                      <div className="rounded-3xl bg-white p-5 text-slate-700 dark:bg-slate-950/95 dark:text-slate-300">Built secure workflow systems using JWT auth and role-based access control.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Education</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Academic background</h2>
                <div className="mt-8 space-y-4">
                  {education.map((item) => (
                    <div key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-100/90 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
                      <div className="flex items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span>{item.subtitle}</span>
                        <span className="rounded-full bg-white px-3 py-1 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">{item.meta}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Certifications</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Training</h2>
                <div className="mt-8 space-y-4">
                  {certifications.map((item) => (
                    <div key={item} className="rounded-[28px] border border-slate-200 bg-slate-100/90 p-5 text-slate-700 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.section>
            </section>

            <section className="mt-24">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">Work Experience</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">CodeOptimizer</h2>
                </div>
                <p className="max-w-xl text-sm text-slate-500 dark:text-slate-400">Resume-backed experience only.</p>
              </div>
              <div className="mt-10 space-y-6">
                {experience.map((item) => (
                  <motion.div
                    key={item.company}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur transition duration-300 dark:border-white/10 dark:bg-slate-900/70"
                  >
                    <div className="absolute inset-y-0 left-10 w-1 rounded-full bg-gradient-to-b from-accent to-transparent opacity-70"></div>
                    <div className="relative ml-16 space-y-4">
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-500">{item.duration}</p>
                      <div className="flex flex-col gap-3">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.role}</h3>
                          <p className="mt-2 text-slate-600 dark:text-slate-400">{item.company}</p>
                          <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{item.meta}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {item.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition group-hover:bg-accent/10 dark:border-slate-700/80 dark:bg-slate-950/90 dark:text-slate-300"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                      <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mt-24 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Projects</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Selected work from the resume</h2>
                <div className="mt-10 grid gap-6">
                  {projects.map((project) => (
                    <motion.article
                      key={project.title}
                      whileHover={{ y: -6, boxShadow: '0 30px 60px rgba(79,157,255,0.18)' }}
                      className="rounded-[36px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur transition duration-300 dark:border-white/10 dark:bg-slate-900/70"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-500">{project.year}</span>
                        <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-950/80">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                      <p className="mt-4 text-slate-700 dark:text-slate-300">{project.description}</p>
                      <div className="mt-6">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-accent hover:text-slate-950 dark:border-slate-700/80 dark:bg-slate-950/90 dark:text-slate-300 dark:hover:text-white"
                        >
                          View on GitHub
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Links and location</h3>
                <div className="mt-8 grid gap-4 rounded-[28px] bg-slate-100 p-6 text-slate-700 dark:bg-slate-950/80 dark:text-slate-300">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span>Email</span>
                    <a href={contactLinks.email} className="text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                      Karann.bhanwal@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span>Phone</span>
                    <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="text-slate-700 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                      +91 7452009449
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span>Location</span>
                    <span>Haldwani, Uttarakhand, India</span>
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-700 transition hover:border-accent hover:text-slate-950 dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-200 dark:hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="mt-24">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">Skills</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Technical skills from the resume</h2>
                </div>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ y: -5 }}
                    className="rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
                  >
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{skill.title}</h3>
                    <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
                      {skill.items.map((item) => (
                        <div key={item} className="rounded-3xl bg-slate-100 px-4 py-3 text-sm dark:bg-slate-950/80">
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <footer className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p>Portfolio content aligned to the resume only.</p>
                <p>© 2026 Karan Singh Bhanwal</p>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
