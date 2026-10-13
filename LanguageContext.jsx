import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('athila_portfolio_lang');
      if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        return savedLang;
      }
    }
    return 'en';
  });

  const isRTL = language === 'ar';
  const t = translations[language] || translations.en;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    localStorage.setItem('athila_portfolio_lang', language);
  }, [language, isRTL]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
