export type LinkDef = {
  repoUrl: string | null;
  demoUrl: string | null;
};

export type WorkType = "Internship" | "Hackathon" | "Project";
export type WorkTier = "selected" | "archive";

export type WorkItem = {
  id: string;
  title: string;
  type: WorkType;
  category: string;
  tier: WorkTier;
  period: string;
  role: string;
  organization?: string;
  location?: string;
  problem: string;
  contribution: string;
  stack: string[];
  links: LinkDef;
  image: string;
};

const privateLinks: LinkDef = { repoUrl: null, demoUrl: null };

export const selectedWorkOrder = [
  "onda-snmp-dashboard",
  "smart-assurance-validator",
  "cnss-ai-file-analysis",
  "swapify-learning-platform",
  "intelligent-chatbot",
  "cicd-pipeline",
  "kubeflask-local",
  "sncf-data-analysis-bi",
];

export const archiveWorkOrder = [
  "movie-recommendation",
  "ai-image-generation",
  "cafe-management",
];

export const workItems: WorkItem[] = [
  {
    id: "onda-snmp-dashboard",
    title: "ONDA SNMP Network Monitoring Dashboard",
    type: "Internship",
    category: "Full-Stack",
    tier: "selected",
    period: "July 2025",
    role: "IT Intern",
    organization: "Office National Des Aéroports — ONDA",
    location: "Fès, Morocco",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    stack: ["PHP", "SNMP", "JavaScript", "HTML", "CSS"],
    problem:
      "Manual switch checks for health and port status were slow and error-prone.",
    contribution:
      "Built a browser-based SNMP dashboard with real-time monitoring views, infrastructure health tracking, port state reporting, and alert visibility.",
  },
  {
    id: "smart-assurance-validator",
    title: "Smart Assurance Validator",
    type: "Hackathon",
    category: "AI",
    tier: "selected",
    period: "January 2026",
    role: "Built AI document workflow",
    organization: "Capgemini Hackathon",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "PDF parsing", "Image analysis", "Anomaly detection"],
    problem:
      "Automatically validate insurance files from PDF and image documents.",
    contribution:
      "Designed a validation workflow that extracts data, checks cross-document consistency, flags anomalies, and routes uncertain cases to human review.",
  },
  {
    id: "cnss-ai-file-analysis",
    title: "CNSS AI File Analysis System",
    type: "Hackathon",
    category: "AI",
    tier: "selected",
    period: "March 2026",
    role: "Built AI document workflow",
    organization: "Ramadan AI Hackathon · Ministry of Digital Transition",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "OCR", "Document extraction", "Validation rules"],
    problem:
      "Automate CNSS file analysis and validation across structured, unstructured, scanned, and handwritten documents.",
    contribution:
      "Designed a document-processing workflow with date validation, anomaly detection, and intelligent extraction to reduce manual processing and improve reliability.",
  },
  {
    id: "swapify-learning-platform",
    title: "Swapify Learning Platform",
    type: "Project",
    category: "Full-Stack",
    tier: "selected",
    period: "2025",
    role: "Built peer-to-peer learning platform",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    stack: ["React", "Laravel", "REST APIs", "MySQL"],
    problem:
      "Learners needed a structured way to find peer educators with complementary skills.",
    contribution:
      "Connected learners through skill-based matching, profiles, requests, messaging, and rating flows for peer-to-peer education.",
  },
  {
    id: "intelligent-chatbot",
    title: "Intelligent Chatbot",
    type: "Project",
    category: "Backend",
    tier: "selected",
    period: "2025",
    role: "Built Spring Boot backend",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop",
    stack: ["Java", "Spring Boot", "JSON", "REST APIs"],
    problem:
      "Tech support agents spent too much time on repetitive triage flows.",
    contribution:
      "Turned repeated support decisions into structured Spring Boot flows backed by JSON troubleshooting logic.",
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline",
    type: "Project",
    category: "DevOps",
    tier: "selected",
    period: "2025",
    role: "Built CI/CD pipeline",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    stack: ["GitHub Actions", "Terraform", "Ansible"],
    problem:
      "Manual code delivery slowed down reliable testing and staging deployments.",
    contribution:
      "Automated the build, test, and deploy cycle with GitHub Actions, provisioned infrastructure with Terraform, and handled remote deployment with Ansible.",
  },
  {
    id: "kubeflask-local",
    title: "KubeFlask Local",
    type: "Project",
    category: "DevOps",
    tier: "selected",
    period: "2025",
    role: "Built Kubernetes deployment",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
    stack: ["Flask", "Docker", "Kubernetes", "Minikube", "YAML"],
    problem:
      "Needed a repeatable reference for running multi-container services locally.",
    contribution:
      "Created a local deployment reference for containerized Flask services, Kubernetes resources, and Minikube exposure.",
  },
  {
    id: "sncf-data-analysis-bi",
    title: "SNCF Data Analysis / BI",
    type: "Project",
    category: "Data/BI",
    tier: "selected",
    period: "2025",
    role: "Built ETL pipeline",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    stack: ["Talend ETL", "Power BI", "Data Modeling"],
    problem:
      "Raw transit data lacked clear reporting interfaces for business intelligence.",
    contribution:
      "Modeled and transformed operational datasets to support visual dashboards for rapid insights.",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation",
    type: "Project",
    category: "Databases",
    tier: "archive",
    period: "2025",
    role: "Built graph-based recommender",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "Collaborative Filtering", "scikit-learn"],
    problem:
      "Users needed personalized content suggestions based on past interactions.",
    contribution:
      "Built a recommendation script using collaborative filtering techniques to predict user ratings.",
  },
  {
    id: "ai-image-generation",
    title: "AI Image Generation",
    type: "Project",
    category: "AI",
    tier: "archive",
    period: "2025",
    role: "Built generative-image pipeline",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    stack: ["Python", "Stable Diffusion", "Hugging Face"],
    problem: "Exploration of prompt-based image generation workflows.",
    contribution:
      "Wrote inference scripts to generate assets using pre-trained diffusion models.",
  },
  {
    id: "cafe-management",
    title: "Café Management",
    type: "Project",
    category: "Desktop",
    tier: "archive",
    period: "2024",
    role: "Built WinForms desktop app",
    links: privateLinks,
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop",
    stack: ["C#", "WinForms", "SQL Server"],
    problem: "Small shops relied on paper tracking for orders and billing.",
    contribution:
      "Developed a desktop client to handle active tables, simple menus, and receipt tracking.",
  },
];
