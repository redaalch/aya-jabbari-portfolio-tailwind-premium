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
import heroBg from "../assets/hero/steptodown.com759992.jpg";

const proofItems = [
  "ENSA Fès",
  "ONDA internship",
  "AI hackathons",
  "Full-stack projects",
];

const highlights = [
  {
    icon: BarChart2,
    title: "ONDA",
    description: "SNMP monitoring",
  },
  {
    icon: Star,
    title: "AI Projects",
    description: "CNSS & insurance validation",
  },
  {
    icon: Layout,
    title: "Technical",
    description: "Full-stack · Data · AI",
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const floatAnimate = reduceMotion ? undefined : { y: [0, -8, 0] };
  const floatTransition = reduceMotion
    ? undefined
    : { duration: 7, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat px-6 pb-12 pt-24 md:px-8 md:pb-8 md:pt-28"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBF7F2]/95 via-[#FBF7F2]/72 to-[#FBF7F2]/8"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBF7F2]/35"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="py-8 text-center lg:text-left">
            <p className="mb-6 flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-rose-500 lg:justify-start">
              <Cloud className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.role}
            </p>

            <h1 className="font-display text-[clamp(4rem,7.2vw,6.5rem)] font-medium leading-[0.92] text-[#3A2B29]">
              {profile.name}
            </h1>

            <h2 className="mx-auto mt-7 max-w-3xl font-sans text-[clamp(1.55rem,2.8vw,2.25rem)] font-semibold leading-[1.18] text-[#3A2B29] lg:mx-0">
              {profile.stackLine}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#4A3B45] lg:mx-0">
              {profile.headline}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#work"
                className="inline-flex h-[52px] w-full min-w-[170px] items-center justify-center gap-2.5 rounded-full bg-[#3A2B29] px-8 text-[16px] font-semibold text-white shadow-[0_18px_36px_rgba(58,43,41,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A1B19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                View Projects
                <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex h-[52px] w-full min-w-[170px] items-center justify-center gap-2.5 rounded-full border border-[#3A2B29]/10 bg-white/90 px-8 text-[16px] font-semibold text-[#3A2B29] shadow-[0_8px_22px_rgba(58,43,41,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Download className="h-[18px] w-[18px]" aria-hidden="true" />
                  Download CV
                </a>
              )}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {proofItems.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/85 px-4 py-2 text-[12px] font-bold text-[#3A2B29] shadow-[0_8px_18px_rgba(58,43,41,0.06)] backdrop-blur-sm"
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
                className="absolute left-[-44px] top-10 z-0 aspect-[4/5] w-full rounded-[10rem] rounded-bl-none border-2 border-white/70"
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[10rem] rounded-bl-none border-8 border-white bg-white shadow-[0_28px_80px_-24px_rgba(31,38,135,0.35)]">
                <img
                  src={profile.headshotUrl}
                  alt={`Portrait of ${profile.name}`}
                  width={660}
                  height={825}
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 right-0 z-20 flex items-center gap-2 whitespace-nowrap rounded-full border border-rose-100 bg-white px-5 py-3 text-[12px] font-bold text-[#5B2A45] shadow-[0_18px_38px_rgba(58,43,41,0.14)] md:right-[-8px]">
                <span
                  className="h-2 w-2 rounded-full bg-rose-500"
                  aria-hidden="true"
                />
                {profile.availabilityBadge}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-4 pt-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-3xl bg-white/95 p-5 shadow-[0_18px_44px_rgba(58,43,41,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush-50 text-rose-500">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[14px] font-bold text-[#3A2B29]">{title}</p>
                <p className="mt-0.5 text-[12px] font-medium text-[#5C4D4B]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
