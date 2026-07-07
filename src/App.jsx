import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkExperience from './components/experience/WorkExperience'
import Footer from './components/Footer'
import PMNotebookTOC from './components/pmNotebook/PMNotebook' // Renamed for clarity
import CaseStudies from './components/caseStudies/CaseStudies'
import ProjectPage from './components/projects/ProjectPage'
import { projectsData } from './components/data/projectsData'

function Home() {
  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-6xl">
      <Hero />
      <CaseStudies />      
      <WorkExperience />
      <section id="projects" className="mt-20">
        <h2 className="text-lg font-semibold tracking-tight mb-6 text-slate-800">Featured Projects</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Link to={`/project/${project.slug}`} key={project.id} className="block group">
              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-slate-500 transition-colors duration-300">{project.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{project.description}</p>
                <div className="mt-6 flex gap-2 flex-wrap">
                  {project.stack.map(tech => (
                    <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pm-notebook" element={<PMNotebookTOC />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
