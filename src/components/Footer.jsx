import React from 'react';
import { DoodleStar, DoodleVine } from './doodle/DoodleDecors';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t-2 border-ink bg-paper mt-auto relative overflow-hidden py-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Handcrafted copyright */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-doodle text-xl font-bold text-ink tracking-wide">
              Pankaj Shrivastava
            </span>
            <DoodleStar className="w-4 h-4 text-doodle-mustard" />
          </div>
          <p className="font-doodle text-sm text-ink-muted">
            Handcrafted with doodles, code & coffee · © {new Date().getFullYear()}
          </p>
        </div>

        {/* Center: Delicate Botanical Vine */}
        <div className="hidden md:block opacity-60">
          <DoodleVine className="w-28 h-5 text-doodle-sage" />
        </div>

        {/* Right Side: Back to top pressable button */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="pressable-btn px-4 py-1.5 bg-paper-card border-2 border-ink rounded-xl font-doodle text-sm font-bold text-ink shadow-doodle-sm flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <span className="text-doodle-coral">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
