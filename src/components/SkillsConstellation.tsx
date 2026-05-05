import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface NodeData {
  id: string;
  label: string;
  skills: { name: string; angleOffset: number; radiusOffset: number }[];
  baseAngle: number;
}

const centralNodes: NodeData[] = [
  {
    id: "build",
    label: "Build",
    baseAngle: 270, // Top
    skills: [
      { name: "React", angleOffset: -25, radiusOffset: 90 },
      { name: "Laravel", angleOffset: 25, radiusOffset: 100 },
      { name: "Spring Boot", angleOffset: -65, radiusOffset: 110 },
      { name: "REST APIs", angleOffset: 65, radiusOffset: 95 },
    ],
  },
  {
    id: "data",
    label: "Data",
    baseAngle: 342, // Top Right
    skills: [
      { name: "MySQL", angleOffset: -25, radiusOffset: 95 },
      { name: "SQL Server", angleOffset: 30, radiusOffset: 105 },
      { name: "Power BI", angleOffset: -70, radiusOffset: 110 },
      { name: "Talend", angleOffset: 70, radiusOffset: 90 },
    ],
  },
  {
    id: "deploy",
    label: "Deploy",
    baseAngle: 54, // Bottom Right
    skills: [
      { name: "Docker", angleOffset: -20, radiusOffset: 95 },
      { name: "GitHub Actions", angleOffset: 25, radiusOffset: 110 },
      { name: "Linux", angleOffset: -65, radiusOffset: 105 },
      { name: "Terraform", angleOffset: 65, radiusOffset: 95 },
    ],
  },
  {
    id: "foundations",
    label: "Foundations",
    baseAngle: 126, // Bottom Left
    skills: [
      { name: "OOP", angleOffset: -30, radiusOffset: 90 },
      { name: "Software Design", angleOffset: -75, radiusOffset: 110 },
      { name: "UML", angleOffset: 20, radiusOffset: 100 },
      { name: "Algorithms", angleOffset: 70, radiusOffset: 105 },
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    baseAngle: 198, // Top Left
    skills: [
      { name: "ChatGPT", angleOffset: -25, radiusOffset: 105 },
      { name: "Claude", angleOffset: 20, radiusOffset: 90 },
      { name: "Stable Diffusion", angleOffset: -70, radiusOffset: 115 },
      { name: "Document Validation", angleOffset: 65, radiusOffset: 110 },
    ],
  },
];

const polarToCartesian = (
  angleDeg: number,
  radius: number,
  cx: number,
  cy: number,
) => {
  const radian = (angleDeg * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(radian),
    y: cy + radius * Math.sin(radian),
  };
};

export function SkillsConstellation() {
  const [activeNetwork, setActiveNetwork] = useState<string | null>(null);

  const svgSize = 800;
  const center = { x: svgSize / 2, y: svgSize / 2 };
  const mainRadius = 180;

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      <div className="relative w-full aspect-square max-w-[800px] flex justify-center items-center rounded-[40px] bg-[#FBF7F1]/30 border border-[#36172A]/5 overflow-hidden">
        {/* Background Ambient Network Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,92,114,0.03)_0%,transparent_70%)] pointer-events-none" />

        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="absolute inset-0 w-full h-full overflow-visible drop-shadow-sm"
        >
          <defs>
            <filter id="glowBlur">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Central Connecting Lines (Core of the Constellation) */}
          <g
            opacity={activeNetwork === null ? 0.15 : 0.05}
            className="transition-opacity duration-500"
          >
            {centralNodes.map((node, i) => {
              const nextNode = centralNodes[(i + 1) % centralNodes.length];
              const p1 = polarToCartesian(
                node.baseAngle,
                mainRadius,
                center.x,
                center.y,
              );
              const p2 = polarToCartesian(
                nextNode.baseAngle,
                mainRadius,
                center.x,
                center.y,
              );
              return (
                <line
                  key={`core-${i}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke="#A35C72"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            })}
          </g>

          {/* Drawing all Networks */}
          {centralNodes.map((network) => {
            const isNetworkActive = activeNetwork === network.id;
            const isFaded = activeNetwork !== null && !isNetworkActive;

            const nodeCenter = polarToCartesian(
              network.baseAngle,
              mainRadius,
              center.x,
              center.y,
            );

            return (
              <g
                key={network.id}
                className={`transition-opacity duration-500 ${isFaded ? "opacity-20" : "opacity-100"}`}
              >
                {/* Lines to skill nodes */}
                {network.skills.map((skill, i) => {
                  const skillPos = polarToCartesian(
                    network.baseAngle + skill.angleOffset,
                    skill.radiusOffset,
                    nodeCenter.x,
                    nodeCenter.y,
                  );

                  return (
                    <motion.line
                      key={`line-${network.id}-${i}`}
                      x1={nodeCenter.x}
                      y1={nodeCenter.y}
                      x2={skillPos.x}
                      y2={skillPos.y}
                      stroke="#A35C72"
                      strokeWidth={isNetworkActive ? 1.5 : 0.5}
                      opacity={isNetworkActive ? 0.6 : 0.25}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="transition-all duration-500"
                    />
                  );
                })}

                {/* Skill Nodes */}
                {network.skills.map((skill, i) => {
                  const skillPos = polarToCartesian(
                    network.baseAngle + skill.angleOffset,
                    skill.radiusOffset,
                    nodeCenter.x,
                    nodeCenter.y,
                  );

                  return (
                    <g key={`skill-${network.id}-${i}`}>
                      <motion.circle
                        cx={skillPos.x}
                        cy={skillPos.y}
                        r={isNetworkActive ? 5 : 4}
                        fill="#FBF7F1"
                        stroke="#A35C72"
                        strokeWidth="1.5"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* HTML Overlay for Text and Hover interactions to ensure crisp rendering and perfect alignment */}
        <div className="absolute inset-0">
          {centralNodes.map((network) => {
            const nodeCenter = polarToCartesian(
              network.baseAngle,
              mainRadius,
              center.x,
              center.y,
            );
            const isNetworkActive = activeNetwork === network.id;
            const isFaded = activeNetwork !== null && !isNetworkActive;

            // HTML positioning function based on SVG coordinates
            const toPercent = (val: number, max: number) =>
              `${(val / max) * 100}%`;

            return (
              <div
                key={`html-${network.id}`}
                className={`absolute inset-0 transition-opacity duration-500 ${isFaded ? "opacity-20" : "opacity-100"}`}
                style={{ pointerEvents: isFaded ? "none" : "auto" }}
              >
                {/* HTML Skill Labels */}
                {network.skills.map((skill, i) => {
                  const skillPos = polarToCartesian(
                    network.baseAngle + skill.angleOffset,
                    skill.radiusOffset + (isNetworkActive ? 22 : 18), // Push text out from node
                    nodeCenter.x,
                    nodeCenter.y,
                  );

                  // Calculate alignment based on quadrant roughly relative to central node
                  const isLeft =
                    skill.angleOffset + network.baseAngle > 90 &&
                    skill.angleOffset + network.baseAngle < 270;

                  return (
                    <motion.div
                      key={`label-${network.id}-${skill.name}`}
                      className="absolute flex items-center justify-center flex-col whitespace-nowrap"
                      style={{
                        left: toPercent(skillPos.x, svgSize),
                        top: toPercent(skillPos.y, svgSize),
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <span
                        className={`text-[12px] font-medium transition-all duration-300 ${isNetworkActive ? "text-[#8B3A55] scale-105 font-bold" : "text-[#36172A]/70"}`}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Central Node Label and Hover Target */}
                <motion.div
                  className="absolute flex flex-col items-center justify-center cursor-pointer"
                  style={{
                    left: toPercent(nodeCenter.x, svgSize),
                    top: toPercent(nodeCenter.y, svgSize),
                    transform: "translate(-50%, -50%)",
                    width: "100px",
                    height: "100px",
                  }}
                  onMouseEnter={() => setActiveNetwork(network.id)}
                  onMouseLeave={() => setActiveNetwork(null)}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                >
                  <div
                    className={`relative flex items-center justify-center w-[75px] h-[75px] rounded-full transition-all duration-500 backdrop-blur-md ${isNetworkActive ? "bg-[#A35C72] shadow-[0_0_24px_rgba(163,92,114,0.4)]" : "bg-white border border-[#36172A]/10 shadow-sm"}`}
                  >
                    <span
                      className={`font-fraunces text-[14px] font-semibold tracking-wide transition-colors duration-300 ${isNetworkActive ? "text-white" : "text-[#2F1730]"}`}
                    >
                      {network.label}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
