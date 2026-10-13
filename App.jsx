import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ScientificBackdrop } from './components/ScientificBackdrop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickMetrics } from './components/QuickMetrics';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertifications } from './components/EducationCertifications';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function PortfolioContent() {
  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Background Ambience & Vectors */}
      <ScientificBackdrop />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow z-10">
        <Hero />
        <QuickMetrics />
        <ExperienceTimeline />
        <EducationCertifications />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
