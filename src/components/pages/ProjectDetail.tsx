import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lock,
  Search,
} from "lucide-react";
import {
  projectDetails,
  type ProjectDetailContent,
} from "../../data/projectDetails";
import { workItems, type WorkItem, type WorkType } from "../../data/work";
import { useLanguage } from "../../contexts/LanguageContext";

type ProjectDetailProps = {
  projectId: string;
};

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { t } = useLanguage();
  const project = workItems.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#FAF7F5] dark:bg-[#050A15] px-6 pb-20 pt-32 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-col items-start">
          <a
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#8C7A78] dark:text-[#94A3B8] transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("detail.back")}
          </a>
          <div className="rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-10 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.35)] dark:shadow-none transition-colors duration-500">
            <Search className="mb-6 h-8 w-8 text-[#C28C88] dark:text-[#38BDF8]" aria-hidden="true" />
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
              {t("detail.not_found_eyebrow")}
            </p>
            <h1 className="font-display text-4xl leading-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">
              {t("detail.not_found_heading")}
            </h1>
            <p className="mt-4 text-lg font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
              {t("detail.not_found_desc")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const details = projectDetails[project.id] ?? createFallbackDetails(project);
  const repoUrl = details.repository?.url ?? project.links.repoUrl;
  const typeLabel = getWorkTypeLabel(t, project.type);

  return (
    <article className="min-h-screen bg-[#FAF7F5] dark:bg-[#050A15] px-6 pb-20 pt-32 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <a
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#8C7A78] dark:text-[#94A3B8] transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("detail.back")}
        </a>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="order-last lg:order-first">
            <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
              <span className="h-px w-8 bg-[#C28C88] dark:bg-[#38BDF8]" aria-hidden="true" />
              {typeLabel} {t("detail.eyebrow_suffix")}
            </p>

            <h1 className="font-display text-5xl leading-[1.04] tracking-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
              {details.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
              <span className="rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-4 py-2 transition-colors duration-500">
                {project.period}
              </span>
              <span className="rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-4 py-2 transition-colors duration-500">
                {project.category}
              </span>
              <span className="rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-4 py-2 transition-colors duration-500">
                {project.role}
              </span>
            </div>
          </div>

          <aside className="order-first lg:order-last overflow-hidden rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] shadow-[0_10px_40px_-10px_rgba(225,205,205,0.35)] dark:shadow-none transition-colors duration-500">
            <img
              src={project.image}
              alt=""
              className="h-64 w-full object-cover opacity-90 dark:brightness-90 dark:contrast-110"
              loading="eager"
            />
            <div className="p-6">
              {(project.organization || project.location) && (
                <p className="mb-6 text-sm font-light italic leading-relaxed text-[#8C7A78] dark:text-[#94A3B8] transition-colors duration-500">
                  {[project.organization, project.location]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
              )}

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#050A15] px-3 py-1.5 text-[11px] font-medium text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {repoUrl ? (
                  <a
                    href={repoUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-[#3A2B29] dark:bg-[#38BDF8] px-5 py-3 text-sm font-bold text-white dark:text-[#050A15] shadow-md transition-colors hover:bg-[#C28C88] dark:hover:bg-[#0284C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {t("work.view_repo")}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#0F172A] px-5 py-3 text-sm font-bold text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
                    <Lock className="h-4 w-4 text-[#A67571] dark:text-[#94A3B8]" aria-hidden="true" />
                    {t("work.private")}
                  </span>
                )}

                {project.links.demoUrl && (
                  <a
                    href={project.links.demoUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#0F172A] px-5 py-3 text-sm font-bold text-[#3A2B29] dark:text-[#F8FAFC] transition-colors hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {t("detail.live_demo")}
                  </a>
                )}
              </div>

              {details.repository && (
                <dl className="mt-8 grid gap-4 border-t border-[#F2EAE9] dark:border-[#1E293B] pt-6 text-sm transition-colors duration-500">
                  <DetailMeta label={t("detail.meta_repository")} value={details.repository.name} />
                  <DetailMeta label={t("detail.meta_language")} value={details.repository.language} />
                  <DetailMeta label={t("detail.meta_updated")} value={details.repository.updated} />
                </dl>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.28)] dark:shadow-none transition-colors duration-500 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
              {t("detail.problem")}
            </p>
            <p className="text-lg font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
              {project.problem}
            </p>
          </section>

          <section className="rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.28)] dark:shadow-none transition-colors duration-500 md:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
              {t("detail.built")}
            </p>
            <p className="text-lg font-medium leading-relaxed text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">
              {project.contribution}
            </p>
          </section>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <DetailList title={t("detail.features")} items={details.highlights} />
          <DetailList title={t("detail.workflow")} items={details.workflow} />
          <DetailList title={t("detail.decisions")} items={details.decisions} />
          <DetailList title={t("detail.outcomes")} items={details.outcomes} />
        </div>

        <section className="mt-8 rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.28)] dark:shadow-none transition-colors duration-500 md:p-8">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
            {t("detail.next")}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {details.nextSteps.map((step) => (
              <p
                key={step}
                className="rounded-2xl border border-[#F2EAE9] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#050A15] p-4 text-sm font-medium leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500"
              >
                {step}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky bottom back button — mobile only */}
      <div className="sticky bottom-0 z-20 mt-8 border-t border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5]/90 dark:bg-[#050A15]/90 px-6 py-4 backdrop-blur-md transition-colors duration-500 lg:hidden">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#8C7A78] dark:text-[#94A3B8] transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("detail.back")}
        </a>
      </div>
    </article>
  );
}

function DetailMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
        {label}
      </dt>
      <dd className="text-right font-semibold text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">{value}</dd>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.28)] dark:shadow-none transition-colors duration-500 md:p-8">
      <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
        {title}
      </p>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-4 text-sm leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C28C88] dark:bg-[#38BDF8] transition-colors duration-500"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getWorkTypeLabel(t: (key: string) => string, type: WorkType) {
  if (type === "Internship") return t("work.type_internship");
  if (type === "Hackathon") return t("work.type_hackathon");
  return t("work.type_project");
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
