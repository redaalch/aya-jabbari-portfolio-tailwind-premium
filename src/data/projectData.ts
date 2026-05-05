type LinkDef = {
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
  contribution: string;
  summary: string;
  links: LinkDef;
};

export const featuredProjectsOrder = [
  "ONDA SNMP Network Monitoring Dashboard",
  "Smart Assurance Validator",
  "CNSS AI File Analysis System",
  "Swapify Learning Platform",
  "Intelligent Chatbot",
  "CI/CD Pipeline",
  "KubeFlask Local",
  "SNCF Data Analysis / BI",
];

export const secondaryProjectsList = [
  "Movie Recommendation",
  "AI Image Generation",
  "Café Management",
];
