import React, { useState, useEffect } from 'react';
import { DoodleSparkle } from '../doodle/DoodleDecors';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  const email = 'pankajvijayshrivastava@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/pankaj-vijay-shrivastava/';

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        success = true;
      }
    } catch {
      // Fallback below
    }

    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      } catch (err) {
        console.error('Fallback copy error:', err);
      }
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto px-4 py-8 sm:py-12 flex min-h-screen items-center justify-center"
    >
      {/* Dimmed Sketchbook Backdrop with Soft Blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Main Postcard Modal Card with clean top & bottom margins */}
      <div className="relative w-full max-w-lg my-auto bg-paper-card border-2 border-ink border-sketch shadow-doodle-lg p-5 sm:p-7 z-10 animate-in zoom-in-95 fade-in duration-200">
        
        {/* Top Paper Tape Sticker Decor */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-6 bg-doodle-mustard/60 border border-ink/40 -rotate-1 pointer-events-none shadow-sm flex items-center justify-center">
          <span className="font-doodle text-[10px] text-ink font-bold tracking-wider uppercase opacity-75">
            ★ Special Dispatch ★
          </span>
        </div>

        {/* Circular Sketch Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full border-1.5 border-ink bg-paper hover:bg-doodle-coral hover:text-white transition-all shadow-doodle-xs flex items-center justify-center font-bold text-sm cursor-pointer pressable-btn"
        >
          ✕
        </button>

        {/* Postcard Stamp / Badge (Category A Option 4) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-doodle-mustard/30 border border-ink rounded-full text-xs font-doodle font-bold text-ink mb-2 shadow-doodle-xs">
          <span>🗺️ Wanderer’s Curiosity · Builder’s Focus 💡</span>
        </div>

        {/* Hand-Drawn Headline */}
        <h3
          id="contact-modal-title"
          className="font-doodle text-2xl sm:text-3xl font-bold text-ink mb-2 leading-tight"
        >
          The best journeys start with a simple 'hello'.
        </h3>

        {/* Sub-Message */}
        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-3">
          From zero-to-one problem discovery to rallying teams around a shared vision, let’s explore how we can create real impact together.
        </p>

        {/* Micro Doodle Annotation */}
        <div className="flex items-center gap-1.5 text-xs font-doodle text-doodle-coral font-bold mb-4 -rotate-1">
          <DoodleSparkle className="w-3.5 h-3.5 text-doodle-mustard" />
          <span>No formalities needed—just honest problem solving!</span>
        </div>

        {/* Contact Methods Stack */}
        <div className="space-y-3">
          
          {/* Email Block */}
          <div className="bg-paper p-3.5 sm:p-4 rounded-xl border-1.5 border-ink shadow-doodle-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-doodle text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                <span>✉️ Email Address</span>
              </span>
              {copied && (
                <span className="font-doodle text-xs font-bold text-doodle-sage animate-bounce">
                  ✨ Copied to clipboard!
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-paper-card p-2.5 rounded-lg border border-ink/30">
              <span className="font-mono text-xs sm:text-sm text-ink select-all break-all sm:break-normal font-semibold">
                {email}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`pressable-btn px-3 py-1.5 rounded-lg font-doodle text-xs font-bold border-1.5 border-ink transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap flex-1 sm:flex-initial ${
                    copied
                      ? 'bg-doodle-sage text-white shadow-[1px_1px_0px_#231F20]'
                      : 'bg-doodle-coral text-white shadow-doodle-xs hover:bg-doodle-coral-dark'
                  }`}
                >
                  <span>{copied ? '✅ Copied!' : '📋 Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${email}`}
                  className="pressable-btn px-2.5 py-1.5 bg-paper text-ink hover:bg-paper-muted rounded-lg font-doodle text-xs font-bold border-1.5 border-ink shadow-doodle-xs flex items-center justify-center"
                  title="Open in mail app"
                >
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Block */}
          <div className="bg-paper p-3.5 sm:p-4 rounded-xl border-1.5 border-ink shadow-doodle-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-doodle text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
                <span>💼 Professional Network</span>
              </span>
              <span className="font-doodle text-xs text-ink-muted">
                linkedin.com/in/pankaj-vijay-shrivastava
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              <div className="text-xs font-doodle text-ink-muted">
                Fastest response for recruitment, referrals & product leadership discussions.
              </div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable-btn px-4 py-2 bg-doodle-sage hover:bg-doodle-sage-dark text-white rounded-lg font-doodle text-xs sm:text-sm font-bold border-1.5 border-ink shadow-doodle-xs flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <span className="font-sans text-xs">↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Bottom Sign-off */}
        <div className="mt-4 pt-3 border-t-2 border-dashed border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-doodle text-ink-muted">
          <span>📍 Greater Bengaluru Area</span>
          <span className="text-doodle-coral font-bold">⚡ Usually replies within 24h</span>
        </div>

      </div>
    </div>
  );
}
