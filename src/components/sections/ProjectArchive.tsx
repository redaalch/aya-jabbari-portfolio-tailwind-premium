import { motion } from "motion/react";
import { archiveWorkOrder, workItems } from "../../data/work";
import { ProjectCard } from "../project/ProjectCard";
import { SectionHeader } from "../primitives/SectionHeader";

export function ProjectArchive() {
  const archiveItems = workItems
    .filter((item) => item.tier === "archive")
    .sort((a, b) => {
      const idxA = archiveWorkOrder.indexOf(a.id);
      const idxB = archiveWorkOrder.indexOf(b.id);

      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });

  if (archiveItems.length === 0) return null;

  return (
    <section
      id="archive"
      className="bg-cream-100 py-16 md:py-20 lg:py-24"
    >
      <div className="container-default">
        <SectionHeader
          eyebrow="Project Archive"
          heading="Smaller builds and references."
          description="Compact supporting work kept separate from the main case studies."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {archiveItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <ProjectCard project={item} variant="secondary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
