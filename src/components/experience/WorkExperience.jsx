export default function WorkExperience() {
  return (
    <section id="work-experience" className="mt-16">
      <h2 className="text-xl font-semibold tracking-tight mb-6 text-slate-800">Work Experience</h2>
      <div className="space-y-4">
        {/* Placeholder project cards */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 rounded-l-2xl"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-base font-semibold text-slate-800">Senior Software Engineer {i + 1}</h3>
              <span className="text-sm font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full w-fit mt-1.5 sm:mt-0">202{i + 1} - Present</span>
            </div>
            <h4 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wide">Tech Company Inc.</h4>
            <p className="text-base text-slate-500 leading-relaxed max-w-3xl">
              Led the development of scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions and mentored junior developers.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}