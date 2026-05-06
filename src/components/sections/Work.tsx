import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Lock,
  Terminal,
} from "lucide-react";
import {
  selectedWorkOrder,
  workItems,
  type WorkItem,
  type WorkType,
} from "../../data/work";
import { useLanguage } from "../../contexts/LanguageContext";

type WorkFilter = "all" | WorkType;

export function Work() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filters: Array<{ id: WorkFilter; label: string }> = [
    { id: "all", label: t("work.filter_all") },
    { id: "Internship", label: t("work.filter_internship") },
    { id: "Hackathon", label: t("work.filter_hackathon") },
    { id: "Project", label: t("work.filter_project") },
  ];

  const selectedWork = useMemo(() => {
    return workItems
      .filter((item) => item.tier === "selected")
      .sort((a, b) => selectedWorkOrder.indexOf(a.id) - selectedWorkOrder.indexOf(b.id));
  }, []);

  const filteredWork = selectedWork.filter((item) =>
    activeFilter === "all" ? true : item.type === activeFilter,
  );

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = window.innerWidth > 768 ? 480 : 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="work"
      className="relative bg-[#FAF7F5] dark:bg-[#050A15] py-16 text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:py-24"
    >
      <span id="projects" className="absolute -top-24" aria-hidden="true" />

      <div className="flex w-full max-w-[100vw] flex-col items-start gap-12 px-6 md:px-12 lg:flex-row lg:gap-16 lg:px-24">
        <div className="flex shrink-0 flex-col pt-4 lg:sticky lg:top-32 lg:w-1/3">
          <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C28C88] dark:text-[#38BDF8] transition-colors duration-500">
            <span className="h-px w-8 bg-[#C28C88] dark:bg-[#38BDF8] transition-colors duration-500" aria-hidden="true" />
            {t("work.eyebrow")}
          </p>

          <h2 className="mb-6 font-display text-4xl leading-[1.1] tracking-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 md:text-5xl lg:text-5xl">
            {t("work.heading")}
          </h2>

          <p className="mb-10 text-lg font-light leading-relaxed text-[#8C7A78] dark:text-[#94A3B8] transition-colors duration-500">
            {t("work.desc")}
          </p>

          <div
            className="mb-12 flex flex-wrap gap-3"
            role="group"
            aria-label="Filter selected work"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    scrollContainerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                  className={`flex w-32 items-center justify-center rounded-full border py-2.5 text-xs font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
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

          <div className="mb-8 hidden shrink-0 items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] text-[#5C4D4B] dark:text-[#94A3B8] transition-all duration-300 hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:bg-[#FAF7F5] dark:hover:bg-[#1E293B] hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Scroll work timeline left"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] text-[#5C4D4B] dark:text-[#94A3B8] transition-all duration-300 hover:border-[#C28C88] dark:hover:border-[#38BDF8] hover:bg-[#FAF7F5] dark:hover:bg-[#1E293B] hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Scroll work timeline right"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="ml-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500">
              {t("work.explore")}
            </span>
          </div>

          <div className="mt-auto hidden shrink-0 border-t border-[#E8D5D4] dark:border-[#1E293B] pt-8 lg:mr-8 lg:block transition-colors duration-500">
            <a
              href="/projects"
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#3A2B29] dark:text-[#F8FAFC] transition-colors hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              {t("work.archive")}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          id="work-timeline"
          className="hide-scrollbar group/track -mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 pb-8 pt-4 md:-mx-12 md:w-[calc(100%+6rem)] md:scroll-pl-12 md:px-12 lg:mx-0 lg:w-2/3 lg:gap-8 lg:px-0 lg:pb-12 lg:scroll-pl-0"
          aria-live="polite"
        >
          {filteredWork.map((item) => (
            <PanoramaCard key={item.id} item={item} />
          ))}

          {filteredWork.length === 0 && (
            <div className="flex h-[600px] w-[85vw] shrink-0 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#E8D5D4] dark:border-[#1E293B] bg-white/50 dark:bg-[#0F172A]/50 p-12 text-center text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500 sm:w-[420px] lg:h-[680px]">
              <Terminal className="mb-4 h-8 w-8 opacity-50" aria-hidden="true" />
              <p className="font-display text-xl">{t("work.empty")}</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex w-full justify-center px-6 pb-8 lg:hidden">
        <a
          href="/projects"
          className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#3A2B29] dark:text-[#F8FAFC] shadow-sm transition-colors duration-300 hover:text-[#C28C88] dark:hover:text-[#38BDF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
        >
          {t("work.archive")}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function PanoramaCard({ item }: { item: WorkItem }) {
  const { t } = useLanguage();

  return (
    <article
      className="flex h-[600px] w-[85vw] shrink-0 snap-start flex-col rounded-[2rem] border border-[#E8D5D4] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] p-6 shadow-[0_10px_40px_-10px_rgba(225,205,205,0.3)] dark:shadow-none transition-all duration-500 ease-out hover:opacity-100 hover:shadow-[0_20px_50px_-10px_rgba(225,205,205,0.5)] dark:hover:shadow-none dark:hover:border-[#334155] sm:w-[420px] lg:h-[680px] lg:rounded-3xl lg:p-8 lg:hover:-translate-y-2 lg:group-hover/track:opacity-40 lg:hover:!opacity-100"
      aria-label={item.title}
    >
      <div className="mb-4 flex shrink-0 flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500 lg:mb-5 lg:text-[10px]">
        <span>{item.type}</span>
        <span className="h-1 w-1 rounded-full bg-[#E8D5D4] dark:bg-[#1E293B]" aria-hidden="true" />
        <span>{item.period}</span>
        <span className="h-1 w-1 rounded-full bg-[#E8D5D4] dark:bg-[#1E293B]" aria-hidden="true" />
        <span className="text-[#C28C88] dark:text-[#38BDF8]">{item.category}</span>
      </div>

      <a
        href={`/projects/${item.id}`}
        className="group/image mb-5 block h-32 shrink-0 overflow-hidden rounded-2xl border border-[#F2EAE9] dark:border-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 lg:mb-6 lg:h-40 transition-colors duration-500"
        aria-label={`View details for ${item.title}`}
      >
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover/image:scale-105 dark:brightness-90 dark:contrast-110 lg:grayscale lg:opacity-80 lg:group-hover/image:grayscale-0 lg:group-hover/image:opacity-100"
          loading="lazy"
        />
      </a>

      <div className="mb-4 shrink-0 lg:mb-6">
        <h3 className="mb-1.5 font-display text-xl leading-tight text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 lg:mb-2 lg:text-2xl">
          {item.title}
        </h3>
        <p className="mb-1 text-xs font-medium text-[#3A2B29] dark:text-[#94A3B8] transition-colors duration-500 lg:text-sm">{item.role}</p>
        {(item.organization || item.location) && (
          <p className="text-xs font-light italic text-[#8C7A78] dark:text-[#94A3B8] transition-colors duration-500 lg:text-sm">
            {[item.organization, item.location].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>

      <div className="hide-scrollbar mb-4 flex-1 space-y-4 overflow-y-auto lg:mb-6">
        <div className="border-l-2 border-[#F2EAE9] dark:border-[#1E293B] pl-3 transition-colors duration-500 lg:pl-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500 lg:text-[10px]">
            {t("work.problem")}
          </span>
          <span className="text-xs leading-relaxed text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500 lg:text-sm">
            {item.problem}
          </span>
        </div>
        <div className="border-l-2 border-[#C28C88] dark:border-[#38BDF8] pl-3 transition-colors duration-500 lg:pl-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-[#A67571] dark:text-[#94A3B8] transition-colors duration-500 lg:text-[10px]">
            {t("work.built")}
          </span>
          <span className="text-xs font-medium leading-relaxed text-[#3A2B29] dark:text-[#F8FAFC] transition-colors duration-500 lg:text-sm">
            {item.contribution}
          </span>
        </div>
      </div>

      <div className="mt-auto shrink-0 border-t border-[#F2EAE9] dark:border-[#1E293B] pt-4 transition-colors duration-500 lg:pt-5">
        <div className="mb-4 flex flex-wrap gap-1.5 lg:mb-5 lg:gap-2">
          {item.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E8D5D4] dark:border-[#1E293B] bg-[#FAF7F5] dark:bg-[#050A15] px-2.5 py-1 text-[10px] font-medium text-[#5C4D4B] dark:text-[#94A3B8] transition-colors duration-500 lg:px-3 lg:py-1.5 lg:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`/projects/${item.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3A2B29] dark:bg-[#38BDF8] px-6 py-2.5 text-xs font-bold tracking-wide text-white dark:text-[#050A15] shadow-md transition-all duration-300 hover:bg-[#C28C88] dark:hover:bg-[#0284C7] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 lg:py-3.5 lg:text-sm"
        >
          {t("work.view_details")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold text-[#8C7A78] dark:text-[#94A3B8] transition-colors duration-500 lg:mt-4 lg:text-xs">
          {item.links.repoUrl ? (
            <a
              href={item.links.repoUrl}
              className="flex items-center gap-2 transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC]"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-3.5 w-3.5 text-[#3A2B29] dark:text-[#38BDF8]" aria-hidden="true" />
              {t("work.view_repo")}
            </a>
          ) : item.links.demoUrl ? (
            <a
              href={item.links.demoUrl}
              className="flex items-center gap-2 transition-colors hover:text-[#3A2B29] dark:hover:text-[#F8FAFC]"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-3.5 w-3.5 text-[#3A2B29] dark:text-[#38BDF8]" aria-hidden="true" />
              {t("work.view_demo")}
            </a>
          ) : (
            <>
              <Lock className="h-3.5 w-3.5 text-[#A67571] dark:text-[#94A3B8]" aria-hidden="true" />
              {t("work.private")}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
