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
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    const sectionIds = ['about', 'teardowns', 'work-experience', 'projects'];
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
      <header className="w-full border-b-2 border-ink bg-paper/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <Link
            to="/"
            className="text-lg font-doodle font-bold text-ink hover:text-doodle-coral inline-flex items-center gap-2 transition-colors"
          >
            <span className="text-xl">←</span> Back to Sketchbook
          </Link>
        </div>
      </header>
    );
  }

  // ── Main portfolio header ─────────────────────────────────────────────────
  return (
    <header className="w-full border-b-2 border-ink bg-paper/95 backdrop-blur-md sticky top-0 z-50">
      {/* Hand-drawn scroll indicator line */}
      <div
        className="absolute bottom-0 left-0 h-1.5 bg-doodle-mustard border-b border-ink transition-all duration-75"
        style={{
          width: `${scrollProgress}%`,
          willChange: 'width',
        }}
      />
      <div className="container mx-auto px-6 py-3.5 max-w-6xl flex items-center justify-between relative">
        <Link 
          to="/" 
          onClick={scrollToTop} 
          className="group flex items-center gap-2 text-xl md:text-2xl font-bold font-doodle text-ink tracking-wide hover:text-doodle-coral transition-colors"
        >
          <span className="font-extrabold tracking-tight">PANKAJ SHRIVASTAVA</span>
          <span className="text-doodle-mustard text-sm group-hover:rotate-45 transition-transform inline-block">★</span>
        </Link>

        {/* Desktop Nav with Botanical Vine Accent from Mockup */}
        <div className="hidden lg:flex flex-col items-end relative">
          <svg className="w-28 h-5 text-doodle-sage mb-0.5 opacity-80" viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 14C24 9 44 15 68 11C90 7 106 13 116 9" />
            <path d="M24 11C22 5 30 2 34 7C35 10 28 12 24 11Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M52 12C50 18 58 20 62 15C63 12 56 11 52 12Z" fill="currentColor" fillOpacity="0.3" />
            <path d="M80 10C78 4 86 2 90 7C91 10 84 11 80 10Z" fill="currentColor" fillOpacity="0.3" />
          </svg>
          <nav className="flex items-center gap-3 text-lg font-doodle tracking-wide">
            <Link to="/" onClick={scrollToTop} className={`transition-colors px-2 py-0.5 ${isActive('/', 'about') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>ABOUT</Link>
            <span className="text-ink/30 select-none">|</span>
            <Link to="/#teardowns" onClick={() => scrollToSection('teardowns')} className={`transition-colors px-2 py-0.5 ${isActive('/', 'teardowns') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>TEARDOWNS</Link>
            <span className="text-ink/30 select-none">|</span>
            <Link to="/#work-experience" onClick={() => scrollToSection('work-experience')} className={`transition-colors px-2 py-0.5 ${isActive('/', 'work-experience') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>EXPERIENCE</Link>
            <span className="text-ink/30 select-none">|</span>
            <Link to="/#projects" onClick={() => scrollToSection('projects')} className={`transition-colors px-2 py-0.5 ${isActive('/', 'projects') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>PROJECTS</Link>
            <span className="text-ink/30 select-none">|</span>
            <Link to="/pm-notebook" className={`transition-colors px-2 py-0.5 ${isActive('/pm-notebook', '') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>PM NOTEBOOK</Link>
          </nav>
        </div>

        {/* Medium screens simplified nav */}
        <div className="hidden md:flex lg:hidden items-center gap-2 text-base font-doodle">
          <Link to="/" onClick={scrollToTop} className={`px-2 py-0.5 ${isActive('/', 'about') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>ABOUT</Link>
          <span className="text-ink/30">|</span>
          <Link to="/#teardowns" onClick={() => scrollToSection('teardowns')} className={`px-2 py-0.5 ${isActive('/', 'teardowns') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>TEARDOWNS</Link>
          <span className="text-ink/30">|</span>
          <Link to="/#projects" onClick={() => scrollToSection('projects')} className={`px-2 py-0.5 ${isActive('/', 'projects') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>PROJECTS</Link>
          <span className="text-ink/30">|</span>
          <Link to="/pm-notebook" className={`px-2 py-0.5 ${isActive('/pm-notebook', '') ? 'highlighter-mustard font-bold text-ink' : 'text-ink-light hover:text-ink'}`}>NOTEBOOK</Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="pressable-btn bg-paper-card w-10 h-10 rounded-xl flex items-center justify-center text-ink font-bold text-lg"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Flyout */}
      {isMenuOpen && (
        <nav className="md:hidden bg-paper-card border-b-2 border-ink px-6 py-5 flex flex-col gap-3 shadow-doodle absolute w-full left-0 z-50">
          <Link to="/" onClick={scrollToTop} className={`text-xl font-doodle py-1 ${isActive('/', 'about') ? 'font-bold text-doodle-coral' : 'text-ink'}`}>About</Link>
          <Link to="/#teardowns" onClick={() => scrollToSection('teardowns')} className={`text-xl font-doodle py-1 ${isActive('/', 'teardowns') ? 'font-bold text-doodle-coral' : 'text-ink'}`}>Teardowns</Link>
          <Link to="/#work-experience" onClick={() => scrollToSection('work-experience')} className={`text-xl font-doodle py-1 ${isActive('/', 'work-experience') ? 'font-bold text-doodle-coral' : 'text-ink'}`}>Work Experience</Link>
          <Link to="/#projects" onClick={() => scrollToSection('projects')} className={`text-xl font-doodle py-1 ${isActive('/', 'projects') ? 'font-bold text-doodle-coral' : 'text-ink'}`}>Recent Projects</Link>
          <Link to="/pm-notebook" onClick={() => setIsMenuOpen(false)} className={`text-xl font-doodle py-1 ${isActive('/pm-notebook', '') ? 'font-bold text-doodle-coral' : 'text-ink'}`}>PM Notebook</Link>
        </nav>
      )}
    </header>
  )
}
