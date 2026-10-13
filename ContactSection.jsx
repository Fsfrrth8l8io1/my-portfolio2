import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Build mailto link so it directly opens user's email client with pre-filled fields
    const mailto = `mailto:athilataher@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-500/20 mb-3">
            <span>//</span>
            <span>{t.contact.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Communication Channels (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  {t.contact.emailLabel}
                </span>
                <button
                  onClick={() => handleCopy(t.contact.emailValue, 'email')}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  {copiedType === 'email' ? t.contact.copiedMsg : t.contact.copyBtn}
                </button>
              </div>
              <a
                href={`mailto:${t.contact.emailValue}`}
                className="block text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors font-mono tracking-tight"
              >
                {t.contact.emailValue}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct inbox for research, internship inquiries, and collaborations.
              </p>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  {t.contact.phoneLabel}
                </span>
                <button
                  onClick={() => handleCopy(t.contact.phoneValue, 'phone')}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
                >
                  {copiedType === 'phone' ? t.contact.copiedMsg : t.contact.copyBtn}
                </button>
              </div>
              <a
                href={`tel:${t.contact.phoneValue}`}
                className="block text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors font-mono tracking-tight"
              >
                {t.contact.phoneValue}
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct phone and WhatsApp communication (Cairo, Egypt).
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  {t.contact.linkedinLabel}
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
              <a
                href={t.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors font-mono tracking-tight break-all"
              >
                {t.contact.linkedinDisplay} ↗
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Connect on LinkedIn for professional endorsements and networking.
              </p>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{t.contact.locationLabel}: <strong className="text-slate-800 dark:text-slate-200">{t.contact.locationValue}</strong></span>
            </div>

          </div>

          {/* Interactive Contact Dispatch Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t.contact.sendMessage}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to transmit a message directly to Athila.
              </p>

              {formSubmitted && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-500/30 text-xs sm:text-sm font-medium">
                  {t.contact.formSuccess}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.formPlaceholderName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.formPlaceholderEmail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                    {t.contact.formSubject}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.formPlaceholderSubject}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 font-semibold mb-1">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.formPlaceholderMessage}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>{t.contact.formSubmit}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
