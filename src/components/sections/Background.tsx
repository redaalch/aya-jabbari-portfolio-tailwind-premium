import { motion } from "motion/react";
import { Users } from "lucide-react";
import { volunteering } from "../../data/background";
import { Card } from "../primitives/Card";
import { SectionHeader } from "../primitives/SectionHeader";

export function Background() {
  return (
    <section id="background" className="bg-cream-50 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Community"
          heading="Community involvement."
          description="Volunteering and student community work outside the main technical portfolio."
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        >
          <Card as="article" variant="featured">
            <div className="mb-6 flex items-center gap-2 text-plum-500">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-blush-50 text-rose-500">
                <Users className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-eyebrow font-semibold uppercase tracking-[0.18em]">
                Volunteering
              </p>
            </div>

            <ul className="grid gap-4 md:grid-cols-2">
              {volunteering.map((item) => (
                <li key={item} className="flex gap-3 text-body-md text-plum-700">
                  <span
                    className="mt-3 h-px w-5 shrink-0 bg-plum-900/15"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
