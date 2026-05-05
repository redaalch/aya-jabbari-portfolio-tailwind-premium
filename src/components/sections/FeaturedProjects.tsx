import * as React from "react";
import { ProjectCard } from "../project/ProjectCard";
import { ProjectFilters } from "../project/ProjectFilters";
import { SectionHeader } from "../primitives/SectionHeader";
import { projects } from "../../data/profile";
import { featuredProjectsOrder } from "../../data/projectData";
import { motion, AnimatePresence } from "motion/react";

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null,
  );

  // Filter only featured projects
  const featured = React.useMemo(() => {
    return projects.filter((p) => p.tier === "featured");
  }, []);

  // Sort them as per defined order
  const sortedFeatured = React.useMemo(() => {
    return [...featured].sort((a, b) => {
      const idxA = featuredProjectsOrder.indexOf(a.title);
      const idxB = featuredProjectsOrder.indexOf(b.title);
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });
  }, [featured]);

  // Canonical filter order from the UX brief.
  const CANONICAL_ORDER = [
    "Full-Stack",
    "AI",
    "Data/BI",
    "DevOps",
    "Backend",
    "Desktop",
    "Databases",
  ];
  const categories = React.useMemo(() => {
    const present = new Set<string>();
    sortedFeatured.forEach((p) => {
      if (p.category) present.add(p.category);
    });
    return CANONICAL_ORDER.filter((c) => present.has(c));
  }, [sortedFeatured]);

  // Apply filters
  const visibleProjects = React.useMemo(() => {
    if (!activeCategory) return sortedFeatured;
    return sortedFeatured.filter((p) => p.category === activeCategory);
  }, [sortedFeatured, activeCategory]);

  return (
    <section id="projects" className="bg-cream-50 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Featured Projects"
          heading="Selected technical projects."
          description="A mix of full-stack platforms, applied-AI workflows, backend systems, BI dashboards, and deployment automation."
          className="mb-8 md:mb-12"
        />

        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div
          id="projects-grid"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          role="region"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
              >
                <ProjectCard project={project} variant="featured" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
