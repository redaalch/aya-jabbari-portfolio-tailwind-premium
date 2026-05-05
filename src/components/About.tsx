import { motion } from "motion/react";
import { Languages, MapPin, GraduationCap } from "lucide-react";
import { SectionHeader } from "./primitives/SectionHeader";

const meta = [
  { icon: MapPin, label: "Location", value: "Fès, Morocco" },
  {
    icon: GraduationCap,
    label: "Studies",
    value: "Computer Engineering, ENSA Fès",
  },
  { icon: Languages, label: "Languages", value: "Arabic, French, English" },
];

const timeline = [
  {
    period: "2024–Present",
    title: "Computer Engineering",
    subtitle: "ENSA Fès",
  },
  {
    period: "2025",
    title: "ONDA Internship",
    subtitle: "SNMP monitoring dashboard",
  },
  {
    period: "2026",
    title: "Applied AI & PFE Focus",
    subtitle: "Full-stack & applied AI projects",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative bg-[#F1E8DE] py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Soft radial background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2D8D2]/20 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1120px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: Timeline journey */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#A35C72]">
                About
              </p>
              <h2 className="mt-4 font-display text-[44px] leading-[1.05] text-[#2F1730]">
                Building practical software, end to end.
              </h2>
            </div>

            {/* Timeline with dots and softer styling */}
            <div className="mt-12 space-y-8 border-l border-[#36172A]/8 pl-8 relative">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * (i + 1),
                    ease: [0.2, 0, 0, 1],
                  }}
                  className="relative"
                >
                  {/* Timeline dot with ring */}
                  <span
                    className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-[#A35C72] ring-4 ring-[#F4ECDF]"
                    aria-hidden="true"
                  />

                  <p className="text-[12px] font-bold text-[#A35C72]">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 font-semibold text-[#36172A] text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-[#5A5258]">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Paragraphs + compact quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="lg:pt-4"
          >
            {/* Constrained paragraph width */}
            <div className="max-w-[580px] text-[17px] leading-[1.65] text-[#36172A]">
              <p>
                Aya Jabbari is a 4th-year Computer Engineering student at ENSA
                Fès with practical experience in full-stack development,
                automation, data-oriented systems, and generative AI
                applications.
              </p>

              <p className="mt-5">
                Her work focuses on intelligent technical systems: AI-assisted
                document validation, real-time monitoring, learning platforms,
                BI dashboards, DevOps automation, and recommendation systems.
              </p>
            </div>

            {/* Compact quick facts with softer divider */}
            <div className="mt-10 w-full max-w-[560px] border-t border-[#36172A]/8 pt-6">
              <div className="mt-7 grid gap-4 text-[15px] text-[#4A3B45]">
                {meta.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12,
                      ease: [0.2, 0, 0, 1],
                    }}
                    className="flex items-start gap-2.5"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-[#8B3A55] mt-0.5"
                      aria-hidden="true"
                    />
                    <p>
                      <strong className="text-[#2F1730]">{label}</strong>{" "}
                      <span className="text-[#8B7B8B]">—</span> {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
