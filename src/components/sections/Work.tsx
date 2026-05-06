import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { workItems, selectedWorkOrder } from "../../data/work";
import { ProjectCard } from "../project/ProjectCard";
import { ProjectFilters } from "../project/ProjectFilters";
import { SectionHeader } from "../primitives/SectionHeader";

const categoryOrder = [
  "Full-Stack",
  "AI",
  "Data/BI",
  "DevOps",
  "Backend",
  "Desktop",
  "Databases",
];

export function Work() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null,
  );

  const selectedWork = React.useMemo(() => {
    return workItems
      .filter((item) => item.tier === "selected")
      .sort((a, b) => {
        const idxA = selectedWorkOrder.indexOf(a.id);
        const idxB = selectedWorkOrder.indexOf(b.id);

        if (idxA === -1) return 1;
        if (idxB === -1) return -1;
        return idxA - idxB;
      });
  }, []);

  const categories = React.useMemo(() => {
    const present = new Set(selectedWork.map((item) => item.category));
    return categoryOrder.filter((category) => present.has(category));
  }, [selectedWork]);

  const visibleWork = React.useMemo(() => {
    if (!activeCategory) return selectedWork;
    return selectedWork.filter((item) => item.category === activeCategory);
  }, [selectedWork, activeCategory]);

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

        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          allLabel="All Work"
          ariaLabel="Filter selected work by category"
          controlsId="work-grid"
        />

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
                <ProjectCard project={item} variant="featured" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
