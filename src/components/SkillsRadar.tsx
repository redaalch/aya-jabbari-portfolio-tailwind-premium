import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const radarAxes = [
  {
    label: "Full-stack",
    angle: 0,
    level: 90,
    tools: ["React", "Spring Boot", "PHP/Laravel", ".NET"],
  },
  {
    label: "Data & BI",
    angle: 60,
    level: 80,
    tools: ["Power BI", "Talend ETL"],
  },
  {
    label: "Databases",
    angle: 120,
    level: 85,
    tools: ["MySQL", "MongoDB", "Neo4j", "Cassandra"],
  },
  {
    label: "DevOps",
    angle: 180,
    level: 75,
    tools: ["Docker", "Linux", "GitHub Actions", "Terraform"],
  },
  {
    label: "AI / Applied",
    angle: 240,
    level: 70,
    tools: ["Document Validation", "Python"],
  },
  {
    label: "Architecture",
    angle: 300,
    level: 85,
    tools: ["UML", "OOP", "Software Design"],
  },
];

interface Point {
  x: number;
  y: number;
}

const polarToCartesian = (
  angle: number,
  distance: number,
  centerX: number,
  centerY: number,
): Point => {
  const radian = (angle * Math.PI) / 180;
  return {
    x: centerX + distance * Math.cos(radian - Math.PI / 2),
    y: centerY + distance * Math.sin(radian - Math.PI / 2),
  };
};

export function SkillsRadar() {
  const [activeAxis, setActiveAxis] = useState<number | null>(null);

  const size = 700;
  const center = size / 2;
  const maxRadius = 140;
  const levels = 4; // number of grid circles

  const toPercent = (val: number) => `${(val / size) * 100}%`;

  // Generate radar points
  const points = radarAxes.map((axis) => {
    const distance = (axis.level / 100) * maxRadius;
    return polarToCartesian(axis.angle, distance, center, center);
  });

  // Create polygon path
  const polygonPath =
    points
      .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
      .join(" ") + " Z";

  return (
    <div className="flex flex-col items-center gap-6 lg:gap-12 w-full max-w-5xl mx-auto p-4 lg:p-12 rounded-3xl bg-[#FBF7F1]/50 border border-[#36172A]/5 backdrop-blur-sm shadow-sm transition-all duration-500">
      {/* Chart & Axis Labels Area */}
      <div className="relative w-full max-w-[700px] aspect-square flex justify-center items-center">
        {/* Radar Chart SVG */}
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full overflow-visible z-0"
        >
          <circle
            cx={center}
            cy={center}
            r={maxRadius + 30}
            fill="#FBF7F1"
            className="shadow-[0_12px_40px_rgba(163,92,114,0.05)] drop-shadow-xl"
          />

          {/* Grid circles */}
          {Array.from({ length: levels }).map((_, i) => {
            const radius = ((i + 1) / levels) * maxRadius;
            return (
              <circle
                key={`grid-${i}`}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#A35C72"
                strokeWidth="0.5"
                opacity={i === levels - 1 ? 0.3 : 0.15}
              />
            );
          })}

          {/* Axis lines */}
          {radarAxes.map((axis, i) => {
            const point = polarToCartesian(
              axis.angle,
              maxRadius,
              center,
              center,
            );
            const isActive = activeAxis === i;
            return (
              <motion.line
                key={`axis-${axis.label}`}
                x1={center}
                y1={center}
                x2={point.x}
                y2={point.y}
                stroke="#A35C72"
                animate={{
                  strokeWidth: isActive ? 1.5 : 0.5,
                  opacity: isActive ? 0.8 : 0.3,
                }}
                strokeDasharray={isActive ? "none" : "4 4"}
              />
            );
          })}

          {/* Radar fill polygon */}
          <motion.path
            d={polygonPath}
            fill="url(#radarGradient)"
            stroke="#A35C72"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0.8, transformOrigin: "center" }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0, 0, 1] }}
            className={activeAxis !== null ? "opacity-60" : "opacity-100"}
            style={{ transition: "opacity 0.4s ease" }}
          />

          {/* Skill points (nodes) */}
          {points.map((p, i) => {
            const isActive = activeAxis === i;
            return (
              <motion.circle
                key={`point-${i}`}
                cx={p.x}
                cy={p.y}
                animate={{
                  r: isActive ? 8 : 4,
                  fill: isActive ? "#A35C72" : "#FBF7F1",
                }}
                stroke="#A35C72"
                strokeWidth="1.5"
                onMouseEnter={() => setActiveAxis(i)}
                onMouseLeave={() => setActiveAxis(null)}
                className="cursor-pointer"
              />
            );
          })}

          {/* Animated SVG connection lines on hover */}
          <AnimatePresence>
            {activeAxis !== null &&
              radarAxes[activeAxis].tools.map((tool, tIndex) => {
                const axis = radarAxes[activeAxis];
                const labelDistance = maxRadius + 75;
                const popDistance = maxRadius + 160;
                const spreadAngle =
                  axis.angle + (tIndex - (axis.tools.length - 1) / 2) * 22;

                const labelPoint = polarToCartesian(
                  axis.angle,
                  labelDistance,
                  center,
                  center,
                );
                const targetPos = polarToCartesian(
                  spreadAngle,
                  popDistance,
                  center,
                  center,
                );

                return (
                  <motion.line
                    key={`sr-line-${tool}`}
                    x1={labelPoint.x}
                    y1={labelPoint.y}
                    x2={targetPos.x}
                    y2={targetPos.y}
                    stroke="#A35C72"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                );
              })}
          </AnimatePresence>

          {/* Gradients */}
          <defs>
            <linearGradient
              id="radarGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A35C72" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C9849B" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>

        {/* HTML Overlay for interactive elements mapping perfectly via percentages */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Axis Labels */}
          {radarAxes.map((axis, i) => {
            const labelDistance = maxRadius + 75;
            const labelPoint = polarToCartesian(
              axis.angle,
              labelDistance,
              center,
              center,
            );
            const isActive = activeAxis === i;
            const isDimmed = activeAxis !== null && !isActive;

            return (
              <motion.div
                key={`label-${axis.label}`}
                className="absolute flex flex-col items-center gap-1 cursor-pointer pointer-events-auto"
                style={{
                  left: toPercent(labelPoint.x),
                  top: toPercent(labelPoint.y),
                  transform: "translate(-50%, -50%)",
                  width: "160px",
                }}
                onMouseEnter={() => setActiveAxis(i)}
                onMouseLeave={() => setActiveAxis(null)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  opacity: isDimmed ? 0.3 : 1,
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className={`font-fraunces text-[15px] lg:text-lg tracking-tight font-semibold text-center leading-tight transition-colors duration-300 ${isActive ? "text-[#A35C72]" : "text-[#2F1730]"}`}
                >
                  {axis.label}
                </span>
                <span className="text-[11px] font-mono text-[#A35C72]/70">
                  {axis.level}% Match
                </span>
              </motion.div>
            );
          })}

          {/* Pop-out elegant skills (The "Creative Format" on hover) */}
          <AnimatePresence>
            {activeAxis !== null &&
              radarAxes[activeAxis].tools.map((tool, tIndex) => {
                const axis = radarAxes[activeAxis];
                const labelDistance = maxRadius + 75;
                const popDistance = maxRadius + 160;
                const spreadAngle =
                  axis.angle + (tIndex - (axis.tools.length - 1) / 2) * 22;

                const labelPoint = polarToCartesian(
                  axis.angle,
                  labelDistance,
                  center,
                  center,
                );
                const targetPos = polarToCartesian(
                  spreadAngle,
                  popDistance,
                  center,
                  center,
                );

                return (
                  <motion.div
                    key={`pop-${tool}`}
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      left: toPercent(labelPoint.x),
                      top: toPercent(labelPoint.y),
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      left: toPercent(targetPos.x),
                      top: toPercent(targetPos.y),
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      left: toPercent(labelPoint.x),
                      top: toPercent(labelPoint.y),
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                  >
                    <div className="bg-white backdrop-blur-md px-3 py-1.5 rounded-full border-2 border-[#A35C72]/40 text-[#A35C72] text-[12px] lg:text-[13px] font-bold shadow-[0_8px_16px_rgba(163,92,114,0.15)] whitespace-nowrap">
                      {tool}
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      {/* Tools / Supporting Tags Below (act as legend and hover triggers) */}
      <div className="w-full flex justify-center pb-4 -mt-4 relative z-20">
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3 max-w-[800px]">
          {radarAxes.map((a, axisIndex) =>
            a.tools.map((tool) => {
              const isActiveMode = activeAxis !== null;
              const isThisToolActive = activeAxis === axisIndex;

              return (
                <motion.div
                  key={`${a.label}-${tool}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  animate={{
                    opacity: isActiveMode && !isThisToolActive ? 0.3 : 1,
                    scale: isThisToolActive ? 1.05 : 1,
                    borderColor: isThisToolActive
                      ? "rgba(163,92,114,0.5)"
                      : "rgba(54,23,42,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActiveAxis(axisIndex)}
                  onMouseLeave={() => setActiveAxis(null)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium bg-white border cursor-pointer shadow-sm transition-colors duration-300
                    ${isThisToolActive ? "text-[#A35C72] ring-2 ring-[#A35C72]/10" : "text-[#36172A]/80 hover:border-[#A35C72]/30 hover:text-[#A35C72]"}
                  `}
                >
                  {tool}
                </motion.div>
              );
            }),
          )}
        </div>
      </div>
    </div>
  );
}
