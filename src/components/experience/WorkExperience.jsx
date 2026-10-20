import React from 'react';
import { DoodleRaysLeft, DoodleScribble } from '../doodle/DoodleDecors';

export default function WorkExperience() {
  const experiences = [
    {
      company: 'Nextleap',
      role: 'Product Management Fellow',
      period: 'May 2026 - Present',
      badgeColor: 'bg-doodle-coral-light text-doodle-coral-dark',
      description: 'Conducting in-depth user interviews, synthesizing product market fit signals, drafting comprehensive PRDs, and defining North Star metrics for consumer and B2B products.',
      highlights: ['Product Discovery', 'User Problem Framing', 'GTM Strategy'],
    },
    {
      company: 'IBM',
      role: 'Application Developer',
      period: 'Dec 2021 - Present',
      badgeColor: 'bg-doodle-blue-light text-doodle-blue',
      description: 'Architecting scalable cloud applications with React and microservices. Championing code quality, CI/CD pipeline modernization, and mentoring engineering team members.',
      highlights: ['React & Node Architecture', 'Cloud Microservices', 'CI/CD Pipelines'],
    },
    {
      company: 'Accenture',
      role: 'AI Engineering Senior Analyst',
      period: 'May 2019 - Dec 2021',
      badgeColor: 'bg-doodle-sage-light text-doodle-sage-dark',
      description: 'Delivered machine learning solutions, NLP document intelligence pipelines, and predictive models for enterprise clients. Bridged technical AI logic with executive stakeholder goals.',
      highlights: ['NLP & ML Pipelines', 'Enterprise Integration', 'Model Evaluation'],
    },
    {
      company: 'CGI',
      role: 'Associate Software Engineer',
      period: 'Oct 2016 - Mar 2019',
      badgeColor: 'bg-doodle-mustard-light text-ink',
      description: 'Developed core backend logic, relational database schemas, and web interfaces. Resolved performance bottlenecks and maintained high unit test coverage.',
      highlights: ['Full-Stack Engineering', 'Database Design', 'Agile Delivery'],
    },
  ];

  return (
    <section id="work-experience" className="mt-20 relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <DoodleRaysLeft className="w-6 h-6 text-doodle-mustard" />
          <h2 className="text-3xl sm:text-4xl font-extrabold font-doodle text-ink tracking-tight">
            <span className="highlighter-mustard">Work Experience</span>
          </h2>
        </div>
        <DoodleScribble className="w-20 h-4 text-ink/30 hidden sm:block" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="doodle-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:translate-x-1 transition-all"
          >
            {/* Left Hand-Drawn Inky Accent Stripe */}
            <div className="absolute top-0 left-0 w-2.5 h-full bg-ink"></div>

            <div className="pl-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold font-doodle text-ink group-hover:text-doodle-coral transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-doodle font-bold uppercase tracking-wider text-ink-muted">
                    @ {exp.company}
                  </span>
                </div>
                
                <span className="text-xs font-doodle font-bold text-ink bg-paper border border-ink px-3 py-1 rounded-full shadow-doodle-sm w-fit">
                  🗓️ {exp.period}
                </span>
              </div>

              <p className="text-base text-ink-light leading-relaxed mb-4 max-w-4xl font-normal">
                {exp.description}
              </p>

              {/* Key Competencies Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-dashed border-ink/20">
                {exp.highlights.map((h, hIdx) => (
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
        ))}
      </div>
    </section>
  );
}