import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 max-w-6xl flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">MyPortfolio</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/#projects" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Projects</Link>
          <Link to="/pm-diary" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">PM Diary</Link>
          <Link to="/#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
