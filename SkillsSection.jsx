import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: t.skills.categories.all },
    { key: 'biochem', label: t.skills.categories.biochem },
    { key: 'molecular', label: t.skills.categories.molecular },
    { key: 'ai', label: t.skills.categories.ai },
    { key: 'pharma', label: t.skills.categories.pharma },
    { key: 'soft', label: t.skills.categories.soft },
  ];

  const filteredSkills = activeCategory === 'all'
    ? t.skills.items
    : t.skills.items.filter(s => s.category === activeCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'biochem':
        return 'from-emerald-500 to-emerald-600';
      case 'molecular':
        return 'from-teal-500 to-cyan-500';
      case 'ai':
        return 'from-indigo-500 to-blue-600';
      case 'pharma':
        return 'from-cyan-500 to-teal-600';
      case 'soft':
        return 'from-amber-500 to-orange-500';
      default:
        return 'from-emerald-500 to-teal-500';
    }
  };

  return (
    <section id="skills" className="relative py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 mb-3">
            <span>//</span>
            <span>{t.skills.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.key
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-16">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {skill.desc}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                  {skill.level}%
                </span>
              </div>

              {/* Precision Skill Progress Bar */}
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} transition-all duration-700 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t.skills.categories.languages}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Bilingual scientific communication proficiency
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.skills.languagesList.map((lang, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {lang.name}
                  </h4>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    {lang.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {lang.note}
                </p>
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
