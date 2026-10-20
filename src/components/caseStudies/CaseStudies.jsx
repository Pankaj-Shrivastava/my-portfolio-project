import React from 'react';
import DoodleButton from '../doodle/DoodleButton';
import { DoodleArrow } from '../doodle/DoodleArrow';
import { 
  DoodleStar, 
  DoodleRaysLeft, 
  DoodleRaysRight,
  DoodleSparkle,
  DoodleScribble
} from '../doodle/DoodleDecors';

export default function CaseStudies() {
  const teardowns = [
    {
      id: 'teardown-01',
      number: '01',
      title: 'Feature Revamp & Engagement Loop',
      category: 'Teardown #01 · Growth & UX',
      badgeColor: 'coral',
      highlight: '+35% Retention Loop',
      description: 'A deep-dive investigation into user friction points within the onboarding funnel. Redesigned the primary user activation loop and boosted 30-day retention by 35%.',
      tags: ['UX Discovery', 'Funnel Analytics', 'A/B Testing', 'Retention'],
    },
    {
      id: 'teardown-02',
      number: '02',
      title: 'Enterprise Architecture & Cloud Pivot',
      category: 'Teardown #02 · System Scale',
      badgeColor: 'sage',
      highlight: '3x Throughput',
      description: 'Orchestrated the architectural migration of legacy monolith workflows to event-driven microservices, slashing P99 latency by 45% and eliminating single points of failure.',
      tags: ['Scalability', 'Microservices', 'Event-Driven', 'Cloud'],
    },
  ];

  return (
    <section id="teardowns" className="mt-20 relative scroll-mt-28">
      {/* Backwards compatibility anchor for any legacy #case-studies links */}
      <span id="case-studies" className="absolute -top-28 pointer-events-none" />

      {/* ── "Under the Hood" Doodle Annotation (Speech Bubble / Tape Sticker) ── */}
      <div className="flex items-center gap-2 mb-2 select-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-doodle-mustard-light border-2 border-ink border-sketch-sm shadow-doodle-sm -rotate-2 hover:rotate-1 hover:scale-105 transition-transform cursor-pointer group">
          <span className="text-base group-hover:rotate-12 transition-transform">🔍</span>
          <span className="font-doodle text-base font-bold text-ink tracking-wide">
            under the hood
          </span>
          <span className="text-xs text-doodle-coral font-bold">⚙️</span>
          <DoodleSparkle className="w-3.5 h-3.5 text-doodle-mustard animate-pulse" />
        </div>
        <DoodleArrow variant="curved-down-right" className="w-8 h-8 text-ink -rotate-12" />
        <span className="font-doodle text-sm text-ink-muted -rotate-3 hidden sm:inline-block">
          how the gears turn & products tick
        </span>
      </div>

      {/* ── Main Section Heading ── */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8 pb-3 border-b-2 border-dashed border-ink/20">
        <div className="flex items-center gap-3">
          <DoodleRaysLeft className="w-6 h-6 text-doodle-mustard animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-extrabold font-doodle text-ink tracking-tight">
            <span className="highlighter-mustard">Teardowns</span>
          </h2>
          <DoodleRaysRight className="w-6 h-6 text-doodle-mustard animate-pulse" />
        </div>
        <p className="font-doodle text-base text-ink-muted max-w-md">
          Deconstructing products, reverse-engineering decisions & analyzing system architectures.
        </p>
      </div>

      {/* ── Teardown Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teardowns.map((item, idx) => (
          <div 
            key={item.id}
            className="doodle-card rounded-2xl p-7 flex flex-col justify-between relative group hover:animate-doodle-wiggle"
          >
            {/* Top Star sticker */}
            <div className="absolute -top-3 -right-2 text-doodle-mustard group-hover:rotate-45 transition-transform">
              <DoodleStar className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-doodle font-bold uppercase tracking-wider text-doodle-coral bg-doodle-coral-light/60 px-3 py-0.5 rounded-full border border-ink">
                  {item.category}
                </span>
                <span className="text-xs font-doodle font-bold text-doodle-sage bg-doodle-sage-light/60 px-2 py-0.5 rounded border border-ink">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-doodle text-ink mb-3 group-hover:text-doodle-coral transition-colors flex items-center justify-between">
                <span>{item.title}</span>
                <span className="text-xs font-doodle text-ink-muted">#{item.number}</span>
              </h3>

              <p className="text-base text-ink-light leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((t, i) => (
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
                Inspect Teardown →
              </DoodleButton>
              <div className="flex items-center gap-1.5 text-xs font-doodle text-ink-muted">
                <DoodleScribble className="w-12 h-2 text-ink/30 hidden sm:block" />
                <span>5 min breakdown 📖</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}