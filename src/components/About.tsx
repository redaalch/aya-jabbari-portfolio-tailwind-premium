import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Languages as LanguagesIcon,
  MapPin,
  Sparkles,
} from "lucide-react";
import { education, languages } from "../data/background";
import { profile } from "../data/profile";
import { Card } from "./primitives/Card";
import { Chip } from "./primitives/Chip";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Availability", value: profile.availability },
];

const focusAreas = [
  "Full-stack systems",
  "Data dashboards",
  "Applied AI workflows",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F1E8DE] py-16 md:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2D8D2]/20 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1120px] px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#A35C72]">
              About
            </p>
            <h2 className="mt-4 font-display text-[44px] leading-[1.05] text-[#2F1730]">
              Building practical software, end to end.
            </h2>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-[#36172A]">
              {profile.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="featured" className="bg-[#FBF7F1]/80">
              <div className="grid gap-5">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#8B3A55] shadow-sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-[15px] leading-[1.55] text-[#4A3B45]">
                      <strong className="text-[#2F1730]">{label}</strong>{" "}
                      <span className="text-[#8B7B8B]">—</span> {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[#36172A]/10 pt-6">
                <div className="mb-4 flex items-center gap-2 text-[#8B3A55]">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                    Current Focus
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <Chip key={area} variant="ghost">
                      {area}
                    </Chip>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="default" className="h-full bg-[#FBF7F1]/80">
              <div className="mb-5 flex items-center gap-2 text-[#8B3A55]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                  Education
                </p>
              </div>

              <div className="grid gap-4">
                {education.map((item) => (
                  <div
                    key={`${item.title}-${item.date}`}
                    className="flex flex-col gap-2 border-b border-[#36172A]/10 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div>
                      <h3 className="font-display text-[20px] font-medium leading-[1.25] text-[#2F1730]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[14px] font-medium text-[#5B2A45]">
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
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.2, 0, 0, 1] }}
          >
            <Card as="article" variant="default" className="h-full bg-[#FBF7F1]/80">
              <div className="mb-5 flex items-center gap-2 text-[#8B3A55]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm">
                  <LanguagesIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                  Languages
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {languages.map((item) => (
                  <Chip key={item.language} variant="ghost">
                    {item.language} · {item.proficiency}
                  </Chip>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
