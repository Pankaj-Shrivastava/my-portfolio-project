import React from 'react';
import DoodleButton from '../doodle/DoodleButton';
import { DoodleStar, DoodleRaysLeft, DoodleRaysRight } from '../doodle/DoodleDecors';

export default function CaseStudies() {
  const studies = [
    {
      title: 'Feature Revamp & Engagement Loop',
      category: 'Product Strategy',
      badgeColor: 'coral',
      highlight: '+35% Engagement',
      description: 'A deep-dive investigation into user friction points within the onboarding funnel. Redesigned the primary user activation loop and boosted 30-day retention by 35%.',
      tags: ['UX Discovery', 'Funnel Analytics', 'A/B Testing'],
    },
    {
      title: 'Enterprise Architecture & Cloud Pivot',
      category: 'System Design',
      badgeColor: 'sage',
      highlight: '3x Throughput',
      description: 'Orchestrated the architectural migration of legacy monolith workflows to event-driven microservices, slashing P99 latency by 45% and eliminating single points of failure.',
      tags: ['Scalability', 'Microservices', 'Event-Driven'],
    },
  ];

  return (
    <section id="case-studies" className="mt-20 relative scroll-mt-28">
      <div className="flex items-center gap-3 mb-8">
        <DoodleRaysLeft className="w-6 h-6 text-doodle-mustard" />
        <h2 className="text-3xl sm:text-4xl font-extrabold font-doodle text-ink tracking-tight">
          <span className="highlighter-mustard">Strategic Case Studies</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studies.map((study, idx) => (
          <div 
            key={idx}
            className="doodle-card rounded-2xl p-7 flex flex-col justify-between relative group hover:animate-doodle-wiggle"
          >
            {/* Top Star sticker */}
            <div className="absolute -top-3 -right-2 text-doodle-mustard group-hover:rotate-45 transition-transform">
              <DoodleStar className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-doodle font-bold uppercase tracking-wider text-doodle-coral bg-doodle-coral-light/60 px-2.5 py-0.5 rounded-full border border-ink">
                  {study.category}
                </span>
                <span className="text-xs font-doodle font-bold text-doodle-sage bg-doodle-sage-light/60 px-2 py-0.5 rounded border border-ink">
                  {study.highlight}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-doodle text-ink mb-3 group-hover:text-doodle-coral transition-colors">
                {study.title}
              </h3>

              <p className="text-base text-ink-light leading-relaxed mb-6 font-normal">
                {study.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((t, i) => (
                  <span key={i} className="text-xs font-doodle font-medium px-2 py-0.5 bg-paper rounded border border-ink/40 text-ink">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-ink/20 flex items-center justify-between">
              <DoodleButton 
                variant={idx === 0 ? 'coral' : 'mustard'}
                size="sm"
                onClick={() => {
                  const el = document.getElementById('pm-notebook');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Read Deep Dive →
              </DoodleButton>
              <span className="text-xs font-doodle text-ink-muted">5 min read 📖</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}