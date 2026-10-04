import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project, RoadmapProject } from '../data/portfolioData';
import { ConsoleSimulatorModal } from './ConsoleSimulatorModal';
import { MediAIModal } from './MediAIModal';
import { GitHubFinderModal } from './GitHubFinderModal';
import {
  ExternalLink,
  Terminal,
  HeartPulse,
  Database,
  Code2,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Layers,
  Sparkles,
  GitBranch,
  Search,
  Globe,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [consoleModalOpen, setConsoleModalOpen] = useState(false);
  const [mediAIModalOpen, setMediAIModalOpen] = useState(false);
  const [githubFinderModalOpen, setGithubFinderModalOpen] = useState(false);

  const projects = PORTFOLIO_DATA.projects;
  const roadmap = PORTFOLIO_DATA.futureRoadmap;

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            03. Verified Technical Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Core Projects & Implementations
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Tangible software engineering artifacts. In accordance with strict portfolio integrity, every project explicitly demarcates implemented modules from future planned components.
          </p>
        </div>

        {/* Core Projects List */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => {
            const isSattvik = project.id === 'sattvik-bhojan';
            const isGitHubFinder = project.id === 'github-username-finder';

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left Column: Media & Architecture Visual */}
                  <div className="lg:col-span-5 bg-slate-950 p-6 flex flex-col justify-between relative group">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-4">
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                        <span className="text-xs font-mono text-slate-200">
                          {isSattvik ? 'CLI + PostgreSQL System' : isGitHubFinder ? 'Python + Flask REST Service' : 'Frontend UI & Architecture Blueprint'}
                        </span>
                      </div>
                    </div>

                    {/* Architecture flow indicator */}
                    <div className="bg-slate-900/90 rounded-lg p-3.5 border border-slate-800 text-xs font-mono">
                      <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span>Architecture Pipeline</span>
                        <span className="text-teal-400">Verifiable</span>
                      </div>
                      <div className="space-y-1.5">
                        {project.architecture.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-slate-300">
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                step.status === 'completed'
                                  ? 'bg-emerald-400'
                                  : step.status === 'in-progress'
                                  ? 'bg-amber-400'
                                  : 'bg-slate-600'
                              }`}
                            ></span>
                            <span className="text-[11px] font-semibold text-slate-200">{step.title}:</span>
                            <span className="text-[11px] text-slate-400 truncate">{step.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons on visual pane */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2">
                      {isSattvik ? (
                        <button
                          onClick={() => setConsoleModalOpen(true)}
                          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-md transition-colors shadow-xs"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Launch Live Console Simulator</span>
                        </button>
                      ) : isGitHubFinder ? (
                        <button
                          onClick={() => setGithubFinderModalOpen(true)}
                          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors shadow-xs"
                        >
                          <Search className="w-3.5 h-3.5" />
                          <span>Test Username Lookup (Live Demo)</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => setMediAIModalOpen(true)}
                          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-xs"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Inspect Architecture & Spec</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Detailed Technical Analysis */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Unboxed Metadata (NO pills) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                        <span>{project.category}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span>{project.type}</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span
                          className={
                            project.status === 'Completed Working Prototype'
                              ? 'text-emerald-700 font-bold'
                              : 'text-amber-700 font-bold'
                          }
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                        {project.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Problem Statement */}
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 mb-5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          Problem Solved:
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* What was Personally Built */}
                      <div className="mb-5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                          What Was Personally Built & Implemented:
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-600">
                          {project.personallyBuilt.map((item, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack: Clean unboxed typography */}
                      <div className="mb-5">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                          Technologies Used:
                        </span>
                        <p className="text-xs font-mono text-slate-800">
                          {project.techStack.join(' · ')}
                        </p>
                      </div>

                      {/* Strict Scope Notice (PRD Section 14.5 & 13.4 compliance) */}
                      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900 mb-6 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{project.limitations}</span>
                      </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                          <span>View GitHub Repository</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>

                        {isSattvik ? (
                          <button
                            onClick={() => setConsoleModalOpen(true)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800"
                          >
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Run CLI Simulation</span>
                          </button>
                        ) : isGitHubFinder ? (
                          <button
                            onClick={() => setGithubFinderModalOpen(true)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span>Test Live Search & API</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => setMediAIModalOpen(true)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                            <span>View Architecture Specs</span>
                          </button>
                        )}
                      </div>

                      <span className="text-[11px] text-slate-400 font-mono">
                        {isSattvik ? 'PRD Section 14 Verified' : isGitHubFinder ? 'REST API Prototype' : 'PRD Section 13 Verified'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Project Roadmap (PRD Section 15) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Upcoming Milestones
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Future Project Roadmap & Continuous Learning
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              Currently Learning
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((item, rIdx) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-800">{item.category}</span>
                    <span className="font-mono text-slate-400">Track 0{rIdx + 1}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                    Target Technologies:
                  </div>
                  <p className="text-xs font-mono text-slate-800">
                    {item.technologies.join(' · ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ConsoleSimulatorModal
        isOpen={consoleModalOpen}
        onClose={() => setConsoleModalOpen(false)}
      />
      <MediAIModal
        isOpen={mediAIModalOpen}
        onClose={() => setMediAIModalOpen(false)}
      />
      <GitHubFinderModal
        isOpen={githubFinderModalOpen}
        onClose={() => setGithubFinderModalOpen(false)}
      />
    </section>
  );
};
