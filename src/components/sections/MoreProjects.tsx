import * as React from "react";
import { ProjectCard } from "../project/ProjectCard";
import { SectionHeader } from "../primitives/SectionHeader";
import { projects } from "../../data/profile";
import { secondaryProjectsList } from "../../data/projectData";
import { motion, AnimatePresence } from "motion/react";

export function MoreProjects() {
  // Filter only secondary projects
  const secondary = React.useMemo(() => {
    return projects.filter((p) => p.tier === "secondary");
  }, []);

  // Sort them as per defined order
  const sortedSecondary = React.useMemo(() => {
    return [...secondary].sort((a, b) => {
      const idxA = secondaryProjectsList.indexOf(a.title);
      const idxB = secondaryProjectsList.indexOf(b.title);
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });
  }, [secondary]);

  if (sortedSecondary.length === 0) return null;

  return (
    <section
      id="more-projects"
      className="bg-cream-100 py-16 md:py-20 lg:py-24"
    >
      <div className="container-default">
        <SectionHeader
          eyebrow="More Work"
          heading="Smaller technical builds and references."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {sortedSecondary.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <ProjectCard project={project} variant="secondary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
