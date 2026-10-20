import React, { useState } from 'react';
import Timeline from './Timeline';
import { aboutContent } from './data/aboutData';
import DoodleButton from './doodle/DoodleButton';
import {
  DoodleStar,
  DoodleSparkle,
  DoodleActionLines,
  DoodleVine,
  DoodleScribble
} from './doodle/DoodleDecors';
import { DoodleArrow } from './doodle/DoodleArrow';
import ContactModal from './contact/ContactModal';

export default function Hero() {
  // Avatar mode toggle: 'trailblazer' (motorcycle) or 'catalyst' (leadership/photo)
  const [avatarMode, setAvatarMode] = useState('trailblazer');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="about" className="pt-6 pb-16 relative scroll-mt-0">
      {/* ── Top Hero Banner (Matching Image 1 & 2) ────────────────────────── */}
      <div className="bg-paper-card border-2 border-ink border-sketch p-6 sm:p-10 shadow-doodle-md mb-12 relative overflow-hidden">

        {/* Corner Doodle Star */}
        <div className="absolute top-4 right-4 animate-star-spin hidden sm:block">
          <DoodleStar className="w-8 h-8 text-doodle-mustard" />
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Greeting, Role Badge & CTA (order-2 on mobile, order-1 on lg) */}
          <div className="w-full lg:col-span-7 flex flex-col items-start relative z-10 order-2 lg:order-1">

            {/* Top Micro Doodle with Arrow */}
            <div className="flex items-center gap-2 mb-1">
              <DoodleArrow variant="curved-down-right" className="w-7 h-7 text-ink -rotate-12" />
              <span className="font-doodle text-base text-ink-muted">welcome to my sketchbook</span>
              <DoodleSparkle className="w-4 h-4 text-doodle-mustard animate-pulse" />
            </div>

            {/* Big Handcrafted Greeting */}
            <div className="relative mb-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-doodle text-ink tracking-tight flex items-center gap-3">
                Hi, I'm Pankaj!
                <span className="inline-block animate-doodle-wiggle text-doodle-coral">✌️</span>
              </h1>
              {/* Action speed lines */}
              <div className="absolute -top-3 right-0 hidden sm:block">
                <DoodleActionLines className="w-6 h-6 text-doodle-mustard" />
              </div>
            </div>

            {/* Role Subtitle Badge Pill */}
            <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 border-2 border-ink border-sketch-pill bg-paper shadow-doodle-sm">
              <span className="w-2 h-2 rounded-full bg-doodle-sage animate-ping"></span>
              <span className="font-doodle text-lg sm:text-xl font-bold text-ink">
                Product Builder & Natural Leader · Driven by Values
              </span>
            </div>

            {/* Brief Hook */}
            <p className="text-base sm:text-lg text-ink-light leading-relaxed mb-8 max-w-2xl">
              Great products happen where customer empathy meets engineering rigor. By asking the foundational 'why' and diving deep into user behavior, we uncover unarticulated friction before drafting a single requirement. Bringing an engineer's technical depth, a designer's eye for craftsmanship, and a leader's drive for alignment, I help unite teams around a shared vision, because when we build together, we create systems that scale and experiences people genuinely love.
            </p>

            {/* CTAs with Doodle Arrow Indicator */}
            <div className="flex flex-wrap items-center gap-4 relative">
              <DoodleButton
                id="hero-get-in-touch-btn"
                onClick={() => setIsContactOpen(true)}
                variant="coral"
                size="lg"
                sparkles={true}
              >
                Get in Touch
              </DoodleButton>

              <DoodleButton
                href="#projects"
                variant="mustard"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work ↓
              </DoodleButton>

              {/* Informal Micro-copy Annotation */}
              <div className="hidden sm:flex items-center gap-1.5 ml-2">
                <DoodleArrow variant="curved-up-left" className="w-6 h-6 text-ink" />
                <span className="font-doodle text-sm font-semibold text-doodle-coral -rotate-6">
                  Say hello!
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrated Avatar Showcase (order-1 on mobile, order-2 on lg) */}
          <div className="w-full lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2">

            {/* Hand-drawn Mode Switcher Pills */}
            <div className="flex items-center gap-2 mb-3 bg-paper p-1 rounded-full border-1.5 border-ink shadow-doodle-sm relative z-30">
              <button
                type="button"
                onClick={() => setAvatarMode('trailblazer')}
                className={`px-3 py-1 rounded-full text-xs font-doodle font-bold transition-all cursor-pointer ${avatarMode === 'trailblazer'
                  ? 'bg-doodle-coral text-white shadow-[1px_1px_0px_#231F20]'
                  : 'text-ink-muted hover:text-ink'
                  }`}
              >
                🏍️ Trailblazer
              </button>
              <button
                type="button"
                onClick={() => setAvatarMode('catalyst')}
                className={`px-3 py-1 rounded-full text-xs font-doodle font-bold transition-all cursor-pointer ${avatarMode === 'catalyst'
                  ? 'bg-doodle-sage text-white shadow-[1px_1px_0px_#231F20]'
                  : 'text-ink-muted hover:text-ink'
                  }`}
              >
                💡 Catalyst
              </button>
            </div>

            {/* Avatar Frame with Sketch Border & Paper Tape */}
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square group">

              {/* Paper Tape Sticker Decor */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-doodle-mustard/40 border border-ink/40 -rotate-2 z-20 pointer-events-none shadow-sm"></div>

              {/* Main Illustration Card */}
              <div className="w-full h-full bg-paper-muted border-2 border-ink border-sketch shadow-doodle-md overflow-hidden relative transition-transform duration-300 group-hover:scale-[1.02]">
                {avatarMode === 'trailblazer' ? (
                  <div className="relative w-full h-full">
                    <img
                      src={`${import.meta.env.BASE_URL}images/pankaj-motorcycle-doodle.jpg`}
                      alt="Pankaj on vintage motorcycle doodle"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-paper/90 px-2 py-0.5 border border-ink rounded text-[11px] font-doodle font-bold text-ink shadow-sm">
                      Trailblazing 🌟
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#F4EDE2] p-4 text-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                      alt="Pankaj Shrivastava photo"
                      className="w-36 h-36 rounded-full object-cover border-2 border-ink shadow-doodle-sm mb-3"
                    />
                    <div className="font-doodle text-lg font-bold text-ink">Pankaj Shrivastava</div>
                    <p className="font-doodle text-xs text-ink-muted">Product Builder &amp; Catalyst</p>
                  </div>
                )}
              </div>

              {/* Mini click hint */}
              <div className="text-center mt-2">
                <span className="font-doodle text-xs text-ink-muted inline-flex items-center gap-1">
                  <span>(click toggle above to switch vibe!)</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Botanical leaf vine trim along card bottom */}
        <div className="absolute -bottom-2 left-6 right-6 flex justify-between pointer-events-none opacity-40">
          <DoodleVine className="w-32 h-5 text-doodle-sage" />
          <DoodleVine className="w-32 h-5 text-doodle-sage hidden md:block" />
        </div>
      </div>

      {/* ── Bio & Timeline Detailed Grid ──────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Interactive Timeline Card */}
        <div className="lg:col-span-5 bg-paper-card border-2 border-ink border-sketch-sm p-6 shadow-doodle relative">
          <div className="flex items-center justify-between pb-3 border-b-2 border-dashed border-ink/20 mb-4">
            <h3 className="text-2xl font-bold font-doodle text-ink flex items-center gap-2">
              <span>Experience & Education</span>
            </h3>
            <span className="text-xs font-doodle bg-doodle-mustard/30 px-2 py-0.5 rounded border border-ink/30">
              Interactive
            </span>
          </div>
          <Timeline />
        </div>

        {/* Right Column: Bio Narrative & Value Propositions */}
        <div className="lg:col-span-7 bg-paper-card border-2 border-ink border-sketch-sm p-6 sm:p-8 shadow-doodle relative flex flex-col justify-between">
          <div>
            {/* Header row with 'Behind the Code' and Human Coordinates sticker */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="font-doodle text-xs font-bold uppercase tracking-wider text-doodle-coral bg-doodle-coral/10 px-2.5 py-1 rounded-full border border-doodle-coral/30">
                  Behind the Code
                </span>
                <DoodleScribble className="w-12 h-3 text-ink/30 hidden sm:block" />
              </div>

              {/* Decoration 1: Human Coordinates Sticker Strip */}
              <div className="inline-flex items-center flex-wrap gap-1.5 px-3 py-1 bg-doodle-mustard/25 border border-ink/40 rounded-full font-doodle text-xs font-bold text-ink shadow-doodle-xs -rotate-0.5">
                {aboutContent.tags ? aboutContent.tags.join(' · ') : '🎨 Artist · 🍳 Home Cook · 💛 Father · 🧭 Traveler · ⚡ Builder'}
              </div>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-3xl sm:text-4xl font-bold font-doodle text-ink mb-1.5 leading-tight">
              {aboutContent.title || 'An Artist’s Soul, an Engineer’s Mind, a Leader’s Heart'}
            </h2>

            <p className="font-doodle text-base sm:text-lg font-semibold text-doodle-coral mb-5 flex items-center gap-2">
              <span>{aboutContent.subtitle || 'From Small-Town Roots to Scaling Systems with Care'}</span>
            </p>

            {/* 3-Paragraph Authentic Narrative Story */}
            <div className="text-base text-ink-light leading-relaxed space-y-4 mb-6 font-sans">
              {aboutContent.bio.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-[15px] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decoration 2: Cozy Corner Accent */}
            <div className="flex items-center justify-end">
              <div className="inline-flex items-center gap-2 font-doodle text-xs text-ink-muted/80 bg-paper px-2.5 py-1 rounded-lg border border-ink/20 shadow-doodle-xs -rotate-1 mb-2">
                <span>☕ Morning curiosity</span>
                <span className="text-ink/30">·</span>
                <span>✈️ New horizons</span>
              </div>
            </div>
          </div>

          {/* Social Links & Resume Actions */}
          <div className="pt-4 border-t-2 border-dashed border-ink/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/pankaj-vijay-shrivastava/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my LinkedIn profile"
                className="pressable-btn inline-flex items-center gap-2 px-4 py-2 bg-paper-card text-ink rounded-xl font-doodle text-base font-bold shadow-doodle-sm"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/linkedin.svg`}
                  alt="LinkedIn Icon"
                  className="w-5 h-5"
                />
                <span>LinkedIn Profile ↗</span>
              </a>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="pressable-btn inline-flex items-center gap-2 px-4 py-2 bg-doodle-coral text-white rounded-xl font-doodle text-base font-bold shadow-doodle-sm cursor-pointer"
              >
                <span>✉️ Email Me</span>
              </button>
            </div>

            <span className="font-doodle text-xs text-ink-muted">
              📍 Greater Bengaluru Area
            </span>
          </div>

        </div>

      </div>

      {/* Handcrafted Contact Postcard Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}
