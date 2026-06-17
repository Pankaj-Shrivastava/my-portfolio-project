import React from 'react'

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
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Grow Therapy</h3>
          <p className="text-slate-500 font-medium italic mt-1">Senior Product Manager</p>
        </div>
      </div>
      <div className="flex flex-col md:col-span-2">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">About</p>
        <p className="text-lg text-slate-600 leading-relaxed max-w-prose mb-8">
          I majored in Computer Science and am passionate about building products that solve real user problems. With a background in product management and a focus on user experience, I've led cross-functional teams to deliver innovative solutions. Currently leveraging data-driven insights to inform strategic decisions and drive business growth.
        </p>
        <button className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl shadow-sm transition-all duration-300 w-fit">Contact me</button>
      </div>
    </section>
  )
}
