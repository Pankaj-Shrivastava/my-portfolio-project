import React from 'react';
import { Link } from 'react-router-dom';

export default function DoodleButton({
  children,
  to,
  href,
  onClick,
  variant = 'coral', // coral, mustard, sage, white
  size = 'md', // sm, md, lg
  className = '',
  sparkles = false,
  target,
  rel,
  ...props
}) {
  const variantStyles = {
    coral: 'bg-doodle-coral hover:bg-doodle-coral-dark text-white font-bold',
    mustard: 'bg-doodle-mustard hover:bg-doodle-mustard-dark text-ink font-bold',
    sage: 'bg-doodle-sage hover:bg-doodle-sage-dark text-white font-bold',
    white: 'bg-paper-card hover:bg-paper-muted text-ink font-semibold',
  }[variant] || 'bg-doodle-coral text-white font-bold';

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm tracking-wide',
    md: 'px-5 py-2 text-base font-doodle text-lg tracking-wide',
    lg: 'px-7 py-3 text-xl font-doodle tracking-wide',
  }[size] || 'px-5 py-2 text-base font-doodle text-lg';

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    pressable-btn border-2 border-ink border-sketch-pill
    select-none text-center cursor-pointer transition-all duration-150
    ${variantStyles}
    ${sizeStyles}
    ${className}
  `.trim();

  const content = (
    <>
      {sparkles && (
        <span className="text-doodle-mustard font-bold text-xs">✦</span>
      )}
      <span>{children}</span>
      {sparkles && (
        <span className="text-doodle-mustard font-bold text-xs">✦</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} {...props}>
      {content}
    </button>
  );
}
