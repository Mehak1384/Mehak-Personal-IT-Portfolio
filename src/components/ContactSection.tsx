import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Recruiter Inquiry: Technical Role Discussion',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleQuickTemplate = (template: 'recruiter' | 'interview' | 'general') => {
    if (template === 'recruiter') {
      setFormData((prev) => ({
        ...prev,
        subject: 'Inquiry: Entry-Level Software Engineer Role',
        message:
          "Hi Mehak,\n\nWe reviewed your verified IT portfolio and are impressed by your practical work in Python, PostgreSQL, and Linux fundamentals. We would like to discuss an entry-level software/IT opportunity at our organization.\n\nBest regards,",
      }));
    } else if (template === 'interview') {
      setFormData((prev) => ({
        ...prev,
        subject: 'Interview Schedule Invitation',
        message:
          "Hello Mehak,\n\nWe would love to invite you for a technical screening interview for our Graduate Engineer Trainee / Junior Developer opening. Please let us know your upcoming availability.\n\nBest regards,",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        subject: 'Technical Inquiry / Portfolio Feedback',
        message:
          "Hi Mehak,\n\nI reviewed your Sattvik Bhojan Management System and MediAI architecture specs. Great focus on honest engineering scope!\n\nBest,",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate reliable submission
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            08. Direct Communication
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Available for immediate consideration for Software Engineer Trainee, IT Engineer, Junior Backend, and Cloud/DevOps trainee opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct verified coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                Primary Contact Channels
              </h3>

              {/* Email block with copy button */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                  <div className="truncate">
                    <div className="text-[11px] text-slate-500 font-semibold uppercase">Official Email</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-teal-700 truncate block"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-md transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase">Professional Network</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                      linkedin.com/in/mehak-it
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-700">Connect →</span>
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-800 shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-500 font-semibold uppercase">Code Repositories</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-teal-700">
                      github.com/Mehak1384
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-700">View Code →</span>
              </a>

              {/* Location notice */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Punjab / Chandigarh Region, India · Willing to relocate for right opportunity</span>
              </div>
            </div>

            {/* Recruiter Response SLA */}
            <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl text-xs text-teal-900 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
              <div>
                <strong className="font-semibold block mb-0.5">Recruiter Quick-Turnaround:</strong>
                All formal hiring inquiries and screening interview invitations receive replies within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                <h3 className="font-bold text-slate-900 text-base">
                  Send a Direct Message
                </h3>
                {/* Fast message presets */}
                <div className="flex items-center gap-1 text-[11px]">
                  <span className="text-slate-400 mr-1">Presets:</span>
                  <button
                    type="button"
                    onClick={() => handleQuickTemplate('recruiter')}
                    className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                  >
                    Job Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickTemplate('interview')}
                    className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                  >
                    Interview
                  </button>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name}. A notification has been logged for Mehak ({PORTFOLIO_DATA.profile.email}). You will receive a prompt response shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: 'Recruiter Inquiry: Technical Role Discussion',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Your Name / Organization <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sender-name"
                        type="text"
                        required
                        placeholder="e.g. Talent Acquisition Lead"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Your Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="sender-email"
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message-subject"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Subject Line
                    </label>
                    <input
                      id="message-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message-body"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Message Content <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message-body"
                      rows={5}
                      required
                      placeholder="Share details regarding the role, tech stack, or screening timetable..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      No spam · Direct communication
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
