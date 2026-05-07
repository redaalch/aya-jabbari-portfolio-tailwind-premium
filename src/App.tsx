import { currentAppPath } from "./utils/paths";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/sections/Capabilities";
import { Work } from "./components/sections/Work";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/Contact";
import { EasterEggCat } from "./components/EasterEggCat";
import { MeshAurora } from "./components/MeshAurora";
import { WatercolorMesh } from "./components/WatercolorMesh";
import { ProjectArchive } from "./components/pages/ProjectArchive";
import { ProjectCaseStudy } from "./components/pages/ProjectCaseStudy";

export default function App() {
  const currentPath = currentAppPath().replace(/\/$/, "") || "/";
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
          <ProjectCaseStudy projectId={projectId} />
        ) : isProjectArchive ? (
          <ProjectArchive />
        ) : (
          <>
            <Hero />
            <div className="relative bg-warm-50 dark:bg-abyssal-base">
              <WatercolorMesh />
              <MeshAurora />
              <About />
              <Capabilities />
              <Work />
              <Certifications />
              <Contact />
            </div>
          </>
        )}
      </main>

      <EasterEggCat />
    </>
  );
}
