import React from 'react';
import { timelineData } from './data/timelineData';

export default function Timeline() {
  const [hoveredId, setHoveredId] = React.useState(null);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    // Detect if device supports touch
    const hasTouch = () => {
      return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)
      );
    };
    setIsTouchDevice(hasTouch());
  }, []);

  const handleTouchToggle = (id) => {
    setHoveredId(hoveredId === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-doodle font-bold tracking-wider text-ink uppercase flex items-center gap-1.5">
          <span className="text-doodle-mustard">★</span> Journey Milestones
        </span>
        <span className="text-[11px] font-doodle text-ink-muted">
          {isTouchDevice ? '(tap for dates)' : '(hover for dates)'}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {timelineData.map((entry, index) => (
          <div key={entry.id} className="flex gap-2.5 pb-2 relative">
            {/* Left side: Hand-drawn Pin with vertical line */}
            <div className="flex flex-col items-center">
              {/* Hand-drawn pin / dot */}
              <div className={`w-3.5 h-3.5 rounded-full border-1.5 border-ink flex-shrink-0 mt-0.5 flex items-center justify-center transition-transform ${
                entry.type === 'education'
                  ? 'bg-doodle-blue'
                  : entry.isCurrent
                    ? 'bg-doodle-coral'
                    : 'bg-doodle-mustard'
              } ${hoveredId === entry.id ? 'scale-125' : ''}`}>
                <div className="w-1 h-1 bg-ink rounded-full"></div>
              </div>
              {/* Connecting hand-drawn vertical line */}
              {index < timelineData.length - 1 && (
                <div 
                  className="w-0.5 bg-ink/30 border-l border-dashed border-ink/40 flex-grow mt-1" 
                  style={{ minHeight: '26px' }}
                ></div>
              )}
            </div>

            {/* Right side: Content */}
            <div
              onMouseEnter={() => !isTouchDevice && setHoveredId(entry.id)}
              onMouseLeave={() => !isTouchDevice && setHoveredId(null)}
              onClick={() => isTouchDevice && handleTouchToggle(entry.id)}
              className={`flex-1 py-1.5 px-3 rounded-xl transition-all duration-150 relative group cursor-pointer border-1.5 ${
                hoveredId === entry.id
                  ? 'bg-paper-card border-ink shadow-doodle-sm -translate-y-0.5'
                  : entry.type === 'education'
                    ? 'bg-doodle-blue/10 border-transparent hover:border-ink/40'
                    : 'bg-transparent border-transparent hover:bg-paper-card/70 hover:border-ink/30'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 text-left">
                  <p className="text-xs text-ink-muted font-medium leading-tight">{entry.organization}</p>
                  <p className="text-sm font-semibold font-doodle text-ink leading-tight">{entry.role}</p>
                </div>
                {entry.type === 'education' && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold font-doodle text-doodle-blue bg-doodle-blue/15 border border-doodle-blue/40 rounded-full whitespace-nowrap flex-shrink-0">
                    Edu
                  </span>
                )}
              </div>

              {/* Doodle Tooltip */}
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-ink text-paper font-doodle text-xs rounded-lg whitespace-nowrap pointer-events-none transition-all duration-150 z-20 shadow-doodle-sm border border-paper ${
                hoveredId === entry.id
                  ? 'opacity-100 visible -translate-y-1'
                  : 'opacity-0 invisible'
              }`}>
                {entry.isCurrent && (
                  <span className="font-bold text-doodle-mustard">Currently · </span>
                )}
                {entry.dateFrom} - {entry.dateTo}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-ink"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
