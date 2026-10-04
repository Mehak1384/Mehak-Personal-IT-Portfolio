import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenRecruiterBrief: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenRecruiterBrief }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-800 gap-6">
          <div className="space-y-1">
            <span className="text-lg font-bold tracking-tight text-white">
              Mehak
            </span>
            <p className="text-xs text-slate-400">
              IT & Software Portfolio · BCA Graduate (2022–2025) · Chitkara University
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <button onClick={onOpenRecruiterBrief} className="text-teal-400 hover:text-teal-300 transition-colors">
              Recruiter 30s Brief
            </button>
            <button onClick={onOpenResume} className="text-teal-400 hover:text-teal-300 transition-colors">
              Resume
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Email Mehak"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors ml-2"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
            <span>Built in compliance with authentic technical evidence standards. No unverified claims.</span>
          </div>

          <div>
            © {new Date().getFullYear()} Mehak. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
