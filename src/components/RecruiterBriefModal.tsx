import React from 'react';
import { X, CheckCircle2, Download, ExternalLink, Mail, Github, Linkedin, ShieldCheck, Terminal, HeartPulse, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RecruiterBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterBriefModal: React.FC<RecruiterBriefModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recruiter-brief-title"
      >
        {/* Header */}
        <div className="bg-slate-900 px-6 py-5 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>30-Second Recruiter & Hiring Manager Brief</span>
            </div>
            <h2 id="recruiter-brief-title" className="text-xl font-bold tracking-tight text-white">
              Candidate Overview: Mehak
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Verified answers to the core questions technical screeners need in under 60 seconds.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close brief"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-slate-800 text-sm">
          {/* Question 1 & 2 */}
          <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                1. Who is Mehak?
              </h3>
              <p className="font-semibold text-slate-900">
                BCA Graduate (2022–2025) from Chitkara University
              </p>
              <p className="text-slate-600 text-xs mt-1">
                IT & Software enthusiast building hands-on solutions with Python, relational databases, Linux, and cloud fundamentals.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                2. Target IT Roles
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                <span className="font-medium text-teal-700">Software Engineer Trainee</span> · 
                <span className="font-medium text-teal-700">Backend Developer (Entry)</span> · 
                <span className="font-medium text-teal-700">Graduate Engineer Trainee</span> · 
                <span className="font-medium text-teal-700">Database / SQL Roles</span> · 
                <span className="font-medium text-teal-700">Cloud / DevOps Trainee</span>
              </div>
            </div>
          </div>

          {/* Question 3: Technologies */}
          <div className="pb-4 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              3. What technologies does she actually know?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="font-semibold text-slate-900 mb-1">Working Knowledge (Practical Implementation)</div>
                <p className="text-slate-600 leading-relaxed">
                  Python, SQL, PostgreSQL, Relational DB Design, CRUD Operations, REST API Concepts, bcrypt Authentication, Git/GitHub, Postman.
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="font-semibold text-slate-900 mb-1">Fundamentals & Currently Learning</div>
                <p className="text-slate-600 leading-relaxed">
                  Linux (CLI, permissions, processes), Microsoft Azure Fundamentals (compute/storage/networking), DevOps (Docker & CI/CD basics), Power BI & Advanced Excel.
                </p>
              </div>
            </div>
          </div>

          {/* Question 4: What has she actually built? */}
          <div className="pb-4 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              4. What has she actually built? (Verified Scope)
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-teal-50/50 p-3 rounded-lg border border-teal-100">
                <Terminal className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">
                    Sattvik Bhojan Management System{' '}
                    <span className="text-xs font-normal text-teal-700">· Completed Working Prototype</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Python + PostgreSQL console-based system with bcrypt authentication, customer catalog, menu records, order calculation, and revenue transaction reporting. (Note: Strictly console application, not web/cloud).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                <Globe className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">
                    GitHub Username Finder & Redirector{' '}
                    <span className="text-xs font-normal text-emerald-700">· Completed Working Prototype</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Python + Flask web tool leveraging GitHub REST API to validate usernames before redirection, preventing dead-end 404 screens and delivering structured diagnostic guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                <HeartPulse className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">
                    MediAI — Healthcare Guidance & Report Analysis{' '}
                    <span className="text-xs font-normal text-blue-700">· In Development</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Designed responsive patient portal UI wireframes (HTML/CSS/JS), engineered Python backend class architecture, and structured PostgreSQL database schemas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 5 & 6: Code & Resume */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                5. Code & Repositories
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Verifiable code with complete README documentation and PostgreSQL schemas.
              </p>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                6. Resume & Contact
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Synchronized ATS-optimized resume ready for download or view.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded hover:bg-slate-800"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Open Resume</span>
                </button>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-600" />
                  <span>Email Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Direct Email: {PORTFOLIO_DATA.profile.email}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors"
          >
            Close Brief
          </button>
        </div>
      </div>
    </div>
  );
};
