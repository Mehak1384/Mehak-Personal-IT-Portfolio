import React from 'react';
import { X, Printer, Download, Mail, ExternalLink, ShieldCheck, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate an ATS-formatted plain-text / markdown resume for download
    const content = `
MEHAK
IT & Software Enthusiast | BCA Graduate
Email: ${PORTFOLIO_DATA.profile.email}
GitHub: ${PORTFOLIO_DATA.profile.github}
LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}
Location: Punjab / Chandigarh Region, India

PROFESSIONAL SUMMARY
BCA graduate actively building a career in IT and software engineering with verified exposure to Python programming, relational database modeling with PostgreSQL, structured SQL, backend architecture concepts, Linux fundamentals, and Git/GitHub version control workflows. Seeking entry-level roles as Software Engineer Trainee, IT Engineer, Graduate Engineer Trainee, or Junior Backend Developer.

TECHNICAL SKILLS
- Programming: Python (Working Knowledge), Java Fundamentals, OOP, Data Structures Fundamentals
- Databases: SQL, PostgreSQL, Relational Schema Design, Normalization (1NF-3NF), ACID Transactions, CRUD, psycopg2
- Backend & APIs: REST API Concepts, API Architecture Design, bcrypt Password Hashing, Postman API Testing
- Systems & Tools: Linux OS Fundamentals (Permissions, Processes, CLI, SSH), Git, GitHub, GitHub Actions Fundamentals
- Cloud & DevOps: Microsoft Azure Fundamentals (AZ-900 Candidate), Docker Fundamentals, CI/CD Pipeline Concepts
- Business Intelligence: Microsoft Power BI, Advanced Excel (Pivot Tables, XLOOKUP, Data Modeling)
- Computer Science: DBMS, Operating Systems, Computer Networks, Software Engineering / SDLC

PROJECTS
1. Sattvik Bhojan Management System (Completed Working Prototype)
   Type: Python + PostgreSQL Console-Based Application
   - Designed normalized 3NF PostgreSQL relational schema (users, customers, menu_items, orders, order_items).
   - Built secure authentication module using Python bcrypt for password hashing and role verification.
   - Implemented full CRUD operations and sales reporting calculations via psycopg2 database drivers.
   - Handled transaction-safe order placement and payment state reconciliation.
   Tech Stack: Python 3.x, PostgreSQL, psycopg2, bcrypt, Git, GitHub

2. MediAI — Healthcare Guidance & Report Analysis (In Development)
   Type: Healthcare Web Application
   - Designed responsive patient portal wireframes using HTML5, CSS3, and JavaScript.
   - Structured modular Python backend classes for clinical test parameter ingestion and reference bounds evaluation.
   - Formulated planned PostgreSQL schema for patient test logs and normal diagnostic reference intervals.
   - Drafted RESTful API endpoints and created Postman test collections.
   Tech Stack: HTML, CSS, JavaScript, Python, PostgreSQL (design stage), Git, Postman

EDUCATION
- Bachelor of Computer Applications (BCA) | Chitkara University (2022–2025)
  Focus: DBMS, Programming in Python & Java, Operating Systems, Computer Networks, Software Engineering.
- MBA — Data Science & AI | Chitkara University (2025–Present)
  Focus: Business Technology Systems, Strategic IT Management, Applied BI.

WORK EXPERIENCE
- Customer Care Executive | Teleperformance (Sep 2025 – May 2026)
  Handled high-volume customer inquiries, incident logging, technical troubleshooting, and professional communication.
- Entrepreneurship / Business Operations | Sattvik Bhojan (Sep 2026 – Present)
  Directed catering business operations, customer relationship management, sales tracking, and cost reconciliation.

CERTIFICATIONS
- Microsoft Excel Professional Certificate (Completed / Verified)
- Microsoft Azure Fundamentals (AZ-900 in progress)
- Power BI Data Analyst (in progress)
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mehak_IT_Software_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="bg-slate-900 px-6 py-3.5 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Verified Curriculum Vitae
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300">ATS-Formatted</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-teal-600 hover:bg-teal-500 rounded-md transition-colors"
              title="Download ATS Text Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet (Clean, ATS Paper Look) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs sm:text-sm space-y-6">
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              MEHAK
            </h1>
            <p className="text-sm font-semibold text-teal-800 tracking-wide mt-0.5">
              IT & Software Enthusiast · BCA Graduate (2022–2025)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-600 font-mono">
              <span>{PORTFOLIO_DATA.profile.email}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.profile.github}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.profile.linkedin}</span>
              <span>·</span>
              <span>Punjab / Chandigarh Region, India</span>
            </div>
          </div>

          {/* Target Direction */}
          <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs">
            <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1">
              Target Technical Roles:
            </span>
            <p className="text-slate-700">
              Software Engineer Trainee · IT Engineer · Graduate Engineer Trainee · Junior Backend Developer · Database / SQL Trainee · Cloud / DevOps Trainee
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    Bachelor of Computer Applications (BCA)
                  </div>
                  <div className="text-slate-600 text-xs">Chitkara University, Punjab</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Coursework: Python, Java, DBMS, Operating Systems, Computer Networks, Software Engineering, DSA Fundamentals.
                  </p>
                </div>
                <div className="text-right text-xs font-mono text-slate-500 shrink-0">
                  2022 – 2025
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    MBA — Data Science & AI (Enrolled / In Progress)
                  </div>
                  <div className="text-slate-600 text-xs">Chitkara University</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Focus: Business Technology Systems, Applied Business Intelligence, Strategic IT Management.
                  </p>
                </div>
                <div className="text-right text-xs font-mono text-slate-500 shrink-0">
                  2025 – Present
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              TECHNICAL SKILLS & PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="font-bold text-slate-800">Programming: </span>
                <span className="text-slate-700">Python (Working Knowledge), Java Fundamentals, OOP</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Databases: </span>
                <span className="text-slate-700">SQL, PostgreSQL, Relational DB Design, Normalization, psycopg2</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Backend & Security: </span>
                <span className="text-slate-700">REST API Concepts, CRUD APIs, bcrypt Hashing, Postman</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Systems & Linux: </span>
                <span className="text-slate-700">Linux Administration Basics, File Permissions, Bash CLI</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Cloud & DevOps: </span>
                <span className="text-slate-700">Microsoft Azure Fundamentals (AZ-900 Candidate), Docker Basics</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Version Control: </span>
                <span className="text-slate-700">Git, GitHub, Branching, README Documentation</span>
              </div>
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              TECHNICAL PROJECTS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    Sattvik Bhojan Management System{' '}
                    <span className="font-normal text-teal-800 text-xs">
                      (Completed Working Prototype)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Python · PostgreSQL · bcrypt</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 mt-1 pl-1">
                  <li>Designed normalized 3NF PostgreSQL relational schema (users, customers, menu_items, orders, order_items).</li>
                  <li>Engineered secure authentication module utilizing bcrypt for salted password hashing and role-based staff authorization.</li>
                  <li>Developed full CRUD operations and sales reporting calculations via psycopg2 database drivers.</li>
                  <li>Engineered transaction-safe order generation flow linking customer profiles with itemized order details.</li>
                  <li>Built sales reporting and payment reconciliation queries calculating daily revenue and pending balances.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    MediAI — Healthcare Guidance & Report Analysis{' '}
                    <span className="font-normal text-blue-800 text-xs">
                      (In Development)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">HTML · CSS · JS · Python · PostgreSQL</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 mt-1 pl-1">
                  <li>Designed responsive patient portal UI wireframes and user interface layouts using semantic HTML, CSS, and modern JavaScript.</li>
                  <li>Drafted modular Python backend class architecture separating input ingestion from medical knowledge mapping.</li>
                  <li>Formulated planned PostgreSQL schema for patient test logs and normal diagnostic reference intervals.</li>
                  <li>Mapped structured REST API endpoints for user authentication, report upload, and structured parameter retrieval.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              EXPERIENCE
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    Customer Care Executive — Teleperformance
                  </div>
                  <span className="text-xs font-mono text-slate-500">Sep 2025 – May 2026</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Handled client incident inquiries, technical issue troubleshooting, CRM logging, and client relationship management under tight response SLAs.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    Entrepreneurship / Business Operations — Sattvik Bhojan
                  </div>
                  <span className="text-xs font-mono text-slate-500">Sep 2026 – Present</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Directed end-to-end catering operations, customer relationships, billing, and sales tracking (distinguished as business operations rather than formal software employment).
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CERTIFICATIONS & CONTINUOUS LEARNING
            </h2>
            <div className="text-xs text-slate-700 space-y-1">
              <div>
                <strong className="text-slate-900">Microsoft Excel Professional Certificate:</strong> Advanced spreadsheet analytics, Pivot Tables, XLOOKUP, data cleaning, and KPI dashboarding.
              </div>
              <div>
                <strong className="text-slate-900">Microsoft Azure Fundamentals (AZ-900 Candidate):</strong> Cloud concepts, compute, storage, networking, and Entra ID in progress.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
