import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import {
  archiveWorkOrder,
  selectedWorkOrder,
  workItems,
  type WorkType,
} from "../../data/work";
import { Button } from "../primitives/Button";
import { ProjectCard } from "../project/ProjectCard";
import { ProjectFilters } from "../project/ProjectFilters";
import { SectionHeader } from "../primitives/SectionHeader";

const typeOrder: WorkType[] = ["Internship", "Hackathon", "Project"];

const typeLabels: Record<WorkType, string> = {
  Internship: "Internships",
  Hackathon: "Hackathons",
  Project: "Projects",
};

const workOrder = [...selectedWorkOrder, ...archiveWorkOrder];

export function Work() {
  const [activeType, setActiveType] = React.useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = React.useState(false);

  const orderedWork = React.useMemo(() => {
    return [...workItems].sort((a, b) => {
      const idxA = workOrder.indexOf(a.id);
      const idxB = workOrder.indexOf(b.id);

      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });
  }, []);

  const visibleWork = React.useMemo(() => {
    return orderedWork.filter((item) => {
      if (activeType && item.type !== activeType) return false;
      if (item.tier === "archive" && !showAllProjects) return false;
      return true;
    });
  }, [activeType, orderedWork, showAllProjects]);

  const canRevealProjects =
    !showAllProjects &&
    (!activeType || activeType === "Project") &&
    orderedWork.some((item) => item.tier === "archive");

  return (
    <section id="work" className="relative bg-cream-50 py-16 md:py-20 lg:py-24">
      <span id="projects" className="absolute -top-24" aria-hidden="true" />
      <div className="container-default">
        <SectionHeader
          eyebrow="Selected Work"
          heading="One timeline of internships, hackathons, and projects."
          description="Each item appears once, with its context shown as a label instead of being repeated in separate sections."
          className="mb-8 md:mb-12"
        />

        <div className="mb-8 flex flex-col gap-4 md:mb-12 lg:flex-row lg:items-center lg:justify-between">
          <ProjectFilters
            categories={typeOrder}
            activeCategory={activeType}
            onSelect={setActiveType}
            allLabel="All Work"
            ariaLabel="Filter selected work by type"
            controlsId="work-grid"
            labels={typeLabels}
            className="flex flex-wrap items-center gap-2"
          />

          {canRevealProjects && (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setActiveType("Project");
                setShowAllProjects(true);
              }}
              className="h-10 min-w-0 rounded-full px-5 text-[13px]"
            >
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>

        <div
          id="work-grid"
          className="grid gap-6 sm:grid-cols-2"
          role="region"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout">
            {visibleWork.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
              >
                <ProjectCard
                  project={item}
                  variant={item.tier === "archive" ? "secondary" : "featured"}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
