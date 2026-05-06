import { useState } from "react";
import {
  Activity,
  BarChart3,
  ChevronDown,
  Cpu,
  Database,
  FileSearch,
  LayoutTemplate,
  Network,
  PieChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}.svg`;

type Tool = { name: string; logo?: string; icon?: LucideIcon };

type CapabilityDef = {
  id: number;
  titleKey: string;
  descKey: string;
  categoryIcon: LucideIcon;
  tools: Tool[];
};

const capabilityDefs: CapabilityDef[] = [
  {
    id: 1,
    titleKey: "cap.1.title",
    descKey: "cap.1.desc",
    categoryIcon: LayoutTemplate,
    tools: [
      { name: "React", logo: devicon("react/react-original") },
      { name: "Spring Boot", logo: devicon("spring/spring-original") },
      { name: "Laravel", logo: devicon("laravel/laravel-original") },
      { name: ".NET", logo: devicon("dotnetcore/dotnetcore-original") },
      { name: "REST APIs", icon: Network },
    ],
  },
  {
    id: 2,
    titleKey: "cap.2.title",
    descKey: "cap.2.desc",
    categoryIcon: BarChart3,
    tools: [
      { name: "Power BI", icon: PieChart },
      { name: "SQL", icon: Database },
      { name: "MongoDB", logo: devicon("mongodb/mongodb-original") },
      { name: "Data Modeling", icon: Workflow },
    ],
  },
  {
    id: 3,
    titleKey: "cap.3.title",
    descKey: "cap.3.desc",
    categoryIcon: Workflow,
    tools: [
      { name: "Docker", logo: devicon("docker/docker-original") },
      { name: "Kubernetes", logo: devicon("kubernetes/kubernetes-plain") },
      { name: "GitHub Actions", logo: devicon("github/github-original") },
      { name: "Terraform", logo: devicon("terraform/terraform-original") },
      { name: "Linux", logo: devicon("linux/linux-original") },
    ],
  },
  {
    id: 4,
    titleKey: "cap.4.title",
    descKey: "cap.4.desc",
    categoryIcon: Cpu,
    tools: [
      { name: "Python", logo: devicon("python/python-original") },
      { name: "OCR", icon: FileSearch },
      { name: "Doc Validation", icon: ShieldCheck },
      { name: "Anomaly Detection", icon: Activity },
    ],
  },
];

export function Capabilities() {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(null);

  return (
    <section
      id="capabilities"
      className="bg-[#FAF7F5] dark:bg-[#050A15] px-6 py-16 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-24">
          <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
            <span className="h-px w-8 bg-[#C28C88] dark:bg-[#38BDF8] transition-colors duration-500" aria-hidden="true" />
            {t("cap.eyebrow")}
          </p>
          <h2 className="mb-6 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:text-5xl lg:text-6xl">
            {t("cap.heading")}
          </h2>
          <p className="max-w-2xl border-l-2 border-[#E8D5D4] dark:border-[#1E293B] pl-6 text-lg font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
            {t("cap.desc")}
          </p>
        </div>

        {/* Desktop: hover-scatter */}
        <div className="mx-auto hidden max-w-5xl grid-cols-2 gap-x-8 gap-y-24 pb-24 pt-12 md:grid">
          {capabilityDefs.map((cap) => {
            const isHovered = hoveredCard === cap.id;
            const Icon = cap.categoryIcon;

            return (
              <div
                key={cap.id}
                className={`relative flex h-72 items-center justify-center transition-all duration-300 ${
                  isHovered ? "z-50" : "z-10"
                }`}
                onMouseEnter={() => setHoveredCard(cap.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="group absolute inset-0 flex items-center justify-center">
                  {cap.tools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className={`pointer-events-none absolute z-20 scale-50 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 ${getScatterClass(
                        cap.tools.length,
                        index,
                      )}`}
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <div
                        className="skills-float"
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        <div className="group/tool flex cursor-default items-center gap-3 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white/95 dark:bg-[#0F172A] px-5 py-3 shadow-[0_15px_30px_-5px_rgba(225,205,205,0.4)] dark:shadow-none backdrop-blur-md transition-all duration-300 hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:shadow-[0_20px_40px_-5px_rgba(225,205,205,0.6)] dark:hover:shadow-[0_20px_40px_-5px_rgba(56,189,248,0.08)]">
                          <div className="opacity-60 grayscale transition-all duration-300 group-hover/tool:opacity-100 group-hover/tool:grayscale-0">
                            <TechIcon tool={tool} className={tool.logo ? "" : "text-[#C28C88] dark:text-[#38BDF8]"} />
                          </div>
                          <span className="whitespace-nowrap text-sm font-bold text-[#3A2B29] dark:text-[#F8FAFC] transition-colors group-hover/tool:text-[#C28C88] dark:group-hover/tool:text-[#38BDF8]">
                            {tool.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="relative z-10 flex w-full max-w-[300px] cursor-crosshair flex-col items-center rounded-[2.5rem] border-2 border-white dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#050A15] p-8 text-center shadow-[0_10px_40px_-10px_rgba(225,205,205,0.4)] dark:shadow-none transition-all duration-500 group-hover:scale-95 group-hover:bg-white dark:group-hover:bg-[#0F172A]">
                    <div className="mb-6 rounded-2xl border border-[#FAF7F5] dark:border-[#050A15] bg-white dark:bg-[#0F172A] p-4 text-[#C28C88] dark:text-[#38BDF8] shadow-sm transition-all duration-500 group-hover:-translate-y-2">
                      <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 font-display text-2xl text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">
                      {t(cap.titleKey)}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#8C7A78] dark:text-[#94A3B8] transition-all duration-300 group-hover:opacity-0">
                      {t("cap.hover_hint")}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="flex flex-col gap-4 md:hidden">
          {capabilityDefs.map((cap) => {
            const isExpanded = expandedMobileCard === cap.id;
            const Icon = cap.categoryIcon;

            return (
              <div
                key={cap.id}
                className={`overflow-hidden rounded-3xl border bg-white dark:bg-[#0F172A] shadow-sm transition-all duration-500 ${
                  isExpanded
                    ? "border-[#C28C88] dark:border-[#38BDF8] shadow-[0_15px_40px_-10px_rgba(225,205,205,0.5)] dark:shadow-[0_15px_40px_-10px_rgba(56,189,248,0.08)]"
                    : "border-[#E8D5D4] dark:border-[#1E293B]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedMobileCard(isExpanded ? null : cap.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`rounded-2xl p-3 transition-colors duration-300 ${
                        isExpanded
                          ? "bg-[#FFF5F5] dark:bg-[#1E293B] text-[#C28C88] dark:text-[#38BDF8]"
                          : "bg-[#FAF7F5] dark:bg-[#050A15] text-[#A67571] dark:text-[#94A3B8]"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="mb-1 block font-display text-lg leading-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">
                        {t(cap.titleKey)}
                      </span>
                      <span
                        className={`text-xs font-medium transition-colors duration-300 ${
                          isExpanded
                            ? "text-[#C28C88] dark:text-[#38BDF8]"
                            : "text-[#A67571] dark:text-[#94A3B8]"
                        }`}
                      >
                        {isExpanded ? t("cap.tap_close") : t("cap.tap_reveal")}
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-all duration-500 ${
                      isExpanded
                        ? "rotate-180 text-[#C28C88] dark:text-[#38BDF8]"
                        : "text-[#A67571] dark:text-[#94A3B8]"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[520px] pb-8 pt-2 opacity-100" : "max-h-0 pb-0 pt-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-[#F2EAE9] dark:border-[#1E293B] pt-6 transition-colors duration-500">
                    <p className="mb-6 text-sm font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
                      {t(cap.descKey)}
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {cap.tools.map((tool) => (
                        <div
                          key={tool.name}
                          className="flex items-center gap-2 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#0F172A] px-3 py-2 transition-colors duration-500"
                        >
                          <TechIcon tool={tool} className={tool.logo ? "" : "text-[#C28C88] dark:text-[#38BDF8]"} />
                          <span className="text-xs font-medium text-[#4A3B39] dark:text-[#94A3B8] transition-colors duration-500">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes skills-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .skills-float { animation: skills-float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function TechIcon({ tool, className = "" }: { tool: Tool; className?: string }) {
  if (tool.logo) {
    return (
      <img src={tool.logo} alt="" className={`h-5 w-5 object-contain ${className}`} loading="lazy" />
    );
  }
  const Icon = tool.icon;
  if (!Icon) return null;
  return <Icon className={`h-5 w-5 ${className}`} strokeWidth={1.5} />;
}

function getScatterClass(total: number, index: number) {
  if (total === 4) {
    return [
      "group-hover:-translate-x-36 group-hover:-translate-y-28 group-hover:-rotate-12",
      "group-hover:translate-x-36 group-hover:-translate-y-28 group-hover:rotate-12",
      "group-hover:-translate-x-32 group-hover:translate-y-24 group-hover:-rotate-6",
      "group-hover:translate-x-32 group-hover:translate-y-24 group-hover:rotate-6",
    ][index] ?? "";
  }
  return [
    "group-hover:-translate-y-36 group-hover:-rotate-3",
    "group-hover:-translate-x-44 group-hover:-translate-y-10 group-hover:-rotate-12",
    "group-hover:translate-x-44 group-hover:-translate-y-10 group-hover:rotate-12",
    "group-hover:-translate-x-28 group-hover:translate-y-28 group-hover:-rotate-6",
    "group-hover:translate-x-28 group-hover:translate-y-28 group-hover:rotate-6",
  ][index] ?? "";
}
