import React, { useState } from 'react';
import { HeartPulse, X, Layers, Code, CheckCircle, Clock, AlertTriangle, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface MediAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediAIModal: React.FC<MediAIModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'spec' | 'api'>('architecture');

  if (!isOpen) return null;

  const project = PORTFOLIO_DATA.projects.find((p) => p.id === 'mediai')!;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/30 text-blue-400 rounded-lg border border-blue-500/30">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <span>Architecture & Engineering Specification</span>
                <span className="text-slate-400">·</span>
                <span className="text-amber-400 font-bold">In Development</span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                MediAI — Healthcare Report Analysis
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            System Pipeline & Status
          </button>
          <button
            onClick={() => setActiveTab('spec')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'spec'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Biomarker Parser Spec (Python)
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'api'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Planned REST Endpoints
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 flex-1">
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Problem Definition */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Problem Addressed
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Diagnostic lab tests (e.g. lipid profile, CBC, metabolic panels) provide essential metrics but are written in terse clinical shorthand with numerical units that leave patients confused and anxious prior to physician consultation.
                </p>
              </div>

              {/* End-to-End Pipeline Visualization with real verification states */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Architecture Pipeline: Implementation Breakdown
                </h3>
                <div className="space-y-2.5">
                  <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        <span>1. Frontend UI Wireframes & Patient Layout</span>
                        <span className="text-[10px] font-bold text-emerald-700 uppercase">Designed / Structured</span>
                      </div>
                      <p className="text-slate-600 mt-0.5">
                        Clean responsive web layouts using HTML5, CSS3, and JavaScript for report entry, input parameters, and patient summary cards.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        <span>2. Backend Architecture & Parser Logic</span>
                        <span className="text-[10px] font-bold text-blue-700 uppercase">In Development</span>
                      </div>
                      <p className="text-slate-600 mt-0.5">
                        Python class structures designed to ingest test readings (e.g., Fasting Glucose, HbA1c, Hemoglobin) and compare against reference intervals.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        <span>3. API Layer & Request Contracts</span>
                        <span className="text-[10px] font-bold text-amber-700 uppercase">Drafted & Postman Tested</span>
                      </div>
                      <p className="text-slate-600 mt-0.5">
                        RESTful contracts planned for uploading test reports and retrieving structured JSON analyses.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-100 border border-slate-200 rounded-lg flex items-start gap-3">
                    <Clock className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    <div className="text-xs">
                      <div className="font-semibold text-slate-700 flex items-center gap-2">
                        <span>4. PostgreSQL Database Integration</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Planned / Design Stage</span>
                      </div>
                      <p className="text-slate-600 mt-0.5">
                        Schema modeled for patient history, test definitions, normal bounds, and clinical disclaimers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scope Limitation Banner */}
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <div>
                  <strong className="font-semibold">Honest Progress Commitment:</strong> The portfolio explicitly avoids claiming that MediAI is a finished automated AI cloud diagnosis system. Only the completed frontend layouts and Python architecture have been implemented.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'spec' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-600">
                Core object-oriented Python specification for biomarker evaluation:
              </div>
              <pre className="p-4 bg-slate-950 text-emerald-300 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                {project.sampleCodeOrQuery?.code}
              </pre>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-600 mb-2">
                Planned REST API routes drafted for implementation with Postman validation collections:
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-[10px] font-bold">GET</span>
                    <span className="text-slate-800">/api/v1/parameters</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">List supported blood test biomarkers</span>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded text-[10px] font-bold">POST</span>
                    <span className="text-slate-800">/api/v1/reports/parse</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">Submit patient test values for classification</span>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">POST</span>
                    <span className="text-slate-800">/api/v1/auth/login</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">Secure patient token authentication</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800"
          >
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
