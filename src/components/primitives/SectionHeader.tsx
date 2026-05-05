type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-display-md leading-[1.15] tracking-[-0.02em] font-medium text-plum-900">
        {heading}
      </h2>
      {description && (
        <p className="mt-4 text-body-lg leading-[1.6] text-plum-500" style={{ maxWidth: "var(--max-width-prose)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
