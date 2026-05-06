type Variant = "default" | "featured";
type Tag = "div" | "article" | "section";

const baseCard = "rounded-2xl border border-[rgba(42,27,45,0.04)] bg-white shadow-card";
const hoverClass =
  "transition-all duration-slow ease-standard hover:-translate-y-0.5 hover:shadow-card-hover";

const variants: Record<Variant, string> = {
  default: `${baseCard} p-6`,
  featured: `${baseCard} p-6 md:p-8`,
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
