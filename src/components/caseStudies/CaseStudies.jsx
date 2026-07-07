import React from 'react';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mt-16">
      <h2 className="text-xl font-semibold tracking-tight mb-6 text-slate-800">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-base font-semibold text-slate-800 mb-2">Feature Revamp & Engagement</h3>
          <p className="text-base text-slate-500 mb-5 leading-relaxed">
            A detailed look into how we identified user friction points, redesigned the core flow, and increased user engagement by 35%.
          </p>
          <button className="text-base text-slate-700 font-medium hover:text-slate-500 transition-colors inline-flex items-center">
            Read more <span className="ml-1">→</span>
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
          <h3 className="text-base font-semibold text-slate-800 mb-2">Market Expansion Strategy</h3>
          <p className="text-base text-slate-500 mb-5 leading-relaxed">
            An overview of our strategic pivot that led to capturing new market segments and boosting customer satisfaction scores.
          </p>
          <button className="text-base text-slate-700 font-medium hover:text-slate-500 transition-colors inline-flex items-center">
            Read more <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}