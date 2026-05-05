import headshotUrl from "../assets/aya-jabbari-headshot.jpg";
import resumeUrl from "../assets/Aya_Jabbari_Resume.pdf";

export const profile = {
  name: "Aya Jabbari",
  role: "Computer Engineering Student",
  location: "Fès, Morocco",
  email: "ayajabbari81@gmail.com",
  phone: "+212 637 57 56 62",
  availability: "",
  availabilityBadge: "",
  stackLine:
    "Building practical systems across full-stack development, data, and applied AI.",
  headline:
    "I build usable software systems — from responsive web applications and backend services to automation workflows, data dashboards, and applied AI tools.",
  summary:
    "Computer engineering student at ENSA Fès with practical experience in full-stack development, automation, data-oriented systems, and generative AI applications.",
  headshotUrl,
  resumeUrl,
  socials: {
    github: null as string | null,
    linkedin: null as string | null,
  },
};

export type LinkDef = {
  repoUrl: string | null;
  demoUrl: string | null;
};

export type Project = {
  title: string;
  category: string;
  tier: "featured" | "secondary";
  period: string;
  role: string;
  stack: string[];
  problem: string;
  contribution?: string;
  summary?: string;
  links: LinkDef;
};

export const projects: Project[] = [
  {
    title: "ONDA SNMP Network Monitoring Dashboard",
    category: "Full-Stack",
    tier: "featured",
    period: "2025",
    role: "IT intern",
    links: { repoUrl: null, demoUrl: null },
    stack: ["PHP", "SNMP", "JavaScript", "HTML", "CSS"],
    problem:
      "Manual switch checks for health and port status were slow and error-prone.",
    contribution:
      "Replaced manual switch checks with a live SNMP dashboard for infrastructure health, port state, alerts, and reporting.",
  },
  {
    title: "Smart Assurance Validator",
    category: "AI",
    tier: "featured",
    period: "2026",
    role: "Built AI document workflow",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Python", "PDF parsing", "Image analysis", "Anomaly detection"],
    problem:
      "Automatically validate insurance files from PDF and image documents.",
    contribution:
      "Built a validation workflow that compared insurance documents, flagged inconsistencies, and routed edge cases to review.",
  },
  {
    title: "CNSS AI File Analysis System",
    category: "AI",
    tier: "featured",
    period: "2026",
    role: "Built AI document workflow",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Python", "OCR", "Document extraction", "Validation rules"],
    problem:
      "Automate CNSS file analysis and validation across structured, unstructured, scanned, and handwritten documents.",
    contribution:
      "Delivered a document automation prototype that extracted and checked CNSS records across scanned and handwritten files.",
  },
  {
    title: "Swapify Learning Platform",
    category: "Full-Stack",
    tier: "featured",
    period: "2025",
    role: "Built peer-to-peer learning platform",
    links: { repoUrl: null, demoUrl: null },
    stack: ["React", "Laravel", "REST APIs", "MySQL"],
    problem:
      "Learners needed a structured way to find peer educators with complementary skills.",
    contribution:
      "Connected learners through skill-based matching, profiles, requests, messaging, and rating flows for peer-to-peer education.",
  },
  {
    title: "Intelligent Chatbot",
    category: "Backend",
    tier: "featured",
    period: "2025",
    role: "Built Spring Boot backend",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Java", "Spring Boot", "JSON", "REST APIs"],
    problem:
      "Tech support agents spent too much time on repetitive triage flows.",
    contribution:
      "Turned repeated support decisions into structured Spring Boot flows backed by JSON troubleshooting logic.",
  },
  {
    title: "CI/CD Pipeline",
    category: "DevOps",
    tier: "featured",
    period: "2025",
    role: "Built CI/CD pipeline",
    links: { repoUrl: null, demoUrl: null },
    stack: ["GitHub Actions", "Terraform", "Ansible"],
    problem:
      "Manual code delivery slowed down reliable testing and staging deployments.",
    contribution:
      "Automated the build/test/deploy cycle with GitHub Actions, provisioned infrastructure with Terraform, and handled remote deployment with Ansible.",
  },
  {
    title: "KubeFlask Local",
    category: "DevOps",
    tier: "featured",
    period: "2025",
    role: "Built Kubernetes deployment",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Flask", "Docker", "Kubernetes", "Minikube", "YAML"],
    problem:
      "Needed a repeatable reference for running multi-container services locally.",
    contribution:
      "Created a local deployment reference for containerized Flask services, Kubernetes resources, and Minikube exposure.",
  },
  {
    title: "SNCF Data Analysis / BI",
    category: "Data/BI",
    tier: "featured",
    period: "2025",
    role: "Built ETL pipeline",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Talend ETL", "Power BI", "Data Modeling"],
    problem:
      "Raw transit data lacked clear reporting interfaces for business intelligence.",
    contribution:
      "Modeled and transformed operational datasets to support visual dashboards for rapid insights.",
  },
  {
    title: "Movie Recommendation",
    category: "Databases",
    tier: "secondary",
    period: "2025",
    role: "Built graph-based recommender",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Python", "Collaborative Filtering", "scikit-learn"],
    problem:
      "Users needed personalized content suggestions based on past interactions.",
    contribution:
      "Built a recommendation script using collaborative filtering techniques to predict user ratings.",
  },
  {
    title: "AI Image Generation",
    category: "AI",
    tier: "secondary",
    period: "2025",
    role: "Built generative-image pipeline",
    links: { repoUrl: null, demoUrl: null },
    stack: ["Python", "Stable Diffusion", "Hugging Face"],
    problem: "Exploration of prompt-based image generation workflows.",
    contribution:
      "Wrote inference scripts to generate assets using pre-trained diffusion models.",
  },
  {
    title: "Café Management",
    category: "Desktop",
    tier: "secondary",
    period: "2024",
    role: "Built WinForms desktop app",
    links: { repoUrl: null, demoUrl: null },
    stack: ["C#", "WinForms", "SQL Server"],
    problem: "Small shops relied on paper tracking for orders and billing.",
    contribution:
      "Developed a desktop client to handle active tables, simple menus, and receipt tracking.",
  },
];

export const experience = [
  {
    title: "IT Intern",
    organization: "Office National Des Aéroports — ONDA",
    date: "July 2025",
    location: "Fès, Morocco",
    context: "Browser-based SNMP monitoring dashboard for network switches.",
    contribution: "Built interface, real-time monitoring views, and system alert tracking.",
    stack: ["PHP", "SNMP", "JavaScript", "HTML", "CSS"],
  },
];

export const hackathons = [
  {
    label: "Ramadan AI Hackathon",
    organizer: "Ministry of Digital Transition",
    date: "March 2026",
    projectName: "CNSS AI File Analysis System",
    problem:
      "Automate CNSS file analysis and validation across structured, unstructured, scanned, and handwritten documents.",
    approach:
      "Designed a document-processing workflow with date validation, anomaly detection, and intelligent data extraction to reduce manual processing and improve reliability.",
    methods: [
      "Python",
      "OCR",
      "Document extraction",
      "Anomaly detection",
      "Validation rules",
    ],
  },
  {
    label: "Capgemini Hackathon",
    organizer: "Capgemini",
    date: "January 2026",
    projectName: "Smart Assurance Validator",
    problem:
      "Automatically validate insurance files from PDF and image documents.",
    approach:
      "Built an intelligent validation workflow with data extraction, cross-document consistency checking, anomaly detection, and escalation to a human expert for uncertain cases.",
    methods: [
      "Python",
      "PDF parsing",
      "Image analysis",
      "Anomaly detection",
      "Workflow design",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    tier1: ["Java", "Python", "JavaScript"],
    tier2: [] as string[],
    tier3: "C, C++, C#",
  },
  {
    title: "Web & Backend",
    tier1: ["Spring Boot", "PHP/Laravel", "React", "REST APIs"],
    tier2: ["HTML", "CSS", ".NET"],
    tier3: undefined as string | undefined,
  },
  {
    title: "Databases",
    tier1: ["MySQL", "SQL Server"],
    tier2: ["MongoDB", "Cassandra", "Neo4j"],
    tier3: undefined as string | undefined,
  },
  {
    title: "AI & Generative Tools",
    tier1: ["Applied AI", "Document validation"],
    tier2: ["ChatGPT", "Claude", "Stable Diffusion"],
    tier3: undefined as string | undefined,
  },
  {
    title: "Data & BI",
    tier1: ["Talend ETL", "Power BI"],
    tier2: ["Data analysis", "Data visualization"],
    tier3: undefined as string | undefined,
  },
  {
    title: "DevOps & Systems",
    tier1: ["SNMP", "Git"],
    tier2: [
      "Docker",
      "Kubernetes/Minikube",
      "GitHub Actions",
      "Terraform",
      "Ansible",
      "Linux",
    ],
    tier3: undefined as string | undefined,
  },
  {
    title: "Mobile & Desktop",
    tier1: [] as string[],
    tier2: [] as string[],
    tier3: "Android Studio, .NET MAUI, .NET WinForms" as string | undefined,
  },
  {
    title: "Concepts",
    tier1: [] as string[],
    tier2: [] as string[],
    tier3: "OOP, software design, UML modeling, REST API design" as
      | string
      | undefined,
  },
];

export const education = [
  {
    title: "Engineering Cycle in Computer Engineering",
    school: "ENSA Fès — École Nationale des Sciences Appliquées",
    date: "2024 – Present",
  },
  {
    title: "Integrated Preparatory Cycle",
    school: "ENSA Fès — École Nationale des Sciences Appliquées",
    date: "2022 – 2024",
  },
  {
    title: "Baccalaureate",
    school: "Institut Rabelais, Fès",
    date: "June 2022",
  },
];

export const certifications = [
  {
    title: "SQL Database Programming",
    issuer: "Oracle",
    description: "Relational database design, queries, and stored procedures.",
  },
  {
    title: "Database Design",
    issuer: "Oracle",
    description: "Entity-relationship modeling and schema normalization.",
  },
  {
    title: "Introduction to AI",
    issuer: "365 DataScience",
    description: "Foundations of machine learning and artificial intelligence.",
  },
  {
    title: "Introduction to ChatGPT and Generative AI",
    issuer: "365 DataScience",
    description:
      "Practical use of large language models and prompt engineering.",
  },
  {
    title: "C/C++ Certificate",
    issuer: "W3Schools",
    description: "Core programming fundamentals in C and C++.",
  },
];

export const languages = [
  { language: "Arabic", proficiency: "Native" },
  { language: "French", proficiency: "Advanced" },
  { language: "English", proficiency: "Advanced" },
];

export const volunteering = [
  "IEEE Region 8 & IEEE Junior",
  "JCMP Club & Community Service Club",
  "Star Debate",
  "Iklyl Cultural Center",
  "English teaching at children's library",
];
