import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoodleButton from '../doodle/DoodleButton';
import DoodleBadge from '../doodle/DoodleBadge';
import { DoodleArrow } from '../doodle/DoodleArrow';
import { 
  DoodleStar, 
  DoodleSparkle, 
  DoodleActionLines, 
  DoodleRaysLeft, 
  DoodleRaysRight,
  DoodleScribble,
  DoodleHandCursor
} from '../doodle/DoodleDecors';

export default function RecentProjects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [popDemoPressed, setPopDemoPressed] = useState(false);
  const navigate = useNavigate();

  // Projects data mirroring the mockups (Image 1 & 3) plus portfolio projects
  const projects = [
    {
      id: 'portfolio-sketch',
      title: 'My Portfolio Project',
      description: 'A playful organic sketchbook portfolio crafted with hand-drawn doodles, tactile 3D physics, and modern React responsiveness.',
      badgeColor: 'coral',
      btnVariant: 'coral',
      theme: 'terracotta',
      tags: ['React', 'Tailwind', 'Vite', 'Doodles'],
      cornerStarColor: 'text-doodle-coral',
      illustration: 'computer-earth',
      demoNote: 'You are browsing it right now!',
    },
    {
      id: 'smartdine-platform',
      slug: 'smartdine',
      title: 'SmartDine Restaurant Platform',
      description: 'An AI-powered restaurant recommendation engine and order management system that turns data and LLMs into personalised dining experiences.',
      badgeColor: 'mustard',
      btnVariant: 'mustard',
      theme: 'mustard',
      tags: ['React', 'Tailwind', 'AI / LLM', 'Contentful'],
      cornerStarColor: 'text-doodle-mustard',
      illustration: 'restaurant-smartdine',
      demoNote: 'Click to view full case study ↗',
    },
    {
      id: 'coding-dashboard',
      title: 'Coding Dashboard',
      description: 'Developer workspace dashboard visualizing telemetry, code health, commits, and multi-service deployment pipelines.',
      badgeColor: 'sage',
      btnVariant: 'coral',
      theme: 'sage',
      tags: ['Next.js', 'TypeScript', 'Analytics', 'CSS'],
      cornerStarColor: 'text-doodle-coral',
      illustration: 'dashboard-code',
      demoNote: 'Live telemetry & metrics',
    },
    {
      id: 'ai-prompt-evaluator',
      title: 'AI Engineering Workbench',
      description: 'Heuristic evaluation pipeline benchmarking LLM response latency, guardrail compliance, and token efficiency for enterprise apps.',
      badgeColor: 'blue',
      btnVariant: 'coral',
      theme: 'blue',
      tags: ['Python', 'FastAPI', 'LLMs', 'RAG'],
      cornerStarColor: 'text-doodle-mustard',
      illustration: 'ai-brain',
      link: '#',
      demoNote: 'Enterprise AI tooling',
    },
  ];

  return (
    <section id="projects" className="mt-24 mb-16 relative">
      
      {/* ── Section Title with Hand-drawn Rays & Highlighter (Image 1 & 3) ── */}
      <div className="text-center relative mb-12">
        
        {/* Top Left Cue: "Hover for magic!" with pressable = pop = demo button */}
        <div className="hidden md:flex items-center gap-2 absolute -top-10 left-4 lg:left-12 select-none">
          <div className="flex flex-col items-center">
            <span className="font-doodle text-sm font-bold text-ink-light">Hover for magic!</span>
            <span className="font-doodle text-xs text-doodle-coral font-bold">= pop =</span>
          </div>
          <DoodleArrow variant="curved-down-right" className="w-8 h-8 text-ink -rotate-12" />
          <button
            type="button"
            onClick={() => setPopDemoPressed(!popDemoPressed)}
            className={`pressable-btn px-3 py-1 bg-doodle-coral text-white font-doodle text-xs font-bold rounded-lg border-2 border-ink shadow-doodle-sm transition-transform ${
              popDemoPressed ? 'translate-x-1 translate-y-1 shadow-none' : ''
            }`}
          >
            Click me! ✨
          </button>
        </div>

        {/* Top Right Cue: "Click to inspect" with curvy arrow */}
        <div className="hidden md:flex items-center gap-2 absolute -top-8 right-4 lg:right-12 select-none">
          <div className="flex flex-col items-end">
            <span className="font-doodle text-sm font-bold text-ink-light flex items-center gap-1">
              <span>Hover for magic!</span>
              <DoodleSparkle className="w-3.5 h-3.5 text-doodle-mustard" />
            </span>
            <span className="font-doodle text-xs text-ink-muted">Click to inspect</span>
          </div>
          <DoodleArrow variant="curved-down-left" className="w-8 h-8 text-ink rotate-6" />
        </div>

        {/* Main Title Banner with Radiating Doodle Rays */}
        <div className="inline-flex items-center justify-center gap-3">
          <DoodleRaysLeft className="w-8 h-8 text-doodle-mustard hidden sm:block animate-pulse" />
          <h2 className="text-4xl sm:text-5xl font-extrabold font-doodle text-ink tracking-tight relative">
            <span className="highlighter-mustard">Recent Projects</span>
          </h2>
          <DoodleRaysRight className="w-8 h-8 text-doodle-mustard hidden sm:block animate-pulse" />
        </div>

        <p className="font-doodle text-lg text-ink-muted mt-2 max-w-lg mx-auto">
          Hand-drawn applications, technical architectures, and product experiments.
        </p>
      </div>

      {/* ── Left & Right Micro-copy Floating Stickers ──────────────────────── */}
      <div className="relative">
        
        {/* Floating handwritten note left */}
        <div className="hidden xl:flex flex-col items-center absolute -left-20 top-20 select-none z-20">
          <DoodleArrow variant="curved-up-right" className="w-10 h-10 text-ink rotate-12 mb-1" />
          <span className="font-doodle text-base font-bold text-ink -rotate-6 bg-paper-card px-2 py-0.5 border border-ink/40 shadow-sm rounded">
            Click to open!
          </span>
        </div>

        {/* Floating handwritten note right */}
        <div className="hidden xl:flex flex-col items-center absolute -right-16 top-32 select-none z-20">
          <DoodleArrow variant="curved-up-left" className="w-10 h-10 text-ink -rotate-12 mb-1" />
          <span className="font-doodle text-base font-bold text-ink rotate-6 bg-paper-card px-2 py-0.5 border border-ink/40 shadow-sm rounded">
            Try it!
          </span>
        </div>

        {/* ── 2x2 Grid of Illustrated Hand-Drawn Cards (Matching Image 1 & 3) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  if (project.slug) {
                    navigate(`/project/${project.slug}`);
                  }
                }}
                className={`
                  doodle-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between
                  cursor-pointer transition-all duration-200 select-none group
                  ${isHovered ? 'animate-doodle-wiggle' : ''}
                `}
              >
                {/* Hand-drawn Star Perched at Top Corner */}
                <div className="absolute -top-3.5 -right-3 z-20 transition-transform duration-200 group-hover:rotate-45 group-hover:scale-125">
                  <DoodleStar className={`w-8 h-8 ${project.cornerStarColor}`} />
                </div>

                {/* Card Top: Thumbnail Illustration Frame */}
                <div>
                  <div className={`
                    w-full h-48 sm:h-52 rounded-xl mb-6 overflow-hidden relative border-2 border-ink
                    flex items-center justify-center transition-all duration-300
                    ${project.theme === 'terracotta' ? 'bg-[#D66D55]' : ''}
                    ${project.theme === 'sage' ? 'bg-[#6C8B74]' : ''}
                    ${project.theme === 'mustard' ? 'bg-[#E5AC41]' : ''}
                    ${project.theme === 'blue' ? 'bg-[#5B8FB9]' : ''}
                  `}>
                    
                    {/* SVG Hand-Drawn Doodle Illustrations */}
                    <div className="w-full h-full p-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {project.illustration === 'computer-earth' && (
                        <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Desktop Computer */}
                          <rect x="25" y="20" width="90" height="65" rx="8" fill="#FFFDF9" stroke="#231F20" strokeWidth="2.5" />
                          <circle cx="55" cy="48" r="3" fill="#231F20" />
                          <circle cx="85" cy="48" r="3" fill="#231F20" />
                          <path d="M62 60 C 67 66, 73 66, 78 60" stroke="#231F20" strokeWidth="2.5" strokeLinecap="round" />
                          {/* Computer stand */}
                          <path d="M70 85 L 70 98" stroke="#231F20" strokeWidth="3" />
                          <path d="M50 98 L 90 98" stroke="#231F20" strokeWidth="3" strokeLinecap="round" />
                          {/* Keyboard */}
                          <rect x="30" y="103" width="80" height="15" rx="4" fill="#FFFDF9" stroke="#231F20" strokeWidth="2" />
                          <line x1="38" y1="110" x2="102" y2="110" stroke="#231F20" strokeWidth="1.5" strokeDasharray="3 3" />
                          
                          {/* Curved doodle arrow connecting computer to globe */}
                          <path d="M118 45 C 135 30, 155 35, 168 50" stroke="#FFFDF9" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M165 42 L 170 52 L 158 52" stroke="#FFFDF9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                          {/* Globe */}
                          <circle cx="185" cy="65" r="34" fill="#88A98E" stroke="#231F20" strokeWidth="2.5" />
                          <path d="M165 55 C 172 48, 185 52, 192 60 C 196 66, 188 75, 180 78 C 172 82, 168 70, 165 55 Z" fill="#6C8B74" stroke="#231F20" strokeWidth="1.5" />
                          <path d="M195 70 C 205 72, 212 80, 205 90 C 200 88, 195 82, 195 70 Z" fill="#6C8B74" stroke="#231F20" strokeWidth="1.5" />

                          {/* Click prompt with sparkles */}
                          <text x="145" y="115" fontFamily="'Patrick Hand', cursive" fontSize="16" fill="#FFFDF9" fontWeight="bold">Click!</text>
                          <path d="M185 105 L 195 100" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" />
                          <path d="M190 115 L 202 115" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}

                      {project.illustration === 'dashboard-code' && (
                        <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Browser Window */}
                          <rect x="35" y="15" width="170" height="110" rx="10" fill="#FFFDF9" stroke="#231F20" strokeWidth="2.5" />
                          <line x1="35" y1="36" x2="205" y2="36" stroke="#231F20" strokeWidth="2" />
                          {/* Browser dots */}
                          <circle cx="48" cy="25" r="3" fill="#231F20" />
                          <circle cx="58" cy="25" r="3" fill="#231F20" />
                          <circle cx="68" cy="25" r="3" fill="#231F20" />
                          
                          {/* Sidebar navigation doodle */}
                          <rect x="46" y="46" width="36" height="68" rx="4" fill="#DCEBE0" stroke="#231F20" strokeWidth="1.5" />
                          <line x1="52" y1="56" x2="74" y2="56" stroke="#231F20" strokeWidth="2" strokeLinecap="round" />
                          <line x1="52" y1="68" x2="70" y2="68" stroke="#231F20" strokeWidth="2" strokeLinecap="round" />
                          <line x1="52" y1="80" x2="72" y2="80" stroke="#231F20" strokeWidth="2" strokeLinecap="round" />

                          {/* Code window area */}
                          <rect x="92" y="46" width="102" height="42" rx="4" fill="#F4EFEA" stroke="#231F20" strokeWidth="1.5" />
                          <line x1="100" y1="56" x2="150" y2="56" stroke="#231F20" strokeWidth="2" strokeLinecap="round" />
                          <line x1="100" y1="66" x2="180" y2="66" stroke="#231F20" strokeWidth="1.5" strokeDasharray="4 2" />
                          <line x1="100" y1="76" x2="160" y2="76" stroke="#231F20" strokeWidth="1.5" strokeDasharray="4 2" />

                          {/* Code prompt pill </> */}
                          <rect x="150" y="94" width="44" height="20" rx="5" fill="#E9B84C" stroke="#231F20" strokeWidth="1.5" />
                          <text x="160" y="108" fontFamily="'Patrick Hand', cursive" fontSize="13" fill="#231F20" fontWeight="bold">&lt;/&gt;</text>

                          {/* Outer motion lines */}
                          <path d="M22 30 C 26 26, 28 34, 32 30" stroke="#231F20" strokeWidth="2" strokeLinecap="round" />
                          <path d="M212 90 C 218 86, 222 96, 226 92" stroke="#231F20" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}

                      {project.illustration === 'restaurant-smartdine' && (
                        <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Tablet / POS screen */}
                          <rect x="50" y="20" width="140" height="95" rx="12" fill="#FFFDF9" stroke="#231F20" strokeWidth="2.5" />
                          {/* Table layout doodles */}
                          <circle cx="85" cy="55" r="16" fill="#FCDCD9" stroke="#231F20" strokeWidth="2" />
                          <text x="78" y="60" fontFamily="'Patrick Hand', cursive" fontSize="14" fill="#231F20" fontWeight="bold">T1</text>
                          <circle cx="155" cy="55" r="16" fill="#DCEBE0" stroke="#231F20" strokeWidth="2" />
                          <text x="148" y="60" fontFamily="'Patrick Hand', cursive" fontSize="14" fill="#231F20" fontWeight="bold">T2</text>
                          {/* Order ticket */}
                          <rect x="80" y="82" width="80" height="24" rx="4" fill="#FDF1D6" stroke="#231F20" strokeWidth="1.5" />
                          <text x="92" y="98" fontFamily="'Patrick Hand', cursive" fontSize="13" fill="#231F20" fontWeight="bold">Order #42 Ready</text>
                        </svg>
                      )}

                      {project.illustration === 'ai-brain' && (
                        <svg className="w-full h-full max-h-40" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Neural / Brain node sketch */}
                          <circle cx="120" cy="70" r="38" fill="#FFFDF9" stroke="#231F20" strokeWidth="2.5" />
                          <circle cx="100" cy="60" r="6" fill="#E57368" stroke="#231F20" strokeWidth="2" />
                          <circle cx="140" cy="60" r="6" fill="#6C8B74" stroke="#231F20" strokeWidth="2" />
                          <circle cx="120" cy="85" r="6" fill="#E9B84C" stroke="#231F20" strokeWidth="2" />
                          <line x1="100" y1="60" x2="140" y2="60" stroke="#231F20" strokeWidth="2" />
                          <line x1="100" y1="60" x2="120" y2="85" stroke="#231F20" strokeWidth="2" />
                          <line x1="140" y1="60" x2="120" y2="85" stroke="#231F20" strokeWidth="2" />
                          {/* Sparkles around brain */}
                          <text x="45" y="45" fontFamily="'Patrick Hand', cursive" fontSize="16" fill="#FFFDF9" fontWeight="bold">prompt =&gt;</text>
                          <text x="175" y="105" fontFamily="'Patrick Hand', cursive" fontSize="16" fill="#FFFDF9" fontWeight="bold">&lt;= output</text>
                        </svg>
                      )}
                    </div>

                    {/* Micro hover indicator badge */}
                    <div className="absolute bottom-2 left-2 bg-paper/95 px-2 py-0.5 rounded border border-ink text-[11px] font-doodle font-bold text-ink shadow-sm flex items-center gap-1">
                      <DoodleHandCursor className="w-3.5 h-3.5 text-ink" />
                      <span>{project.demoNote}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-doodle text-ink mb-2 group-hover:text-doodle-coral transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="text-sm font-doodle text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view ↗
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-base text-ink-light leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIndex) => (
                      <DoodleBadge 
                        key={tIndex} 
                        variant={tIndex === 0 ? project.badgeColor : 'default'}
                      >
                        {tag}
                      </DoodleBadge>
                    ))}
                  </div>
                </div>

                {/* ── Prominent 3D Pressable CTA Button (Image 1 & 3 Core Affordance) ── */}
                <div className="pt-4 border-t-2 border-dashed border-ink/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DoodleActionLines className="w-5 h-5 text-ink opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                    <DoodleButton
                      variant={project.btnVariant}
                      size="md"
                      sparkles={true}
                      className="shadow-doodle"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.slug) {
                          navigate(`/project/${project.slug}`);
                        } else {
                          const el = document.getElementById('pm-notebook');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      View Project
                    </DoodleButton>
                    <DoodleActionLines className="w-5 h-5 text-ink opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform -scale-x-100" />
                  </div>

                  {/* Hand-drawn squiggly decor */}
                  <DoodleScribble className="w-16 h-3 text-ink/40 hidden sm:block" />
                </div>

              </div>
            );
          })}
        </div>

        {/* ── Bottom Section Note ("Check it out" from Image 3) ── */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-paper-card border-2 border-ink border-sketch-pill shadow-doodle-sm">
            <span className="font-doodle text-base font-bold text-ink">
              💡 Have a custom project or technical idea in mind?
            </span>
            <a 
              href="mailto:pankaj.shrivastava.work@gmail.com" 
              className="font-doodle text-base font-bold text-doodle-coral underline hover:text-doodle-coral-dark ml-1"
            >
              Let's build it together →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
