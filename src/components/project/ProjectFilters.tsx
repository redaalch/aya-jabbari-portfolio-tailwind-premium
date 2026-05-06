import { Chip } from "../primitives/Chip";

type ProjectFiltersProps = {
  categories: string[];
  activeCategory: string | null;
  onSelect: (category: string | null) => void;
  allLabel?: string;
  ariaLabel?: string;
  controlsId?: string;
};

export function ProjectFilters({
  categories,
  activeCategory,
  onSelect,
  allLabel = "All Projects",
  ariaLabel = "Filter projects by category",
  controlsId = "projects-grid",
}: ProjectFiltersProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="mb-8 flex flex-wrap items-center gap-2 md:mb-12"
    >
      <button
        aria-pressed={activeCategory === null}
        aria-controls={controlsId}
        onClick={() => onSelect(null)}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
        type="button"
      >
        <Chip variant={activeCategory === null ? "solid" : "ghost"}>
          {allLabel}
        </Chip>
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          aria-pressed={activeCategory === cat}
          aria-controls={controlsId}
          onClick={() => onSelect(cat)}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
          type="button"
        >
          <Chip variant={activeCategory === cat ? "solid" : "ghost"}>
            {cat}
          </Chip>
        </button>
      ))}
    </div>
  );
}
