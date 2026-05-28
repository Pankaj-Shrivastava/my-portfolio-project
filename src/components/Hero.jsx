import React from 'react'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10 md:py-20">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">Hi, I'm Pankaj <br /><span className="text-indigo-600">Open Source Developer</span></h1>
        <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">I build accessible, responsive, and beautifully designed web experiences. Passionate about product management and open source technologies.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300">View projects</button>
          <button className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl shadow-sm transition-all duration-300">Contact me</button>
        </div>
      </div>
      <div className="order-first lg:order-last">
        <div className="w-full aspect-square md:aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center border border-white/50 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          <span className="text-slate-500 font-medium z-10">Profile / Illustration</span>
        </div>
      </div>
    </section>
  )
}
