import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white mt-auto">
      <div className="container mx-auto px-6 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Pankaj S</p>
      </div>
    </footer>
  )
}
