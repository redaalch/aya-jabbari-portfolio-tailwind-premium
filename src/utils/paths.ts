const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an app-internal path with the Vite base so links work on GitHub Pages. */
export function toHref(path: string): string {
  return base + path;
}

/** Strip the Vite base from window.location.pathname so App routing sees /projects, not /repo-name/projects. */
export function currentAppPath(): string {
  if (typeof window === "undefined") return "/";
  const raw = window.location.pathname;
  return base && raw.startsWith(base) ? raw.slice(base.length) || "/" : raw;
}
