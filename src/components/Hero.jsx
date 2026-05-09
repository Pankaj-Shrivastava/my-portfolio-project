import React from 'react'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hi, I'm Pankaj — Open Source Developer</h1>
        <p className="mt-4 text-gray-600 max-w-xl">This is a responsive React + Tailwind skeleton. We'll add projects, blog links and contact form later.</p>
        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">View projects</button>
          <button className="px-4 py-2 border rounded-md">Contact</button>
        </div>
      </div>
      <div className="order-first lg:order-last">
        <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Profile / Illustration</span>
        </div>
      </div>
    </section>
  )
}
