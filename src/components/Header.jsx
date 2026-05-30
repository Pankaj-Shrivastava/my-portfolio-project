import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    // Timeout ensures navigation from other pages (e.g. /pm-notebook) completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getLinkStyle = (path, hash) => {
    const isActive = location.pathname === path && location.hash === hash;
    return `text-sm font-medium transition-colors ${
      isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
    }`;
  };

  const getMobileLinkStyle = (path, hash) => {
    const isActive = location.pathname === path && location.hash === hash;
    return `text-base font-medium transition-colors block ${
      isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
    }`;
  };

  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 max-w-6xl flex items-center justify-between">
        <Link to="/" onClick={scrollToTop} className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">Pankaj Shrivastava</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" onClick={scrollToTop} className={getLinkStyle('/', '')}>About</Link>
          <Link to="/#case-studies" onClick={() => scrollToSection('case-studies')} className={getLinkStyle('/', '#case-studies')}>Case Studies</Link>
          <Link to="/#work-experience" onClick={() => scrollToSection('work-experience')} className={getLinkStyle('/', '#work-experience')}>Work Experience</Link>
          <Link to="/#projects" onClick={() => scrollToSection('projects')} className={getLinkStyle('/', '#projects')}>Projects</Link>
          <Link to="/pm-notebook" className={getLinkStyle('/pm-notebook', '')}>PM Notebook</Link>
        </nav>
        <div className="md:hidden">
          <button 
            aria-label="Toggle menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 w-10 h-10 flex items-center justify-center">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <Link to="/" onClick={scrollToTop} className={getMobileLinkStyle('/', '')}>About</Link>
          <Link to="/#case-studies" onClick={() => scrollToSection('case-studies')} className={getMobileLinkStyle('/', '#case-studies')}>Case Studies</Link>
          <Link to="/#work-experience" onClick={() => scrollToSection('work-experience')} className={getMobileLinkStyle('/', '#work-experience')}>Work Experience</Link>
          <Link to="/#projects" onClick={() => scrollToSection('projects')} className={getMobileLinkStyle('/', '#projects')}>Projects</Link>
          <Link to="/pm-notebook" onClick={() => setIsMenuOpen(false)} className={getMobileLinkStyle('/pm-notebook', '')}>PM Notebook</Link>
        </nav>
      )}
    </header>
  )
}
