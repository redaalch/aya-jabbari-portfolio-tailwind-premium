import { motion } from "motion/react";
import { BrainCircuit, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./primitives/SectionHeader";
import { Card } from "./primitives/Card";
import { Chip } from "./primitives/Chip";
import { hackathons } from "../data/profile";

const icons = [BrainCircuit, ShieldCheck];

export function Hackathons() {
  return (
    <section id="hackathons" className="bg-cream-100 py-16 md:py-20 lg:py-24">
      <div className="container-default">
        <SectionHeader
          eyebrow="Hackathons"
          heading="Applied AI under time pressure."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((hack, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={hack.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.08,
                  ease: [0.2, 0, 0, 1],
                }}
              >
                <Card as="article" variant="default" hoverable>
                  {/* Eyebrow row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-eyebrow uppercase tracking-[0.18em] text-plum-500">
                        {hack.label}
                      </p>
                      <p className="mt-1 text-body-sm text-plum-500">
                        {hack.organizer} · {hack.date}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blush-50 text-rose-500">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Project name */}
                  <h3 className="mt-4 font-display text-display-sm font-medium leading-[1.25] tracking-[-0.01em] text-plum-900">
                    {hack.projectName}
                  </h3>

                  {/* Problem */}
                  <p className="mt-3 text-body-sm leading-[1.55] text-plum-700">
                    <span className="font-semibold text-plum-900">
                      Problem —{" "}
                    </span>
                    {hack.problem}
                  </p>

                  {/* Approach */}
                  <p className="mt-2 text-body-sm leading-[1.55] text-plum-700">
                    <span className="font-semibold text-plum-900">
                      Approach —{" "}
                    </span>
                    {hack.approach}
                  </p>

                  {/* Method chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {hack.methods.map((m) => (
                      <Chip key={m} variant="ghost">
                        {m}
                      </Chip>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
