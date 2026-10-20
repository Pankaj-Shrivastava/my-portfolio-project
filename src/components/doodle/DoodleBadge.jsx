import React from 'react';

export default function DoodleBadge({
  children,
  variant = 'default', // default, sage, coral, mustard, blue
  className = '',
}) {
  const variantStyles = {
    default: 'bg-paper-muted text-ink border-ink',
    sage: 'bg-doodle-sage-light text-doodle-sage-dark border-ink',
    coral: 'bg-doodle-coral-light text-doodle-coral-dark border-ink',
    mustard: 'bg-doodle-mustard-light text-ink border-ink',
    blue: 'bg-doodle-blue-light text-doodle-blue border-ink',
  }[variant] || 'bg-paper-muted text-ink border-ink';

  return (
    <span
      className={`
        inline-flex items-center px-3 py-0.5
        border-1.5 border-ink border-sketch-pill
        text-xs font-semibold font-doodle tracking-wide shadow-[1.5px_1.5px_0px_#231F20]
        ${variantStyles}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
}
