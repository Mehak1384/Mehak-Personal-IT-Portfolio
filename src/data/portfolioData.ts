export interface SkillItem {
  name: string;
  proficiency: 'Working Knowledge' | 'Fundamentals' | 'Learning / Practical' | 'Practical' | 'Currently Learning';
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  type: string;
  status: 'Completed Working Prototype' | 'In Development' | 'Currently Learning / Planned';
  image: string;
  shortDescription: string;
  problem: string;
  personallyBuilt: string[];
  techStack: string[];
  architecture: {
    steps: { title: string; desc: string; status: 'completed' | 'in-progress' | 'planned' }[];
  };
  limitations: string;
  githubUrl: string;
  futureScope: string[];
  sampleCodeOrQuery?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface RoadmapProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: 'Currently Learning / Planned';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  type: 'Work Experience' | 'Entrepreneurship & Operations';
  distinctionNote?: string;
  responsibilities: string[];
  skillsGained: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  status: string;
  focusAreas: string[];
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Completed / Verified' | 'In Progress / Upcoming';
  credentialNote: string;
  skillsCovered: string[];
}

export interface LearningStep {
  stepNumber: number;
  stage: string;
  technology: string;
  focus: string;
  practice: string;
  evidence: string;
  status: 'Mastered' | 'Active Working Knowledge' | 'Currently Learning';
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Mehak',
    title: 'IT & Software Enthusiast',
    email: 'mehakarora1348@gmail.com',
    github: 'https://github.com/Mehak1384',
    linkedin: 'https://linkedin.com/in/mehak-it',
    location: 'Punjab / Chandigarh Region, India',
    educationBadge: 'BCA Graduate (2022–2025) · Chitkara University',
    supportingStatement:
      'Building practical software and database solutions while developing skills in backend development, Linux, cloud and DevOps fundamentals.',
    aboutBio:
      'BCA graduate actively building a solid career in IT and software engineering. I have hands-on exposure to Python programming, relational database design with PostgreSQL, structured SQL, backend logic concepts, Linux system administration basics, and Git/GitHub version control workflows. Driven by practical implementation rather than superficial claims, I focus on writing clean, verifiable code, understanding operating system and networking fundamentals, and progressively mastering cloud infrastructure with Microsoft Azure and modern DevOps CI/CD pipelines.',
    targetRoles: [
      'Software Engineer Trainee',
      'IT Engineer',
      'Graduate Engineer Trainee',
      'Backend Developer — Entry Level',
      'Junior Software Developer',
      'Database / SQL-Related Roles',
      'Cloud / IT Support Roles',
      'Cloud Engineer Trainee',
      'DevOps Trainee',
      'IT Analyst / Technical Analyst'
    ]
  },

  skills: [
    {
      id: 'programming',
      title: 'Programming & Logic',
      description: 'Core object-oriented languages and programming problem-solving',
      skills: [
        { name: 'Python', proficiency: 'Working Knowledge', highlight: true },
        { name: 'Java Fundamentals', proficiency: 'Fundamentals' },
        { name: 'Object-Oriented Programming (OOP)', proficiency: 'Working Knowledge', highlight: true },
        { name: 'Exception Handling & Modules', proficiency: 'Working Knowledge' },
        { name: 'Data Structures Implementation', proficiency: 'Fundamentals' }
      ]
    },
    {
      id: 'database',
      title: 'Database & SQL Engineering',
      description: 'Relational data modeling, query optimization, and DBMS concepts',
      skills: [
        { name: 'SQL (Structured Query Language)', proficiency: 'Working Knowledge', highlight: true },
        { name: 'PostgreSQL', proficiency: 'Working Knowledge', highlight: true },
        { name: 'DBMS Principles', proficiency: 'Working Knowledge' },
        { name: 'Database Schema Design', proficiency: 'Working Knowledge', highlight: true },
        { name: 'CRUD Operations', proficiency: 'Working Knowledge' },
        { name: 'Complex Joins (INNER, LEFT, FULL)', proficiency: 'Working Knowledge' },
        { name: 'Subqueries & Aggregations', proficiency: 'Working Knowledge' },
        { name: 'Database Normalization (1NF–3NF)', proficiency: 'Working Knowledge' },
        { name: 'ACID Transactions & Indexing', proficiency: 'Fundamentals' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      description: 'Server architecture, RESTful API principles, and data interfaces',
      skills: [
        { name: 'Backend Development', proficiency: 'Working Knowledge', highlight: true },
        { name: 'REST API Concepts', proficiency: 'Working Knowledge', highlight: true },
        { name: 'API Design & Endpoints', proficiency: 'Fundamentals' },
        { name: 'CRUD API Structuring', proficiency: 'Working Knowledge' },
        { name: 'Authentication & Password Hashing (bcrypt)', proficiency: 'Working Knowledge' },
        { name: 'Postman API Testing', proficiency: 'Working Knowledge' }
      ]
    },
    {
      id: 'os',
      title: 'Operating Systems & Linux',
      description: 'System navigation, permissions, shell scripting, and server environments',
      skills: [
        { name: 'Linux OS Fundamentals', proficiency: 'Fundamentals', highlight: true },
        { name: 'Linux File System Hierarchy', proficiency: 'Fundamentals' },
        { name: 'File Permissions & Ownership (chmod/chown)', proficiency: 'Fundamentals' },
        { name: 'Process Management (ps, top, kill)', proficiency: 'Fundamentals' },
        { name: 'Users & Groups Administration', proficiency: 'Fundamentals' },
        { name: 'Package Management (apt)', proficiency: 'Fundamentals' },
        { name: 'Environment Variables & PATH', proficiency: 'Working Knowledge' },
        { name: 'SSH Protocol Basics', proficiency: 'Fundamentals' },
        { name: 'Bash & Command-Line Usage', proficiency: 'Working Knowledge' }
      ]
    },
    {
      id: 'vcs',
      title: 'Version Control & Git',
      description: 'Distributed source control, branch workflows, and repository hygiene',
      skills: [
        { name: 'Git Core', proficiency: 'Working Knowledge', highlight: true },
        { name: 'GitHub Collaboration', proficiency: 'Working Knowledge', highlight: true },
        { name: 'Branching & Merging', proficiency: 'Working Knowledge' },
        { name: 'Commit History & Rebase Basics', proficiency: 'Working Knowledge' },
        { name: 'Pull Requests & Code Reviews', proficiency: 'Working Knowledge' },
        { name: 'Technical README Documentation', proficiency: 'Working Knowledge' },
        { name: 'GitHub Actions Fundamentals', proficiency: 'Fundamentals' }
      ]
    },
    {
      id: 'bi',
      title: 'Business Intelligence & Power BI',
      description: 'Data transformation, semantic modeling, and executive reporting',
      skills: [
        { name: 'Microsoft Power BI', proficiency: 'Learning / Practical', highlight: true },
        { name: 'Data Import & Connectivity', proficiency: 'Practical' },
        { name: 'Power Query & Transformation', proficiency: 'Practical' },
        { name: 'Data Modeling & Relationships', proficiency: 'Learning / Practical' },
        { name: 'DAX Fundamentals (Measures & Columns)', proficiency: 'Fundamentals' },
        { name: 'KPIs & Interactive Visualizations', proficiency: 'Practical' }
      ]
    },
    {
      id: 'excel',
      title: 'Microsoft Excel',
      description: 'Advanced data manipulation, lookup formulas, and analysis',
      skills: [
        { name: 'Advanced Excel', proficiency: 'Practical', highlight: true },
        { name: 'Pivot Tables & Pivot Charts', proficiency: 'Practical' },
        { name: 'XLOOKUP & VLOOKUP', proficiency: 'Practical' },
        { name: 'Logical Functions (IF, IFS)', proficiency: 'Practical' },
        { name: 'Conditional Aggregations (SUMIFS, COUNTIFS)', proficiency: 'Practical' },
        { name: 'Data Cleaning & Validation', proficiency: 'Practical' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Computing & Microsoft Azure',
      description: 'Cloud infrastructure concepts, compute services, and identity',
      skills: [
        { name: 'Microsoft Azure Fundamentals', proficiency: 'Fundamentals', highlight: true },
        { name: 'Cloud Computing Principles (IaaS/PaaS/SaaS)', proficiency: 'Fundamentals' },
        { name: 'Azure Compute Concepts (VMs, App Services)', proficiency: 'Fundamentals' },
        { name: 'Azure Storage & Blob Concepts', proficiency: 'Fundamentals' },
        { name: 'Networking Basics (VNets, Subnets)', proficiency: 'Fundamentals' },
        { name: 'Identity & Access (Azure AD / Entra ID Basics)', proficiency: 'Fundamentals' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps Fundamentals',
      description: 'Continuous integration, containerization basics, and automation',
      skills: [
        { name: 'DevOps Lifecycle Concepts', proficiency: 'Fundamentals', highlight: true },
        { name: 'CI/CD Pipeline Fundamentals', proficiency: 'Fundamentals' },
        { name: 'Build & Test Automation Principles', proficiency: 'Fundamentals' },
        { name: 'Docker Fundamentals (Containers & Images)', proficiency: 'Currently Learning' },
        { name: 'GitHub Actions Workflows', proficiency: 'Fundamentals' },
        { name: 'System Monitoring Principles', proficiency: 'Fundamentals' }
      ]
    },
    {
      id: 'cs',
      title: 'Computer Science Fundamentals',
      description: 'Core university coursework and theoretical foundation',
      skills: [
        { name: 'Database Management Systems (DBMS)', proficiency: 'Working Knowledge', highlight: true },
        { name: 'Operating Systems Concepts', proficiency: 'Working Knowledge' },
        { name: 'Computer Networks (OSI, TCP/IP, DNS, HTTP)', proficiency: 'Working Knowledge' },
        { name: 'Software Engineering & SDLC', proficiency: 'Working Knowledge' },
        { name: 'DSA: Arrays & Linked Lists', proficiency: 'Working Knowledge' },
        { name: 'Searching & Sorting Algorithms', proficiency: 'Working Knowledge' },
        { name: 'Time & Space Complexity (Big-O)', proficiency: 'Working Knowledge' }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'sattvik-bhojan',
      name: 'Sattvik Bhojan Management System',
      category: 'Database & Operations Backend',
      type: 'Console-Based Application',
      status: 'Completed Working Prototype',
      image: '/src/assets/images/sattvik_bhojan_system_1791088761289.jpg',
      shortDescription:
        'A modular Python and PostgreSQL console application engineered to manage core restaurant and catering business operations, customer databases, orders, and sales tracking.',
      problem:
        'Small food service enterprises frequently suffer from untracked inventory, loose ledger sheets, and manual order reconciliation errors that risk lost revenue and mismatched payments.',
      personallyBuilt: [
        'Designed normalized relational schema in PostgreSQL (users, customers, menu_items, orders, order_items, payments)',
        'Built secure authentication module utilizing Python bcrypt for password hashing and role verification',
        'Implemented full CRUD logic for customer directory and live menu catalog via psycopg2 database drivers',
        'Engineered transaction-safe order generation flow linking customer profiles with itemized order details',
        'Built sales reporting and payment reconciliation queries calculating daily revenue and pending balances',
        'Configured command-line navigation menu with input validation and defensive exception handling'
      ],
      techStack: ['Python 3.x', 'PostgreSQL', 'SQL', 'psycopg2', 'bcrypt', 'Git', 'GitHub'],
      architecture: {
        steps: [
          { title: 'User / Staff', desc: 'Terminal input commands', status: 'completed' },
          { title: 'Console CLI Interface', desc: 'Menu loop & parameter validator', status: 'completed' },
          { title: 'Python Application Layer', desc: 'Business logic & bcrypt auth', status: 'completed' },
          { title: 'Data Access Layer (psycopg2)', desc: 'Parametrized SQL queries & transactions', status: 'completed' },
          { title: 'PostgreSQL Relational DB', desc: 'Normalized tables & foreign keys', status: 'completed' }
        ]
      },
      limitations:
        'Scope Notice: This application is strictly a console-based Python/PostgreSQL software prototype. It is not currently deployed as a web application, mobile app, or cloud API service.',
      githubUrl: 'https://github.com/Mehak1384/sattvik-bhojan-management-system',
      futureScope: [
        'RESTful API layer using FastAPI/Flask',
        'Web-based responsive UI dashboard',
        'Automated daily sales PDF report generator',
        'Cloud hosting on Azure Database for PostgreSQL'
      ],
      sampleCodeOrQuery: {
        language: 'sql',
        filename: 'schema_and_queries.sql',
        code: `-- Sattvik Bhojan Management System: Schema & Order Summary Query
CREATE TABLE IF NOT EXISTS customers (
    customer_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id) ON DELETE CASCADE,
    total_amount NUMERIC(10, 2) NOT NULL CHECK (total_amount >= 0),
    payment_status VARCHAR(20) DEFAULT 'PENDING' CHECK (payment_status IN ('PAID', 'PENDING', 'CANCELLED')),
    order_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Analytical Query: Daily Revenue & Order Count with Customer Breakdown
SELECT 
    DATE(o.order_timestamp) AS order_date,
    COUNT(DISTINCT o.order_id) AS total_orders,
    SUM(o.total_amount) AS gross_revenue,
    SUM(CASE WHEN o.payment_status = 'PAID' THEN o.total_amount ELSE 0 END) AS collected_revenue,
    SUM(CASE WHEN o.payment_status = 'PENDING' THEN o.total_amount ELSE 0 END) AS outstanding_balance
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY DATE(o.order_timestamp)
ORDER BY order_date DESC;`
      }
    },
    {
      id: 'mediai',
      name: 'MediAI',
      category: 'Healthcare Information & Report Assistance',
      type: 'Healthcare Web Application',
      status: 'In Development',
      image: '/src/assets/images/mediai_app_architecture_1791088748020.jpg',
      shortDescription:
        'A healthcare guidance and diagnostic report analysis application designed to parse complex medical test parameters into readable, structured summaries for patients.',
      problem:
        'Medical lab reports (CBC, lipid profiles, metabolic panels) are filled with dense clinical terminology and clinical ranges that create anxiety and confusion for patients prior to consulting a doctor.',
      personallyBuilt: [
        'Designed responsive patient portal UI wireframes and user interface layouts using semantic HTML, CSS, and modern JavaScript',
        'Drafted modular Python backend class architecture separating input ingestion from medical knowledge mapping',
        'Constructed planned PostgreSQL schema design for patient profiles, medical test parameters, and reference ranges',
        'Mapped structured REST API endpoints for user authentication, report upload, and structured parameter retrieval',
        'Created Postman test collections for planned API routes to validate request/response contracts',
        'Maintained structured Git version control repository with branch hygiene and architecture specifications'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Python (Backend Architecture)', 'PostgreSQL (Design Stage)', 'Git', 'GitHub', 'Postman'],
      architecture: {
        steps: [
          { title: 'Patient / User', desc: 'Report input & inquiry interface', status: 'completed' },
          { title: 'Frontend UI', desc: 'Designed responsive HTML/CSS/JS views', status: 'completed' },
          { title: 'Backend / API Layer', desc: 'REST API architecture & endpoint planning', status: 'in-progress' },
          { title: 'Business Logic Core', desc: 'Python medical parameter parsing logic', status: 'in-progress' },
          { title: 'Relational Database', desc: 'PostgreSQL schema modeled & in design stage', status: 'planned' }
        ]
      },
      limitations:
        'Scope Notice: MediAI is actively in development. The frontend layouts and backend architecture have been structured and designed. Full automated production inference, live cloud hosting, and active DB connections are planned for subsequent milestones.',
      githubUrl: 'https://github.com/Mehak1384/mediai-healthcare-app',
      futureScope: [
        'Complete REST API implementation in Python',
        'PostgreSQL database integration and live migration',
        'Secure patient authentication with JWT tokens',
        'PDF report text extraction and normalization pipeline',
        'End-to-end automated Postman test suite'
      ],
      sampleCodeOrQuery: {
        language: 'python',
        filename: 'report_parser_spec.py',
        code: `# MediAI: Core Architecture Spec for Biomarker Normalization
class LabReportParameter:
    """Represents a structured clinical test parameter with reference bounds."""
    def __init__(self, name: str, value: float, unit: str, min_ref: float, max_ref: float):
        self.name = name
        self.value = value
        self.unit = unit
        self.min_ref = min_ref
        self.max_ref = max_ref

    def evaluate_status(self) -> str:
        """Determines clinical range bracket for report visualization."""
        if self.value < self.min_ref:
            return "LOW"
        elif self.value > self.max_ref:
            return "HIGH"
        return "NORMAL"

    def to_dict(self) -> dict:
        return {
            "parameter": self.name,
            "measured_value": self.value,
            "unit": self.unit,
            "reference_interval": f"{self.min_ref} - {self.max_ref}",
            "status": self.evaluate_status()
        }`
      }
    },
    {
      id: 'github-username-finder',
      name: 'GitHub Username Finder & Redirector',
      category: 'Web Service & REST API Integration',
      type: 'Python / Flask Web Application',
      status: 'Completed Working Prototype',
      image: '/src/assets/images/github_finder_preview_1791095185235.jpg',
      shortDescription:
        'An interactive web tool engineered with Python, Flask, and RESTful web service architecture to verify candidate GitHub usernames against the official REST API and prevent broken 404 redirections.',
      problem:
        'Broken navigation and dead-end 404 errors caused by mistyped, expired, or non-existent GitHub user handles. Users waste time landing on missing pages without diagnostic feedback.',
      personallyBuilt: [
        "Architected Python Flask backend communicating synchronously with GitHub's official Public REST API via HTTP GET requests",
        'Implemented pre-navigation username verification to guarantee that users are only redirected to legitimate, active accounts',
        'Designed defensive error-handling logic returning structured, context-sensitive diagnostic guidance when handles are missing or malformed',
        'Engineered responsive web search interface with real-time status feedback, preventing page crash on invalid input',
        'Configured RESTful routing, input sanitization, and graceful GitHub API rate-limit handling'
      ],
      techStack: ['Python 3.x', 'Flask', 'RESTful APIs', 'GitHub Public API', 'Requests', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
      architecture: {
        steps: [
          { title: 'User Interface', desc: 'Candidate username search input', status: 'completed' },
          { title: 'Flask Route (/find_user)', desc: 'Input sanitization & parameter verification', status: 'completed' },
          { title: 'GitHub Public REST API', desc: 'GET https://api.github.com/users/{username}', status: 'completed' },
          { title: 'Response Diagnostic Engine', desc: 'HTTP status validation (200 OK vs 404/403)', status: 'completed' },
          { title: 'Safe Redirect / Diagnostic', desc: 'Authorized redirect or structured in-app guidance', status: 'completed' }
        ]
      },
      limitations:
        'Scope Notice: Fully functional working web service prototype. Operates in accordance with GitHub Public REST API rate limits (60 unauthenticated requests/hour).',
      githubUrl: 'https://github.com/Mehak1384/GitHub-Username-Finder-and-Redirector',
      futureScope: [
        'GitHub Personal Access Token (PAT) integration to scale rate limits to 5,000 req/hr',
        'Live repository showcase and pinned contributions preview card',
        'Recent search history caching with Redis session storage'
      ],
      sampleCodeOrQuery: {
        language: 'python',
        filename: 'app.py',
        code: `# GitHub Username Finder & Redirector - Core Flask Route
import requests
from flask import Flask, render_template, request, redirect

app = Flask(__name__)
GITHUB_API_BASE = "https://api.github.com/users"

@app.route('/find_user', methods=['POST'])
def find_user():
    username = request.form.get('username', '').strip()
    if not username:
        return render_template('index.html', error="Please enter a valid GitHub handle.")
    
    # Pre-validation against GitHub Public REST API
    api_url = f"{GITHUB_API_BASE}/{username}"
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "GitHub-Finder-App"
    }
    
    try:
        response = requests.get(api_url, headers=headers, timeout=5)
        if response.status_code == 200:
            user_data = response.json()
            # Verified active account -> safe redirection
            return redirect(user_data.get('html_url', f"https://github.com/{username}"))
        elif response.status_code == 404:
            return render_template('index.html', error=f"Username '{username}' does not exist on GitHub.")
        elif response.status_code == 403:
            return render_template('index.html', error="GitHub API rate limit reached. Try again shortly.")
        else:
            return render_template('index.html', error=f"GitHub API returned status code {response.status_code}.")
    except requests.exceptions.RequestException:
        return render_template('index.html', error="Network connectivity failure. Unable to reach GitHub API.")`
      }
    }
  ] as Project[],

  futureRoadmap: [
    {
      id: 'roadmap-bi',
      title: 'Business Sales Intelligence Dashboard',
      category: 'Power BI & Analytics',
      description:
        'Comprehensive multi-page interactive dashboard modeling business revenue, customer retention, and regional sales performance using Power Query, DAX measures, and star-schema relational data.',
      technologies: ['Microsoft Excel', 'Power BI', 'Power Query', 'DAX'],
      status: 'Currently Learning / Planned'
    },
    {
      id: 'roadmap-azure',
      title: 'Azure Cloud Deployment Project',
      category: 'Cloud Infrastructure',
      description:
        'Deploying a containerized web service onto Microsoft Azure using Azure App Service, Virtual Networks, Azure Blob Storage, and Linux-based virtual machine configurations.',
      technologies: ['Microsoft Azure', 'Linux (Ubuntu)', 'Azure CLI', 'GitHub'],
      status: 'Currently Learning / Planned'
    },
    {
      id: 'roadmap-devops',
      title: 'Automated CI/CD Deployment Pipeline',
      category: 'DevOps & Automation',
      description:
        'Building an end-to-end automated software delivery pipeline: linting, automated unit testing, Docker image packaging, and deployment triggering via GitHub Actions workflows.',
      technologies: ['Git', 'GitHub Actions', 'Docker', 'Bash', 'Azure'],
      status: 'Currently Learning / Planned'
    }
  ] as RoadmapProject[],

  experience: [
    {
      id: 'exp-teleperformance',
      role: 'Customer Care Executive',
      organization: 'Teleperformance',
      duration: 'Sep 2025 – May 2026',
      type: 'Work Experience',
      responsibilities: [
        'Handled high-volume customer inquiries, troubleshooting service discrepancies and technical user issues with high first-contact resolution rates.',
        'Communicated complex technical procedures in straightforward, empathetic language to non-technical users.',
        'Documented incident logs, customer resolutions, and feedback trends in CRM systems, facilitating team process improvements.',
        'Maintained composure and de-escalated critical client challenges under tight response service level agreements (SLAs).'
      ],
      skillsGained: [
        'Professional Communication',
        'Customer Handling & Empathy',
        'Issue De-escalation',
        'Root Cause Analysis',
        'Incident Logging',
        'Team Collaboration'
      ]
    },
    {
      id: 'exp-sattvik',
      role: 'Entrepreneurship / Business Operations',
      organization: 'Sattvik Bhojan',
      duration: 'Sep 2026 – Present',
      type: 'Entrepreneurship & Operations',
      distinctionNote:
        'Direct entrepreneurial business leadership role; distinctly focused on business management and operational workflows rather than formal software employment.',
      responsibilities: [
        'Directed end-to-end operational planning for catering and meal preparation, managing procurement and customer relationship cycles.',
        'Tracked sales volumes, daily revenues, customer billing, and operating costs, identifying margin improvements.',
        'Identified operational bottlenecks in manual order tracking which led directly to conceiving and developing the Sattvik Bhojan Management System software prototype.',
        'Collaborated with clients on customized service requirements, building reliable repeat business relationships.'
      ],
      skillsGained: [
        'Business Operations & Planning',
        'Sales Tracking & Cost Accounting',
        'Customer Relationship Management',
        'Operational Workflow Optimization',
        'Requirements Analysis',
        'Practical Problem Solving'
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: 'edu-bca',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Chitkara University',
      duration: '2022 – 2025',
      status: 'Graduated',
      focusAreas: [
        'Programming in Python & Java',
        'Database Management Systems (DBMS)',
        'Operating Systems & Linux Architecture',
        'Computer Networks & Protocols',
        'Software Engineering & SDLC',
        'Data Structures & Algorithms'
      ],
      details:
        'Three-year undergraduate program focusing on core computer science foundations, software engineering methodologies, relational databases, and system architectures.'
    },
    {
      id: 'edu-mba',
      degree: 'MBA — Data Science & AI',
      institution: 'Chitkara University',
      duration: '2025 – Present',
      status: 'Enrolled / In Progress',
      focusAreas: [
        'Business Technology Systems',
        'Applied Business Intelligence',
        'Strategic IT Management',
        'Data-Driven Decision Making'
      ],
      details:
        'Pursuing advanced management studies to understand business applications of technology, while maintaining primary career orientation squarely focused on IT, backend software, and cloud/DevOps roles.'
    }
  ] as EducationItem[],

  certifications: [
    {
      id: 'cert-excel',
      title: 'Microsoft Excel Professional Certificate',
      issuer: 'Microsoft / Professional Credentialing',
      status: 'Completed / Verified',
      credentialNote: 'Practical mastery in advanced spreadsheet functions, lookup mechanics, Pivot Tables, and business dashboards.',
      skillsCovered: ['Advanced Excel', 'XLOOKUP / VLOOKUP', 'Pivot Tables & Charts', 'SUMIFS / COUNTIFS', 'Data Cleaning']
    },
    {
      id: 'cert-azure',
      title: 'Microsoft Azure Fundamentals (AZ-900 Candidate)',
      issuer: 'Microsoft Learn',
      status: 'In Progress / Upcoming',
      credentialNote: 'Targeting formal certification upon completion of Azure compute, storage, networking, and security syllabus.',
      skillsCovered: ['Cloud Architecture', 'Azure Compute & Storage', 'Virtual Networks', 'IAM / Entra ID']
    },
    {
      id: 'cert-powerbi',
      title: 'Power BI Data Analyst Preparation',
      issuer: 'Microsoft Certified Associate Track',
      status: 'In Progress / Upcoming',
      credentialNote: 'Continuous study in DAX modeling, Power Query transformations, and interactive dashboard authoring.',
      skillsCovered: ['DAX Calculations', 'Power Query M Code', 'Relational Data Modeling', 'KPI Dashboards']
    },
    {
      id: 'cert-devops',
      title: 'Linux & DevOps Foundations',
      issuer: 'Linux Foundation / GitHub Learning',
      status: 'In Progress / Upcoming',
      credentialNote: 'Hands-on practice with Linux CLI, Docker container lifecycle, and GitHub Actions CI pipelines.',
      skillsCovered: ['Linux Administration', 'Docker Containers', 'CI/CD Pipelines', 'Shell Automation']
    }
  ] as CertificationItem[],

  learningJourney: [
    {
      stepNumber: 1,
      stage: 'Foundation',
      technology: 'Computer Science Fundamentals',
      focus: 'Operating systems, computer networks, relational DBMS theory, and algorithm complexity',
      practice: 'Academic coursework, university lab projects, theory application',
      evidence: 'BCA degree coursework & structured examination results at Chitkara University',
      status: 'Mastered'
    },
    {
      stepNumber: 2,
      stage: 'Programming',
      technology: 'Python & Object-Oriented Principles',
      focus: 'Clean syntax, class structures, defensive error handling, data structures',
      practice: 'Algorithmic exercises, modular script authoring, data manipulation',
      evidence: 'Built Sattvik Bhojan application logic and MediAI backend specifications',
      status: 'Active Working Knowledge'
    },
    {
      stepNumber: 3,
      stage: 'Persistence',
      technology: 'SQL & PostgreSQL',
      focus: 'Relational schema design, normalization, ACID transactions, complex joins, subqueries',
      practice: 'Database modeling, query profiling, psycopg2 Python driver integration',
      evidence: 'Live PostgreSQL schema and transaction queries in Sattvik Bhojan repository',
      status: 'Active Working Knowledge'
    },
    {
      stepNumber: 4,
      stage: 'Architecture',
      technology: 'Backend & REST APIs',
      focus: 'HTTP protocols, REST architectural constraints, status codes, authentication with bcrypt',
      practice: 'API route planning, JSON serialization, Postman request validation',
      evidence: 'MediAI API blueprint & Postman endpoint collection documentation',
      status: 'Active Working Knowledge'
    },
    {
      stepNumber: 5,
      stage: 'Environment',
      technology: 'Linux & Command Line',
      focus: 'File permissions, process management, users/groups, package installations, SSH',
      practice: 'Ubuntu terminal administration, Bash command scripting, environment variables',
      evidence: 'Configured local development environments and CLI navigation structures',
      status: 'Active Working Knowledge'
    },
    {
      stepNumber: 6,
      stage: 'Collaboration',
      technology: 'Git & GitHub Version Control',
      focus: 'Branching strategies, commit conventions, merge management, PR workflows',
      practice: 'Multi-branch repository management, markdown documentation, commit hygiene',
      evidence: 'Public GitHub repositories with detailed technical READMEs and commit records',
      status: 'Active Working Knowledge'
    },
    {
      stepNumber: 7,
      stage: 'Business Insights',
      technology: 'Microsoft Power BI & Excel',
      focus: 'Power Query ETL, DAX measures, relational star-schemas, executive KPI reporting',
      practice: 'Sales dataset analysis, pivot modeling, dashboard wireframing',
      evidence: 'Microsoft Excel Professional Certificate + Power BI Sales Dashboard roadmap',
      status: 'Active Working Knowledge'
    },
    {
      stepNumber: 8,
      stage: 'Infrastructure',
      technology: 'Microsoft Azure (Cloud Fundamentals)',
      focus: 'Cloud resource provisioning, virtual machines, blob storage, VNet topology, Entra ID',
      practice: 'Azure Portal sandbox walkthroughs, AZ-900 certification curriculum study',
      evidence: 'Architecture blueprints for cloud migration of database prototypes',
      status: 'Currently Learning'
    },
    {
      stepNumber: 9,
      stage: 'Delivery',
      technology: 'DevOps & CI/CD Pipelines',
      focus: 'Docker containerization, automated testing triggers, GitHub Actions YAML workflows',
      practice: 'Dockerfile authoring, automated linting and build verification workflows',
      evidence: 'Roadmap CI/CD deployment project for continuous software integration',
      status: 'Currently Learning'
    }
  ] as LearningStep[]
};
