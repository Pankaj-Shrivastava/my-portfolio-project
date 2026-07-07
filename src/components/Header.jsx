import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
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

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver: update active section as user scrolls
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['about', 'case-studies', 'work-experience', 'projects'];
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    // Track which sections are currently intersecting
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) {
          // No section in view — if scrolled near top, activate "About"
          if (window.scrollY < 200) {
            setActiveSection('about');
          }
        } else {
          // Pick the topmost visible section by DOM order
          const ordered = sectionIds.filter(id => visibleSections.has(id));
          setActiveSection(ordered[0] || '');
        }
      },
      {
        // Trigger when a section crosses the top 30% of the viewport
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (path, sectionId) => {
    if (location.pathname !== path) return false;
    if (path === '/pm-notebook') return true;
    return activeSection === sectionId;
  };

  const linkClass = (path, sectionId, extra = '') =>
    `text-base font-medium transition-colors ${extra} ${isActive(path, sectionId)
      ? 'text-slate-900 font-semibold'
      : 'text-slate-400 hover:text-slate-700'
    }`;

  const isSubPage = location.pathname === '/pm-notebook' || location.pathname.startsWith('/project/');

  // ── Sub-page header: only "← Back to Portfolio" ──────────────────────────
  if (isSubPage) {
    return (
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <Link
            to="/"
            className="text-base font-medium text-slate-500 hover:text-slate-900 inline-flex items-center gap-2 transition-colors"
          >
            <span>←</span> Back
          </Link>
        </div>
      </header>
    );
  }

  // ── Main portfolio header ─────────────────────────────────────────────────
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: scrollProgress > 0 ? '0 -1px 4px rgba(71, 85, 105, 0.15)' : 'none',
          willChange: 'width',
        }}
      />
      <div className="container mx-auto px-6 py-4 max-w-6xl flex items-center justify-between">
        <Link to="/" onClick={scrollToTop} className="text-lg font-semibold text-slate-900 tracking-tight">Pankaj Shrivastava</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" onClick={scrollToTop} className={linkClass('/', 'about')}>About</Link>
          <Link to="/#case-studies" onClick={() => scrollToSection('case-studies')} className={linkClass('/', 'case-studies')}>Case Studies</Link>
          <Link to="/#work-experience" onClick={() => scrollToSection('work-experience')} className={linkClass('/', 'work-experience')}>Work Experience</Link>
          <Link to="/#projects" onClick={() => scrollToSection('projects')} className={linkClass('/', 'projects')}>Projects</Link>
          <Link to="/pm-notebook" className={linkClass('/pm-notebook', '')}>PM Notebook</Link>
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
          <Link to="/" onClick={scrollToTop} className={linkClass('/', 'about', 'block')}>About</Link>
          <Link to="/#case-studies" onClick={() => scrollToSection('case-studies')} className={linkClass('/', 'case-studies', 'block')}>Case Studies</Link>
          <Link to="/#work-experience" onClick={() => scrollToSection('work-experience')} className={linkClass('/', 'work-experience', 'block')}>Work Experience</Link>
          <Link to="/#projects" onClick={() => scrollToSection('projects')} className={linkClass('/', 'projects', 'block')}>Projects</Link>
          <Link to="/pm-notebook" onClick={() => setIsMenuOpen(false)} className={linkClass('/pm-notebook', '', 'block')}>PM Notebook</Link>
        </nav>
      )}
    </header>
  )
}
