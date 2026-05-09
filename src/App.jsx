import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <Hero />
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder project cards */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm">
                <div className="h-40 bg-gray-100 rounded mb-4" />
                <h3 className="text-lg font-medium">Project {i + 1}</h3>
                <p className="text-sm text-gray-600 mt-2">Short description will go here.</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
            {/* Placeholder project cards */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm">
                <h3 className="text-lg font-medium">Experience {i + 1}</h3>
                <p className="text-sm text-gray-600 mt-2">Short description will go here.</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-lg font-medium">Bachelor of Engineering (Honours) in Information Technology</h3>
              <h3 className="text-lg font-medium">RGPV Bhopal</h3>
              <p className="text-sm text-gray-600 mt-2">July 2012 - June 2016</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
