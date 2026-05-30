import React from 'react';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-8 text-slate-900">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Feature Revamp & Engagement</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            A detailed look into how we identified user friction points, redesigned the core flow, and increased user engagement by 35%.
          </p>
          <button className="text-slate-900 font-semibold hover:text-slate-600 transition-colors inline-flex items-center">
            Read more <span className="ml-1">→</span>
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Market Expansion Strategy</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            An overview of our strategic pivot that led to capturing new market segments and boosting customer satisfaction scores.
          </p>
          <button className="text-slate-900 font-semibold hover:text-slate-600 transition-colors inline-flex items-center">
            Read more <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}