import React from 'react'
import { Link } from 'react-router-dom'
import { pmDiaryEntries } from './pm-diary'

export default function PMDiary() {
  return (
    <main className="flex-1 container mx-auto px-6 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
          <span className="mr-2">←</span> Back to Portfolio
        </Link>
      </div>
      
      <section id="pm-diary">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-800">Product Management Diary</h2>
        
        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-4 space-y-8">
          {pmDiaryEntries.map((entry) => (
            <div key={entry.id} className="pl-6 md:pl-8 relative">
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-50"></span>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">{entry.title}</h3>
                  <time className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">{entry.date}</time>
                </div>
                <p className="text-slate-600 leading-relaxed">{entry.content}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}