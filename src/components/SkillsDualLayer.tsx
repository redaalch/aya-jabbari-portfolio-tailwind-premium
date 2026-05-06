import { motion } from "motion/react";
import {
  LayoutTemplate,
  BarChart3,
  Workflow,
  Cpu,
} from "lucide-react";
import { capabilityGroups, type CapabilityGroup } from "../data/skills";

const icons = {
  layout: LayoutTemplate,
  chart: BarChart3,
  workflow: Workflow,
  cpu: Cpu,
};

export function SkillsDualLayer() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* Legend / Headers */}
      <div className="hidden lg:grid w-full mb-1 px-8 grid-cols-[1.15fr_100px_1fr]">
        <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#36172A]/40">
          WHAT I BUILD
        </div>
        <div className="w-[10%]"></div>
        <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#36172A]/40">
          TOOLS I USE
        </div>
      </div>

      {capabilityGroups.map((cap, i) => {
        const Icon = icons[cap.icon];
        const tone = getCapabilityTone(cap);
        const rowBg = i % 2 === 0 ? "bg-[#FBF7F1]/70" : "bg-[#F4ECDF]/55";
        
        return (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className={`group relative flex flex-col lg:grid lg:grid-cols-[1.15fr_100px_1fr] items-start lg:items-center gap-5 px-5 py-4 lg:px-8 lg:py-5 rounded-3xl border border-[#36172A]/5 hover:bg-white hover:shadow-md transition-all duration-500 overflow-hidden ${rowBg} ${tone.hoverBorder}`}
          >
            {/* Layer 1: Outcome */}
            <div className="relative z-10 w-full flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-[#36172A]/5 ${tone.color} group-hover:scale-105 transition-transform duration-500`}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="font-fraunces text-xl font-semibold text-[#2F1730] tracking-tight group-hover:text-black transition-colors duration-300">
                  {cap.title}
                </h3>
              </div>
              <p className="text-[#36172A]/70 text-[14px] leading-relaxed pl-[60px]">
                {cap.description}
              </p>
            </div>

            {/* Visual Link / Connector (visible on desktop) */}
            <div className="hidden lg:flex relative z-10 h-full items-center justify-center w-[100px] opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <span className={`h-px w-10 ${tone.lineBg}`} />
              <span className={`mx-2 h-1.5 w-1.5 rounded-full ${tone.dotBg}`} />
              <span className={`h-px w-10 ${tone.lineBg}`} />
            </div>

            {/* Layer 2: Tools powering it */}
            <div className="relative z-10 w-full flex flex-wrap gap-2.5 pl-[60px] lg:pl-0 lg:ml-auto">
              <div className="lg:hidden w-full text-[10px] font-bold uppercase tracking-wider text-[#36172A]/40 mb-1">
                TOOLS I USE
              </div>
              {cap.tools.map((tool, index) => (
                <div
                  key={tool}
                  className={`rounded-full border border-[#36172A]/[0.06] bg-white/75 px-4 py-2 text-[13px] font-semibold text-[#4A2F4D] shadow-[0_4px_14px_rgba(54,23,42,0.04)] transition-all duration-300 lg:transform lg:translate-x-0 lg:group-hover:translate-x-1 group-hover:bg-white`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function getCapabilityTone(capability: CapabilityGroup) {
  const tones = {
    rose: {
      color: "text-[#A35C72]",
      lineBg: "bg-[#A35C72]/25",
      dotBg: "bg-[#A35C72]/45",
      hoverBorder: "hover:border-[#A35C72]/20",
    },
    blush: {
      color: "text-[#C9849B]",
      lineBg: "bg-[#C9849B]/25",
      dotBg: "bg-[#C9849B]/45",
      hoverBorder: "hover:border-[#C9849B]/20",
    },
    plum: {
      color: "text-[#36172A]",
      lineBg: "bg-[#36172A]/20",
      dotBg: "bg-[#36172A]/35",
      hoverBorder: "hover:border-[#36172A]/15",
    },
    wine: {
      color: "text-[#8B3A55]",
      lineBg: "bg-[#8B3A55]/25",
      dotBg: "bg-[#8B3A55]/45",
      hoverBorder: "hover:border-[#8B3A55]/20",
    },
  };

  return tones[capability.tone];
}
