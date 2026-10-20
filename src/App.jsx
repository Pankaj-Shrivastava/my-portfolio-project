import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkExperience from './components/experience/WorkExperience'
import Footer from './components/Footer'
import PMNotebookTOC from './components/pmNotebook/PMNotebook' // Renamed for clarity
import CaseStudies from './components/caseStudies/CaseStudies'
import Education from './components/education/Education'
import ProjectPage from './components/projects/ProjectPage'
import RecentProjects from './components/projects/RecentProjects'

function ScrollRestorationHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Deterministically reset scroll to top on reload / page navigation without hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <main className="flex-1 container mx-auto px-6 py-10 max-w-6xl">
      <Hero />
      <RecentProjects />
      <CaseStudies />      
      <Education />
      <WorkExperience />
    </main>
  )
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollRestorationHandler />
      <div className="min-h-screen flex flex-col bg-paper text-ink font-sans selection:bg-doodle-mustard selection:text-ink">
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
