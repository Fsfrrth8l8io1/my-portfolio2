import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const QuickMetrics = () => {
  const { t } = useLanguage();

  const metricsData = [
    {
      value: t.metrics.internships.value,
      label: t.metrics.internships.label,
      sub: t.metrics.internships.sub,
      color: "from-emerald-500 to-emerald-600",
      border: "hover:border-emerald-500/40"
    },
    {
      value: t.metrics.institution.value,
      label: t.metrics.institution.label,
      sub: t.metrics.institution.sub,
      color: "from-teal-500 to-cyan-600",
      border: "hover:border-cyan-500/40"
    },
    {
      value: t.metrics.techDomain.value,
      label: t.metrics.techDomain.label,
      sub: t.metrics.techDomain.sub,
      color: "from-indigo-500 to-violet-600",
      border: "hover:border-indigo-500/40"
    },
    {
      value: t.metrics.methodologies.value,
      label: t.metrics.methodologies.label,
      sub: t.metrics.methodologies.sub,
      color: "from-emerald-500 to-cyan-500",
      border: "hover:border-emerald-500/40"
    }
  ];

  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsData.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl glass-panel glass-panel-hover border transition-all duration-300 ${item.border}`}
            >
              <div className="flex flex-col h-full justify-between space-y-3">
                <span className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-mono tracking-tight`}>
                  {item.value}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
