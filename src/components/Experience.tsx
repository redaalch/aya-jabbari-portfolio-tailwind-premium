import { motion } from "motion/react";
import { SectionHeader } from "./primitives/SectionHeader";
import { experience } from "../data/profile";
import { Card } from "./primitives/Card";

export function Experience() {
  return (
    <section id="experience" className="bg-cream-50 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Experience"
          heading="Professional work, end to end."
          className="mb-8 lg:mb-10"
        />

        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1], delay: idx * 0.1 }}
            >
              <Card as="article" variant="experience">
                {/* Thin Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-plum-300/30 to-rose-300/20" />

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display text-[1.875rem] font-medium leading-[1.2] tracking-[-0.01em] text-plum-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-body-md text-plum-500">
                    {job.organization}
                  </p>
                </div>

                {/* Dossier Grid */}
                <div className="flex flex-col border-t border-plum-900/10">
                  
                  {/* Context Row */}
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_5fr] gap-4 py-6 md:py-7 border-b border-plum-900/[0.06] items-start">
                    <p className="text-eyebrow uppercase tracking-[0.12em] text-plum-600 font-mono mt-1">Context</p>
                    <p className="text-body-md text-plum-900 leading-[1.6] max-w-[40rem]">
                      {job.context}
                    </p>
                  </div>

                  {/* Contribution Row */}
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_5fr] gap-4 py-6 md:py-7 border-b border-plum-900/[0.06] items-start">
                    <p className="text-eyebrow uppercase tracking-[0.12em] text-plum-600 font-mono mt-1">Contribution</p>
                    <p className="text-body-md text-plum-900 leading-[1.6] max-w-[40rem]">
                      {job.contribution}
                    </p>
                  </div>

                  {/* Technologies Row */}
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_5fr] gap-4 py-6 md:py-7 border-b border-plum-900/[0.06] items-start">
                    <p className="text-eyebrow uppercase tracking-[0.12em] text-plum-600 font-mono mt-1">Technologies</p>
                    <p className="text-body-md text-plum-700 font-mono tracking-tight leading-[1.6] max-w-[40rem]">
                      {job.stack.join(" · ")}
                    </p>
                  </div>

                  {/* Period Row */}
                  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_5fr] gap-4 pt-6 md:pt-7 items-start">
                    <p className="text-eyebrow uppercase tracking-[0.12em] text-plum-600 font-mono mt-1">Period</p>
                    <p className="text-body-md text-plum-700 max-w-[40rem]">
                      {job.date} <span className="mx-1.5 opacity-60">·</span> {job.location}
                    </p>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
