import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkExperience from './components/experience/WorkExperience'
import Footer from './components/Footer'
import PMNotebookTOC from './components/pmNotebook/PMNotebook' // Renamed for clarity
import NotebookEntryPage from './components/pmNotebook/NotebookEntryPage'
import CaseStudies from './components/caseStudies/CaseStudies'

function Home() {
  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-6xl">
      <Hero />
      <CaseStudies />      
      <WorkExperience />
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-900">Featured Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder project cards */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-100/50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-600 transition-colors duration-300">Project {i + 1}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">A brief, engaging description of this amazing project and the technologies used to build it.</p>
              <div className="mt-6 flex gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">React</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Tailwind</span>
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
          <Route path="/pm-notebook/:slug" element={<NotebookEntryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
