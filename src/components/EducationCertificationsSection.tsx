import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Clock, BookOpen, ShieldCheck } from 'lucide-react';

export const EducationCertificationsSection: React.FC = () => {
  const education = PORTFOLIO_DATA.education;
  const certifications = PORTFOLIO_DATA.certifications;

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
                05. Academic Qualifications
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Education
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Chitkara University degree foundations in computer applications and applied business technology.
              </p>
            </div>

            <div className="space-y-6">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-5 h-5 text-teal-700 shrink-0" />
                      <h3 className="font-bold text-slate-900 text-base">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                      {item.duration}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-teal-800 mb-3">
                    {item.institution} <span className="text-slate-400 font-normal">· {item.status}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.details}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Core Subjects & Focus Areas:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-mono">
                      {item.focusAreas.join(' · ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
                06. Credentials & Badges
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Certifications
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Authentic verification. Only earned credentials marked completed; in-flight studies explicitly documented.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => {
                const isCompleted = cert.status === 'Completed / Verified';

                return (
                  <div
                    key={cert.id}
                    className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <Award
                          className={`w-5 h-5 shrink-0 ${
                            isCompleted ? 'text-teal-600' : 'text-slate-400'
                          }`}
                        />
                        <h3 className="font-bold text-slate-900 text-sm">
                          {cert.title}
                        </h3>
                      </div>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded shrink-0 font-medium ${
                          isCompleted
                            ? 'bg-teal-50 text-teal-800 border border-teal-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 mb-2">
                      Issuer: <strong className="text-slate-700">{cert.issuer}</strong>
                    </div>

                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {cert.credentialNote}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-500">Skills Covered:</span>
                      <span>{cert.skillsCovered.join(' · ')}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
