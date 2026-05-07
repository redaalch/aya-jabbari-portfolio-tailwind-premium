import {
  Briefcase,
  GraduationCap,
  Languages as LanguagesIcon,
  MapPin,
  Target,
} from "lucide-react";
import type { ReactNode } from "react";
import { education, languages } from "../data/background";
import { profile } from "../data/profile";
import { useLanguage } from "../contexts/LanguageContext";

const languageGreetings: Record<string, string> = {
  Arabic: "مرحبا",
  French: "Bonjour",
  English: "Hello",
};

export function About() {
  const { t } = useLanguage();

  const focusAreas = [
    { label: t("about.focus_1_label"), description: t("about.focus_1_desc") },
    { label: t("about.focus_2_label"), description: t("about.focus_2_desc") },
    { label: t("about.focus_3_label"), description: t("about.focus_3_desc") },
  ];

  const proficiencyLabel = (p: string) => {
    if (p === "Native") return t("about.native");
    if (p === "Advanced") return t("about.advanced");
    return p;
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-transparent px-6 py-24 text-warm-900 dark:text-abyssal-text transition-colors duration-500 md:px-12 md:py-32 lg:px-20"
    >
      <div
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-warm-200 dark:via-abyssal-border to-transparent opacity-70 transition-colors duration-500"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="flex flex-col self-start lg:sticky lg:top-32 lg:col-span-5">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-warm-300 dark:bg-abyssal-accent transition-colors duration-500" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-warm-300 dark:text-abyssal-accent transition-colors duration-500">
                {t("about.eyebrow")}
              </p>
            </div>

            <h2 className="mb-8 font-display text-[clamp(3.5rem,5vw,5.8rem)] leading-[0.98] tracking-tight text-warm-900 dark:text-abyssal-text transition-colors duration-500">
              {t("about.heading")}
            </h2>

            <p className="mb-12 max-w-[520px] text-xl font-light leading-relaxed text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500">
              {t("profile.summary")}
            </p>

            <ul className="space-y-5 border-l border-warm-200 dark:border-abyssal-border py-2 pl-6 text-sm text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500">
              <li className="group flex items-center gap-4">
                <MapPin
                  className="h-[18px] w-[18px] text-warm-300 dark:text-abyssal-accent transition-all group-hover:-translate-y-0.5 duration-300"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-medium tracking-wide">{profile.location}</span>
              </li>
              <li className="group flex items-center gap-4">
                <Briefcase
                  className="h-[18px] w-[18px] text-warm-300 dark:text-abyssal-accent transition-all group-hover:-translate-y-0.5 duration-300"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-medium tracking-wide">{t("profile.availability")}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-24 pt-4 lg:col-span-6 lg:col-start-7 lg:pt-0">
            <section aria-labelledby="about-focus-heading">
              <SectionTitle
                id="about-focus-heading"
                icon={<Target className="h-4 w-4" strokeWidth={1.5} />}
              >
                {t("about.focus_eyebrow")}
              </SectionTitle>

              <div className="flex flex-col gap-10">
                {focusAreas.map((item, index) => (
                  <div key={item.label} className="group flex gap-6">
                    <span className="pt-1 font-display text-2xl text-warm-200 dark:text-abyssal-border transition-colors duration-300 group-hover:text-warm-300 dark:group-hover:text-abyssal-accent">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="mb-2 text-2xl font-semibold text-warm-900 dark:text-abyssal-text transition-colors duration-500">
                        {item.label}
                      </h3>
                      <p className="font-light leading-relaxed text-warm-500 dark:text-abyssal-text-muted transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="about-education-heading">
              <SectionTitle
                id="about-education-heading"
                icon={<GraduationCap className="h-4 w-4" strokeWidth={1.5} />}
              >
                {t("about.education_eyebrow")}
              </SectionTitle>

              <div className="relative ml-2 space-y-12 border-l border-warm-200 dark:border-abyssal-border pb-2 transition-colors duration-500">
                {education.map((item) => (
                  <div key={`${item.title}-${item.date}`} className="group relative pl-8">
                    <span
                      className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-warm-300 dark:border-abyssal-accent bg-warm-50 dark:bg-abyssal-base transition-colors duration-300 group-hover:bg-warm-300 dark:group-hover:bg-abyssal-accent"
                      aria-hidden="true"
                    />
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-warm-300 dark:text-abyssal-accent transition-colors duration-500">
                      {item.date}
                    </p>
                    <h3 className="mb-2 font-display text-2xl leading-snug text-warm-900 dark:text-abyssal-text transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light text-warm-500 dark:text-abyssal-text-muted transition-colors duration-500 md:text-base">
                      {item.school}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="about-languages-heading">
              <SectionTitle
                id="about-languages-heading"
                icon={<LanguagesIcon className="h-4 w-4" strokeWidth={1.5} />}
              >
                {t("about.languages_eyebrow")}
              </SectionTitle>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {languages.map((item) => (
                  <div key={item.language} className="group">
                    <div className="relative mb-2 flex min-h-8 items-center">
                      <p className="font-display text-2xl text-warm-900 dark:text-abyssal-text transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                        {item.language}
                      </p>
                      <p className="absolute left-0 font-display text-2xl text-warm-300 dark:text-abyssal-accent opacity-0 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                        {languageGreetings[item.language] ?? item.language}
                      </p>
                    </div>
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-warm-400 dark:text-abyssal-text-muted transition-colors duration-500">
                      <span className="h-1 w-1 rounded-full bg-warm-300 dark:bg-abyssal-accent" aria-hidden="true" />
                      {proficiencyLabel(item.proficiency)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

type SectionTitleProps = {
  id: string;
  icon: ReactNode;
  children: ReactNode;
};

function SectionTitle({ id, icon, children }: SectionTitleProps) {
  return (
    <h3
      id={id}
      className="mb-10 flex items-center gap-3 border-b border-warm-200 dark:border-abyssal-border pb-4 text-xs font-bold uppercase tracking-[0.2em] text-warm-400 dark:text-abyssal-text-muted transition-colors duration-500"
    >
      {icon}
      {children}
    </h3>
  );
}
