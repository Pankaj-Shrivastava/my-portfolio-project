export default function Education() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-800">Education</h2>
      <div className="space-y-6">
        <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500 rounded-l-2xl"></div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-slate-800">Bachelor of Engineering (Honours) in Information Technology</h3>
            <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 whitespace-nowrap">2012 - 2016</span>
          </div>
          <h4 className="text-md font-medium text-slate-500">RGPV Bhopal</h4>
        </div>
      </div>
    </section>
  )
}