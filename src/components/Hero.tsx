import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BarChart2,
  Cloud,
  Download,
  Layout,
  Star,
} from "lucide-react";
import { profile } from "../data/profile";
import { useLanguage } from "../contexts/LanguageContext";
import heroBg from "../assets/hero/steptodown.com759992.jpg";
import darkHeroBg from "../assets/hero/pexels-incrediblerafa-4737484.webp";

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const proofItems = [
    t("hero.proof_ensa"),
    t("hero.proof_onda"),
    t("hero.proof_hackathons"),
    t("hero.proof_projects"),
  ];

  const highlights = [
    { icon: BarChart2, title: "ONDA", description: t("hero.highlight_onda_desc") },
    { icon: Star, title: "AI Projects", description: t("hero.highlight_ai_desc") },
    { icon: Layout, title: "Technical", description: t("hero.highlight_tech_desc") },
  ];

  const floatAnimate = reduceMotion ? undefined : { y: [0, -8, 0] };
  const floatTransition = reduceMotion
    ? undefined
    : { duration: 7, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-12 pt-24 transition-colors duration-500 md:px-8 md:pb-8 md:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-opacity duration-500 dark:opacity-0"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-500 dark:opacity-100"
        style={{ backgroundImage: `url(${darkHeroBg})` }}
        aria-hidden="true"
      />

      {/* Light mode gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/72 to-cream-50/8 dark:from-abyssal-base/97 dark:via-abyssal-base/80 dark:to-abyssal-base/20 transition-colors duration-500"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream-50/35 dark:to-abyssal-base/50 transition-colors duration-500"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="py-8 text-center lg:text-left">
            <p className="mb-6 flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-rose-500 dark:text-abyssal-accent lg:justify-start">
              <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
              {t("profile.role")}
            </p>

            <h1 className="font-display text-[clamp(4rem,7.2vw,6.5rem)] font-medium leading-[0.92] text-warm-900 dark:text-abyssal-text transition-colors duration-500">
              {profile.name}
            </h1>

            <h2 className="mx-auto mt-7 max-w-3xl font-sans text-[clamp(1.55rem,2.8vw,2.25rem)] font-semibold leading-[1.18] text-warm-900 dark:text-abyssal-text transition-colors duration-500 lg:mx-0">
              {t("profile.stackLine")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-warm-800 dark:text-abyssal-text-muted transition-colors duration-500 lg:mx-0">
              {t("profile.headline")}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#work"
                className="inline-flex h-[52px] w-full min-w-[170px] items-center justify-center gap-2.5 rounded-full bg-warm-900 dark:bg-abyssal-accent px-8 text-[16px] font-semibold text-white dark:text-abyssal-base shadow-[0_18px_36px_rgba(58,43,41,0.18)] dark:shadow-[0_18px_36px_rgba(56,189,248,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-warm-925 dark:hover:bg-abyssal-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                {t("hero.cta_work")}
                <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex h-[52px] w-full min-w-[170px] items-center justify-center gap-2.5 rounded-full border border-warm-900/10 dark:border-abyssal-border bg-white/90 dark:bg-abyssal-surface px-8 text-[16px] font-semibold text-warm-900 dark:text-abyssal-text shadow-[0_8px_22px_rgba(58,43,41,0.08)] dark:shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:hover:bg-abyssal-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Download className="h-[18px] w-[18px]" aria-hidden="true" />
                  {t("hero.cta_cv")}
                </a>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {proofItems.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/85 dark:bg-abyssal-surface/85 px-4 py-2 text-[12px] font-bold text-warm-900 dark:text-abyssal-text shadow-[0_8px_18px_rgba(58,43,41,0.06)] dark:shadow-none backdrop-blur-sm transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[360px] justify-center lg:max-w-none">
            <motion.div
              className="relative w-full max-w-[330px]"
              animate={floatAnimate}
              transition={floatTransition}
            >
              <div
                className="absolute left-[-44px] top-10 z-0 aspect-[4/5] w-full rounded-[10rem] rounded-bl-none border-2 border-white/70 dark:border-white/20"
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[10rem] rounded-bl-none border-8 border-white dark:border-abyssal-surface bg-white dark:bg-abyssal-surface shadow-[0_28px_80px_-24px_rgba(31,38,135,0.35)] dark:shadow-[0_28px_80px_-24px_rgba(56,189,248,0.12)] transition-colors duration-500">
                <img
                  src={profile.headshotUrl}
                  alt={`Portrait of ${profile.name}`}
                  width={660}
                  height={825}
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-all duration-300 hover:scale-105 dark:brightness-90 dark:contrast-125"
                />
              </div>
              <div className="absolute -bottom-4 right-0 z-20 flex items-center gap-2 whitespace-nowrap rounded-full border border-rose-100 dark:border-abyssal-border bg-white dark:bg-abyssal-surface px-5 py-3 text-[12px] font-bold text-[#5B2A45] dark:text-abyssal-accent shadow-[0_18px_38px_rgba(58,43,41,0.14)] dark:shadow-none transition-colors duration-500 md:right-[-8px]">
                <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-abyssal-accent" aria-hidden="true" />
                {t("profile.availabilityBadge")}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-4 pt-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-3xl bg-white/95 dark:bg-abyssal-surface dark:border dark:border-abyssal-border p-5 shadow-[0_18px_44px_rgba(58,43,41,0.08)] dark:shadow-none transition-all duration-500 hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush-50 dark:bg-abyssal-border text-rose-500 dark:text-abyssal-accent transition-colors duration-500">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[14px] font-bold text-warm-900 dark:text-abyssal-text transition-colors duration-500">{title}</p>
                <p className="mt-0.5 text-[12px] font-medium text-warm-700 dark:text-abyssal-text-muted transition-colors duration-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
