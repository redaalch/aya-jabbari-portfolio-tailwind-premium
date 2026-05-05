import { motion } from "motion/react";
import { useState } from "react";

interface OrbitRing {
  name: string;
  distance: number;
  skills: string[];
  baseAngleOffset: number;
}

const orbitRings: OrbitRing[] = [
  {
    name: "Inner",
    distance: 130, // Increased distance for breathing room
    skills: ["React", "Spring Boot", "Laravel", "MySQL", "Document Val."],
    baseAngleOffset: 0,
  },
  {
    name: "Middle",
    distance: 220,
    skills: ["Docker", "Power BI", "MongoDB", "Linux"],
    baseAngleOffset: 45,
  },
  {
    name: "Outer",
    distance: 310,
    skills: ["Neo4j", "UML", ".NET", "Android Studio"],
    baseAngleOffset: 20,
  },
];

const getPositionOnOrbit = (
  index: number,
  total: number,
  distance: number,
  centerX: number,
  centerY: number,
  angleOffsetDeg: number
) => {
  const baseAngle = (index / total) * Math.PI * 2;
  const offset = (angleOffsetDeg * Math.PI) / 180;
  const angle = baseAngle + offset;
  return {
    x: centerX + distance * Math.cos(angle),
    y: centerY + distance * Math.sin(angle),
  };
};

export function SkillsOrbit() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredRing, setHoveredRing] = useState<string | null>(null);

  const svgSize = 800; // Increased canvas size
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  // Simple HTML positioning percent converter
  const toPercent = (val: number, max: number) => `${(val / max) * 100}%`;

  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-5xl mx-auto p-4 lg:p-12">
      
      {/* Orbit Visualization Container */}
      <div className="relative w-full aspect-square max-w-[800px] flex justify-center items-center">
        
        {/* Glow behind the entire solar system */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(163,92,114,0.06)_0%,transparent_60%)] pointer-events-none" />

        {/* The SVG structure for perfect circular rings and geometry */}
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
          {/* Orbit rings rendering */}
          {orbitRings.map((ring) => {
            const isHovered = hoveredRing === ring.name;
            const isFaded = hoveredRing !== null && !isHovered;
            
            return (
              <motion.circle
                key={`orbit-${ring.name}`}
                cx={centerX}
                cy={centerY}
                r={ring.distance}
                fill="none"
                stroke="#A35C72"
                strokeDasharray="2 6"
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                animate={{
                  strokeWidth: isHovered ? 1.5 : 0.8,
                  opacity: isFaded ? 0.05 : isHovered ? 0.4 : 0.2
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
              />
            );
          })}
        </svg>

        {/* HTML Layer for Crisp Interactivity and Content Rendering */}
        <div className="absolute inset-0 z-10">
          
          {/* Central "Sun" Core */}
          <motion.div
            className="absolute flex flex-col items-center justify-center text-center rounded-full bg-white shadow-[0_8px_32px_rgba(54,23,42,0.1)] border-2 border-[#A35C72]/20 backdrop-blur-md cursor-default pointer-events-auto"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "160px",
              height: "160px"
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(163,92,114,0.15)" }}
            onMouseEnter={() => setHoveredRing("Inner")}
            onMouseLeave={() => setHoveredRing(null)}
          >
            <div className="flex flex-col items-center gap-1.5 p-4">
              <span className="font-fraunces text-[18px] leading-tight font-medium text-[#2F1730]">
                Aya's<br/>Toolkit
              </span>
              <span className="text-[10px] font-mono text-[#A35C72]/80 uppercase tracking-widest">
                Core Stack
              </span>
            </div>
          </motion.div>

          {/* Skill Planets on the rings */}
          {orbitRings.map((ring) => {
            const isRingHovered = hoveredRing === ring.name;
            const isRingFaded = hoveredRing !== null && !isRingHovered;

            return ring.skills.map((skill, index) => {
              const pos = getPositionOnOrbit(
                index,
                ring.skills.length,
                ring.distance,
                centerX,
                centerY,
                ring.baseAngleOffset
              );

              const isSkillHovered = hoveredSkill === skill;
              const isActiveNode = isSkillHovered || isRingHovered;

              // We calculate color based on depth 
              let baseBg = "bg-white";
              let textCol = "text-[#36172A]/80";
              let borderCol = "border-[#36172A]/10";
              
              if (isActiveNode) {
                if (ring.name === "Inner") { baseBg = "bg-[#A35C72]"; textCol = "text-white"; borderCol = "border-[#A35C72]"; }
                else if (ring.name === "Middle") { baseBg = "bg-[#C9849B]"; textCol = "text-white"; borderCol = "border-[#C9849B]"; }
                else { baseBg = "bg-[#FBF7F1]"; textCol = "text-[#8B3A55]"; borderCol = "border-[#A35C72]/40"; }
              }

              return (
                <motion.div
                  key={`html-skill-${skill}`}
                  className="absolute pointer-events-auto"
                  style={{
                    left: toPercent(pos.x, svgSize),
                    top: toPercent(pos.y, svgSize),
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                >
                  <motion.div
                    className={`relative flex items-center justify-center px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors duration-300 backdrop-blur-sm border ${baseBg} ${borderCol} ${textCol} shadow-sm`}
                    style={{ transform: "translate(-50%, -50%)" }}
                    animate={{
                      scale: isActiveNode ? 1.08 : 1,
                      opacity: isRingFaded ? 0.3 : 1,
                    }}
                    onMouseEnter={() => {
                      setHoveredSkill(skill);
                      setHoveredRing(ring.name);
                    }}
                    onMouseLeave={() => {
                      setHoveredSkill(null);
                      setHoveredRing(null);
                    }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <span className="text-[13px] font-semibold tracking-wide">
                      {skill}
                    </span>
                  </motion.div>
                </motion.div>
              );
            });
          })}
        </div>
      </div>

      {/* Elegant Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-[600px] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6 pt-8 border-t border-[#36172A]/5 mt-4"
      >
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setHoveredRing("Inner")}
          onMouseLeave={() => setHoveredRing(null)}
        >
          <div className="w-3 h-3 rounded-full bg-[#A35C72] shadow-sm transform transition-transform group-hover:scale-125" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#2F1730]">Inner Orbit</span>
            <span className="text-[11px] text-[#A35C72]/60">Strongest tools</span>
          </div>
        </div>
        
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setHoveredRing("Middle")}
          onMouseLeave={() => setHoveredRing(null)}
        >
          <div className="w-3 h-3 rounded-full bg-[#C9849B] shadow-sm transform transition-transform group-hover:scale-125" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#2F1730]">Middle Orbit</span>
            <span className="text-[11px] text-[#A35C72]/60">Supporting stack</span>
          </div>
        </div>

        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setHoveredRing("Outer")}
          onMouseLeave={() => setHoveredRing(null)}
        >
          <div className="w-3 h-3 rounded-full border-2 border-[#A35C72]/40 bg-[#FBF7F1] shadow-sm transform transition-transform group-hover:scale-125" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[#2F1730]">Outer Orbit</span>
            <span className="text-[11px] text-[#A35C72]/60">Familiarity & concepts</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
