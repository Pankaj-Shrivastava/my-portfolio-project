import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkExperience from './components/experience/WorkExperience'
import Footer from './components/Footer'
import PMNotebookTOC from './components/pmNotebook/PMNotebook' // Renamed for clarity
import CaseStudies from './components/caseStudies/CaseStudies'
import { projectsData } from './components/data/projectsData'

function Home() {
  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-6xl">
      <Hero />
      <CaseStudies />      
      <WorkExperience />
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-900">Featured Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div key={project.id} className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-600 transition-colors duration-300">{project.title}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{project.description}</p>
              <div className="mt-6 flex gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">{tech}</span>
                ))}
              </div>
            </div>
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
