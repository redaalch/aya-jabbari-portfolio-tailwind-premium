import {
  Award,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Heart,
  Layers,
  MessageSquare,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  certificationIssuers,
  communityItems,
  type CertificationIcon,
  type CommunityIcon,
} from "../../data/background";
import { useLanguage } from "../../contexts/LanguageContext";

const certificationIcons: Record<CertificationIcon, LucideIcon> = {
  database: Database,
  brain: BrainCircuit,
  code: Code2,
};

const communityIcons: Record<CommunityIcon, LucideIcon> = {
  globe: Globe,
  users: Users,
  message: MessageSquare,
  book: BookOpen,
  heart: Heart,
};

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section
      id="certifications"
      className="bg-[#FAF7F5] px-6 py-16 text-[#3A2B29] md:px-12 md:py-24 lg:px-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-24">
        {/* Certifications */}
        <section aria-labelledby="certifications-heading">
          <div className="mb-12 md:mb-16">
            <p className="mb-4 flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#C28C88]">
              <span className="h-px w-8 bg-[#C28C88]" aria-hidden="true" />
              {t("certs.eyebrow")}
            </p>
            <h2
              id="certifications-heading"
              className="mb-4 font-display text-4xl font-medium leading-tight text-[#3A2B29] md:text-5xl"
            >
              {t("certs.heading")}
            </h2>
            <p className="max-w-2xl border-l-2 border-[#E8D5D4] pl-5 text-lg font-light leading-relaxed text-[#8C7A78]">
              {t("certs.desc")}
            </p>
          </div>

          <div className="group/wallet mx-auto flex w-full max-w-4xl flex-col pb-12 pt-4">
            {certificationIssuers.map((issuer, index) => {
              const Icon = certificationIcons[issuer.icon];

              return (
                <article
                  key={issuer.id}
                  className={`group relative overflow-hidden rounded-3xl border border-[#E8D5D4] bg-white p-8 shadow-[0_-10px_30px_-15px_rgba(225,205,205,0.4)] transition-all duration-500 ease-out hover:!translate-y-[-8px] hover:z-50 hover:border-[#C28C88] hover:shadow-[0_20px_50px_-10px_rgba(225,205,205,0.6)] ${
                    index !== 0 ? "mt-4 md:-mt-24 md:group-hover/wallet:-mt-4" : "mt-0"
                  }`}
                  style={{ zIndex: index + 1 }}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
                    <img
                      src={issuer.image}
                      className="h-full w-full object-cover grayscale"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-8 md:flex-row">
                    <div className="flex flex-col md:w-1/3 md:border-r md:border-[#E8D5D4] md:pr-8">
                      <div className="mb-4 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.15em] text-[#3A2B29]">
                        <span className="rounded-xl bg-[#FFF5F5] p-2.5 text-[#C28C88] shadow-sm">
                          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                        </span>
                        {issuer.name}
                      </div>
                      <p className="mt-auto hidden text-[10px] font-bold uppercase tracking-widest text-[#8C7A78] md:block">
                        {t("certs.records", { count: issuer.certs.length })}
                      </p>
                    </div>

                    <div className="flex flex-col justify-center gap-6 md:w-2/3">
                      {issuer.certs.map((cert) => (
                        <div key={cert.title} className="group/cert flex items-start justify-between gap-4">
                          <div>
                            <h3 className="mb-1 font-display text-xl font-medium text-[#3A2B29] transition-colors group-hover/cert:text-[#C28C88]">
                              {cert.title}
                            </h3>
                            <p className="text-sm font-light leading-relaxed text-[#5C4D4B]">
                              {cert.description}
                            </p>
                          </div>
                          <Award className="h-5 w-5 shrink-0 text-[#E8D5D4] transition-colors group-hover/cert:text-[#C28C88]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-4 hidden items-center justify-center gap-2 text-center text-[10px] font-bold uppercase tracking-widest text-[#A67571] opacity-50 md:flex">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            {t("certs.stack_hint")}
          </p>
        </section>

        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-[#E8D5D4] to-transparent opacity-80"
          aria-hidden="true"
        />

        {/* Community */}
        <section id="community" aria-labelledby="community-heading">
          <div className="mb-12 md:mb-16">
            <p className="mb-4 flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#C28C88]">
              <span className="h-px w-8 bg-[#C28C88]" aria-hidden="true" />
              {t("certs.community_eyebrow")}
            </p>
            <h2
              id="community-heading"
              className="mb-4 font-display text-4xl font-medium leading-tight text-[#3A2B29] md:text-5xl"
            >
              {t("certs.community_heading")}
            </h2>
            <p className="max-w-2xl border-l-2 border-[#E8D5D4] pl-5 text-lg font-light leading-relaxed text-[#8C7A78]">
              {t("certs.community_desc")}
            </p>
          </div>

          <div className="mx-auto mt-8 w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {communityItems.map((item) => {
                const Icon = communityIcons[item.icon];
                const context = t(`community.${item.id}.context`);

                return (
                  <article
                    key={item.org}
                    className="group flex cursor-default flex-col items-center rounded-3xl border border-[#E8D5D4] bg-white p-8 text-center shadow-[0_5px_15px_-10px_rgba(225,205,205,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(225,205,205,0.6)]"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF5F5] text-[#A67571] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C28C88] group-hover:text-white">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-medium text-[#3A2B29] transition-colors group-hover:text-[#C28C88]">
                      {item.org}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#8C7A78]">
                      {context}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
