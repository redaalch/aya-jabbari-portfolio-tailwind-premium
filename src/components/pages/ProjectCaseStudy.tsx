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
      <section className="min-h-screen bg-warm-50 dark:bg-abyssal-base px-6 pb-20 pt-32 text-warm-900 dark:text-abyssal-text transition-colors duration-500 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-col items-start">
          <a
            href={toHref("/projects")}
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-warm-500 dark:text-abyssal-text-muted transition-colors hover:text-warm-900 dark:hover:text-abyssal-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("detail.back")}
          </a>
          <div className="rounded-[2rem] border border-warm-200 dark:border-abyssal-border bg-white dark:bg-abyssal-surface p-10 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.35)] dark:shadow-none transition-colors duration-500">
            <Search className="mb-6 h-8 w-8 text-warm-300 dark:text-abyssal-accent" aria-hidden="true" />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-warm-300 dark:text-abyssal-accent">
              {t("detail.not_found_eyebrow")}
            </p>
            <h1 className="font-display text-4xl leading-tight text-warm-900 dark:text-abyssal-text">
              {t("detail.not_found_heading")}
            </h1>
            <p className="mt-4 text-lg font-light leading-relaxed text-warm-700 dark:text-abyssal-text-muted">
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

  const typeKey = {
    Internship: "work.type_internship",
    Hackathon: "work.type_hackathon",
    Project: "work.type_project",
  } as const;

  return (
    <div className="min-h-screen bg-warm-50 dark:bg-abyssal-base pb-24 pt-28 text-warm-900 dark:text-abyssal-text transition-colors duration-500 md:pt-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 md:px-8 lg:px-12">

        {/* Back navigation */}
        <a
          href={toHref("/projects")}
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-warm-500 dark:text-abyssal-text-faint transition-colors hover:text-warm-300 dark:hover:text-abyssal-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {t("detail.back")}
        </a>

        {/* GitHub-style repo header */}
        <div className="flex flex-col gap-6 border-b border-warm-200 pb-6 transition-colors duration-500 dark:border-abyssal-border sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded border border-warm-200 bg-warm-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm-300 transition-colors duration-500 dark:border-abyssal-accent-hover/30 dark:bg-abyssal-accent-hover/20 dark:text-abyssal-accent">
                {t(typeKey[project.type])}
              </span>
              <span className="font-mono text-xs text-warm-500 transition-colors duration-500 dark:text-abyssal-text-muted">
                {project.period}
              </span>
              {project.organization && (
                <span className="font-mono text-xs text-warm-500 transition-colors duration-500 dark:text-abyssal-text-muted">
                  {project.organization}
                </span>
              )}
            </div>
            <h1 className="flex items-center gap-3 font-serif text-2xl font-bold text-warm-900 transition-colors duration-500 dark:text-abyssal-text sm:text-3xl">
              <FileCode2
                size={28}
                className="text-warm-400 transition-colors duration-500 dark:text-abyssal-text-faint"
                aria-hidden="true"
              />
              {repoName}
            </h1>
            <p className="mt-1.5 text-sm text-warm-500 transition-colors duration-500 dark:text-abyssal-text-muted">
              {project.title} · {project.role}
            </p>
          </div>

          {details.repository && (
            <div className="flex overflow-hidden rounded-lg border border-warm-200 bg-white font-mono text-xs shadow-sm transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface">
              <div className="flex items-center gap-2 border-r border-warm-200 px-3 py-2 transition-colors duration-500 dark:border-abyssal-border">
                <span className="inline-block h-3 w-3 rounded-full bg-warm-300 dark:bg-abyssal-accent" />
                <span className="text-warm-700 dark:text-abyssal-text-muted">
                  {details.repository.language}
                </span>
              </div>
              <div className="px-3 py-2 text-warm-700 dark:text-abyssal-text-muted">
                {t("detail.meta_updated")} {details.repository.updated}
              </div>
            </div>
          )}
        </div>

        {/* Browser chrome screenshot */}
        <div className="w-full overflow-hidden rounded-xl border border-warm-200 bg-white shadow-[0_15px_40px_-10px_rgba(225,205,205,0.4)] transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface dark:shadow-none">
          <div className="flex items-center gap-2 border-b border-warm-200 bg-warm-50 px-4 py-3 transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-base">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <div className="mx-auto rounded border border-warm-200 bg-white px-16 py-1 text-center font-mono text-[10px] text-warm-400 transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface dark:text-abyssal-text-faint">
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
        <div className="relative ml-3 space-y-16 border-l-2 border-warm-200 pl-6 transition-colors duration-500 dark:border-abyssal-border md:ml-4 md:pl-8">

          <TimelineNode index={1} title={t("detail.section_overview")}>
            <p className="mb-4 text-base leading-relaxed text-warm-700 dark:text-abyssal-text-muted">
              {details.overview}
            </p>
            <p className="text-base leading-relaxed text-warm-700 dark:text-abyssal-text-muted">
              {project.problem}
            </p>
          </TimelineNode>

          <TimelineNode index={2} title={t("detail.section_architecture")} variant="accent">
            <div className="overflow-hidden rounded-xl border border-warm-900 bg-[#1A1110] p-5 shadow-inner transition-colors duration-500 dark:border-abyssal-border dark:bg-[#000000]">
              <div className="mb-4 flex items-center gap-2 border-b border-warm-900 pb-3 text-xs text-warm-400 transition-colors duration-500 dark:border-abyssal-border dark:text-abyssal-text-faint">
                <Terminal size={14} aria-hidden="true" />
                <span className="font-mono">requirements.txt</span>
              </div>
              <ul className="space-y-1.5 font-mono text-sm text-emerald-400 dark:text-abyssal-accent">
                {project.stack.map((tech, i) => (
                  <li key={tech}>
                    <span className="mr-3 select-none text-warm-700 dark:text-abyssal-text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {tech}
                    <span className="text-warm-400 dark:text-abyssal-text-faint">==latest</span>
                  </li>
                ))}
              </ul>
            </div>
          </TimelineNode>

          <TimelineNode index={3} title={t("detail.section_implementation")}>
            <p className="mb-6 text-base leading-relaxed text-warm-700 dark:text-abyssal-text-muted">
              {project.contribution}
            </p>
            <div className="rounded-r-xl border-l-4 border-warm-300 bg-warm-100 p-5 transition-colors duration-500 dark:border-abyssal-accent dark:bg-abyssal-accent-hover/10">
              <div className="mb-3 flex items-center gap-2 text-warm-300 dark:text-abyssal-accent">
                <ShieldCheck size={16} aria-hidden="true" />
                <strong className="text-sm font-bold uppercase tracking-wider">
                  {t("detail.decisions")}
                </strong>
              </div>
              <ul className="space-y-2">
                {details.decisions.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-relaxed text-warm-700 dark:text-abyssal-text-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-300 dark:bg-abyssal-accent"
                      aria-hidden="true"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </TimelineNode>

          <TimelineNode index={4} title={t("detail.workflow")}>
            <div className="space-y-3">
              {details.workflow.map((step, i) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-warm-200 bg-white p-4 transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-warm-200 bg-warm-50 font-mono text-xs font-bold text-warm-300 transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-base dark:text-abyssal-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-warm-700 dark:text-abyssal-text-muted">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </TimelineNode>

          <TimelineNode index={5} title={t("detail.outcomes")} variant="solid">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-xl border border-warm-200 bg-white p-4 shadow-sm transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-500 dark:text-abyssal-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-relaxed text-warm-700 dark:text-abyssal-text-muted">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </TimelineNode>

          <TimelineNode index={6} title={t("detail.next")}>
            <div className="overflow-hidden rounded-xl border border-warm-200 bg-white transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface">
              {details.nextSteps.map((step, i) => (
                <div
                  key={step}
                  className={`flex items-start gap-3 p-4 transition-colors duration-300 hover:bg-warm-50 dark:hover:bg-abyssal-border/50 ${
                    i !== details.nextSteps.length - 1
                      ? "border-b border-warm-200 dark:border-abyssal-border"
                      : ""
                  }`}
                >
                  <Circle
                    size={16}
                    className="mt-0.5 shrink-0 text-warm-300 dark:text-abyssal-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-warm-700 transition-colors duration-500 dark:text-abyssal-text">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </TimelineNode>

        </div>

        {/* Footer action row */}
        {(repoUrl || project.links.demoUrl) && (
          <div className="flex flex-wrap gap-3 border-t border-warm-200 pt-6 transition-colors duration-500 dark:border-abyssal-border">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-warm-900 px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-warm-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:bg-abyssal-accent dark:text-abyssal-base dark:hover:bg-abyssal-accent-hover"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t("work.view_repo")}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50 px-5 py-3 text-sm font-bold text-warm-700 transition-colors duration-500 dark:border-abyssal-border dark:bg-abyssal-surface dark:text-abyssal-text-muted">
                <Lock className="h-4 w-4 text-warm-400 dark:text-abyssal-text-muted" aria-hidden="true" />
                {t("work.private")}
              </span>
            )}
            {project.links.demoUrl && (
              <a
                href={project.links.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50 px-5 py-3 text-sm font-bold text-warm-900 transition-colors hover:border-warm-300 hover:text-warm-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:border-abyssal-border dark:bg-abyssal-surface dark:text-abyssal-text dark:hover:border-abyssal-accent dark:hover:text-abyssal-accent"
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
      ? "bg-warm-300 dark:bg-abyssal-accent border-2 border-white dark:border-abyssal-base shadow-sm"
      : variant === "accent"
      ? "bg-warm-100 dark:bg-abyssal-accent-hover/20 border-2 border-warm-300 dark:border-abyssal-accent"
      : "bg-white dark:bg-abyssal-surface border-2 border-warm-300 dark:border-abyssal-accent";

  return (
    <div className="relative">
      <div
        className={`absolute -left-[33px] h-[18px] w-[18px] rounded-full transition-colors duration-500 md:-left-[41px] ${dotClass}`}
        aria-hidden="true"
      />
      <h3 className="mb-4 font-serif text-xl text-warm-900 transition-colors duration-500 dark:text-abyssal-text">
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
