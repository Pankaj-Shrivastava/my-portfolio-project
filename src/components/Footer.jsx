import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Pankaj. Built with React + Tailwind.
      </div>
    </footer>
  )
}
