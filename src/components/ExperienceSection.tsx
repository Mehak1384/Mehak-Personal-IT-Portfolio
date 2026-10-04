import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Building2, Store, AlertCircle, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            04. Professional Background
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Work & Operational Experience
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Real-world operations and customer communications experience, clearly distinguished between commercial employment and entrepreneurial business operations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => {
            const isEntrepreneurship = exp.type === 'Entrepreneurship & Operations';

            return (
              <div
                key={exp.id}
                className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-colors shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg border ${
                        isEntrepreneurship
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-teal-50 text-teal-800 border-teal-200'
                      }`}
                    >
                      {isEntrepreneurship ? (
                        <Store className="w-5 h-5" />
                      ) : (
                        <Building2 className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <div className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="font-semibold text-slate-800">{exp.organization}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200 self-start sm:self-auto">
                    {exp.duration}
                  </div>
                </div>

                {/* Explicit Distinction Note for PRD compliance */}
                {exp.distinctionNote && (
                  <div className="my-4 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                    <span>{exp.distinctionNote}</span>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="mt-4 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Responsibilities & Contributions:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills gained */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-500 uppercase tracking-wider text-[11px] mr-1">
                    Competencies:
                  </span>
                  <span className="text-slate-700 font-medium">
                    {exp.skillsGained.join(' · ')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
