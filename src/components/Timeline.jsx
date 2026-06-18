import React from 'react';
import { timelineData } from './data/timelineData';

export default function Timeline() {
  return (
    <div className="w-5/6 md:w-4/5 mx-auto">
      <div className="flex flex-col gap-0">
        {timelineData.map((entry, index) => (
          <div key={entry.id} className="flex gap-2 pb-2 relative">
            {/* Left side: Logo with connecting line */}
            <div className="flex flex-col items-center">
              {/* Logo in square */}
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm flex-shrink-0 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/${entry.logo}`}
                  alt={entry.organization}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Vertical connecting line */}
              {index < timelineData.length - 1 && (
                <div className="w-0.5 bg-slate-200 flex-grow mt-0.5" style={{ minHeight: '32px' }}></div>
              )}
            </div>

            {/* Right side: Content */}
            <div
              className={`flex-1 pt-0.5 pb-1 px-2 rounded-lg ${
                entry.type === 'education'
                  ? 'bg-blue-50 border border-blue-100'
                  : ''
              }`}
            >
              {entry.type === 'education' && (
                <span className="px-1.5 py-0.5 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full inline-block">
                  Education
                </span>
              )}
              <p className="text-xs text-slate-700 font-medium mt-0.5">{entry.role}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {entry.isCurrent && (
                  <span className="font-semibold text-slate-600">Currently · </span>
                )}
                {entry.dateFrom} - {entry.dateTo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
