import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceTimeline = () => {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { key: 'all', label: t.experience.filterAll },
    { key: 'ai', label: t.experience.filterAI },
    { key: 'molecular', label: t.experience.filterMolecular },
    { key: 'pharma', label: t.experience.filterPharma },
    { key: 'education', label: t.experience.filterEducation },
  ];

  const filteredItems = filter === 'all'
    ? t.experience.items
    : t.experience.items.filter(item => item.category === filter);

  const getCategoryBadgeStyles = (category) => {
    switch (category) {
      case 'ai':
        return 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60';
      case 'molecular':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      case 'pharma':
        return 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60';
      case 'education':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="experience" className="relative py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 mb-3">
            <span>//</span>
            <span>{t.experience.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.experience.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 dark:border-slate-800">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.key
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className={`hidden md:block absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-indigo-500 opacity-30 ${
              isRTL ? 'right-6' : 'left-6'
            }`}
          />

          {/* Timeline Cards */}
          <div className="space-y-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start gap-6 group"
              >
                {/* Timeline Node Point (Desktop) */}
                <div
                  className={`hidden md:flex relative z-10 w-12 h-12 rounded-xl glass-panel border border-emerald-500/30 items-center justify-center text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:border-emerald-500 transition-all shrink-0 ${
                    isRTL ? 'mr-0' : 'ml-0'
                  }`}
                >
                  0{idx + 1}
                </div>

                {/* Experience Card */}
                <div className="flex-1 w-full glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 transition-all duration-300">
                  
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getCategoryBadgeStyles(item.category)}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 shrink-0 self-start sm:self-auto border border-slate-200 dark:border-slate-700">
                      {item.period}
                    </div>
                  </div>

                  {/* Description Overview */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Responsibilities List */}
                  <div className="space-y-2.5 mb-6">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <svg
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology / Protocol Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
