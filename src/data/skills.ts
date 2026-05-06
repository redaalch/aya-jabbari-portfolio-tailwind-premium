export type CapabilityIcon =
  | "layout"
  | "chart"
  | "workflow"
  | "cpu";

export type CapabilityGroup = {
  id: string;
  icon: CapabilityIcon;
  title: string;
  description: string;
  tools: string[];
  tone: "rose" | "blush" | "plum" | "wine";
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "apps",
    icon: "layout",
    title: "Full-stack web apps",
    description:
      "End-to-end applications with responsive interfaces, backend services, API flows, and role-based user journeys.",
    tools: ["React", "Spring Boot", "Laravel", ".NET", "REST APIs"],
    tone: "rose",
  },
  {
    id: "data",
    icon: "chart",
    title: "Data and BI dashboards",
    description:
      "Structured datasets, ETL workflows, database modeling, and business dashboards for operational visibility.",
    tools: ["Power BI", "SQL", "MongoDB", "Talend", "Data Modeling"],
    tone: "blush",
  },
  {
    id: "automation",
    icon: "workflow",
    title: "Automation and DevOps",
    description:
      "Deployment workflows, containerized environments, infrastructure automation, and reliable delivery pipelines.",
    tools: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux"],
    tone: "plum",
  },
  {
    id: "ai",
    icon: "cpu",
    title: "Applied AI workflows",
    description:
      "Document validation, extraction logic, anomaly detection, and scripting workflows for practical AI systems.",
    tools: ["Python", "OCR", "Document Validation", "Anomaly Detection", "AI Extraction"],
    tone: "wine",
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
