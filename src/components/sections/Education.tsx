import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../primitives/SectionHeader";
import { Card } from "../primitives/Card";
import { education } from "../../data/profile";

export function Education() {
  return (
    <section id="education" className="bg-cream-50 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Education"
          heading="Academic foundation."
          className="mb-12"
        />

        <div className="relative border-l border-[rgba(42,27,45,0.08)] ml-6 pl-8 md:ml-8 md:pl-10 lg:w-3/4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title + edu.date}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.2, 0, 0, 1],
              }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(42,27,45,0.08)] bg-cream-50 text-plum-900 shadow-sm md:-left-[57px]">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </span>

              <Card as="article" variant="default" hoverable>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-display-sm font-medium leading-[1.25] tracking-[-0.01em] text-plum-900">
                      {edu.title}
                    </h3>
                    <p className="mt-1 text-body-sm font-medium text-plum-700">
                      {edu.school}
                    </p>
                  </div>
                  <div className="shrink-0 md:text-right">
                    <span className="inline-flex w-fit items-center rounded-full border border-[rgba(42,27,45,0.08)] bg-white px-3 py-1 text-chip font-medium text-plum-700">
                      {edu.date}
                    </span>
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
