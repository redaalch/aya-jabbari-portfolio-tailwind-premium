import { Github, ExternalLink, ShieldAlert } from "lucide-react";
import { Card } from "../primitives/Card";
import { Chip } from "../primitives/Chip";
import { ButtonLink } from "../primitives/Button";
import type { LinkDef, WorkItem, WorkType } from "../../data/work";

type ProjectCardData = Omit<WorkItem, "tier" | "type"> & {
  type?: WorkType;
  links: LinkDef;
  summary?: string;
};

type ProjectCardProps = {
  project: ProjectCardData;
  variant?: "featured" | "secondary";
};

export function ProjectCard({
  project,
  variant = "featured",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const meta = [project.type, project.period, project.category]
    .filter(Boolean)
    .join(" · ");

  return (
    <Card
      as="article"
      variant={isFeatured ? "featured" : "default"}
      hoverable
      className="flex h-full flex-col"
    >
      {/* Eyebrow */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-eyebrow uppercase tracking-[0.18em] text-plum-500">
            {meta}
          </p>
        </div>
      </div>

      {/* Header */}
      <h3 className="mt-3 font-display text-display-sm font-medium leading-[1.25] tracking-[-0.01em] text-plum-900">
        {project.title}
      </h3>

      <p className="mt-1 text-body-sm font-medium text-plum-700">
        {project.role}
      </p>
      {project.organization && (
        <p className="mt-1 text-body-xs leading-[1.45] text-plum-500">
          {project.organization}
          {project.location ? ` · ${project.location}` : ""}
        </p>
      )}

      {/* Body lines */}
      <div className="mt-4 flex flex-col gap-3">
        {project.problem && (
          <p className="text-body-sm leading-[1.55] text-plum-700">
            <span className="font-semibold text-plum-900">Problem — </span>
            {project.problem}
          </p>
        )}
        {(project.contribution || project.summary) && (
          <p className="text-body-sm leading-[1.55] text-plum-700">
            <span className="font-semibold text-plum-900">Built — </span>
            {project.contribution || project.summary}
          </p>
        )}
      </div>

      {/* Stack chips (max 5) */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((s) => (
          <Chip key={s} variant="ghost">
            {s}
          </Chip>
        ))}
      </div>

      {/* Spacer to push buttons to the bottom */}
      <div className="mt-auto pt-8" />

      {/* Action row */}
      <div className="flex flex-wrap items-center gap-3">
        {project.links?.repoUrl ? (
          <ButtonLink
            href={project.links.repoUrl}
            variant="secondary"
            className="gap-2"
          >
            <Github className="h-4 w-4" />
            Code
          </ButtonLink>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(42,27,45,0.08)] bg-cream-50 px-4 py-2 text-button font-semibold text-plum-700">
            <ShieldAlert className="h-4 w-4 text-plum-500" />
            Code available on request
          </span>
        )}

        {project.links?.demoUrl && (
          <ButtonLink
            href={project.links.demoUrl}
            variant="tertiary"
            className="gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </ButtonLink>
        )}
      </div>
    </Card>
  );
}
