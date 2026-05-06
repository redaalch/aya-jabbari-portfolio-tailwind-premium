import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { certifications } from "../../data/background";
import { Card } from "../primitives/Card";
import { SectionHeader } from "../primitives/SectionHeader";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-cream-100 py-16 md:py-20 lg:py-24"
    >
      <div className="container-default">
        <SectionHeader
          eyebrow="Certifications"
          heading="Recognized learning and credentials."
          description="Third-party certifications covering databases, AI, and programming foundations."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={`${cert.issuer}-${cert.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <Card as="article" variant="default" className="h-full">
                <div className="mb-5 flex items-center gap-2 text-plum-500">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-blush-50 text-rose-500">
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-eyebrow font-semibold uppercase tracking-[0.18em]">
                    {cert.issuer}
                  </p>
                </div>
                <h3 className="font-display text-display-xs font-medium leading-[1.25] text-plum-900">
                  {cert.title}
                </h3>
                <p className="mt-2 text-body-sm leading-[1.55] text-plum-700">
                  {cert.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
