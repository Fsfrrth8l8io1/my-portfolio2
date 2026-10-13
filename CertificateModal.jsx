import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CertificateModal = ({ cert, isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-xl glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-300 transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400">
                {t.education.certTitle}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {cert.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {cert.issuer}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label={t.modal.close}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
              {t.modal.institution}
            </h4>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {cert.issuer}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
              {t.modal.date}
            </h4>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {cert.date}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
              {t.modal.skillsCovered}
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {cert.skills.split(',').map((s, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                >
                  {s.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
              Description & Verification Scope
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
              {cert.description}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="block text-[11px] font-mono text-slate-400 uppercase">
                {t.modal.credentialId}
              </span>
              <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                {cert.credentialId}
              </span>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
              Verified ✓
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
