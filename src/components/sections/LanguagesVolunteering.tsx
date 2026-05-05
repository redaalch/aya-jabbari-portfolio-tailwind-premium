import { motion } from "motion/react";
import { SectionHeader } from "../primitives/SectionHeader";
import { languages, volunteering } from "../../data/profile";

export function LanguagesVolunteering() {
  return (
    <section id="languages" className="bg-cream-100 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-2">
          {/* Languages Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <SectionHeader
              eyebrow="Languages"
              heading="Communication."
              className="mb-8"
            />

            <ul className="flex flex-col gap-5 border-l border-[rgba(42,27,45,0.08)] pl-6">
              {languages.map((item) => (
                <li key={item.language} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-4 ring-cream-100" />
                  <p className="font-display text-display-xs font-medium leading-[1.25] text-plum-900">
                    {item.language}
                  </p>
                  <p className="mt-1 text-body-sm text-plum-500">
                    {item.proficiency}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Volunteering Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <SectionHeader
              eyebrow="Volunteering"
              heading="Community involvement."
              className="mb-8"
            />

            <ul className="flex flex-col gap-4">
              {volunteering.map((item) => (
                <li key={item} className="flex gap-4">
                  <div
                    className="mt-1 h-[1px] w-4 shrink-0 bg-[rgba(42,27,45,0.12)]"
                    aria-hidden="true"
                  />
                  <p className="text-body-md leading-[1.5] text-plum-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
