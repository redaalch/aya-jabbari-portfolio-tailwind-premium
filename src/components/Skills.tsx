import { motion } from "motion/react";
import { SectionHeader } from "./primitives/SectionHeader";
import { SkillsDualLayer } from "./SkillsDualLayer";

export function Skills() {
  return (
    <section id="skills" className="bg-[#F7EFE7] pt-32 pb-24 scroll-mt-12">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Technical Skills"
          heading="Translating technical skills into real systems."
          className="mb-16 lg:mb-20"
        />

        <SkillsDualLayer />
      </div>
    </section>
  );
}
