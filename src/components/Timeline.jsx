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
    <div className="w-5/6 md:w-4/5 mx-auto">
      <div className="flex flex-col gap-0">
        {timelineData.map((entry, index) => (
          <div key={entry.id} className="flex gap-2 pb-2 relative">
            {/* Left side: Dot with connecting line */}
            <div className="flex flex-col items-center">
              {/* Dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-slate-400 flex-shrink-0 mt-1"></div>
              {/* Vertical connecting line */}
              {index < timelineData.length - 1 && (
                <div 
                  className="w-0.5 bg-gradient-to-b from-slate-300 to-slate-200 flex-grow mt-0.5" 
                  style={{ minHeight: '24px' }}
                ></div>
              )}
            </div>

            {/* Right side: Content */}
            <div
              onMouseEnter={() => !isTouchDevice && setHoveredId(entry.id)}
              onMouseLeave={() => !isTouchDevice && setHoveredId(null)}
              onClick={() => isTouchDevice && handleTouchToggle(entry.id)}
              className={`flex-1 py-0.5 px-2 rounded transition-all duration-200 relative group cursor-pointer ${
                entry.type === 'education'
                  ? 'bg-blue-50 border border-blue-100'
                  : hoveredId === entry.id 
                    ? 'bg-slate-50 border border-slate-200' 
                    : ''
              }`}
            >
              <div className="flex items-start justify-start gap-2">
                <div className="flex-1 text-left">
                  <p className="text-xs text-slate-500 font-medium leading-tight">{entry.organization}</p>
                  <p className="text-xs text-slate-700 font-semibold leading-tight">{entry.role}</p>
                </div>
                {entry.type === 'education' && (
                  <span className="px-1.5 py-0.5 text-xs font-semibold text-blue-700 bg-blue-100 rounded whitespace-nowrap flex-shrink-0 mt-0.5 ml-auto">
                    Edu
                  </span>
                )}
              </div>

              {/* Tooltip */}
              <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-slate-50 text-xs rounded whitespace-nowrap pointer-events-none transition-all duration-200 z-10 ${
                hoveredId === entry.id
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}>
                {entry.isCurrent && (
                  <span className="font-semibold">Currently · </span>
                )}
                {entry.dateFrom} - {entry.dateTo}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
              </div>

              {/* Mobile indicator for tapable content */}
              {isTouchDevice && hoveredId !== entry.id && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity">
                  <span className="text-xs text-slate-400">tap for dates</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
