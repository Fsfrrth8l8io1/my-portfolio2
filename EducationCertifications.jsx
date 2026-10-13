import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CertificateModal } from './CertificateModal';

export const EducationCertifications = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="relative py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 mb-3">
            <span>//</span>
            <span>{t.education.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.education.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.education.subtitle}
          </p>
        </div>

        {/* Top Feature: Cairo University Academic Degree Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 dark:border-slate-800 mb-12 relative overflow-hidden group">
          {/* Subtle gradient accent top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                  {t.education.year}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Cairo, Egypt
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.education.degreeTitle}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                {t.education.institution}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {t.education.department}
              </p>
            </div>

            <div className="lg:text-right shrink-0">
              <span className="inline-block px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-mono font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                Major: Chemistry & Biochemistry
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 my-6 leading-relaxed max-w-4xl">
            {t.education.overview}
          </p>

          {/* Key Coursework Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              {t.education.keyCourses}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.education.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Sub-heading */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {t.education.certTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.education.certSubtitle}
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
            {t.education.certs.length} Accredited Certificates
          </span>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.education.certs.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
                
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {cert.name}
                </h4>
                
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 truncate max-w-[180px]">
                  {cert.credentialId}
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:underline">
                  <span>Details</span>
                  <svg className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
