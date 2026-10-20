import React from 'react';
import { DoodleStar, DoodleRaysLeft, DoodleRaysRight, DoodleScribble } from '../doodle/DoodleDecors';

export default function Education() {
  const educationList = [
    {
      institution: 'Nextleap',
      credential: 'Product Management Fellow',
      period: 'May 2026 - Present',
      badgeColor: 'bg-doodle-coral-light text-doodle-coral-dark',
      icon: '🎓',
      description: 'Intensive fellowship mastering end-to-end product discovery, user research methodologies, market sizing, North Star metric definition, and PRD drafting.',
      highlights: [
        'User Problem Framing & Discovery',
        'Wireframing & UX Architecture',
        'Go-to-Market Strategy & Retention Loops',
        'Data-Driven Product Prioritization',
      ],
    },
    {
      institution: 'RGPV Bhopal (Rajiv Gandhi Proudyogiki Vishwavidyalaya)',
      credential: 'Bachelor of Engineering (B.E.) in Information Technology',
      period: 'July 2012 - June 2016',
      badgeColor: 'bg-doodle-blue-light text-doodle-blue',
      icon: '🏛️',
      description: 'Rigorous 4-year undergraduate curriculum in core computer science, software engineering principles, algorithms, and distributed systems.',
      highlights: [
        'Data Structures & Algorithms',
        'Object-Oriented Software Design',
        'Database Management Systems & SQL',
        'Computer Networks & Web Technologies',
      ],
    },
  ];

  return (
    <section id="education" className="mt-20 relative scroll-mt-28">
      {/* ── Section Heading ── */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8 pb-3 border-b-2 border-dashed border-ink/20">
        <div className="flex items-center gap-3">
          <DoodleRaysLeft className="w-6 h-6 text-doodle-mustard animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-extrabold font-doodle text-ink tracking-tight">
            <span className="highlighter-mustard">Education</span>
          </h2>
          <DoodleRaysRight className="w-6 h-6 text-doodle-mustard animate-pulse" />
        </div>
        <p className="font-doodle text-base text-ink-muted">
          Academic foundation in Information Technology & specialized Product Fellowship.
        </p>
      </div>

      {/* ── Education Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationList.map((item, idx) => (
          <div 
            key={idx}
            className="doodle-card rounded-2xl p-7 flex flex-col justify-between relative group hover:animate-doodle-wiggle"
          >
            {/* Top Star sticker */}
            <div className="absolute -top-3.5 -right-2 text-doodle-mustard group-hover:rotate-45 transition-transform">
              <DoodleStar className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-xs font-doodle font-bold px-3 py-0.5 rounded-full border border-ink ${item.badgeColor}`}>
                  {item.institution}
                </span>
                <span className="text-xs font-doodle font-bold text-ink bg-paper border border-ink px-2.5 py-0.5 rounded-full shadow-doodle-sm">
                  🗓️ {item.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-doodle text-ink mb-3 group-hover:text-doodle-coral transition-colors flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.credential}</span>
              </h3>

              <p className="text-base text-ink-light leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              {/* Highlights pills */}
              <div className="space-y-1.5 pt-3 border-t border-dashed border-ink/20">
                <span className="text-xs font-doodle font-bold text-ink-muted uppercase tracking-wider block mb-1">
                  Core Learnings:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <span 
                      key={hIdx} 
                      className="text-xs font-doodle font-semibold px-2.5 py-0.5 rounded-full border border-ink/30 bg-paper text-ink"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t-2 border-dashed border-ink/20 flex items-center justify-between">
              <span className="text-xs font-doodle font-bold text-doodle-sage flex items-center gap-1">
                <span>Verified Credential</span>
                <span>★</span>
              </span>
              <DoodleScribble className="w-12 h-2 text-ink/30 hidden sm:block" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
