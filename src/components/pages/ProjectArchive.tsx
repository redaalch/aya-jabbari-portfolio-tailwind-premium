import { useLayoutEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lock,
  Search,
} from "lucide-react";
import {
  archiveWorkOrder,
  selectedWorkOrder,
  workItems,
  type WorkItem,
  type WorkType,
} from "../../data/work";
import { useLanguage } from "../../contexts/LanguageContext";
import { toHref } from "../../utils/paths";

type ArchiveFilter = "all" | WorkType;

const workOrder = [...selectedWorkOrder, ...archiveWorkOrder];

export function ProjectArchive() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("all");
  const filters: Array<{ id: ArchiveFilter; label: string }> = [
    { id: "all", label: t("work.filter_all") },
    { id: "Internship", label: t("work.filter_internship") },
    { id: "Hackathon", label: t("work.filter_hackathon") },
    { id: "Project", label: t("work.filter_project") },
  ];

  const orderedWork = useMemo(() => {
    return [...workItems].sort((a, b) => {
      const idxA = workOrder.indexOf(a.id);
      const idxB = workOrder.indexOf(b.id);
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });
  }, []);

  const filteredWork = orderedWork.filter((item) =>
    activeFilter === "all" ? true : item.type === activeFilter,
  );

  useLayoutEffect(() => {
    const targetId = window.location.hash.replace("#", "");
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "auto" });
  }, []);

  return (
    <section className="min-h-screen bg-warm-50 dark:bg-abyssal-base px-6 pb-20 pt-32 text-warm-900 dark:text-abyssal-text transition-colors duration-500 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <a
          href={toHref("/#work")}
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-warm-500 dark:text-abyssal-text-muted transition-colors hover:text-warm-900 dark:hover:text-abyssal-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("archive.back")}
        </a>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-warm-300 dark:text-abyssal-accent transition-colors duration-500">
              <span className="h-px w-8 bg-warm-300 dark:bg-abyssal-accent" aria-hidden="true" />
              {t("archive.eyebrow")}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-warm-900 dark:text-abyssal-text transition-colors duration-500 md:text-6xl">
              {t("archive.heading")}
            </h1>
          </div>

          <p className="max-w-2xl border-l-2 border-warm-200 dark:border-abyssal-border pl-6 text-lg font-light leading-relaxed text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500">
            {t("archive.desc")}
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap gap-3"
          role="group"
          aria-label={t("archive.filter_label")}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
                  isActive
                    ? "border-warm-900 dark:border-abyssal-accent bg-warm-900 dark:bg-abyssal-accent text-white dark:text-abyssal-base shadow-md"
                    : "border-warm-200 dark:border-abyssal-border bg-white dark:bg-abyssal-surface text-warm-700 dark:text-abyssal-text-muted hover:border-warm-300 dark:hover:border-abyssal-accent hover:text-warm-900 dark:hover:text-abyssal-text"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          aria-live="polite"
        >
          {filteredWork.map((item) => (
            <ArchiveCard key={item.id} item={item} />
          ))}

          {filteredWork.length === 0 && (
            <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-warm-200 dark:border-abyssal-border bg-white/60 dark:bg-abyssal-surface/60 p-12 text-center text-warm-400 dark:text-abyssal-text-muted transition-colors duration-500">
              <Search className="mb-4 h-8 w-8 opacity-50" aria-hidden="true" />
              <p className="font-display text-2xl">{t("archive.empty")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ArchiveCard({ item }: { item: WorkItem }) {
  const { t } = useLanguage();
  const typeLabel = getWorkTypeLabel(t, item.type);

  return (
    <article
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-warm-200 dark:border-abyssal-border bg-white dark:bg-abyssal-surface shadow-[0_10px_40px_-10px_rgba(225,205,205,0.3)] dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(225,205,205,0.48)] dark:hover:shadow-none dark:hover:border-abyssal-border-hover"
    >
      <div
        className="block h-48 overflow-hidden border-b border-warm-150 dark:border-abyssal-border transition-colors duration-500"
        aria-hidden="true"
      >
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition-all duration-700 dark:brightness-90 dark:contrast-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-warm-400 dark:text-abyssal-text-muted transition-colors duration-500">
          <span>{typeLabel}</span>
          <span className="h-1 w-1 rounded-full bg-warm-200 dark:bg-abyssal-border" aria-hidden="true" />
          <span>{item.period}</span>
          <span className="h-1 w-1 rounded-full bg-warm-200 dark:bg-abyssal-border" aria-hidden="true" />
          <span className="text-warm-300 dark:text-abyssal-accent">{item.category}</span>
        </div>

        <h2 className="font-display text-2xl leading-tight text-warm-900 dark:text-abyssal-text transition-colors duration-500">
          <a
            href={toHref(`/projects/${item.id}`)}
            aria-hidden="true"
            tabIndex={-1}
            className="transition-colors hover:text-warm-300 dark:hover:text-abyssal-accent"
          >
            {item.title}
          </a>
        </h2>
        <p className="mt-2 text-sm font-semibold text-warm-900 dark:text-abyssal-text transition-colors duration-500">{item.role}</p>
        {(item.organization || item.location) && (
          <p className="mt-1 text-sm font-light italic text-warm-500 dark:text-abyssal-text-muted transition-colors duration-500">
            {[item.organization, item.location].filter(Boolean).join(" · ")}
          </p>
        )}

        <div className="mt-6 space-y-4">
          <div className="border-l-2 border-warm-150 dark:border-abyssal-border pl-4 transition-colors duration-500">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-warm-400 dark:text-abyssal-text-muted transition-colors duration-500">
              {t("work.problem")}
            </span>
            <p className="text-sm leading-relaxed text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500">
              {item.problem}
            </p>
          </div>
          <div className="border-l-2 border-warm-300 dark:border-abyssal-accent pl-4 transition-colors duration-500">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-warm-400 dark:text-abyssal-text-muted transition-colors duration-500">
              {t("work.built")}
            </span>
            <p className="text-sm font-medium leading-relaxed text-warm-900 dark:text-abyssal-text transition-colors duration-500">
              {item.contribution}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-warm-200 dark:border-abyssal-border bg-warm-50 dark:bg-abyssal-base px-3 py-1.5 text-[11px] font-medium text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a
            href={toHref(`/projects/${item.id}`)}
            aria-label={`${t("work.view_details")}: ${item.title}`}
            className="inline-flex items-center gap-2 rounded-full bg-warm-900 dark:bg-abyssal-accent px-4 py-2 text-sm font-bold text-white dark:text-abyssal-base transition-colors hover:bg-warm-300 dark:hover:bg-abyssal-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            {t("work.view_details")}
          </a>

          {item.links.repoUrl ? (
            <a
              href={item.links.repoUrl}
              className="inline-flex items-center gap-2 rounded-full border border-warm-200 dark:border-abyssal-border bg-warm-50 dark:bg-abyssal-surface px-4 py-2 text-sm font-bold text-warm-900 dark:text-abyssal-text transition-colors hover:border-warm-300 dark:hover:border-abyssal-accent hover:text-warm-300 dark:hover:text-abyssal-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              {t("work.view_repo")}
            </a>
          ) : item.links.demoUrl ? (
            <a
              href={item.links.demoUrl}
              className="inline-flex items-center gap-2 rounded-full border border-warm-200 dark:border-abyssal-border bg-warm-50 dark:bg-abyssal-surface px-4 py-2 text-sm font-bold text-warm-900 dark:text-abyssal-text transition-colors hover:border-warm-300 dark:hover:border-abyssal-accent hover:text-warm-300 dark:hover:text-abyssal-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t("work.view_demo")}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-warm-200 dark:border-abyssal-border bg-warm-50 dark:bg-abyssal-surface px-4 py-2 text-sm font-bold text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500">
              <Lock className="h-4 w-4 text-warm-400 dark:text-abyssal-text-muted" aria-hidden="true" />
              {t("work.private")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function getWorkTypeLabel(t: (key: string) => string, type: WorkType) {
  if (type === "Internship") return t("work.type_internship");
  if (type === "Hackathon") return t("work.type_hackathon");
  return t("work.type_project");
}
