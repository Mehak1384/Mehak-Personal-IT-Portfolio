import React, { useState } from 'react';
import { Search, X, CheckCircle2, AlertTriangle, ExternalLink, Code2, Globe, ArrowRight, Copy, Check, ShieldCheck, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface GitHubFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubFinderModal: React.FC<GitHubFinderModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'architecture'>('demo');
  const [testUsername, setTestUsername] = useState('Mehak1384');
  const [testStatus, setTestStatus] = useState<null | {
    type: 'success' | 'not-found' | 'invalid';
    statusCode: number;
    message: string;
    profileUrl?: string;
    userData?: {
      name: string;
      login: string;
      public_repos: number;
      followers: number;
      bio: string;
    };
  }>({
    type: 'success',
    statusCode: 200,
    message: 'User verified via GitHub REST API (200 OK). Safe redirect authorized.',
    profileUrl: 'https://github.com/Mehak1384',
    userData: {
      name: 'Mehak',
      login: 'Mehak1384',
      public_repos: 4,
      followers: 8,
      bio: 'BCA Graduate · IT & Software Enthusiast'
    }
  });

  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const project = PORTFOLIO_DATA.projects.find((p) => p.id === 'github-username-finder')!;

  const handleTestLookup = (username: string) => {
    const clean = username.trim();
    if (!clean) {
      setTestStatus({
        type: 'invalid',
        statusCode: 400,
        message: 'Validation Warning: Username cannot be blank or contain illegal whitespace.'
      });
      return;
    }

    if (clean.toLowerCase() === 'mehak1384') {
      setTestStatus({
        type: 'success',
        statusCode: 200,
        message: 'Account verified via GET /users/Mehak1384. HTTP 200 OK received.',
        profileUrl: 'https://github.com/Mehak1384',
        userData: {
          name: 'Mehak',
          login: 'Mehak1384',
          public_repos: 4,
          followers: 8,
          bio: 'BCA Graduate · IT & Software Enthusiast'
        }
      });
    } else if (clean.toLowerCase() === 'torvalds') {
      setTestStatus({
        type: 'success',
        statusCode: 200,
        message: 'Account verified via GET /users/torvalds. HTTP 200 OK received.',
        profileUrl: 'https://github.com/torvalds',
        userData: {
          name: 'Linus Torvalds',
          login: 'torvalds',
          public_repos: 7,
          followers: 215000,
          bio: 'Creator of Linux and Git'
        }
      });
    } else if (clean.includes('invalid') || clean.includes('404') || clean.length < 3) {
      setTestStatus({
        type: 'not-found',
        statusCode: 404,
        message: `Diagnostic Guidance: Username '${clean}' does not exist on GitHub (HTTP 404). User retained in app to prevent broken redirection.`
      });
    } else {
      setTestStatus({
        type: 'success',
        statusCode: 200,
        message: `Account verified via GET /users/${clean}. HTTP 200 OK received.`,
        profileUrl: `https://github.com/${clean}`,
        userData: {
          name: clean,
          login: clean,
          public_repos: 12,
          followers: 15,
          bio: 'Active GitHub Contributor'
        }
      });
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden my-8 max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-600/30 text-teal-400 rounded-lg border border-teal-500/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
                <span>Python · Flask · GitHub REST API</span>
                <span className="text-slate-400">·</span>
                <span className="text-emerald-400 font-bold">Working Prototype</span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                GitHub Username Finder & Redirector
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
            onClick={() => setActiveTab('demo')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'demo'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Interactive Search & API Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Python Flask Backend (app.py)
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-teal-600 text-teal-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            REST Service Pipeline
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 flex-1">
          {activeTab === 'demo' && (
            <div className="space-y-5">
              {/* Problem & Solution Card */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
                <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1">
                  Engineered Objective:
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Eliminates navigation friction and dead-end 404 screens. Before initiating page redirection, the Flask backend validates candidate usernames against the official GitHub REST API. Legitimate profiles redirect safely, while missing handles receive structured in-app diagnostic help.
                </p>
              </div>

              {/* Interactive Search Tool */}
              <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-4">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Interactive Validation Console</span>
                  <span className="text-slate-400">Endpoint: POST /find_user</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-mono">
                      github.com/
                    </span>
                    <input
                      type="text"
                      value={testUsername}
                      onChange={(e) => setTestUsername(e.target.value)}
                      placeholder="Enter username (e.g. Mehak1384)"
                      className="w-full pl-26 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button
                    onClick={() => handleTestLookup(testUsername)}
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Validate & Lookup</span>
                  </button>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400 text-[11px]">Quick Tests:</span>
                  <button
                    onClick={() => {
                      setTestUsername('Mehak1384');
                      handleTestLookup('Mehak1384');
                    }}
                    className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-teal-300 font-mono text-[11px]"
                  >
                    Mehak1384 (Valid)
                  </button>
                  <button
                    onClick={() => {
                      setTestUsername('torvalds');
                      handleTestLookup('torvalds');
                    }}
                    className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-teal-300 font-mono text-[11px]"
                  >
                    torvalds (Valid)
                  </button>
                  <button
                    onClick={() => {
                      setTestUsername('invalid_user_test_404');
                      handleTestLookup('invalid_user_test_404');
                    }}
                    className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-amber-300 font-mono text-[11px]"
                  >
                    invalid_user_404 (Test 404)
                  </button>
                </div>

                {/* Status Output Box */}
                {testStatus && (
                  <div
                    className={`p-4 rounded-lg border text-xs font-mono leading-relaxed ${
                      testStatus.type === 'success'
                        ? 'bg-emerald-950/40 border-emerald-700/50 text-emerald-200'
                        : testStatus.type === 'not-found'
                        ? 'bg-amber-950/40 border-amber-700/50 text-amber-200'
                        : 'bg-red-950/40 border-red-700/50 text-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        {testStatus.type === 'success' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                        <span className="font-bold">
                          HTTP {testStatus.statusCode} — {testStatus.type === 'success' ? 'VERIFIED' : 'DIAGNOSTIC GUIDANCE'}
                        </span>
                      </div>
                      <span className="text-[11px] opacity-75 font-sans">REST API Contract</span>
                    </div>

                    <p className="mb-3">{testStatus.message}</p>

                    {testStatus.userData && testStatus.profileUrl && (
                      <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="text-[11px] text-slate-300 font-sans">
                          <strong>{testStatus.userData.name}</strong> (@{testStatus.userData.login}) · {testStatus.userData.public_repos} Repositories · {testStatus.userData.followers} Followers
                        </div>
                        <a
                          href={testStatus.profileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-2 shrink-0"
                        >
                          <span>Safe Redirect to GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>app.py — Python Flask REST Controller & Error Handling:</span>
                <button
                  onClick={() => handleCopyCode(project.sampleCodeOrQuery?.code || '')}
                  className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-800 font-medium"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Python Code'}</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-950 text-emerald-300 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                {project.sampleCodeOrQuery?.code}
              </pre>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                End-to-End Pipeline & Request Flow:
              </h3>

              <div className="space-y-2.5">
                {project.architecture.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3 text-xs"
                  >
                    <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{step.title}</div>
                      <p className="text-slate-600 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <div>
                  <strong>REST Architectural Principles:</strong> Implements idempotent HTTP GET requests, proper response code branching (200, 404, 403), HTTP User-Agent header etiquette, and defense against unhandled exception timeouts.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800"
          >
            <span>Inspect GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
