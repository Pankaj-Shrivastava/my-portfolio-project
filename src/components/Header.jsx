import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">My Portfolio</div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
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
