import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Database, Terminal, Server, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenRecruiterBrief: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenRecruiterBrief }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Header (Strictly NO pills per design constitution) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="text-teal-700">Chitkara University</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>BCA Graduate (2022–2025)</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-700">Software & IT Engineering</span>
            </div>

            {/* Display Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none text-balance">
                Mehak
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-teal-700 tracking-tight">
                {PORTFOLIO_DATA.profile.title}
              </p>
            </div>

            {/* Supporting Statement from PRD */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.profile.supportingStatement}
            </p>

            {/* Target Job Roles: Clean unboxed typographic layout */}
            <div className="pt-1">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Target Roles
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                Software Engineer Trainee <span className="text-slate-300 mx-1">·</span> 
                Backend Developer (Entry Level) <span className="text-slate-300 mx-1">·</span> 
                Graduate Engineer Trainee <span className="text-slate-300 mx-1">·</span> 
                Database / SQL Roles <span className="text-slate-300 mx-1">·</span> 
                Cloud / DevOps Trainee
              </p>
            </div>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-700" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onOpenRecruiterBrief}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>60s Recruiter Brief</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="pt-2 flex items-center gap-5 text-sm text-slate-600">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors group"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4 text-slate-700 group-hover:text-slate-900" />
                <span className="text-xs font-medium">github.com/Mehak1384</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors group"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-slate-700 group-hover:text-slate-900" />
                <span className="text-xs font-medium">LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors group"
                aria-label="Email Mehak"
              >
                <Mail className="w-4 h-4 text-slate-700 group-hover:text-slate-900" />
                <span className="text-xs font-medium">{PORTFOLIO_DATA.profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Technical Badges & Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
              {/* Technical Monogram & Identity Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg tracking-tight shrink-0">
                  M
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 leading-tight">Mehak</div>
                  <p className="text-xs text-teal-700 font-medium mt-0.5">BCA Graduate · IT & Software</p>
                  <p className="text-[11px] text-slate-500">Chitkara University (2022–2025)</p>
                </div>
              </div>

              {/* Verified Credentials Box */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-800">Primary Technical Focus</span>
                  <span>Verified Work</span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Core Languages:</span>
                    <span className="font-semibold text-slate-900">Python · SQL · PostgreSQL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Backend & API:</span>
                    <span className="font-semibold text-slate-900">REST Concepts · bcrypt · psycopg2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Systems & Tools:</span>
                    <span className="font-semibold text-slate-900">Linux · Git/GitHub · Postman</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Current Focus:</span>
                    <span className="font-medium text-teal-700">Azure Cloud & DevOps CI/CD</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Evidence-Based Scope</span>
                  </span>
                  <a
                    href="#projects"
                    className="font-semibold text-teal-700 hover:text-teal-800 hover:underline"
                  >
                    Inspect 2 Projects →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
