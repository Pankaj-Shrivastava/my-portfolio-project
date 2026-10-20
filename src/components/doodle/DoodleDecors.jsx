import React from 'react';

// Hand-drawn botanical leaves and vines
export function DoodleVine({ className = "w-32 h-6 text-doodle-sage" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M2 14C25 10 45 16 70 12C95 8 110 14 118 10" />
      {/* Leaves */}
      <path d="M22 12C20 6 28 3 32 8C33 11 26 13 22 12Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M48 13C46 19 54 22 58 17C59 14 52 12 48 13Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M76 11C74 5 82 2 86 7C87 10 80 12 76 11Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M100 11C98 17 106 20 110 15C111 12 104 10 100 11Z" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

// Hand-drawn star with slight wobble
export function DoodleStar({ className = "w-6 h-6 text-doodle-mustard", fill = "currentColor", stroke = "#231F20" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M16 2.5L19.8 11.2C20.3 12.3 21.3 13.1 22.5 13.3L31.8 14.5C32.6 14.6 32.9 15.6 32.3 16.2L25.3 22.7C24.4 23.5 24 24.7 24.3 25.9L26.1 35.1C26.3 35.9 25.4 36.6 24.7 36.1L16.6 31.5C15.6 30.9 14.4 30.9 13.4 31.5L5.3 36.1C4.6 36.6 3.7 35.9 3.9 35.1L5.7 25.9C6 24.7 5.6 23.5 4.7 22.7L-2.3 16.2C-2.9 15.6 -2.6 14.6 -1.8 14.5L7.5 13.3C8.7 13.1 9.7 12.3 10.2 11.2L14 2.5C14.4 1.7 15.6 1.7 16 2.5Z" 
        transform="translate(1, -1) scale(0.9)"
        fill={fill} 
        stroke={stroke} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Hand-drawn Sparkle Burst (4-pointed star)
export function DoodleSparkle({ className = "w-5 h-5 text-doodle-mustard" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#231F20"
      strokeWidth="1.5"
    >
      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
  );
}

// Click Burst / Action lines (3 radiating lines)
export function DoodleActionLines({ className = "w-6 h-6 text-ink" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <path d="M4 12L1 12" />
      <path d="M6 6L3 3" />
      <path d="M12 4L12 1" />
      <path d="M18 6L21 3" />
      <path d="M20 12L23 12" />
    </svg>
  );
}

// Squiggle / Zig-zag sketch divider (wwwww)
export function DoodleScribble({ className = "w-20 h-4 text-ink" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 80 16" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M2 11C6 4 10 12 14 6C18 13 22 5 26 12C30 4 34 11 38 7C42 12 46 5 50 11C54 6 58 13 62 7C66 12 70 5 74 10C76 12 78 8 79 10" />
    </svg>
  );
}

// Hand-drawn radiating rays for section titles (彡 彡)
export function DoodleRaysLeft({ className = "w-6 h-6 text-doodle-mustard" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <path d="M18 6C14 7 8 11 5 13" />
      <path d="M20 12C15 12 9 14 4 17" />
      <path d="M18 18C14 17 8 18 5 21" />
    </svg>
  );
}

export function DoodleRaysRight({ className = "w-6 h-6 text-doodle-mustard" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    >
      <path d="M6 6C10 7 16 11 19 13" />
      <path d="M4 12C9 12 15 14 20 17" />
      <path d="M6 18C10 17 16 18 19 21" />
    </svg>
  );
}

// Doodle Hand cursor icon for hover clues
export function DoodleHandCursor({ className = "w-6 h-6 text-ink" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="#FFFDF9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M10 3V13" />
      <path d="M10 8.5C10 7.5 11.5 7.5 11.5 8.5V13" />
      <path d="M11.5 9.5C11.5 8.5 13 8.5 13 9.5V13" />
      <path d="M13 10.5C13 9.5 14.5 9.5 14.5 10.5V14.5C14.5 17.5 12.5 20.5 9.5 20.5C6.5 20.5 5 18 5 15.5L7 12C7.5 11 9 11 9.5 12.5L10 13" />
    </svg>
  );
}
