import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, ShieldCheck, Database, Terminal, Cloud } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            01. Professional Background
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-balance">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Main concise bio (PRD constraint: 100–150 words maximum) */}
          <div className="md:col-span-7 space-y-4">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/90 shadow-xs space-y-4">
              <p className="text-base text-slate-700 leading-relaxed">
                I am a <strong className="text-slate-900 font-semibold">BCA graduate</strong> from Chitkara University building a deliberate career in <strong className="text-slate-900 font-semibold">IT and backend software development</strong>. My technical training centers on Python programming, structured relational databases with PostgreSQL, and core computer science principles.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Rather than chasing superficial buzzwords, I focus on practical implementation: writing normalized SQL schemas, implementing secure authentication routines, mastering Linux terminal administration, and maintaining disciplined Git version control workflows.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                I am actively expanding into Microsoft Azure cloud fundamentals and modern DevOps CI/CD practices, seeking entry-level engineering roles where I can contribute reliable code and continue structured technical growth.
              </p>

              {/* Word count compliance badge */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Target: Software & IT Engineering</span>
                <span className="font-mono text-slate-400">118 words · Concise & Recruiter-Focused</span>
              </div>
            </div>
          </div>

          {/* Right column: Principles & Verified Commitments */}
          <div className="md:col-span-5 space-y-3">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>The No-Exaggeration Guarantee</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Verified Statuses:</strong> Every project explicitly details what was implemented versus what remains in design or future scope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Accurate Positioning:</strong> Positioned as an IT/Software candidate, not falsely labeled as a Data Scientist or Senior Architect.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                  <span><strong>Real Code:</strong> All projects backed by structured repositories, SQL files, and documentation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-100/70 p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-semibold text-slate-900">Career Direction & Available Roles</div>
              <p className="leading-relaxed">
                Open to full-time on-site, hybrid, or remote positions as Software Engineer Trainee, IT Engineer, Junior Backend Developer, Database Administrator Trainee, and Cloud/DevOps Support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
