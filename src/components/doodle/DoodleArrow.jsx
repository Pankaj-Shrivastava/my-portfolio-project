import React from 'react';

export function DoodleArrow({ variant = 'curved-down-right', className = 'w-10 h-10 text-ink' }) {
  if (variant === 'curved-down-right') {
    // Top-left to bottom-right curve with arrow head
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8 C 24 10, 36 22, 38 38" />
        <path d="M26 36 L 39 39 L 40 26" />
      </svg>
    );
  }

  if (variant === 'curved-down-left') {
    // Top-right to bottom-left curve
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M40 8 C 24 10, 12 22, 10 38" />
        <path d="M22 36 L 9 39 L 8 26" />
      </svg>
    );
  }

  if (variant === 'curved-up-right') {
    // Bottom-left to top-right (e.g. "Click to open!")
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 40 C 14 24, 28 14, 40 10" />
        <path d="M27 9 L 41 9 L 39 23" />
      </svg>
    );
  }

  if (variant === 'curved-up-left') {
    // Bottom-right to top-left (e.g. "Try it!")
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M38 40 C 34 24, 20 14, 8 10" />
        <path d="M21 9 L 7 9 L 9 23" />
      </svg>
    );
  }

  if (variant === 'loop-right') {
    // Playful loop arrow
    return (
      <svg className={className} viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18 C 16 6, 32 6, 32 20 C 32 30, 20 28, 22 18 C 24 10, 42 12, 54 26" />
        <path d="M42 27 L 55 27 L 54 16" />
      </svg>
    );
  }

  // Default wavy arrow pointing right
  return (
    <svg className={className} viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12 C 12 8, 20 16, 34 11" />
      <path d="M26 5 L 36 11 L 28 19" />
    </svg>
  );
}
