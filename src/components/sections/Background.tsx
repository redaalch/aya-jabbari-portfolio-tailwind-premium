import { motion } from "motion/react";
import { BookOpen, GraduationCap, Languages as LanguagesIcon, Users } from "lucide-react";
import type { ReactNode } from "react";
import {
  certifications,
  education,
  languages,
  volunteering,
} from "../../data/background";
import { Card } from "../primitives/Card";
import { Chip } from "../primitives/Chip";
import { SectionHeader } from "../primitives/SectionHeader";

export function Background() {
  return (
    <section id="background" className="bg-cream-50 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Background"
          heading="Education, credentials, and community."
          description="The supporting academic and personal context grouped into one section."
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="featured" className="h-full">
              <SectionLabel icon={<GraduationCap className="h-4 w-4" />} label="Education" />
              <div className="mt-6 space-y-5">
                {education.map((item) => (
                  <div
                    key={item.title + item.date}
                    className="flex flex-col gap-3 border-b border-plum-900/[0.06] pb-5 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-display-xs font-medium leading-[1.25] text-plum-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-body-sm font-medium text-plum-700">
                        {item.school}
                      </p>
                    </div>
                    <Chip variant="ghost">{item.date}</Chip>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="featured" className="h-full">
              <SectionLabel icon={<BookOpen className="h-4 w-4" />} label="Certifications" />
              <div className="mt-6 grid gap-4">
                {certifications.map((cert) => (
                  <div key={`${cert.issuer}-${cert.title}`}>
                    <p className="text-eyebrow uppercase tracking-[0.18em] text-plum-500">
                      {cert.issuer}
                    </p>
                    <h3 className="mt-1 font-display text-display-xs font-medium leading-[1.25] text-plum-900">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-body-sm leading-[1.55] text-plum-700">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="default" className="h-full">
              <SectionLabel icon={<LanguagesIcon className="h-4 w-4" />} label="Languages" />
              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((item) => (
                  <Chip key={item.language} variant="ghost">
                    {item.language} · {item.proficiency}
                  </Chip>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.16, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="default" className="h-full">
              <SectionLabel icon={<Users className="h-4 w-4" />} label="Volunteering" />
              <ul className="mt-6 grid gap-3">
                {volunteering.map((item) => (
                  <li key={item} className="flex gap-3 text-body-sm text-plum-700">
                    <span
                      className="mt-2 h-px w-4 shrink-0 bg-plum-900/15"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type SectionLabelProps = {
  icon: ReactNode;
  label: string;
};

function SectionLabel({ icon, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 text-plum-500">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-blush-50 text-rose-500">
        {icon}
      </span>
      <p className="text-eyebrow font-semibold uppercase tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}
