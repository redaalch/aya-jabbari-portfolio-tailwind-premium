import { motion } from "motion/react";
import { useMemo } from "react";
import { certifications } from "../data/profile";
import { SectionHeader } from "./primitives/SectionHeader";
import { Card } from "./primitives/Card";

export function Certifications() {
  const groupedCerts = useMemo(() => {
    return certifications.reduce(
      (acc, cert) => {
        if (!acc[cert.issuer]) {
          acc[cert.issuer] = [];
        }
        acc[cert.issuer].push(cert);
        return acc;
      },
      {} as Record<string, typeof certifications>,
    );
  }, []);

  return (
    <section
      id="certifications"
      className="bg-cream-50 py-16 md:py-20 lg:py-24"
    >
      <div className="container-default">
        <SectionHeader
          eyebrow="Certifications"
          heading="Recognized learning and credentials."
          description="Third-party certifications covering databases, AI, and programming foundations."
          className="mb-12"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedCerts).map(([issuer, certs], i) => (
            <motion.div
              key={issuer}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.2, 0, 0, 1],
              }}
            >
              <Card as="article" variant="default" className="h-full">
                <p className="text-eyebrow uppercase tracking-[0.18em] text-plum-500 mb-6">
                  {issuer}
                </p>

                <div className="flex flex-col gap-6">
                  {certs.map((cert) => (
                    <div key={cert.title}>
                      <h3 className="font-display text-display-xs font-medium leading-[1.25] tracking-[-0.01em] text-plum-900">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-body-sm leading-[1.55] text-plum-700">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
