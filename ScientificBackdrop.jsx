import React from 'react';

export const ScientificBackdrop = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl filter animate-pulse-subtle" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl filter" />
      <div className="absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl filter" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 scientific-grid opacity-60 dark:opacity-40" />

      {/* Modern Molecular Geometry Accents (Pure SVG, no raster images) */}
      <svg
        className="absolute top-20 right-10 w-72 h-72 text-emerald-500/10 dark:text-emerald-400/5 transition-opacity"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Hexagonal molecular ring network */}
        <polygon points="100,20 135,40 135,80 100,100 65,80 65,40" />
        <polygon points="135,80 170,100 170,140 135,160 100,140 100,100" />
        <polygon points="65,80 100,100 100,140 65,160 30,140 30,100" />
        <circle cx="100" cy="20" r="3" fill="currentColor" />
        <circle cx="135" cy="40" r="3" fill="currentColor" />
        <circle cx="135" cy="80" r="4" fill="currentColor" />
        <circle cx="100" cy="100" r="4" fill="currentColor" />
        <circle cx="65" cy="80" r="3" fill="currentColor" />
        <circle cx="65" cy="40" r="3" fill="currentColor" />
        <circle cx="170" cy="100" r="3" fill="currentColor" />
        <circle cx="170" cy="140" r="3" fill="currentColor" />
        <circle cx="135" cy="160" r="3" fill="currentColor" />
        <circle cx="100" cy="140" r="4" fill="currentColor" />
        <circle cx="65" cy="160" r="3" fill="currentColor" />
        <circle cx="30" cy="140" r="3" fill="currentColor" />
        <circle cx="30" cy="100" r="3" fill="currentColor" />
      </svg>

      <svg
        className="absolute bottom-40 left-10 w-64 h-64 text-cyan-500/10 dark:text-cyan-400/5"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Data science node matrix */}
        <line x1="20" y1="50" x2="80" y2="30" strokeDasharray="3 3" />
        <line x1="80" y1="30" x2="140" y2="70" />
        <line x1="80" y1="30" x2="90" y2="130" />
        <line x1="140" y1="70" x2="180" y2="120" strokeDasharray="3 3" />
        <line x1="90" y1="130" x2="150" y2="170" />
        <line x1="20" y1="50" x2="50" y2="120" />
        <line x1="50" y1="120" x2="90" y2="130" strokeDasharray="3 3" />
        <circle cx="20" cy="50" r="4" fill="currentColor" />
        <circle cx="80" cy="30" r="5" fill="currentColor" />
        <circle cx="140" cy="70" r="4" fill="currentColor" />
        <circle cx="180" cy="120" r="4" fill="currentColor" />
        <circle cx="50" cy="120" r="3" fill="currentColor" />
        <circle cx="90" cy="130" r="5" fill="currentColor" />
        <circle cx="150" cy="170" r="4" fill="currentColor" />
      </svg>
    </div>
  );
};
