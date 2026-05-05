type Variant = "default" | "featured" | "experience";
type Tag = "div" | "article" | "section";

const baseCard = "rounded-2xl border border-[rgba(42,27,45,0.04)] bg-white shadow-card";
const hoverClass =
  "transition-all duration-slow ease-standard hover:-translate-y-0.5 hover:shadow-card-hover";

const variants: Record<Variant, string> = {
  default: `${baseCard} p-6`,
  featured: `${baseCard} p-6 md:p-8`,
  experience: "relative overflow-hidden rounded-[22px] border border-plum-900/[0.06] bg-[#fcfaf7] shadow-[0_10px_30px_rgba(60,30,45,0.04)] px-8 py-10 md:px-12 md:py-11",
};

type CardProps = {
  variant?: Variant;
  as?: Tag;
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Card({
  variant = "default",
  as: As = "div",
  hoverable = false,
  className = "",
  children,
}: CardProps) {
  return (
    <As className={`${variants[variant]}${hoverable ? ` ${hoverClass}` : ""} ${className}`}>
      {children}
    </As>
  );
}
