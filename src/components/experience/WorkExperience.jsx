export default function WorkExperience() {
  return (
    <section id="work-experience" className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-900">Work Experience</h2>
      <div className="space-y-6">
        {/* Placeholder project cards */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-900 rounded-l-2xl"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Senior Software Engineer {i + 1}</h3>
              <span className="text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">202{i + 1} - Present</span>
            </div>
            <h4 className="text-md font-medium text-slate-500 mb-4">Tech Company Inc.</h4>
            <p className="text-slate-600 leading-relaxed">
              Led the development of scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions and mentored junior developers.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}