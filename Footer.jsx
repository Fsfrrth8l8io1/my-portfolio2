import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-slate-200 dark:border-slate-800/80 bg-white/40 dark:bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                Athila Taher Mahmoud
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.footer.academicAffiliation}
            </p>
          </div>

          {/* Central Tagline */}
          <div className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
            {t.footer.tagline}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-all shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
          <span>© {new Date().getFullYear()} Athila Taher Mahmoud. {t.footer.rights}</span>
          <span>Cairo University • B.Sc. Chemistry & Biochemistry</span>
        </div>
      </div>
    </footer>
  );
};
