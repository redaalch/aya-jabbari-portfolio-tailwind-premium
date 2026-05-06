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

type ArchiveFilter = "all" | WorkType;

const filters: Array<{ id: ArchiveFilter; label: string }> = [
  { id: "all", label: "All Work" },
  { id: "Internship", label: "Internships" },
  { id: "Hackathon", label: "Hackathons" },
  { id: "Project", label: "Projects" },
];

const workOrder = [...selectedWorkOrder, ...archiveWorkOrder];

export function ProjectArchive() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("all");

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
    <section className="min-h-screen bg-[#FAF7F5] dark:bg-[#050A15] px-6 pb-20 pt-32 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <a
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#8C7A78] dark:text-[#94A3B8] transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Portfolio
        </a>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
              <span className="h-px w-8 bg-[#C28C88] dark:bg-[#38BDF8]" aria-hidden="true" />
              Project Archive
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:text-6xl">
              All projects in one browsable place.
            </h1>
          </div>

          <p className="max-w-2xl border-l-2 border-[#E8D5D4] dark:border-[#1E293B] pl-6 text-lg font-light leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
            A complete archive of technical work, including project builds,
            internships, and hackathons, with each entry tagged by context.
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap gap-3"
          role="group"
          aria-label="Filter project archive"
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
                    ? "border-[#3A2B29] dark:border-[#38BDF8] bg-[#3A2B29] dark:bg-[#38BDF8] text-white dark:text-[#050A15] shadow-md"
                    : "border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] text-[#5C4D4B] dark:text-[#94A3B8] hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:text-[#3A2B29] dark:hover:text-[#F8FAFC]"
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
            <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#E8D5D4] dark:border-[#1E293B] bg-white/60 dark:bg-[#0F172A]/60 p-12 text-center text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
              <Search className="mb-4 h-8 w-8 opacity-50" aria-hidden="true" />
              <p className="font-display text-2xl">No matching work found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ArchiveCard({ item }: { item: WorkItem }) {
  return (
    <article
      id={item.id}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] shadow-[0_10px_40px_-10px_rgba(225,205,205,0.3)] dark:shadow-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(225,205,205,0.48)] dark:hover:shadow-none dark:hover:border-[#334155]"
    >
      <a
        href={`/projects/${item.id}`}
        className="block h-48 overflow-hidden border-b border-[#F2EAE9] dark:border-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 transition-colors duration-500"
        aria-label={`View details for ${item.title}`}
      >
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition-all duration-700 hover:scale-105 dark:brightness-90 dark:contrast-110"
          loading="lazy"
        />
      </a>

      <div className="flex min-h-[430px] flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
          <span>{item.type}</span>
          <span className="h-1 w-1 rounded-full bg-[#E8D5D4] dark:bg-[#1E293B]" aria-hidden="true" />
          <span>{item.period}</span>
          <span className="h-1 w-1 rounded-full bg-[#E8D5D4] dark:bg-[#1E293B]" aria-hidden="true" />
          <span className="text-[#C28C88] dark:text-[#38BDF8]">{item.category}</span>
        </div>

        <h2 className="font-display text-2xl leading-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">
          <a
            href={`/projects/${item.id}`}
            className="transition-colors hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            {item.title}
          </a>
        </h2>
        <p className="mt-2 text-sm font-semibold text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">{item.role}</p>
        {(item.organization || item.location) && (
          <p className="mt-1 text-sm font-light italic text-[#8C7A78] dark:text-[#94A3B8] transition-colors duration-500">
            {[item.organization, item.location].filter(Boolean).join(" · ")}
          </p>
        )}

        <div className="mt-6 space-y-4">
          <div className="border-l-2 border-[#F2EAE9] dark:border-[#1E293B] pl-4 transition-colors duration-500">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
              The Problem
            </span>
            <p className="text-sm leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
              {item.problem}
            </p>
          </div>
          <div className="border-l-2 border-[#C28C88] dark:border-[#38BDF8] pl-4 transition-colors duration-500">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
              What I Built
            </span>
            <p className="text-sm font-medium leading-relaxed text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500">
              {item.contribution}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#050A15] px-3 py-1.5 text-[11px] font-medium text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <a
            href={`/projects/${item.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#3A2B29] dark:bg-[#38BDF8] px-4 py-2 text-sm font-bold text-white dark:text-[#050A15] transition-colors hover:bg-[#C28C88] dark:hover:bg-[#0284C7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            View Details
          </a>

          {item.links.repoUrl ? (
            <a
              href={item.links.repoUrl}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#0F172A] px-4 py-2 text-sm font-bold text-[#3A2B29] dark:text-[#F8FAFC] transition-colors hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View Repository
            </a>
          ) : item.links.demoUrl ? (
            <a
              href={item.links.demoUrl}
              className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#0F172A] px-4 py-2 text-sm font-bold text-[#3A2B29] dark:text-[#F8FAFC] transition-colors hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              View Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#0F172A] px-4 py-2 text-sm font-bold text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500">
              <Lock className="h-4 w-4 text-[#A67571] dark:text-[#94A3B8]" aria-hidden="true" />
              Code available on request
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
