import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, title: 'Product Strategy', desc: 'Aligning vision with execution to drive business growth and user value.', icon: '🎯' },
    { id: 2, title: 'User Research', desc: 'Understanding customer pain points to build products people actually love.', icon: '🔍' },
    { id: 3, title: 'Agile Delivery', desc: 'Iterating rapidly, removing blockers, and delivering value continuously.', icon: '⚡' },
    { id: 4, title: 'Data Analytics', desc: 'Making informed, objective decisions driven by core metrics and KPIs.', icon: '📊' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Rotates every 4 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10 md:py-20">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">Hi, I'm Pankaj <br /><span className="text-slate-500">Open Source Developer</span></h1>
        <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">I build accessible, responsive, and beautifully designed web experiences. Passionate about product management and open source technologies.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-slate-900 hover:bg-black text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300">View projects</button>
          <button className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl shadow-sm transition-all duration-300">Contact me</button>
        </div>
      </div>
      <div className="order-first lg:order-last">
        <div className="w-full aspect-square md:aspect-[4/3] bg-white rounded-3xl flex items-center justify-center border border-slate-200 shadow-sm relative overflow-hidden">
          
          {/* Slides */}
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <span className="text-6xl mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">{slide.icon}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{slide.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{slide.desc}</p>
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="absolute bottom-6 flex gap-2 z-10">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-6 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
