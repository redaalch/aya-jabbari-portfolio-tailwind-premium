import { SectionHeader } from "../primitives/SectionHeader";
import { SkillsDualLayer } from "../SkillsDualLayer";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-[#F7EFE7] pt-24 pb-20 md:pt-28 md:pb-24 scroll-mt-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Capabilities"
          heading="Practical skills, grouped by what they build."
          description="A clearer view of the technical areas behind the portfolio work, without repeating every tool in every section."
          className="mb-12 lg:mb-16"
        />

        <SkillsDualLayer />
      </div>
    </section>
  );
}
