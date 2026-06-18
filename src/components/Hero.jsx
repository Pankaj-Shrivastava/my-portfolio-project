import React from 'react'
import Timeline from './Timeline'
import { aboutContent } from './data/aboutData'

export default function Hero() {

  return (
    <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start py-6 md:py-12">
      <div className="order-first md:col-span-1">
        <div className="w-5/6 md:w-4/5 mx-auto aspect-square bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Pankaj Shrivastava" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-6 text-center">
          <Timeline />
        </div>
      </div>
      <div className="flex flex-col md:col-span-2">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">About</p>
        <div className="text-lg text-slate-600 leading-relaxed max-w-prose mb-8 space-y-4">
          {aboutContent.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <a 
          href="https://www.linkedin.com/in/pankaj-vijay-shrivastava/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="View my LinkedIn profile"
          className="inline-flex items-center justify-center w-12 h-12 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 rounded-xl shadow-sm transition-all duration-300"
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/linkedin.svg`} 
            alt="LinkedIn Icon" />
        </a>
      </div>
    </section>
  )
}
