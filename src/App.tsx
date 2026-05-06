import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/sections/Capabilities";
import { Work } from "./components/sections/Work";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/Contact";
import { EasterEggCat } from "./components/EasterEggCat";
import { ProjectArchive } from "./components/pages/ProjectArchive";
import { ProjectDetail } from "./components/pages/ProjectDetail";

export default function App() {
  const currentPath =
    typeof window === "undefined"
      ? "/"
      : window.location.pathname.replace(/\/$/, "") || "/";
  const isProjectArchive = currentPath === "/projects";
  const projectDetailMatch = currentPath.match(/^\/projects\/([^/]+)$/);
  const projectId = projectDetailMatch
    ? decodeURIComponent(projectDetailMatch[1])
    : null;

  return (
    <>
      {/* Skip to main content — accessibility requirement */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-10 focus:items-center focus:rounded-xl focus:bg-plum-900 focus:px-4 focus:text-[14px] focus:font-semibold focus:text-cream-50 focus:shadow-cta focus:outline-none"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content">
        {projectId ? (
          <ProjectDetail projectId={projectId} />
        ) : isProjectArchive ? (
          <ProjectArchive />
        ) : (
          <>
            <Hero />
            <About />
            <Capabilities />
            <Work />
            <Certifications />
            <Contact />
          </>
        )}
      </main>

      <EasterEggCat />
    </>
  );
}
