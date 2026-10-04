import React, { useState } from 'react';
import { PORTFOLIO_DATA, LearningStep } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Circle, Clock, Sparkles } from 'lucide-react';

export const LearningJourneySection: React.FC = () => {
  const steps = PORTFOLIO_DATA.learningJourney;
  const [activeStep, setActiveStep] = useState<number>(3); // Default highlighting SQL + PostgreSQL

  return (
    <section id="journey" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            07. Progressive Growth
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Technical Learning Journey
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Every technical skill follows a strict engineering loop:{' '}
            <strong className="text-slate-900 font-semibold">Learning → Practice → Project → Evidence</strong>.
            Nothing is considered complete without verifiable code or academic coursework.
          </p>
        </div>

        {/* Pathway Steps Carousel / Horizontal Scroll on Desktop */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => {
              const isSelected = activeStep === step.stepNumber;
              const isMastered = step.status === 'Mastered';
              const isActiveWorking = step.status === 'Active Working Knowledge';

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-teal-500/50'
                      : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span
                      className={`font-mono font-semibold ${
                        isSelected ? 'text-teal-400' : 'text-slate-500'
                      }`}
                    >
                      Step 0{step.stepNumber} · {step.stage}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-slate-800 text-teal-300'
                          : isMastered
                          ? 'bg-emerald-100 text-emerald-800'
                          : isActiveWorking
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-base mb-1.5 ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.technology}
                  </h3>

                  <p
                    className={`text-xs line-clamp-2 leading-relaxed mb-4 ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {step.focus}
                  </p>

                  <div
                    className={`pt-3 border-t text-[11px] flex items-center justify-between ${
                      isSelected ? 'border-slate-800 text-teal-400' : 'border-slate-200 text-teal-700'
                    }`}
                  >
                    <span>Inspect verification details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Dive Detail Card for Active Step */}
          {(() => {
            const current = steps.find((s) => s.stepNumber === activeStep) || steps[0];
            return (
              <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                  <div>
                    <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                      Stage 0{current.stepNumber} Deep Dive
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {current.technology}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 bg-slate-800 border border-slate-700 text-teal-300 rounded-md self-start sm:self-auto">
                    {current.status}
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 mt-6">
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      1. Core Learning Focus
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {current.focus}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      2. Practical Application
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {current.practice}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                      3. Concrete Evidence
                    </div>
                    <p className="text-xs text-emerald-300 font-medium leading-relaxed">
                      {current.evidence}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
