import { useState } from "react";
import { motion } from "motion/react";
import { profileData } from "../data/profile";

export function SkillsLandscape() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  // Landscape zones data
  const zones = [
    {
      id: "plateau",
      name: "Frontend/Backend Plateau",
      color: "bg-[#A35C72]",
      textDark: "text-[#8B3A55]",
      border: "border-[#A35C72]/30",
      top: "15%",
      left: "20%",
      blobShape: "30% 70% 70% 30% / 30% 30% 70% 70%",
      size: "w-[400px] h-[300px]",
      skills: ["React", "Spring Boot", "PHP/Laravel", ".NET"],
    },
    {
      id: "valley",
      name: "Data Valley",
      color: "bg-[#C9849B]",
      textDark: "text-[#8B3A55]",
      border: "border-[#C9849B]/30",
      top: "40%",
      left: "40%",
      blobShape: "50% 50% 30% 70% / 60% 40% 60% 40%",
      size: "w-[450px] h-[350px]",
      skills: [
        "MySQL",
        "MongoDB",
        "Power BI",
        "Neo4j",
        "Cassandra",
        "Talend ETL",
      ],
    },
    {
      id: "ridge",
      name: "Infrastructure Ridge",
      color: "bg-[#36172A]",
      textDark: "text-[#36172A]",
      border: "border-[#36172A]/20",
      top: "10%",
      left: "65%",
      blobShape: "60% 40% 70% 30% / 50% 60% 40% 50%",
      size: "w-[350px] h-[350px]",
      skills: ["Docker", "Linux", "GitHub Actions", "Terraform"],
    },
    {
      id: "ai",
      name: "AI Lab",
      color: "bg-[#8B3A55]",
      textDark: "text-[#8B3A55]",
      border: "border-[#8B3A55]/30",
      top: "60%",
      left: "10%",
      blobShape: "70% 30% 50% 50% / 40% 50% 50% 60%",
      size: "w-[300px] h-[300px]",
      skills: ["Document Validation", "Python"],
    },
    {
      id: "foundations",
      name: "Foundations Corner",
      color: "bg-[#E5B8C8]",
      textDark: "text-[#8B3A55]",
      border: "border-[#E5B8C8]/50",
      top: "65%",
      left: "70%",
      blobShape: "40% 60% 70% 30% / 40% 50% 60% 50%",
      size: "w-[350px] h-[250px]",
      skills: ["UML", "OOP", "Software Design"],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white border border-[#36172A]/5 p-8 lg:p-12 h-[800px] flex items-center justify-center">
      {/* Topographic Background Map */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter
              id="blur-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>

          {/* Topographic contour lines */}
          <path
            d="M-100 200 C 100 100, 300 400, 600 300 S 900 200, 1200 400"
            fill="none"
            stroke="#A35C72"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M-100 250 C 100 150, 300 450, 600 350 S 900 250, 1200 450"
            fill="none"
            stroke="#A35C72"
            strokeWidth="0.5"
            opacity="0.2"
          />
          <path
            d="M-100 300 C 100 200, 300 500, 600 400 S 900 300, 1200 500"
            fill="none"
            stroke="#A35C72"
            strokeWidth="0.5"
            opacity="0.1"
          />

          <path
            d="M-100 500 C 200 600, 400 300, 700 600 S 1000 800, 1200 600"
            fill="none"
            stroke="#C9849B"
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M-100 550 C 200 650, 400 350, 700 650 S 1000 850, 1200 650"
            fill="none"
            stroke="#C9849B"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="relative w-full max-w-[1000px] h-[700px]">
        {zones.map((zone, i) => {
          const isHovered = hoveredZone === zone.id;
          const isFaded = hoveredZone !== null && !isHovered;

          return (
            <motion.div
              key={zone.id}
              className="absolute"
              style={{ top: zone.top, left: zone.left }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.2, 0, 0, 1],
              }}
              onMouseEnter={() => setHoveredZone(zone.id)}
              onMouseLeave={() => setHoveredZone(null)}
            >
              {/* Soft background blob */}
              <motion.div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${zone.size} ${zone.color} mix-blend-multiply opacity-20`}
                style={{ borderRadius: zone.blobShape }}
                animate={{
                  borderRadius: isHovered
                    ? "50% 50% 50% 50% / 50% 50% 50% 50%"
                    : zone.blobShape,
                  scale: isHovered ? 1.05 : 1,
                  opacity: isFaded ? 0.05 : isHovered ? 0.3 : 0.2,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Zone content */}
              <motion.div
                className="relative z-10 flex flex-col items-center text-center -translate-x-1/2 -translate-y-1/2 w-[280px]"
                animate={{ opacity: isFaded ? 0.3 : 1 }}
              >
                <h3
                  className={`font-fraunces text-xl font-medium tracking-tight mb-4 ${zone.textDark}`}
                >
                  {zone.name}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {zone.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      className={`px-3 py-1.5 text-[13px] font-medium rounded-full bg-white/60 backdrop-blur-sm border ${zone.border} ${zone.textDark} shadow-sm`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + j * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
