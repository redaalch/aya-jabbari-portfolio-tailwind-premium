import type { ReactNode } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileCode2,
  Github,
  Lock,
  Search,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import {
  projectDetails,
  type ProjectDetailContent,
} from "../../data/projectDetails";
import { workItems, type WorkItem } from "../../data/work";
import { useLanguage } from "../../contexts/LanguageContext";
import { toHref } from "../../utils/paths";

type ProjectCaseStudyProps = {
  projectId: string;
};

export function ProjectCaseStudy({ projectId }: ProjectCaseStudyProps) {
  const { t } = useLanguage();
  const project = workItems.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#FAF7F5] dark:bg-[#050A15] px-6 pb-20 pt-32 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-col items-start">
          <a
            href={toHref("/projects")}
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#8C7A78] dark:text-[#94A3B8] transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("detail.back")}
          </a>
          <div className="rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-10 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.35)] dark:shadow-none transition-colors duration-500">
            <Search className="mb-6 h-8 w-8 text-[#C28C88] dark:text-[#38BDF8]" aria-hidden="true" />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8]">
              {t("detail.not_found_eyebrow")}
            </p>
            <h1 className="font-display text-4xl leading-tight text-[#3A2B29] dark:text-[#F8FAFC]">
              {t("detail.not_found_heading")}
            </h1>
            <p className="mt-4 text-lg font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]">
              {t("detail.not_found_desc")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const details = projectDetails[project.id] ?? createFallbackDetails(project);
  const repoName = details.repository?.name ?? project.id;
  const repoUrl = details.repository?.url ?? project.links.repoUrl;

  return (
    <div className="min-h-screen bg-[#FAF7F5] dark:bg-[#050A15] pb-24 pt-28 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:pt-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 md:px-8 lg:px-12">

        {/* Back navigation */}
        <a
          href={toHref("/projects")}
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#8C7A78] dark:text-[#475569] transition-colors hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {t("detail.back")}
        </a>

        {/* GitHub-style repo header */}
        <div className="flex flex-col gap-6 border-b border-[#E8D5D4] pb-6 transition-colors duration-500 dark:border-[#1E293B] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded border border-[#E8D5D4] bg-[#FFF5F5] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C28C88] transition-colors duration-500 dark:border-[#0284C7]/30 dark:bg-[#0284C7]/20 dark:text-[#38BDF8]">
                {project.type}
              </span>
              <span className="font-mono text-xs text-[#8C7A78] transition-colors duration-500 dark:text-[#94A3B8]">
                {project.period}
              </span>
              {project.organization && (
                <span className="font-mono text-xs text-[#8C7A78] transition-colors duration-500 dark:text-[#94A3B8]">
                  {project.organization}
                </span>
              )}
            </div>
            <h1 className="flex items-center gap-3 font-serif text-2xl font-bold text-[#3A2B29] transition-colors duration-500 dark:text-[#F8FAFC] sm:text-3xl">
              <FileCode2
                size={28}
                className="text-[#A67571] transition-colors duration-500 dark:text-[#475569]"
                aria-hidden="true"
              />
              {repoName}
            </h1>
            <p className="mt-1.5 text-sm text-[#8C7A78] transition-colors duration-500 dark:text-[#94A3B8]">
              {project.title} · {project.role}
            </p>
          </div>

          {details.repository && (
            <div className="flex overflow-hidden rounded-lg border border-[#E8D5D4] bg-white font-mono text-xs shadow-sm transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A]">
              <div className="flex items-center gap-2 border-r border-[#E8D5D4] px-3 py-2 transition-colors duration-500 dark:border-[#1E293B]">
                <span className="inline-block h-3 w-3 rounded-full bg-[#C28C88] dark:bg-[#38BDF8]" />
                <span className="text-[#5C4D4B] dark:text-[#94A3B8]">
                  {details.repository.language}
                </span>
              </div>
              <div className="px-3 py-2 text-[#5C4D4B] dark:text-[#94A3B8]">
                Updated {details.repository.updated}
              </div>
            </div>
          )}
        </div>

        {/* Browser chrome screenshot */}
        <div className="w-full overflow-hidden rounded-xl border border-[#E8D5D4] bg-white shadow-[0_15px_40px_-10px_rgba(225,205,205,0.4)] transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A] dark:shadow-none">
          <div className="flex items-center gap-2 border-b border-[#E8D5D4] bg-[#FAF7F5] px-4 py-3 transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#050A15]">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <div className="mx-auto rounded border border-[#E8D5D4] bg-white px-16 py-1 text-center font-mono text-[10px] text-[#A67571] transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A] dark:text-[#475569]">
              {repoName}
            </div>
          </div>
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            className="aspect-video h-auto w-full object-cover transition-all duration-500 dark:brightness-90 dark:contrast-125"
            loading="eager"
          />
        </div>

        {/* Vertical timeline */}
        <div className="relative ml-3 space-y-16 border-l-2 border-[#E8D5D4] pl-6 transition-colors duration-500 dark:border-[#1E293B] md:ml-4 md:pl-8">

          <TimelineNode index={1} title="Overview & Problem Space">
            <p className="mb-4 text-base leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]">
              {details.overview}
            </p>
            <p className="text-base leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]">
              {project.problem}
            </p>
          </TimelineNode>

          <TimelineNode index={2} title="Architecture & Dependencies" variant="accent">
            <div className="overflow-hidden rounded-xl border border-[#3A2B29] bg-[#1A1110] p-5 shadow-inner transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#000000]">
              <div className="mb-4 flex items-center gap-2 border-b border-[#3A2B29] pb-3 text-xs text-[#A67571] transition-colors duration-500 dark:border-[#1E293B] dark:text-[#475569]">
                <Terminal size={14} aria-hidden="true" />
                <span className="font-mono">requirements.txt</span>
              </div>
              <ul className="space-y-1.5 font-mono text-sm text-emerald-400 dark:text-[#38BDF8]">
                {project.stack.map((tech, i) => (
                  <li key={tech}>
                    <span className="mr-3 select-none text-[#5C4D4B] dark:text-[#475569]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {tech}
                    <span className="text-[#A67571] dark:text-[#475569]">==latest</span>
                  </li>
                ))}
              </ul>
            </div>
          </TimelineNode>

          <TimelineNode index={3} title="Implementation & Key Decisions">
            <p className="mb-6 text-base leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]">
              {project.contribution}
            </p>
            <div className="rounded-r-xl border-l-4 border-[#C28C88] bg-[#FFF5F5] p-5 transition-colors duration-500 dark:border-[#38BDF8] dark:bg-[#0284C7]/10">
              <div className="mb-3 flex items-center gap-2 text-[#C28C88] dark:text-[#38BDF8]">
                <ShieldCheck size={16} aria-hidden="true" />
                <strong className="text-sm font-bold uppercase tracking-wider">
                  Key Decisions
                </strong>
              </div>
              <ul className="space-y-2">
                {details.decisions.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C28C88] dark:bg-[#38BDF8]"
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </TimelineNode>

          <TimelineNode index={4} title="Engineering Workflow">
            <div className="space-y-3">
              {details.workflow.map((step, i) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-[#E8D5D4] bg-white p-4 transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E8D5D4] bg-[#FAF7F5] font-mono text-xs font-bold text-[#C28C88] transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#050A15] dark:text-[#38BDF8]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </TimelineNode>

          <TimelineNode index={5} title="Outcomes" variant="solid">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl border border-[#E8D5D4] bg-white p-4 shadow-sm transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A]"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-500 dark:text-[#38BDF8]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8]">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </TimelineNode>

          <TimelineNode index={6} title="Open Issues / Next Steps">
            <div className="overflow-hidden rounded-xl border border-[#E8D5D4] bg-white transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A]">
              {details.nextSteps.map((step, i) => (
                <div
                  key={step}
                  className={`flex items-start gap-3 p-4 transition-colors duration-300 hover:bg-[#FAF7F5] dark:hover:bg-[#1E293B]/50 ${
                    i !== details.nextSteps.length - 1
                      ? "border-b border-[#E8D5D4] dark:border-[#1E293B]"
                      : ""
                  }`}
                >
                  <Circle
                    size={16}
                    className="mt-0.5 shrink-0 text-[#C28C88] dark:text-[#38BDF8]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-[#5C4D4B] transition-colors duration-500 dark:text-[#F8FAFC]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </TimelineNode>

        </div>

        {/* Footer action row */}
        {(repoUrl || project.links.demoUrl) && (
          <div className="flex flex-wrap gap-3 border-t border-[#E8D5D4] pt-6 transition-colors duration-500 dark:border-[#1E293B]">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#3A2B29] px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#C28C88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:bg-[#38BDF8] dark:text-[#050A15] dark:hover:bg-[#0284C7]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t("work.view_repo")}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] bg-[#FAF7F5] px-5 py-3 text-sm font-bold text-[#5C4D4B] transition-colors duration-500 dark:border-[#1E293B] dark:bg-[#0F172A] dark:text-[#94A3B8]">
                <Lock className="h-4 w-4 text-[#A67571] dark:text-[#94A3B8]" aria-hidden="true" />
                {t("work.private")}
              </span>
            )}
            {project.links.demoUrl && (
              <a
                href={project.links.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] bg-[#FAF7F5] px-5 py-3 text-sm font-bold text-[#3A2B29] transition-colors hover:border-[#C28C88] hover:text-[#C28C88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:border-[#1E293B] dark:bg-[#0F172A] dark:text-[#F8FAFC] dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {t("detail.live_demo")}
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

type TimelineNodeProps = {
  index: number;
  title: string;
  children: ReactNode;
  variant?: "default" | "accent" | "solid";
};

function TimelineNode({ index, title, children, variant = "default" }: TimelineNodeProps) {
  const dotClass =
    variant === "solid"
      ? "bg-[#C28C88] dark:bg-[#38BDF8] border-2 border-white dark:border-[#050A15] shadow-sm"
      : variant === "accent"
      ? "bg-[#FFF5F5] dark:bg-[#0284C7]/20 border-2 border-[#C28C88] dark:border-[#38BDF8]"
      : "bg-white dark:bg-[#0F172A] border-2 border-[#C28C88] dark:border-[#38BDF8]";

  return (
    <div className="relative">
      <div
        className={`absolute -left-[33px] h-[18px] w-[18px] rounded-full transition-colors duration-500 md:-left-[41px] ${dotClass}`}
        aria-hidden="true"
      />
      <h3 className="mb-4 font-serif text-xl text-[#3A2B29] transition-colors duration-500 dark:text-[#F8FAFC]">
        {index}. {title}
      </h3>
      {children}
    </div>
  );
}

function createFallbackDetails(project: WorkItem): ProjectDetailContent {
  return {
    overview: project.contribution,
    highlights: project.stack.map((tool) => `${tool} was part of the build.`),
    workflow: [
      "Define the project problem and expected users.",
      "Design the main technical flow.",
      "Build the core implementation.",
      "Review the result against the original need.",
    ],
    decisions: [
      "Kept the implementation scoped to the project objective.",
      "Focused on a practical working result.",
      "Used the available stack to keep the build maintainable.",
    ],
    outcomes: [
      "Created a concrete technical project.",
      "Practiced implementation and problem decomposition.",
      "Added a portfolio-ready reference.",
    ],
    nextSteps: [
      "Add tests.",
      "Improve documentation.",
      "Publish a more detailed repository when available.",
    ],
  };
}
