import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import heroBg from "../assets/hero/steptodown.com980201.jpg";

const highlights = [
  {
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: "ONDA",
    description: "SNMP monitoring",
  },
  {
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "AI Projects",
    description: "CNSS & insurance validation",
  },
  {
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-14 pt-16 md:pb-16 md:pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Horizontal overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#FBF7F1]/30 via-transparent to-[#36172A]/10 pointer-events-none"
        aria-hidden="true"
      />
      {/* Bottom grounding gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#36172A]/20 pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle radial shadow behind hero group */}
      <div
        className="pointer-events-none absolute left-[38%] top-[50%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#36172A]/10 blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[940px] px-6">
        {/* ── Main hero row — card + portrait as one centered group ── */}
        <div className="flex items-center">
          {/* Text column — editorial card */}
          <div className="relative z-10 max-w-[640px] rounded-[34px] border border-[#36172A]/[0.08] bg-[#FBF7F1]/92 pl-10 pr-6 py-10 shadow-[0_24px_80px_rgba(54,23,42,0.12)] backdrop-blur-[3px] text-center lg:text-left">
            {/* Name + role + specialization */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            >
              <h1 className="font-display text-[clamp(3.4rem,5.4vw,5.2rem)] font-medium leading-[0.95] tracking-tight text-[#2F1730]">
                {profile.name}
              </h1>
              <div className="mt-3 flex flex-col gap-1.5">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#A35C72]">
                  {profile.role}
                </p>
                <p className="mx-auto mt-1 max-w-[500px] font-display text-[1.55rem] font-medium leading-[1.18] text-[#36172A] lg:mx-0">
                  {profile.stackLine}
                </p>
              </div>
            </motion.div>

            {/* Mobile portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="mt-8 flex justify-center lg:hidden"
            >
              <motion.div
                className="relative w-[55vw] max-w-[220px]"
                animate={floatAnimate}
                transition={floatTransition}
              >
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-[#C9849B]/15"
                  aria-hidden="true"
                />
                <div className="group relative overflow-hidden rounded-[30px] border-2 border-rose-100 shadow-[0_26px_70px_rgba(54,23,42,0.22)]">
                  <img
                    src={profile.headshotUrl}
                    alt={`Portrait of ${profile.name}`}
                    width={480}
                    height={600}
                    decoding="async"
                    className="aspect-[4/5] w-full bg-cream-100 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Profile line + location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.2, 0, 0, 1] }}
              className="mt-5"
            >
              <p className="mx-auto max-w-[500px] text-[1rem] leading-8 text-[#4A3B45] lg:mx-0">
                {profile.headline}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#36172A]/10 bg-white/60 px-3.5 py-1.5">
                <MapPin
                  className="h-3.5 w-3.5 shrink-0 text-[#A35C72]"
                  aria-hidden="true"
                />
                <span className="text-[13px] font-semibold text-[#4A3B45]">
                  {profile.location}
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.2, 0, 0, 1] }}
              className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#work"
                className="inline-flex h-12 w-full min-w-[160px] items-center justify-center gap-2.5 rounded-full border-2 border-[#36172A] bg-[#36172A] px-7 text-[15px] font-semibold text-cream-50 shadow-[0_10px_24px_rgba(54,23,42,0.20)] transition-all duration-300 ease-out hover:bg-white hover:text-[#36172A] hover:shadow-[0_14px_32px_rgba(54,23,42,0.14)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                View Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex h-12 w-full min-w-[160px] items-center justify-center gap-2.5 rounded-2xl border border-[#36172A]/20 bg-white/65 px-6 text-[15px] font-semibold text-[#36172A] shadow-[0_8px_22px_rgba(54,23,42,0.05)] backdrop-blur-md transition-all duration-300 ease-out hover:border-[#36172A]/35 hover:bg-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              )}
            </motion.div>

          </div>

          {/* Portrait — overlapping card edge */}
          <div className="relative z-20 hidden w-[276px] flex-shrink-0 ml-8 mt-6 lg:block">
            <motion.div
              className="relative"
              animate={floatAnimate}
              transition={floatTransition}
            >
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-[#C9849B]/20"
                aria-hidden="true"
              />
              <div className="group relative overflow-hidden rounded-[28px] border border-white/70 shadow-[0_20px_50px_rgba(54,23,42,0.18)] transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(54,23,42,0.24)]">
                <img
                  src={profile.headshotUrl}
                  alt={`Portrait of ${profile.name}`}
                  width={600}
                  height={750}
                  decoding="async"
                  className="aspect-[4/5] w-full bg-cream-100 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Availability badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#36172A]/10 bg-[#FBF7F1]/92 px-4 py-1.5 text-[11px] font-bold text-[#5B2A45] shadow-[0_8px_20px_rgba(54,23,42,0.10)] backdrop-blur-sm">
                {profile.availabilityBadge}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Highlight row ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42, ease: [0.2, 0, 0, 1] }}
          className="mx-auto mt-5 grid max-w-[920px] overflow-hidden rounded-[24px] border border-[#36172A]/10 bg-[#FBF7F1]/86 shadow-[0_14px_38px_rgba(54,23,42,0.09)] backdrop-blur-[4px] md:grid-cols-3 md:rounded-full"
        >
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 px-6 py-3.5 ${
                i > 0
                  ? "border-t border-[#36172A]/[0.07] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F2D8D2]/55 text-[#5B2A45]">
                {item.icon}
              </span>
              <div>
                <p className="text-[13px] font-bold text-[#36172A]">
                  {item.title}
                </p>
                <p className="text-[12px] text-[#5A5258]">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
