type Variant = "solid" | "tinted" | "ghost" | "status";

const variants: Record<Variant, string> = {
  solid: "bg-plum-900 text-cream-50",
  tinted: "bg-blush-50 text-plum-900",
  ghost: "border border-[rgba(42,27,45,0.08)] text-plum-700",
  status: "border border-[rgba(42,27,45,0.08)] bg-cream-100 text-plum-700",
};

type ChipProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Chip({ variant = "tinted", className = "", children }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-chip font-medium leading-[1.2] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
