import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">My Portfolio</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/#projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
          <Link to="/pm-diary" className="text-gray-700 hover:text-gray-900">PM Diary</Link>
          <Link to="/#contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
