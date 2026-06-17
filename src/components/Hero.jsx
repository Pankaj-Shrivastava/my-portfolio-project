import React from 'react'

export default function Hero() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start py-10 md:py-20">
      <div className="order-first md:col-span-1">
        <div className="w-5/6 md:w-4/5 mx-auto aspect-square bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <img 
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Pankaj Shrivastava" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:col-span-2">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">About</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Senior Product Manager</h2>
        <p className="text-slate-600 font-medium mb-6">Grow Therapy</p>
        <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
          I majored in Computer Science and am passionate about building products that solve real user problems. With a background in product management and a focus on user experience, I've led cross-functional teams to deliver innovative solutions. Currently leveraging data-driven insights to inform strategic decisions and drive business growth.
        </p>
        <button className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl shadow-sm transition-all duration-300 w-fit">Contact me</button>
      </div>
    </section>
  )
}
