import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationCertificationsSection } from './components/EducationCertificationsSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterBriefModal } from './components/RecruiterBriefModal';
import { Sparkles, FileText } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [recruiterBriefOpen, setRecruiterBriefOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setResumeOpen(false);
        setRecruiterBriefOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenRecruiterBrief={() => setRecruiterBriefOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenRecruiterBrief={() => setRecruiterBriefOpen(true)}
        />
        <About />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationCertificationsSection />
        <LearningJourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onOpenRecruiterBrief={() => setRecruiterBriefOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
      <RecruiterBriefModal
        isOpen={recruiterBriefOpen}
        onClose={() => setRecruiterBriefOpen(false)}
        onOpenResume={() => {
          setRecruiterBriefOpen(false);
          setResumeOpen(true);
        }}
      />

      {/* Floating Recruiter Quick-Action Bar for instant access */}
      <aside aria-label="Recruiter quick access" className="fixed bottom-4 right-4 z-30 flex items-center gap-2 print:hidden">
        <button
          onClick={() => setRecruiterBriefOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-teal-900 bg-white border border-teal-200/90 rounded-full shadow-md hover:bg-teal-50 transition-all hover:scale-102"
          title="Open 30-Second Recruiter Brief"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Recruiter 30s View</span>
        </button>
        <button
          onClick={() => setResumeOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-full shadow-md hover:bg-slate-800 transition-all hover:scale-102"
          title="Open Resume"
        >
          <FileText className="w-3.5 h-3.5 text-teal-400" />
          <span>Resume</span>
        </button>
      </aside>
    </div>
  );
}
